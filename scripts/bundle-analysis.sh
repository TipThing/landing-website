#!/bin/bash

# Bundle Analysis Script
# Provides detailed breakdown of bundle composition and dependencies

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}  Bundle Analysis${NC}"
echo -e "${BLUE}==================================================${NC}\n"

# Check if build exists
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}No build found. Building...${NC}\n"
    pnpm build
fi

echo -e "${YELLOW}Analyzing bundle composition...${NC}\n"

# Function to analyze a file
analyze_file() {
    local file=$1
    local filename=$(basename "$file")
    local size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    local gzipped=$(gzip -c "$file" | wc -c | tr -d ' ')

    # Calculate sizes in KB
    local size_kb=$(echo "scale=2; $size / 1024" | bc)
    local gzip_kb=$(echo "scale=2; $gzipped / 1024" | bc)
    local compression=$(echo "scale=1; 100 - ($gzipped * 100 / $size)" | bc)

    echo -e "${BLUE}$filename${NC}"
    echo "  Original: ${size_kb}KB"
    echo "  Gzipped:  ${gzip_kb}KB (${compression}% compression)"

    # Check against performance budget
    if (( $(echo "$gzip_kb > 50" | bc -l) )); then
        echo -e "  ${RED}⚠ Large file detected${NC}"
    fi
    echo ""
}

# Analyze JavaScript files
echo -e "${YELLOW}JavaScript Bundles:${NC}\n"
js_count=0
total_js=0
total_js_gzip=0

find dist -name "*.js" -type f 2>/dev/null | while read -r file; do
    if [ -f "$file" ]; then
        analyze_file "$file"
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        gzipped=$(gzip -c "$file" | wc -c | tr -d ' ')
        total_js=$((total_js + size))
        total_js_gzip=$((total_js_gzip + gzipped))
        js_count=$((js_count + 1))
    fi
done

# Analyze CSS files
echo -e "${YELLOW}CSS Bundles:${NC}\n"
css_count=0
total_css=0
total_css_gzip=0

find dist -name "*.css" -type f 2>/dev/null | while read -r file; do
    if [ -f "$file" ]; then
        analyze_file "$file"
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        gzipped=$(gzip -c "$file" | wc -c | tr -d ' ')
        total_css=$((total_css + size))
        total_css_gzip=$((total_css_gzip + gzipped))
        css_count=$((css_count + 1))
    fi
done

# Summary
echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}  Summary${NC}"
echo -e "${BLUE}==================================================${NC}\n"

total_js_kb=$(echo "scale=2; $total_js / 1024" | bc)
total_js_gzip_kb=$(echo "scale=2; $total_js_gzip / 1024" | bc)
total_css_kb=$(echo "scale=2; $total_css / 1024" | bc)
total_css_gzip_kb=$(echo "scale=2; $total_css_gzip / 1024" | bc)

echo "JavaScript:"
echo "  Files: $js_count"
echo "  Total size: ${total_js_kb}KB"
echo "  Gzipped: ${total_js_gzip_kb}KB"
echo ""

echo "CSS:"
echo "  Files: $css_count"
echo "  Total size: ${total_css_kb}KB"
echo "  Gzipped: ${total_css_gzip_kb}KB"
echo ""

total_gzip=$(echo "$total_js_gzip + $total_css_gzip" | bc)
total_gzip_kb=$(echo "scale=2; $total_gzip / 1024" | bc)

echo -e "${GREEN}Total bundle size (gzipped): ${total_gzip_kb}KB${NC}\n"

# Performance recommendations
echo -e "${YELLOW}Recommendations:${NC}\n"

if (( $(echo "$total_js_gzip_kb > 150" | bc -l) )); then
    echo -e "  ${RED}• JavaScript bundle exceeds 150KB budget${NC}"
    echo "    - Consider code splitting"
    echo "    - Review dependencies"
    echo "    - Enable dynamic imports"
fi

if (( $(echo "$total_css_gzip_kb > 30" | bc -l) )); then
    echo -e "  ${RED}• CSS bundle exceeds 30KB budget${NC}"
    echo "    - Enable PurgeCSS/Tailwind JIT"
    echo "    - Remove unused styles"
    echo "    - Consider critical CSS extraction"
fi

if (( $(echo "$total_gzip_kb < 200" | bc -l) )); then
    echo -e "  ${GREEN}✓ Total bundle size is excellent${NC}"
elif (( $(echo "$total_gzip_kb < 300" | bc -l) )); then
    echo -e "  ${GREEN}✓ Total bundle size is good${NC}"
else
    echo -e "  ${YELLOW}⚠ Consider optimizing total bundle size${NC}"
fi

echo ""
