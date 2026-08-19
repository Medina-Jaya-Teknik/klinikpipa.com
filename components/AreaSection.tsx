import { siteConfig } from "@/config/site";
import { FaMapMarkerAlt, FaChevronRight, FaCompass } from "react-icons/fa";
import Link from "next/link";

export default function AreaSection() {
  return (
    <section id="area" className="py-16 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Area Jangkauan Layanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Jasa Saluran Mampet Seluruh Kota Bandung & Sekitarnya
          </h2>
          <p className="text-slate-600 text-base">
            Teknisi kami siap meluncur dengan cepat ke lokasi Anda di berbagai kecamatan dan kelurahan di Kota Bandung, Kabupaten Bandung, dan Cimahi.
          </p>
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.areas.map((area) => (
            <Link
              key={area.slug}
              href={`/kota/${area.slug}`}
              className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <FaChevronRight className="text-xs text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-700 mb-1">
                  {area.name}
                </h3>
                <p className="text-[11px] text-slate-600 line-clamp-2">
                  {area.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                <FaCompass /> <span>Patokan: {area.landmark || "Bandung Area"}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Area Note */}
        <div className="mt-12 text-center bg-slate-100 border border-slate-200 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Lokasi Anda tidak ada dalam daftar di atas? Jangan khawatir, kami melayani <strong className="text-emerald-700 font-bold">seluruh kelurahan & kecamatan di wilayah Bandung Raya</strong>. Hubungi WhatsApp kami untuk konfirmasi lokasi instan.
          </p>
        </div>

      </div>
    </section>
  );
}
