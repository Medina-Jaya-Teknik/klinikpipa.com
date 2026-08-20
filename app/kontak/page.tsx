import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { FaPhoneAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Kontak & Alamat Klinik Pipa Bandung",
  description:
    `Hubungi Klinik Pipa Bandung 24 jam via Telepon ${siteConfig.phone} atau WhatsApp. Solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet.`,
  alternates: {
    canonical: `${siteConfig.domain}/kontak`,
  },
};

export default function KontakPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontak ${siteConfig.name}`,
    description: siteConfig.description,
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.province,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Kontak", url: "/kontak" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([contactSchema, breadcrumbSchema]) }}
      />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Layanan Siaga 24 Jam Bandung
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Hubungi Klinik Pipa
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Konsultasikan masalah pipa bocor, pipa kotor (detox pipa), atau pipa mampet Anda kepada tim teknisi kami di Bandung.
          </p>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-12 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20solusi%20pipa%20bocor,%20pipa%20kotor,%20atau%20pipa%20mampet.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:scale-[1.02] shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-3xl" />
              </div>
              <div>
                <span className="text-xs text-emerald-700 font-bold uppercase block">Pesan Cepat</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">WhatsApp (24 Jam)</h3>
                <p className="text-xs text-slate-600">+{siteConfig.whatsappNumber}</p>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:scale-[1.02] shadow-sm hover:shadow-md transition-all group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <span className="text-xs text-sky-700 font-bold uppercase block">Telepon Langsung</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700">Hotline Telepon</h3>
                <p className="text-xs text-slate-600">{siteConfig.phone}</p>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <span className="text-xs text-purple-700 font-bold uppercase block">Jam Operasional</span>
                <h3 className="text-lg font-bold text-slate-900">Buka 24 Jam Nonstop</h3>
                <p className="text-xs text-slate-600">Senin - Minggu (Termasuk Libur)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
}
