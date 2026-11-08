import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServiceSection from "@/components/ServiceSection";
import CostEstimatorSection from "@/components/CostEstimatorSection";
import AreaSection from "@/components/AreaSection";
import FAQSection from "@/components/FAQSection";
import { defaultFaqs } from "@/lib/faq-data";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Jasa Deteksi Pipa Bocor & Saluran Mampet Bandung 24 Jam`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: `${siteConfig.name} - Jasa Deteksi Pipa Bocor & Saluran Mampet Bandung 24 Jam`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/logo%20landscape.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Solusi Pipa Bocor, Detox & Saluran Mampet Bandung`,
      },
    ],
  },
};

export default function Home() {
  const faqSchema = generateFAQSchema(defaultFaqs);
  const homeServiceSchema = generateServiceSchema(
    "Jasa Deteksi Pipa Bocor, Cuci Detox & Saluran Mampet Bandung",
    siteConfig.description,
    siteConfig.domain
  );

  return (
    <>
      {/* Homepage FAQ & Comprehensive Service Schema for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, homeServiceSchema]),
        }}
      />
      <Hero />
      <TrustSection />
      <ServiceSection />
      <CostEstimatorSection />
      <AreaSection />
      <CTASection />
      <FAQSection />
      <BlogPreviewSection />
      <MapSection />
    </>
  );
}
