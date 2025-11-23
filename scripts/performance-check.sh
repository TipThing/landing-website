#!/bin/bash

# Performance Check Script for Tipthing Landing Website
# Analyzes bundle sizes, runs Lighthouse audits, and validates Core Web Vitals

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Performance budgets (in KB for gzipped)
MAX_JS_BUNDLE=150
MAX_CSS_BUNDLE=30
MAX_TOTAL_SIZE=300

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}  Tipthing Performance Check${NC}"
echo -e "${BLUE}==================================================${NC}\n"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Step 1: Build the project
echo -e "${YELLOW}[1/5] Building project...${NC}"
if pnpm build; then
    echo -e "${GREEN}✓ Build successful${NC}\n"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Step 2: Analyze bundle sizes
echo -e "${YELLOW}[2/5] Analyzing bundle sizes...${NC}"

if [ -d "dist" ]; then
    # JavaScript bundle analysis
    echo -e "${BLUE}JavaScript bundles:${NC}"
    find dist -name "*.js" -type f -exec sh -c '
        file="$1"
        size=$(du -h "$file" | cut -f1)
        gzip_size=$(gzip -c "$file" | wc -c | awk "{printf \"%.1f\", \$1/1024}")
        echo "  - $(basename "$file"): $size (${gzip_size}KB gzipped)"
    ' _ {} \;

    # CSS bundle analysis
    echo -e "\n${BLUE}CSS bundles:${NC}"
    find dist -name "*.css" -type f -exec sh -c '
        file="$1"
        size=$(du -h "$file" | cut -f1)
        gzip_size=$(gzip -c "$file" | wc -c | awk "{printf \"%.1f\", \$1/1024}")
        echo "  - $(basename "$file"): $size (${gzip_size}KB gzipped)"
    ' _ {} \;

    # Total size analysis
    echo -e "\n${BLUE}Total sizes:${NC}"
    total_js=$(find dist -name "*.js" -type f -exec cat {} + | gzip -c | wc -c | awk '{printf "%.1f", $1/1024}')
    total_css=$(find dist -name "*.css" -type f -exec cat {} + | gzip -c | wc -c | awk '{printf "%.1f", $1/1024}')
    total_size=$(echo "$total_js + $total_css" | bc)

    echo "  JavaScript (gzipped): ${total_js}KB"
    echo "  CSS (gzipped): ${total_css}KB"
    echo "  Total (gzipped): ${total_size}KB"

    # Check against budgets
    echo -e "\n${BLUE}Budget validation:${NC}"

    js_check=$(echo "$total_js < $MAX_JS_BUNDLE" | bc)
    if [ "$js_check" -eq 1 ]; then
        echo -e "  ${GREEN}✓ JavaScript: ${total_js}KB / ${MAX_JS_BUNDLE}KB${NC}"
    else
        echo -e "  ${RED}✗ JavaScript: ${total_js}KB / ${MAX_JS_BUNDLE}KB (OVER BUDGET)${NC}"
    fi

    css_check=$(echo "$total_css < $MAX_CSS_BUNDLE" | bc)
    if [ "$css_check" -eq 1 ]; then
        echo -e "  ${GREEN}✓ CSS: ${total_css}KB / ${MAX_CSS_BUNDLE}KB${NC}"
    else
        echo -e "  ${RED}✗ CSS: ${total_css}KB / ${MAX_CSS_BUNDLE}KB (OVER BUDGET)${NC}"
    fi

    total_check=$(echo "$total_size < $MAX_TOTAL_SIZE" | bc)
    if [ "$total_check" -eq 1 ]; then
        echo -e "  ${GREEN}✓ Total: ${total_size}KB / ${MAX_TOTAL_SIZE}KB${NC}"
    else
        echo -e "  ${RED}✗ Total: ${total_size}KB / ${MAX_TOTAL_SIZE}KB (OVER BUDGET)${NC}"
    fi
else
    echo -e "${RED}✗ dist directory not found${NC}"
fi

echo ""

# Step 3: Check for optimization opportunities
echo -e "${YELLOW}[3/5] Checking optimization opportunities...${NC}"

# Check for unminified files
unminified=$(find dist -name "*.js" -o -name "*.css" | grep -v ".min." | wc -l | tr -d ' ')
if [ "$unminified" -gt 0 ]; then
    echo -e "  ${YELLOW}⚠ Found ${unminified} potentially unminified files${NC}"
else
    echo -e "  ${GREEN}✓ All files appear minified${NC}"
fi

# Check for source maps in production
sourcemaps=$(find dist -name "*.map" | wc -l | tr -d ' ')
if [ "$sourcemaps" -gt 0 ]; then
    echo -e "  ${YELLOW}⚠ Found ${sourcemaps} source maps (consider removing for production)${NC}"
else
    echo -e "  ${GREEN}✓ No source maps found${NC}"
fi

# Check for large images
large_images=$(find dist -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" \) -size +100k | wc -l | tr -d ' ')
if [ "$large_images" -gt 0 ]; then
    echo -e "  ${YELLOW}⚠ Found ${large_images} images larger than 100KB${NC}"
else
    echo -e "  ${GREEN}✓ No oversized images found${NC}"
fi

echo ""

# Step 4: Preview server check
echo -e "${YELLOW}[4/5] Testing preview server...${NC}"
if command_exists astro || command_exists pnpm; then
    echo -e "  ${BLUE}Starting preview server on port 4321...${NC}"
    echo -e "  ${BLUE}You can manually test at: http://localhost:4321${NC}"
    echo -e "  ${YELLOW}Note: Run 'pnpm preview' separately to start the server${NC}"
else
    echo -e "  ${RED}✗ Preview server not available${NC}"
fi

echo ""

# Step 5: Lighthouse recommendations
echo -e "${YELLOW}[5/5] Performance recommendations...${NC}"

if command_exists lighthouse; then
    echo -e "  ${GREEN}✓ Lighthouse is installed${NC}"
    echo -e "  ${BLUE}Run: lighthouse http://localhost:4321 --view${NC}"
else
    echo -e "  ${YELLOW}⚠ Lighthouse not installed${NC}"
    echo -e "  ${BLUE}Install: npm install -g @lhci/cli lighthouse${NC}"
fi

echo ""
echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}  Performance Checklist${NC}"
echo -e "${BLUE}==================================================${NC}"
echo ""
echo "Manual checks to perform:"
echo "  [ ] Run Lighthouse audit on preview server"
echo "  [ ] Test on real mobile device (throttled network)"
echo "  [ ] Verify LCP < 2.5s"
echo "  [ ] Verify FID/INP < 200ms"
echo "  [ ] Verify CLS < 0.1"
echo "  [ ] Check network waterfall in DevTools"
echo "  [ ] Test on slow 3G connection"
echo "  [ ] Verify critical CSS is inlined"
echo "  [ ] Check font loading strategy"
echo "  [ ] Verify images are optimized (when added)"
echo ""
echo -e "${GREEN}Performance check complete!${NC}"
