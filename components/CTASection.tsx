import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaPhoneAlt, FaClock, FaCheckCircle } from "react-icons/fa";

export default function CTASection() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20solusi%20pipa%20bocor,%20pipa%20kotor,%20atau%20pipa%20mampet.`;

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-vibrant-banner p-8 sm:p-12 md:p-16 border border-emerald-400 shadow-2xl overflow-hidden text-white">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-extrabold backdrop-blur-md">
              <FaClock className="text-amber-300" />
              <span>Respon Cepat 24 Jam Bandung</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-sm">
              Mengalami Masalah Pipa Bocor, Pipa Kotor, atau Pipa Mampet?
            </h2>

            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed font-medium">
              Jangan biarkan masalah pipa merusak bangunan atau mengganggu kesehatan keluarga. Teknisi Klinik Pipa siap meluncur ke lokasi Anda 24 jam dengan peralatan modern tanpa bongkar sembarangan!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-xs text-white font-bold">
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-amber-300" />
                <span>Sensor Akustik Akurat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-amber-300" />
                <span>Hydro Detox Bebas Kimia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-amber-300" />
                <span>Tanpa Bobok Sembarangan</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-emerald-800 font-extrabold text-base shadow-xl hover:scale-[1.02] transition-all pulse-button"
              >
                <FaWhatsapp className="text-2xl text-emerald-600" />
                <span>Konsultasi Gratis via WA (24 Jam)</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-emerald-900/60 hover:bg-emerald-900/80 text-white font-bold text-base border border-emerald-400/40 backdrop-blur-md transition-all"
              >
                <FaPhoneAlt className="text-sky-300" />
                <span>Hotline: {siteConfig.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
