import { siteConfig } from "@/config/site";
import { FaWrench, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info & NAP (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
                <FaWrench className="text-xl" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4 font-medium">
              Klinik Pipa adalah solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet 24 jam di Bandung tanpa perlu pembongkaran sembarangan.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-sky-400 flex-shrink-0" />
                <span>Hotline: {siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="text-emerald-400 flex-shrink-0" />
                <span>WhatsApp 24 Jam: +{siteConfig.whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi Utama</h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-sky-400 transition-colors">Semua Layanan</Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-sky-400 transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-400 transition-colors">Blog & Tips</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-sky-400 transition-colors">Hubungi Kami</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Layanan Spesialis</h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <Link href="/layanan" className="hover:text-emerald-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Popular Area Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Area Pelayanan Bandung</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {siteConfig.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/kota/${area.slug}`}
                  className="hover:text-sky-400 transition-colors truncate"
                >
                  • {area.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <p>© {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-2">
            <span>Specialized Local SEO & Plumbing Services Bandung</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
