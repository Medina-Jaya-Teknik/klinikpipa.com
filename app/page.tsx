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
import { generateFAQSchema } from "@/lib/schema";

export default function Home() {
  const faqSchema = generateFAQSchema(defaultFaqs);

  return (
    <>
      {/* Homepage FAQ Schema for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
