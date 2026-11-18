"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import {
  FaMapMarkerAlt,
  FaChevronRight,
  FaChevronLeft,
  FaCompass,
  FaThLarge,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";

export default function AreaSection() {
  const [showAll, setShowAll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 16 : 280;

    if (direction === "right") {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Otomatis geser ke samping setiap 3 detik jika tidak dalam mode showAll dan tidak di-hover
  useEffect(() => {
    if (showAll || isPaused) return;

    const timer = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(timer);
  }, [showAll, isPaused]);

  const renderCard = (area: (typeof siteConfig.areas)[0]) => (
    <Link
      href={`/kota/${area.slug}`}
      className="group w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all duration-300 flex flex-col justify-between"
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
  );

  return (
    <section id="area" className="py-16 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
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

        {/* Carousel / Slider Mode (Tampilkan 4 cards di layar besar) */}
        {!showAll ? (
          <div
            className="relative group/slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Navigasi Panah Kiri */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100"
              aria-label="Geser ke kiri"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Navigasi Panah Kanan */}
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:text-sky-600 hover:border-sky-300 items-center justify-center transition-all opacity-0 group-hover/slider:opacity-100"
              aria-label="Geser ke kanan"
            >
              <FaChevronRight className="text-sm" />
            </button>

            {/* Container Slider: 4 cards di lg, 3 di md, 2 di sm, 1 di mobile */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {siteConfig.areas.map((area) => (
                <div
                  key={area.slug}
                  className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] flex-shrink-0 snap-start flex"
                >
                  {renderCard(area)}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Grid Mode: Tampilkan Semua Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn">
            {siteConfig.areas.map((area) => (
              <div key={area.slug} className="flex">
                {renderCard(area)}
              </div>
            ))}
          </div>
        )}

        {/* Tombol Tampilkan Semua / Mode Geser */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm border border-slate-200 bg-slate-50 text-slate-800 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 active:scale-95 cursor-pointer"
          >
            {showAll ? (
              <>
                <FaChevronUp className="text-xs" />
                <span>Tampilkan Mode Geser (4 Cards)</span>
              </>
            ) : (
              <>
                <FaThLarge className="text-xs text-sky-600" />
                <span>Tampilkan Semua Cards ({siteConfig.areas.length} Area)</span>
                <FaChevronDown className="text-xs text-slate-400" />
              </>
            )}
          </button>
        </div>

        {/* Footer Area Note */}
        <div className="mt-12 text-center bg-slate-100 border border-slate-200 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Lokasi Anda tidak ada dalam daftar di atas? Jangan khawatir, kami melayani{" "}
            <strong className="text-emerald-700 font-bold">
              seluruh kelurahan & kecamatan di wilayah Bandung Raya
            </strong>
            . Hubungi WhatsApp kami untuk konfirmasi lokasi instan.
          </p>
        </div>

      </div>
    </section>
  );
}
