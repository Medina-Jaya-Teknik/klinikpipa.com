import { siteConfig } from "@/config/site";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaDirections } from "react-icons/fa";

export default function MapSection() {
  const addressQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.province}`
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Address Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
              Lokasi Workshop & Head Office
            </span>
            
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Kunjungi Alamat Resmi Klinik Pipa
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Workshop kami berpusat di Sukajadi, Bandung. Armada teknisi kami disebar di berbagai titik pos siaga agar dapat menjangkau seluruh kecamatan di Bandung dengan cepat.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat Lengkap</h3>
                  <p className="text-sm font-bold text-slate-900 mt-1">{siteConfig.address.street}</p>
                  <p className="text-xs text-slate-600">{siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaClock className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Jam Operasional</h3>
                  <p className="text-sm font-extrabold text-emerald-700 mt-1">Buka Setiap Hari (24 Jam Nonstop)</p>
                  <p className="text-xs text-slate-600">Siap melayani panggilan darurat malam hari</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hotline Telepon & WA</h3>
                  <p className="text-sm font-bold text-slate-900 mt-1">{siteConfig.phone}</p>
                  <p className="text-xs text-slate-600">WhatsApp: +{siteConfig.whatsappNumber}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.street + " " + siteConfig.address.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all"
            >
              <FaDirections className="text-base" />
              <span>Buka Petunjuk Arah di Google Maps</span>
            </a>
          </div>

          {/* Right Side: Map Embed Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-xl h-[400px] lg:h-[480px] relative bg-slate-100">
              <iframe
                title="Lokasi Klinik Pipa Bandung"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-95 transition-all duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
