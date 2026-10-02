import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo%20landscape.png`,
    image: [
      `${siteConfig.domain}/logo%20dan%20nama.png`,
      `${siteConfig.domain}/images/hero-banner.webp`,
    ],
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
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.address.geo.latitude,
        longitude: siteConfig.address.geo.longitude,
      },
      geoRadius: "35000",
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
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Bambang Sudrajat",
        },
        datePublished: "2026-08-14",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Titik pipa bocor di bawah keramik teras langsung ketemu dalam 45 menit pakai alat sensor akustik. Hanya bongkar 1 keramik, tagihan PDAM langsung normal kembali!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rina Kusuma Dewi",
        },
        datePublished: "2026-09-02",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Air keran di rumah kuning dan berbau besi. Setelah di-detox hydro flushing oleh Klinik Pipa, keluar kerak hitam banyak sekali. Sekarang airnya super jernih dan lancar.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Hendrik Gunawan",
        },
        datePublished: "2026-09-18",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Wastafel restoran kami mampet lemak tebal. Teknisi datang 30 menit ke lokasi Sukajadi dan lancar pakai mesin kawat spiral tanpa bongkar pipa. Mantap dan bergaransi.",
      },
    ],
    currenciesAccepted: "IDR",
    paymentAccepted: ["Cash", "Transfer Bank", "QRIS"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
      hoursAvailable: {
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
    },
    knowsAbout: [
      "Deteksi Pipa Bocor",
      "Detox Pipa Air Bersih",
      "Pelancaran Saluran Mampet",
      "Pembersihan Kerak Pipa",
      "Plumbing",
      "Kamera Endoskop Pipa",
      "Hydro Jetting",
      "Pelancar Kloset WC Mampet",
      "Acoustic Leak Locator",
      "Thermal Camera Pipe Inspection",
      "Hydro Pressure Flushing",
      "Rigid Spiral Rooter",
    ],
    potentialAction: {
      "@type": "CommunicateAction",
      target: `https://wa.me/${siteConfig.whatsappNumber}`,
      name: "Konsultasi Cepat via WhatsApp 24 Jam",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "p.text-slate-700", "p.text-slate-600"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Spesialis Klinik Pipa",
      itemListElement: siteConfig.services.map((s, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.shortDesc,
        },
        position: idx + 1,
      })),
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

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
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
      price: "150000",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  };
}

export function generateHowToSchema(data: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string; image?: string }[];
  tools?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    totalTime: data.totalTime || "PT15M",
    tool: (data.tools || []).map((tool) => ({
      "@type": "HowToTool",
      name: tool,
    })),
    step: data.steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `${siteConfig.domain}${step.image}` : undefined,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  author?: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
}) {
  const imageUrl = article.image
    ? article.image.startsWith("http")
      ? article.image
      : `${siteConfig.domain}${article.image}`
    : `${siteConfig.domain}/logo%20landscape.png`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: imageUrl,
    inLanguage: "id-ID",
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${article.slug}`,
    },
    keywords: article.keywords ? article.keywords.join(", ") : undefined,
    wordCount: article.wordCount,
    author: {
      "@type": "Person",
      name: article.author || "Tim Ahli Klinik Pipa",
      jobTitle: "Spesialis Deteksi Kebocoran & Pemipaan",
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.domain,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
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
        "@type": "Plumber",
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
