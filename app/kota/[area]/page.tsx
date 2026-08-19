import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { generateAreaPageGraphSchema } from "@/lib/schema";
import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaShieldAlt, FaSearchLocation, FaBroom } from "react-icons/fa";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

interface AreaPageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.areas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === resolvedParams.area);

  if (!areaData) {
    return {
      title: "Area Tidak Ditemukan",
    };
  }

  const areaTitle = `Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet di ${areaData.name} - Klinik Pipa`;
  const areaDesc = `Klinik Pipa melayani solusi pipa bocor tersembunyi, cuci detox pipa kotor, dan pelancaran saluran mampet 24 jam tanpa bongkar di ${areaData.name}, Bandung.`;

  return {
    title: areaTitle,
    description: areaDesc,
    keywords: [
      `jasa deteksi pipa bocor ${areaData.name.toLowerCase()}`,
      `detox pipa ${areaData.name.toLowerCase()}`,
      `deteksi pipa bocor bandung ${areaData.name.toLowerCase()}`,
      `cuci pipa air bersih ${areaData.name.toLowerCase()}`,
      `tukang pipa bocor ${areaData.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: `${siteConfig.domain}/kota/${areaData.slug}`,
    },
    openGraph: {
      title: areaTitle,
      description: areaDesc,
      url: `${siteConfig.domain}/kota/${areaData.slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const resolvedParams = await params;
  const areaData = siteConfig.areas.find((a) => a.slug === resolvedParams.area);

  if (!areaData) {
    notFound();
  }

  const areaFaqs = [
    {
      question: `Berapa lama estimasi tim deteksi & detox pipa tiba di area ${areaData.name}?`,
      answer: `Untuk wilayah ${areaData.name} dan sekitarnya, pos teknisi terdekat kami dapat tiba di lokasi Anda dalam waktu 20 hingga 40 menit setelah pendaftaran pemesanan.`,
    },
    {
      question: `Apakah pengerjaan deteksi pipa bocor di ${areaData.name} bergaransi akurat?`,
      answer: `Tentu saja! Pemindaian titik bocor menggunakan sensor akustik & thermal camera terjamin presisi 99% tanpa membongkar ruangan secara sembarangan.`,
    },
    {
      question: `Bagaimana metode detox pipa air bersih untuk rumah di ${areaData.name}?`,
      answer: `Kami menggunakan dorongan tekanan Hydro Flushing yang aman tanpa kimia untuk menguras habis kerak kotoran, lumpur, dan cacing di sepanjang jalur pipa keran Anda.`,
    },
  ];

  const graphSchema = generateAreaPageGraphSchema(areaData.name, areaData.slug, areaFaqs);
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20solusi%20pipa%20bocor,%20pipa%20kotor,%20atau%20pipa%20mampet%20di%20area%20${encodeURIComponent(areaData.name)}.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />

      {/* Hero Header Area */}
      <section className="pt-32 pb-16 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold">
            <FaMapMarkerAlt />
            <span>Pos Layanan Prioritas: {areaData.name}, Bandung</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet di <span className="text-gradient-vibrant">{areaData.name}</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            {areaData.description || `Layanan deteksi pipa air bocor tersembunyi & pencucian kerak pipa kotor air bersih di wilayah ${areaData.name}.`} Menggunakan sensor akustik & hydro flushing tanpa bobok sembarangan!
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 pulse-button"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Pesan Teknisi Area {areaData.name}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-base border border-slate-300 shadow-sm"
            >
              <FaPhoneAlt className="text-sky-600" />
              <span>Hotline: {siteConfig.phone}</span>
            </a>
          </div>

        </div>
      </section>

      {/* Special Area Content */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <FaSearchLocation className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Deteksi Bocor Akurat</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Melacak posisi pasti kebocoran pipa air PDAM/pompa tersembunyi di tembok/lantai wilayah {areaData.name}.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <FaBroom className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hydro Detox Pipa</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Melontarkan kotoran cacing, kerak hitam, & lumut air keran tanpa bahan kimia berbahaya di {areaData.name}.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tanpa Bobok Sembarangan</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Melindungi keutuhan keramik & dinding rumah Anda di {areaData.name} dengan penanganan bergaransi.
              </p>
            </div>
          </div>

          {/* Area Navigation Links */}
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              Jelajahi Area Pelayanan Lain di Bandung:
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.areas.map((otherArea) => (
                <Link
                  key={otherArea.slug}
                  href={`/kota/${otherArea.slug}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    otherArea.slug === areaData.slug
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                      : "bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-800 border-slate-200"
                  }`}
                >
                  {otherArea.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={areaFaqs} />
      <CTASection />
    </>
  );
}
