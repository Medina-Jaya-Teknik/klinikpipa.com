import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaSearchLocation,
  FaShieldAlt,
  FaClock,
  FaBolt,
  FaMapMarkerAlt,
  FaTint,
} from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Jasa Deteksi Pipa Bocor Bandung Akurat Tanpa Bobok | Klinik Pipa",
  },
  description:
    "Jasa deteksi pipa bocor Bandung akurat 99% sensor akustik & thermal tanpa bobok acak! Solusi tagihan air melonjak. Hubungi ☎️ 0898-9890-071.",
  keywords: [
    "jasa deteksi pipa bocor bandung",
    "deteksi pipa bocor bandung",
    "biaya deteksi pipa bocor bandung",
    "tukang pipa bocor bandung",
    "geophone deteksi pipa bocor bandung",
    "deteksi kebocoran pipa air pdam",
    "pelacak pipa bocor bawah lantai",
    "cara mengetahui pipa air bocor di rumah",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/layanan/deteksi-pipa-bocor-bandung`,
  },
  openGraph: {
    title: "Jasa Deteksi Pipa Bocor Bandung Akurat Tanpa Bobok | Klinik Pipa",
    description:
      "Jasa deteksi pipa bocor Bandung akurat 99% sensor akustik & thermal tanpa bobok acak! Solusi tagihan air melonjak. Hubungi ☎️ 0898-9890-071.",
    url: `${siteConfig.domain}/layanan/deteksi-pipa-bocor-bandung`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function DeteksiPipaBocorBandungPage() {
  const serviceSchema = generateServiceSchema(
    "Jasa Deteksi Pipa Bocor Bandung Akurat Tanpa Bobok",
    "Layanan profesional pelacakan dan deteksi titik kebocoran pipa air bersih tersembunyi di bawah lantai dan balik tembok menggunakan sensor akustik & thermal imaging di Bandung.",
    `${siteConfig.domain}/layanan/deteksi-pipa-bocor-bandung`
  );

  const faqs = [
    {
      question: "Bagaimana cara mendeteksi pipa bocor di bawah lantai keramik tanpa membongkar?",
      answer:
        "Kami menggunakan alat Acoustic Ground Microphone (Geophone) berfrekuensi tinggi dan Thermal Imaging Camera. Alat ini menangkap frekuensi desis air yang keluar dari lubang pipa bocor dan perbedaan suhu pada permukaan lantai/tembok, sehingga titik kebocoran bisa diketahui dengan akurasi 99% tanpa pembongkaran acak.",
    },
    {
      question: "Kapan saya harus memanggil jasa deteksi pipa bocor?",
      answer:
        "Panggil kami jika tagihan air PDAM melonjak drastis padahal pemakaian normal, pompa pendorong (booster) sering menyala sendiri saat semua keran ditutup, atau terdapat rembesan air basah di dinding dan lantai yang tidak kunjung kering.",
    },
    {
      question: "Berapa biaya jasa deteksi pipa bocor di Bandung?",
      answer:
        "Biaya deteksi pipa bocor untuk rumah tinggal 1 lantai mulai dari Rp650.000. Biaya mencakup pemindaian menyeluruh seluruh jalur pipa air bersih menggunakan sensor akustik dan uji tekanan manometer.",
    },
    {
      question: "Apakah Klinik Pipa juga melayani perbaikan dan penambalan pipa yang bocor?",
      answer:
        "Ya, setelah titik bocor ditemukan secara presisi, teknisi kami dapat langsung melakukan pembobokan minimal hanya pada 1 keping keramik di titik kebocoran untuk menyambung atau mengganti sambungan pipa yang rusak.",
    },
    {
      question: "Berapa lama proses pelacakan kebocoran pipa biasanya berlangsung?",
      answer:
        "Proses pemindaian rata-rata membutuhkan waktu 1 hingga 3 jam tergantung luas bangunan dan kompleksitas instalasi jalur pipa air di rumah Anda.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
    { name: "Jasa Deteksi Pipa Bocor Bandung", url: "/layanan/deteksi-pipa-bocor-bandung" },
  ]);

  const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20jasa%20deteksi%20pipa%20bocor%20di%20Bandung.`;

  const leakSymptoms = [
    {
      title: "Tagihan PDAM Melonjak Drastis",
      desc: "Biaya tagihan air bulanan naik 2 hingga 5 kali lipat padahal jumlah penghuni dan pola pemakaian air rumah tangga tidak berubah.",
    },
    {
      title: "Pompa Air Booster Sering Menyala Sendiri",
      desc: "Pompa otomatis sering berbunyi 'cetak-cetek' setiap beberapa menit padahal seluruh kran air di dalam rumah dalam keadaan tertutup rapat.",
    },
    {
      title: "Tembok Lembab & Cat Menggelembung",
      desc: "Dinding ruangan di dekat kamar mandi atau dapur selalu basah berair, timbul jamur hitam, dan cat tembok mengelupas akibat rembesan kapiler.",
    },
  ];

  const technologies = [
    {
      name: "Acoustic Ground Microphone (Geophone)",
      desc: "Sensor pendengar frekuensi tinggi yang mampu mendeteksi bunyi turbulensi desis air yang bocor dari pipa PVC, tembaga, atau besi meski tertanam sedalam 1–2 meter di dalam tanah atau cor beton.",
    },
    {
      name: "Thermal Imaging Infrared Camera",
      desc: "Kamera infra-merah yang memetakan radiasi suhu dingin/panas di balik keramik lantai dan dinding untuk mengidentifikasi pola genangan air rembes secara visual real-time.",
    },
    {
      name: "Digital Pressure Gauge (Manometer Test)",
      desc: "Uji tekanan statis kompresi udara untuk memastikan secara saintifik apakah instalasi pipa air mengalami penurunan tekanan (drop pressure) yang menandakan adanya kebocoran.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-24 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold">
            <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Spesialis Deteksi Akustik & Thermal 24 Jam Bandung</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
            Jasa Deteksi Pipa Bocor Bandung{" "}
            <span className="text-gradient-vibrant">Akurat Tanpa Bobok Acak</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Temukan titik pasti kebocoran pipa air bersih tersembunyi di balik tembok atau bawah cor lantai keramik dengan akurasi 99%. Bebas pembongkaran sembarangan, hemat biaya perbaikan rumah Anda!
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaCheckCircle className="text-sky-600" /> Akurasi Titik Bocor 99%
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaShieldAlt className="text-emerald-600" /> Sensor Geophone & Thermal
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaClock className="text-amber-600" /> Layanan Cepat Bandung Raya
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={bookingWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Jadwalkan Deteksi Pipa Bocor Sekarang</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-base border border-slate-300 shadow-xs"
            >
              <FaPhoneAlt className="text-sky-600" />
              <span>Konsultasi: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="py-16 md:py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold uppercase tracking-wider">
              Tanda-Tanda Kebocoran Pipa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              3 Ciri Pipa Air Bersih Anda Mengalami Bocor Halus
            </h2>
            <p className="text-slate-600 text-sm">
              Kebocoran pipa air bersih sering kali tersembunyi di balik struktur bangunan sehingga tidak terlihat secara kasat mata sampai kerusakan struktural parah terjadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leakSymptoms.map((sym, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-sky-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-base mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{sym.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sym.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology Equipment */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Peralatan Canggih Deteksi Presisi Tanpa Bobok
            </h2>
            <p className="text-slate-600 text-sm">
              Kami berinvestasi pada teknologi sensor terbaik untuk menjamin lokasi pembongkaran seminimal mungkin:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl w-fit">
                  <FaSearchLocation className="text-xl" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{tech.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cakupan Wilayah Deteksi Pipa Bocor Bandung
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Layanan teknisi deteksi kebocoran pipa siaga untuk seluruh area perumahan, ruko, dan industri:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 transition text-center group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-sky-700 flex items-center justify-center gap-1.5">
                  <FaMapMarkerAlt className="text-sky-600 text-[10px]" />
                  <span>{area.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pertanyaan Umum Jasa Deteksi Pipa Bocor Bandung
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Jawaban seputar metode, biaya, dan penanganan kebocoran pipa air bersih.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
