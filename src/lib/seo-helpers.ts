/**
 * SEO Helpers for Structured Data (JSON-LD Schema.org)
 * Following 2025 best practices for rich search results
 */

export interface Organization {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone?: string;
    contactType?: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface WebSite {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description?: string;
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export interface WebPage {
  '@context': 'https://schema.org';
  '@type': 'WebPage';
  name: string;
  url: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  inLanguage?: string;
  isPartOf?: {
    '@type': 'WebSite';
    url: string;
  };
}

export interface Article {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
    url?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  articleBody?: string;
  keywords?: string[];
  url?: string;
}

export interface Product {
  '@context': 'https://schema.org';
  '@type': 'Product';
  name: string;
  description?: string;
  image?: string | string[];
  brand?: {
    '@type': 'Brand';
    name: string;
  };
  offers?: {
    '@type': 'Offer';
    url?: string;
    priceCurrency: string;
    price: string;
    availability?: string;
    priceValidUntil?: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
  };
}

export interface BreadcrumbList {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface FAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

/**
 * Create Organization structured data
 * Best for: About pages, Footer, Homepage
 */
export function createOrganizationSchema(data: {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  contactPhone?: string;
  contactEmail?: string;
  socialLinks?: string[];
}): Organization {
  const schema: Organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
  };

  if (data.logo) schema.logo = data.logo;
  if (data.description) schema.description = data.description;

  if (data.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.city,
      addressRegion: data.address.region,
      postalCode: data.address.postalCode,
      addressCountry: data.address.country,
    };
  }

  if (data.contactPhone || data.contactEmail) {
    schema.contactPoint = {
      '@type': 'ContactPoint',
      telephone: data.contactPhone,
      email: data.contactEmail,
      contactType: 'customer service',
    };
  }

  if (data.socialLinks) {
    schema.sameAs = data.socialLinks;
  }

  return schema;
}

/**
 * Create WebSite structured data
 * Best for: Homepage, Main layout
 */
export function createWebSiteSchema(data: {
  name: string;
  url: string;
  description?: string;
  publisher?: string;
  publisherLogo?: string;
  searchUrl?: string;
}): WebSite {
  const schema: WebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
  };

  if (data.description) schema.description = data.description;

  if (data.publisher) {
    schema.publisher = {
      '@type': 'Organization',
      name: data.publisher,
    };

    if (data.publisherLogo) {
      schema.publisher.logo = {
        '@type': 'ImageObject',
        url: data.publisherLogo,
      };
    }
  }

  if (data.searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: data.searchUrl,
      },
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}

/**
 * Create WebPage structured data
 * Best for: Standard content pages
 */
export function createWebPageSchema(data: {
  name: string;
  url: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  publisherLogo?: string;
  language?: string;
  websiteUrl?: string;
}): WebPage {
  const schema: WebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.name,
    url: data.url,
  };

  if (data.description) schema.description = data.description;
  if (data.datePublished) schema.datePublished = data.datePublished;
  if (data.dateModified) schema.dateModified = data.dateModified;
  if (data.language) schema.inLanguage = data.language;

  if (data.author) {
    schema.author = {
      '@type': 'Organization',
      name: data.author,
    };
  }

  if (data.publisher) {
    schema.publisher = {
      '@type': 'Organization',
      name: data.publisher,
    };

    if (data.publisherLogo) {
      schema.publisher.logo = {
        '@type': 'ImageObject',
        url: data.publisherLogo,
      };
    }
  }

  if (data.websiteUrl) {
    schema.isPartOf = {
      '@type': 'WebSite',
      url: data.websiteUrl,
    };
  }

  return schema;
}

/**
 * Create Article structured data
 * Best for: Blog posts, News articles
 */
export function createArticleSchema(data: {
  headline: string;
  description?: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  publisher: string;
  publisherLogo: string;
  articleBody?: string;
  keywords?: string[];
  url?: string;
}): Article {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Person',
      name: data.authorName,
      url: data.authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher,
      logo: {
        '@type': 'ImageObject',
        url: data.publisherLogo,
      },
    },
    articleBody: data.articleBody,
    keywords: data.keywords,
    url: data.url,
  };
}

/**
 * Create Product structured data
 * Best for: Product pages, E-commerce
 */
export function createProductSchema(data: {
  name: string;
  description?: string;
  image?: string | string[];
  brandName?: string;
  price?: string;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  priceValidUntil?: string;
  rating?: number;
  reviewCount?: number;
  offerUrl?: string;
}): Product {
  const schema: Product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
  };

  if (data.description) schema.description = data.description;
  if (data.image) schema.image = data.image;

  if (data.brandName) {
    schema.brand = {
      '@type': 'Brand',
      name: data.brandName,
    };
  }

  if (data.price && data.priceCurrency) {
    schema.offers = {
      '@type': 'Offer',
      price: data.price,
      priceCurrency: data.priceCurrency,
      url: data.offerUrl,
      availability: data.availability
        ? `https://schema.org/${data.availability}`
        : undefined,
      priceValidUntil: data.priceValidUntil,
    };
  }

  if (data.rating && data.reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: data.rating,
      reviewCount: data.reviewCount,
    };
  }

  return schema;
}

/**
 * Create Breadcrumb structured data
 * Best for: Navigation hierarchy
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Create FAQ structured data
 * Best for: FAQ pages, Support pages
 */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Default Tipthing structured data for homepage
 */
export function getTipthingDefaultSchema(baseUrl: string) {
  const organization = createOrganizationSchema({
    name: 'TipThing',
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description:
      'We engineer bespoke cloud architectures and deploy powerful pre-built tools. Precision software that moves your business forward.',
    contactEmail: 'hello@tipthing.com',
    address: {
      streetAddress: '123 Tech Blvd',
      city: 'Johannesburg',
      region: 'Gauteng',
      country: 'ZA',
    },
  });

  const website = createWebSiteSchema({
    name: 'TipThing',
    url: baseUrl,
    description:
      'Bespoke cloud architectures and powerful pre-built tools. Precision software engineering from Johannesburg.',
    publisher: 'TipThing',
    publisherLogo: `${baseUrl}/favicon.svg`,
  });

  return [organization, website];
}
