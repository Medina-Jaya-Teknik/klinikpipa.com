import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { FaShieldAlt, FaUserShield, FaAward, FaSearchLocation, FaBroom } from "react-icons/fa";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Tentang Kami - Profil ${siteConfig.name}`,
  description:
    "Profil Klinik Pipa, solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet 24 jam tanpa bongkar di Bandung.",
  alternates: {
    canonical: `${siteConfig.domain}/tentang`,
  },
};

export default function TentangPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Tentang ${siteConfig.name}`,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, breadcrumbSchema]) }}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Profil & Pengalaman
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Tentang Klinik Pipa
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet profesional & bergaransi di Bandung.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Solusi Pipa Air Akurat Tanpa Pembongkaran Sembarangan
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-emerald-700 font-bold">Klinik Pipa</strong> didirikan untuk memberikan kepastian dan keamanan bagi pemilik rumah, rumah makan, ruko, dan gedung di wilayah Bandung Raya.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kebocoran pipa di dalam dinding dan penumpukan kerak cacing/lumpur di dalam pipa air minum seringkali sulit ditangani tanpa membongkar seluruh keramik. Dengan mengadopsi sensor Acoustic Leak Locator, Thermal Camera, dan mesin Hydro Pressure Detox, kami melacak lokasi kerusakan presisi 99% & membersihkan pipa secara total tanpa merusak bangunan Anda.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-2xl font-black text-sky-700">99% Akurasi</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">Deteksi Kebocoran Pipa</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-2xl font-black text-emerald-700">24 Jam</h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">Siaga Panggilan Darurat</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaSearchLocation className="text-3xl text-sky-600" />
                <h3 className="text-base font-bold text-slate-900">Sensor Akustik & Thermal</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Melacak getaran bocor halus & perbedaan suhu di dalam struktur tembok beton.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaBroom className="text-3xl text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Hydro Pressure Detox</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Pencucian kerak kotoran, bio-film, & cacing pipa air keran tanpa bahan kimia keras.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaShieldAlt className="text-3xl text-amber-600" />
                <h3 className="text-base font-bold text-slate-900">Garansi Pekerjaan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Jaminan hasil pelacakan titik bocor presisi & air keran kembali jernih.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <FaUserShield className="text-3xl text-purple-600" />
                <h3 className="text-base font-bold text-slate-900">Teknisi Berpengalaman</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Tim profesional terlatih dengan peralatan deteksi & detox pipa tingkat industri.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
