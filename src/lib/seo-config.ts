/**
 * Default SEO Configuration for TipThing
 * Centralized SEO values for consistent branding and metadata
 */

export const seoConfig = {
  // Site Information
  siteName: 'TipThing',
  siteUrl: 'https://tipthing.com',

  // Default Meta Tags
  defaultTitle: 'TipThing - Software, Solved.',
  defaultDescription:
    'We engineer bespoke cloud architectures and deploy powerful pre-built tools. No fluff. Just precision software that moves your business forward.',

  defaultKeywords: [
    'custom software development',
    'cloud architecture',
    'bespoke engineering',
    'web application development',
    'mobile app development',
    'IoT solutions',
    'digital transformation',
    'software consultancy',
    'Johannesburg software company',
    'enterprise software',
  ],

  // Brand Information
  author: 'TipThing',
  language: 'en',
  locale: 'en_ZA',

  // Social Media
  twitter: {
    handle: '@tipthing',
    card: 'summary_large_image' as const,
  },

  // Open Graph Defaults
  openGraph: {
    type: 'website' as const,
    locale: 'en_ZA',
    siteName: 'TipThing',
  },

  // Default Images
  defaultImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'TipThing - Software, Solved.',
    type: 'image/png',
  },

  logo: '/favicon.svg',

  // Robots
  robots: {
    default: 'index, follow',
    noindex: 'noindex, nofollow',
  },

  // Structured Data
  organization: {
    name: 'TipThing',
    legalName: 'TipThing (Pty) Ltd',
    description:
      'We engineer bespoke cloud architectures and deploy powerful pre-built tools. Precision software that moves your business forward.',
    foundingDate: '2024',

    // Contact Information
    email: 'hello@tipthing.com',

    // Address
    address: {
      streetAddress: '123 Tech Blvd',
      city: 'Johannesburg',
      region: 'Gauteng',
      postalCode: '',
      country: 'ZA',
    },

    // Social Media Links
    socialLinks: [] as string[],
  },
};

/**
 * Page-specific SEO configurations
 */
export const pageTemplates = {
  homepage: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: seoConfig.defaultKeywords,
  },

  services: {
    title: 'Services - TipThing',
    description:
      'We replace intuition with engineering. Bespoke software, cloud architecture, mobile ecosystems, IoT connectivity, and digital transformation.',
    keywords: [
      'custom software development',
      'cloud architecture',
      'mobile app development',
      'IoT solutions',
      'digital transformation',
      'bespoke engineering',
    ],
  },

  products: {
    title: 'Products - TipThing',
    description:
      'Proprietary tools built by TipThing to solve specific industry challenges. Logable, AssetDock, Fitsy, and more.',
    keywords: [
      'Logable',
      'AssetDock',
      'Fitsy',
      'IoT dashboard',
      'asset management',
      'SaaS products',
    ],
  },

  company: {
    title: 'Company - TipThing',
    description:
      'Learn about TipThing — a software engineering company building precision tools and bespoke solutions from Johannesburg, South Africa.',
    keywords: [
      'about TipThing',
      'software company',
      'Johannesburg tech',
      'engineering team',
    ],
  },

  contact: {
    title: 'Contact - TipThing',
    description:
      'Tell us about your technical challenges. We typically respond within 24 hours with a preliminary assessment.',
    keywords: [
      'contact',
      'start a project',
      'software consultation',
      'get in touch',
    ],
  },
};

/**
 * Helper function to get page-specific SEO configuration
 */
export function getPageSEO(pageType: keyof typeof pageTemplates) {
  return pageTemplates[pageType] || pageTemplates.homepage;
}

/**
 * Generate full page title with site name
 */
export function generateTitle(pageTitle?: string): string {
  if (!pageTitle || pageTitle === seoConfig.defaultTitle) {
    return seoConfig.defaultTitle;
  }
  return `${pageTitle} | ${seoConfig.siteName}`;
}

/**
 * Image optimization settings for Open Graph images
 */
export const imageConfig = {
  openGraph: {
    width: 1200,
    height: 630,
    format: 'png' as const,
    quality: 85,
  },
  twitter: {
    width: 1200,
    height: 600,
    format: 'png' as const,
    quality: 85,
  },
  favicon: {
    sizes: [16, 32, 48, 64, 128, 256],
    format: 'png' as const,
  },
};
