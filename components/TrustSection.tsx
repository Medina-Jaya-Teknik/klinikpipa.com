import { siteConfig } from "@/config/site";
import { FaSearchLocation, FaBroom, FaShieldAlt, FaClock, FaCheck } from "react-icons/fa";

export default function TrustSection() {
  const iconMap: Record<string, React.ReactNode> = {
    FaSearchLocation: <FaSearchLocation className="text-2xl text-sky-600" />,
    FaBroom: <FaBroom className="text-2xl text-emerald-600" />,
    FaShieldAlt: <FaShieldAlt className="text-2xl text-purple-600" />,
    FaClock: <FaClock className="text-2xl text-amber-600" />,
  };

  const bgIconMap: Record<string, string> = {
    FaSearchLocation: "bg-sky-100 border-sky-200",
    FaBroom: "bg-emerald-100 border-emerald-200",
    FaShieldAlt: "bg-purple-100 border-purple-200",
    FaClock: "bg-amber-100 border-amber-200",
  };

  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Keunggulan Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Memilih Layanan Klinik Pipa?
          </h2>
          <p className="text-slate-600 text-base font-normal">
            Solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet dengan standar pengerjaan profesional, presisi, dan aman tanpa merusak struktur bangunan Anda.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.advantages.map((adv, index) => (
            <div
              key={index}
              className="bg-slate-50 p-7 rounded-3xl border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all ${bgIconMap[adv.icon] || "bg-sky-100 border-sky-200"}`}>
                  {iconMap[adv.icon] || <FaCheck className="text-2xl text-sky-600" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <FaCheck /> <span>Garansi Hasil Akurat</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
