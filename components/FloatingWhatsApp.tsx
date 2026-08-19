import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20solusi%20pipa%20bocor,%20pipa%20kotor,%20atau%20pipa%20mampet.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip Hover Preview */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-emerald-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Respon Cepat 24 Jam • Chat WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Klinik Pipa via WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300 pulse-button relative"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl text-slate-950" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full" />
      </a>
    </div>
  );
}
