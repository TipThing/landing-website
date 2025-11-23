/**
 * Default SEO Configuration for Tipthing
 * Centralized SEO values for consistent branding and metadata
 */

export const seoConfig = {
  // Site Information
  siteName: 'Tipthing',
  siteUrl: 'https://tipthing.com', // Update with actual domain

  // Default Meta Tags
  defaultTitle: 'Tipthing - Smart Tipping Made Simple',
  defaultDescription:
    'Modern tipping solution that makes it easy for customers to show appreciation and for businesses to manage gratuities efficiently. Quick, contactless, and secure.',

  defaultKeywords: [
    'tipping',
    'gratuity',
    'digital tipping',
    'QR code tipping',
    'contactless payment',
    'tip management',
    'hospitality payment',
    'restaurant tipping',
    'service gratuity',
  ],

  // Brand Information
  author: 'Tipthing',
  language: 'en',
  locale: 'en_US',

  // Social Media
  twitter: {
    handle: '@tipthing', // Update with actual Twitter handle
    card: 'summary_large_image' as const,
  },

  // Open Graph Defaults
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    siteName: 'Tipthing',
  },

  // Default Images
  defaultImage: {
    url: '/og-image.png', // Create this image: 1200x630px
    width: 1200,
    height: 630,
    alt: 'Tipthing - Smart Tipping Made Simple',
    type: 'image/png',
  },

  logo: '/logo.png', // Update with actual logo path

  // Robots
  robots: {
    default: 'index, follow',
    noindex: 'noindex, nofollow',
  },

  // Structured Data
  organization: {
    name: 'Tipthing',
    legalName: 'Tipthing Inc.', // Update with actual legal name
    description:
      'A modern digital tipping platform that revolutionizes how customers show appreciation and how businesses manage gratuities.',
    foundingDate: '2024', // Update with actual founding date

    // Contact Information (update with actual details)
    email: 'hello@tipthing.com',
    phone: '+1-XXX-XXX-XXXX',

    // Address (update when available)
    address: {
      streetAddress: '',
      city: '',
      region: '',
      postalCode: '',
      country: 'US',
    },

    // Social Media Links (update with actual profiles)
    socialLinks: [
      // 'https://twitter.com/tipthing',
      // 'https://linkedin.com/company/tipthing',
      // 'https://facebook.com/tipthing',
      // 'https://instagram.com/tipthing',
    ],
  },
};

/**
 * Page-specific SEO configurations
 * Use these as templates for different page types
 */
export const pageTemplates = {
  homepage: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    keywords: seoConfig.defaultKeywords,
  },

  about: {
    title: 'About Tipthing - Our Mission',
    description:
      'Learn about Tipthing\'s mission to modernize tipping and make appreciation simple, secure, and transparent for everyone.',
    keywords: ['about tipthing', 'our mission', 'company info', 'tipping innovation'],
  },

  pricing: {
    title: 'Pricing - Tipthing',
    description:
      'Simple, transparent pricing for Tipthing. Choose the plan that works best for your business with no hidden fees.',
    keywords: ['pricing', 'plans', 'cost', 'business pricing', 'tipping fees'],
  },

  contact: {
    title: 'Contact Us - Tipthing',
    description:
      'Get in touch with Tipthing. We\'re here to help answer your questions and support your tipping needs.',
    keywords: ['contact', 'support', 'help', 'customer service'],
  },

  features: {
    title: 'Features - Tipthing',
    description:
      'Explore Tipthing\'s powerful features: QR code tipping, instant payments, analytics, and more. Everything you need to manage tips efficiently.',
    keywords: ['features', 'capabilities', 'QR codes', 'analytics', 'payment processing'],
  },

  blog: {
    title: 'Blog - Tipthing',
    description:
      'Tips, insights, and news about digital tipping, hospitality, and the future of gratuities.',
    keywords: ['blog', 'articles', 'tipping insights', 'hospitality news'],
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
 * Following Core Web Vitals best practices
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
