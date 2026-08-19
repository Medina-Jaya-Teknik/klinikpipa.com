import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServiceSection from "@/components/ServiceSection";
import AreaSection from "@/components/AreaSection";
import FAQSection from "@/components/FAQSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServiceSection />
      <AreaSection />
      <CTASection />
      <FAQSection />
      <BlogPreviewSection />
      <MapSection />
    </>
  );
}
