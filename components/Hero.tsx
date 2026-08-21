"use client";

import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaShieldAlt, FaStar, FaBolt, FaSearchLocation, FaBroom, FaVideo } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20solusi%20pipa%20bocor,%20pipa%20kotor,%20atau%20pipa%20mampet.`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-hero-bright text-slate-900 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Call To Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-sm border border-sky-300/60 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-ping" />
              <span className="text-xs font-bold text-sky-900 tracking-wide">
                Solusi Pipa Bocor, Pipa Kotor dan Pipa Mampet 24 Jam
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet{" "}
              <span className="text-gradient-vibrant">Tanpa Bongkar</span>
            </h1>

            {/* Sub-headline Description */}
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              <strong className="text-slate-900 font-bold">Klinik Pipa</strong> melacak titik pipa bocor tersembunyi dengan <strong className="text-sky-800 font-bold">Sensor Akustik & Thermal Camera</strong>, cuci <strong className="text-emerald-700 font-bold">Detox Pipa Kotor</strong> dari kerak & cacing, serta pelancaran <strong className="text-purple-800 font-bold">Saluran Mampet</strong> 24 jam tanpa bobok sembarangan!
            </p>

            {/* Trust Badges Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-sky-600" />
                <span>Pipa Bocor (Deteksi Presisi)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-600" />
                <span>Pipa Kotor (Cuci Detox Pipa)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-purple-600" />
                <span>Pipa Mampet (Mesin Spiral)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 hover:scale-[1.02] transition-all pulse-button"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Konsultasi Via WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-sky-800 font-extrabold text-base border border-slate-300 shadow-md transition-all"
              >
                <FaPhoneAlt className="text-sky-600" />
                <span>Hotline: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Rating & Social Proof */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 border-t border-slate-300/60">
              <div className="flex text-amber-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>
                <strong className="text-slate-900 font-bold">{siteConfig.rating.ratingValue}/5.0</strong> dari {siteConfig.rating.reviewCount}+ Pelanggan Terlayani di Bandung
              </span>
            </div>

          </div>

          {/* Right Column: Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="glass-card-light p-6 sm:p-8 rounded-3xl relative border border-slate-200 shadow-xl space-y-6">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                    <FaBolt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">Solusi Pipa Terpadu</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Layanan Profesional & Bergaransi</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                  SIAGA 24/7
                </span>
              </div>

              {/* Service Capabilities Grid */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 mt-0.5">
                    <FaSearchLocation className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">1. Solusi Pipa Bocor</h4>
                    <p className="text-[11px] text-slate-600">Pelacakan akustik & thermal imaging titik bocor di tembok/lantai tanpa merusak ruangan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 mt-0.5">
                    <FaBroom className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">2. Solusi Pipa Kotor (Detox Pipa)</h4>
                    <p className="text-[11px] text-slate-600">Pencucian hydro pressure merontokkan kerak hitam, cacing, & bio-film pipa air keran.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700 mt-0.5">
                    <FaVideo className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">3. Solusi Pipa Mampet</h4>
                    <p className="text-[11px] text-slate-600">Pelancaran sumbatan WC, wastafel, & got mampet menggunakan kawat spiral fleksibel modern.</p>
                  </div>
                </div>
              </div>

              {/* Quick Area Coverage Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-600 block mb-2">
                  Area Pelayanan Utama Bandung:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.areas.slice(0, 6).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/kota/${area.slug}`}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-100 text-[11px] font-semibold text-slate-700 hover:text-sky-800 border border-slate-200 transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                  <Link
                    href="#area"
                    className="px-2.5 py-1 rounded-lg bg-emerald-100 text-[11px] font-bold text-emerald-800 hover:bg-emerald-200 transition-colors"
                  >
                    + Area Lain
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dedicated Full-Width Hero Banner Showcase Strip */}
        <div className="mt-14 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/30 via-emerald-400/30 to-cyan-400/30 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/80 shadow-2xl bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-banner.webp"
              alt="Jasa Deteksi Pipa Bocor, Detox Pipa & Pelancar Saluran Mampet Bandung - Klinik Pipa 24 Jam"
              title="Klinik Pipa Bandung - Solusi Pipa Bocor, Pipa Kotor & Pipa Mampet Tanpa Bongkar 24 Jam"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={514}
              className="w-full aspect-[21/9] sm:aspect-[24/9] object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
