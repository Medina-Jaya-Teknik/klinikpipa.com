import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaPhoneAlt,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Jasa Saluran Mampet Bandung 24 Jam Tanpa Bongkar | Klinik Pipa",
  },
  description:
    "Pipa WC, wastafel & got mampet tuntas tanpa bongkar keramik! Teknisi tiba 30 menit di Bandung, mesin spiral modern, garansi lancar. Hubungi 24 jam.",
  keywords: [
    "jasa saluran mampet bandung",
    "jasa saluran mampet terdekat",
    "pelancar saluran mampet bandung",
    "wc mampet bandung",
    "wastafel mampet bandung",
    "tukang pipa mampet bandung 24 jam",
    "biaya pelancar saluran mampet",
    "saluran air mampet tanpa bongkar",
    "ahli pipa mampet bandung",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/layanan/saluran-mampet-bandung`,
  },
  openGraph: {
    title: "Jasa Saluran Mampet Bandung 24 Jam Tanpa Bongkar | Klinik Pipa",
    description:
      "Pipa WC, wastafel & got mampet tuntas tanpa bongkar keramik! Teknisi tiba 30 menit di Bandung, mesin spiral modern, garansi lancar. Hubungi 24 jam.",
    url: `${siteConfig.domain}/layanan/saluran-mampet-bandung`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function SaluranMampetBandungPage() {
  const serviceSchema = generateServiceSchema(
    "Jasa Saluran Mampet Bandung 24 Jam Tanpa Bongkar",
    "Layanan darurat pelancaran saluran pipa mampet untuk wastafel dapur, kloset WC, floor drain kamar mandi, dan got pembuangan air kotor di Bandung.",
    `${siteConfig.domain}/layanan/saluran-mampet-bandung`
  );

  const faqs = [
    {
      question: "Berapa lama teknisi saluran mampet tiba di lokasi rumah saya di Bandung?",
      answer:
        "Untuk wilayah Kota Bandung dan Cimahi, teknisi Klinik Pipa siaga di beberapa pos dan dapat tiba di lokasi Anda dalam waktu 20 hingga 40 menit setelah pemesanan dikonfirmasi via WhatsApp.",
    },
    {
      question: "Apakah pelancaran pipa mampet ini benar-benar tanpa membongkar keramik?",
      answer:
        "Ya, 100% tanpa bongkar keramik lantai atau dinding! Kami menggunakan mesin kabel spiral fleksibel baja (drain cleaner) yang berputar mengikuti lekukan pipa PVC untuk memotong dan menarik sumbatan dari dalam.",
    },
    {
      question: "Berapa biaya jasa saluran mampet di Bandung?",
      answer:
        "Tarif jasa mulai dari Rp150.000 untuk wastafel dapur atau floor drain kamar mandi standar. Biaya transparan disampaikan di awal sebelum teknisi bekerja, dengan sistem garansi lancar (No Cure No Pay).",
    },
    {
      question: "Mengapa dilarang menggunakan soda api untuk saluran mampet?",
      answer:
        "Reaksi kimia soda api menghasilkan panas ekstrem di atas 100°C yang dapat melumerkan sambungan lem pipa PVC dan menyebabkan kebocoran fatal di balik dinding. Selain itu, soda api yang bereaksi dengan minyak goreng bekas akan mengeras menjadi gumpalan sabun kapur yang membuat pipa mampet total.",
    },
    {
      question: "Apakah layanan saluran mampet Klinik Pipa bergaransi?",
      answer:
        "Ya, seluruh pengerjaan kami bergaransi tuntas lancar. Kami selalu melakukan uji siram air deras di depan pemilik rumah untuk memastikan saluran benar-benar plong sebelum pekerjaan dinyatakan selesai.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
    { name: "Jasa Saluran Mampet Bandung", url: "/layanan/saluran-mampet-bandung" },
  ]);

  const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20jasa%20saluran%20mampet%20di%20Bandung.`;

  const serviceCategories = [
    {
      title: "Wastafel Dapur (Kitchen Sink)",
      desc: "Endapan minyak goreng beku, mentega, sisa kuah berlemak, dan butiran nasi yang mengeras di leher angsa saluran cuci piring.",
      price: "Mulai Rp150.000",
      features: ["Kikis kerak lemak membandel", "Tanpa bahan kimia perusak pipa", "Uji aliran air deras"],
    },
    {
      title: "Kloset WC Duduk & Jongkok",
      desc: "Sumbatan benda padat seperti pembalut, tisu basah, mainan anak, bungkus sampo, atau pengharum kloset yang jatuh ke leher angsa.",
      price: "Mulai Rp180.000",
      features: ["Alat auger kloset anti-gores porselen", "Penarikan benda asing presisi", "Air kloset kembali normal"],
    },
    {
      title: "Floor Drain Kamar Mandi",
      desc: "Jaring gumpalan rambut rontok yang terikat dengan buih sabun mandi dan daki, menyumbat leher pipa pembuangan lantai.",
      price: "Mulai Rp150.000",
      features: ["Pembersihan sampai dasar pipa", "Bau got kamar mandi hilang", "Air mandi surut seketika"],
    },
    {
      title: "Pipa Got & Talang Hujan Utama",
      desc: "Tumpukan pasir, lumpur endapan, dedaunan kering, dan lumut yang menyumbat pipa pembuangan utama ke saluran kota.",
      price: "Mulai Rp200.000",
      features: ["Mesin spiral torsi tinggi diameter besar", "Pembersihan jalur pipa panjang", "Bebas banjir halaman rumah"],
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
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Teknisi Siaga 24 Jam Bandung & Sekitarnya</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
            Jasa Saluran Mampet Bandung{" "}
            <span className="text-gradient-vibrant">Tanpa Bongkar Keramik</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl leading-relaxed font-medium">
            Solusi cepat dan tuntas untuk WC tersumbat, wastafel dapur meluap, saluran kamar mandi mampet, dan got melimpah. Menggunakan mesin spiral torsi tinggi modern, bergaransi lancar, tanpa membobok lantai rumah Anda!
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaCheckCircle className="text-emerald-600" /> 100% Tanpa Bongkar Lantai
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaShieldAlt className="text-sky-600" /> Garansi Lancar Tuntas
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs flex items-center gap-2">
              <FaClock className="text-amber-600" /> Tiba 20–40 Menit di Lokasi
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
              <span>Panggil Teknisi Mampet Sekarang</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-base border border-slate-300 shadow-xs"
            >
              <FaPhoneAlt className="text-sky-600" />
              <span>Hotline: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Categories Grid */}
      <section className="py-16 md:py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold uppercase tracking-wider">
              Solusi Tuntas Bergaransi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Jenis Saluran Pipa Mampet yang Kami Tangani
            </h2>
            <p className="text-slate-600 text-sm">
              Teknisi kami siap menangani berbagai macam kendala saluran mampet untuk rumah tinggal, restoran, kos-kosan, ruko, dan gedung perkantoran di Bandung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>

                  <ul className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 shrink-0 text-xs" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200 flex items-center justify-center gap-2 transition"
                >
                  <FaWhatsapp /> Pesan Layanan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Danger of Caustic Soda Warning Card */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50/80 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-xs">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl shrink-0">
              <FaExclamationTriangle className="text-2xl" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-amber-900">
                Peringatan: Hindari Memasukkan Soda Api ke Saluran Pipa PVC Anda!
              </h3>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                Soda api yang bereaksi dengan air menghasilkan panas kimia di atas <strong>100°C</strong>. Suhu ini dapat melumerkan sambungan pipa PVC di balik tembok sehingga timbul kebocoran fatal. Selain itu, soda api yang bereaksi dengan minyak goreng bekas akan mengeras menjadi bongkahan sabun kapur yang membuat pipa mampet permanen. Gunakan metode mekanis mesin spiral yang 100% aman untuk instalasi pipa Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Wilayah Jangkauan Jasa Saluran Mampet Bandung
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Teknisi kami tersebar di pos-pos strategis untuk melayani panggilan darurat seluruh penjuru Bandung Raya:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {siteConfig.areas.map((area) => (
              <Link
                key={area.slug}
                href={`/kota/${area.slug}`}
                className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition text-center group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700 flex items-center justify-center gap-1.5">
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
              Pertanyaan Umum Seputar Jasa Saluran Mampet Bandung
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Hal-hal yang sering ditanyakan pelanggan sebelum memanggil teknisi pelancar saluran pipa.
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
