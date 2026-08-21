"use client";

import { siteConfig } from "@/config/site";
import { FaSearchLocation, FaBroom, FaEye, FaTools, FaCheckCircle, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ServiceSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    FaSearchLocation: <FaSearchLocation className="text-3xl text-sky-600" />,
    FaBroom: <FaBroom className="text-3xl text-emerald-600" />,
    FaEye: <FaEye className="text-3xl text-purple-600" />,
    FaTools: <FaTools className="text-3xl text-amber-600" />,
  };

  const bgIconMap: Record<string, string> = {
    FaSearchLocation: "bg-sky-100 border-sky-200",
    FaBroom: "bg-emerald-100 border-emerald-200",
    FaEye: "bg-purple-100 border-purple-200",
    FaTools: "bg-amber-100 border-amber-200",
  };

  const serviceImageMap: Record<string, string> = {
    "deteksi-pipa-bocor": "/images/layanan-deteksi-bocor.webp",
    "detox-pipa-kotor": "/images/layanan-detox-pipa.webp",
    "inspeksi-kamera-pipa": "/images/layanan-inspeksi-kamera.webp",
    "pelancaran-saluran-mampet": "/images/layanan-saluran-mampet.webp",
  };

  return (
    <section id="layanan" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Layanan Unggulan Bandung
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet
          </h2>
          <p className="text-slate-600 text-base">
            Layanan profesional deteksi pipa bocor tersembunyi, cuci detox pipa air bersih, dan pelancaran saluran mampet 24 jam tanpa bongkar sembarangan.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((service) => {
            const bookingWaUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20ingin%20pesan%20jasa%20${encodeURIComponent(service.name)}.`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {serviceImageMap[service.id] && (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 -mx-1 -mt-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={serviceImageMap[service.id]}
                        alt={`${service.name} Bandung - Klinik Pipa`}
                        title={`${service.name} 24 Jam Bandung - Tanpa Bongkar`}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={337}
                        className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform ${bgIconMap[service.iconName] || "bg-sky-100 border-sky-200"}`}>
                      {iconComponents[service.iconName] || <FaSearchLocation className="text-3xl text-sky-600" />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold">
                      {service.price}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-700 font-medium">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 flex-shrink-0 text-xs" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <a
                    href={bookingWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Pesan via WA</span>
                  </a>

                  <Link
                    href="/layanan"
                    className="w-full flex items-center justify-center gap-1 py-2 text-[11px] font-semibold text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    <span>Detail Layanan</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
