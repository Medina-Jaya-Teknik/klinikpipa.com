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
import { generateFAQSchema, generateProductServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";

export default function Home() {
  const faqSchema = generateFAQSchema(defaultFaqs);
  const homeProductSchema = generateProductServiceSchema({
    name: "Jasa Deteksi Pipa Bocor & Saluran Mampet Bandung - Klinik Pipa",
    description: siteConfig.description,
    url: siteConfig.domain,
    image: "/images/hero-banner.webp",
    price: "150000",
  });

  return (
    <>
      {/* Homepage FAQ & Product Review Schema for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, homeProductSchema]),
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
