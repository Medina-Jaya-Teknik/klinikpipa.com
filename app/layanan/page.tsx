import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaTools } from "react-icons/fa";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet - Klinik Pipa",
  description:
    "Layanan Klinik Pipa: solusi pipa bocor tersembunyi (sensor akustik/thermal), cuci detox pipa air kotor, dan pelancaran saluran mampet 24 jam tanpa bobok di Bandung.",
  alternates: {
    canonical: `${siteConfig.domain}/layanan`,
  },
};

export default function LayananPage() {
  const serviceSchema = generateServiceSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Layanan", url: "/layanan" },
  ]);

  const serviceImageMap: Record<string, string> = {
    "deteksi-pipa-bocor": "/images/layanan-deteksi-bocor.webp",
    "detox-pipa-kotor": "/images/layanan-detox-pipa.webp",
    "inspeksi-kamera-pipa": "/images/layanan-inspeksi-kamera.webp",
    "pelancaran-saluran-mampet": "/images/layanan-saluran-mampet.webp",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Layanan Spesialis 24 Jam Bandung
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Klinik Pipa melayani deteksi pipa bocor tersembunyi, cuci detox pipa air kotor, dan pelancaran saluran mampet 24 jam tanpa bongkar sembarangan.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 md:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 0;
            const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20jasa%20${encodeURIComponent(service.name)}.`;
            const imageSrc = serviceImageMap[service.id];

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold">
                    <span>{service.price}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {service.name}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Keunggulan Metode Pengerjaan:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800 font-semibold">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>Pesan Jasa Ini Sekarang</span>
                    </a>

                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 shadow-sm"
                    >
                      <FaPhoneAlt className="text-sky-600" />
                      <span>{siteConfig.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Service Feature Image Card */}
                <div className="w-full lg:w-[440px] h-72 sm:h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative group bg-slate-100 flex-shrink-0">
                  {imageSrc ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageSrc}
                        alt={`${service.name} Bandung Spesialis Klinik Pipa`}
                        title={`${service.name} 24 Jam Bandung Tanpa Bobok`}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                        <span className="text-[11px] text-emerald-400 font-extrabold tracking-wider uppercase mb-1">
                          Teknologi Presisi Tanpa Bongkar
                        </span>
                        <h3 className="text-lg font-bold text-white leading-snug">{service.name}</h3>
                        <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-medium">{service.shortDesc}</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-sky-600 via-sky-500 to-emerald-500 text-white p-8 flex flex-col justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
                        <FaTools className="text-2xl" />
                      </div>

                      <div>
                        <span className="text-xs text-emerald-100 font-extrabold tracking-wider uppercase block mb-1">
                          Teknologi Presisi
                        </span>
                        <h3 className="text-2xl font-black text-white">Tanpa Bobok Sembarangan</h3>
                        <p className="text-xs text-sky-100 mt-1 font-medium">Akurat 99% melacak titik kerusakan tanpa merusak lantai/ruangan.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
