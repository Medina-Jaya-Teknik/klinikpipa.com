import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingService"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo%20landscape.png`,
    image: `${siteConfig.domain}/logo%20dan%20nama.png`,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.ratingValue,
      reviewCount: siteConfig.rating.reviewCount,
      bestRating: siteConfig.rating.bestRating,
    },
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: `${a.name}, Bandung`,
    })),
    sameAs: [
      `https://wa.me/${siteConfig.whatsappNumber}`,
      siteConfig.domain,
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(serviceName?: string, serviceDesc?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName || "Jasa Deteksi Pipa Bocor & Detox Pipa",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.domain,
    },
    areaServed: {
      "@type": "City",
      name: "Bandung",
    },
    description:
      serviceDesc ||
      "Layanan deteksi pipa bocor tersembunyi dengan sensor akustik/thermal dan detox pencucian pipa air bersih kotor tanpa pembongkaran di area Bandung.",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "300000",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${article.slug}`,
    },
    author: {
      "@type": "Person",
      name: article.author || "Tim Teknisi Klinik Pipa",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/logo%20landscape.png`,
      },
    },
  };
}

export function generateAreaPageGraphSchema(
  areaName: string,
  areaSlug: string,
  faqs: { question: string; answer: string }[]
) {
  const pageUrl = `${siteConfig.domain}/kota/${areaSlug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PlumbingService",
        "@id": `${pageUrl}/#service`,
        name: `Jasa Deteksi Pipa Bocor & Detox Pipa di ${areaName} - ${siteConfig.name}`,
        url: pageUrl,
        telephone: siteConfig.phone,
        priceRange: siteConfig.priceRange,
        description: `Jasa deteksi pipa bocor tersembunyi akustik & detox pencucian pipa kotor di wilayah ${areaName}, Bandung 24 Jam Tanpa Bobok Dinding.`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: areaName,
          addressRegion: "Jawa Barat",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.geo.latitude,
          longitude: siteConfig.address.geo.longitude,
        },
      },
      generateBreadcrumbSchema([
        { name: "Beranda", url: "/" },
        { name: "Kota Bandung", url: "/#area" },
        { name: areaName, url: `/kota/${areaSlug}` },
      ]),
      generateFAQSchema(faqs),
    ],
  };
}
