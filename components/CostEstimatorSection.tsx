"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  FaCalculator,
  FaSearchLocation,
  FaBroom,
  FaTools,
  FaVideo,
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

interface ProblemOption {
  id: string;
  name: string;
  icon: typeof FaSearchLocation;
  desc: string;
  basePrice: number;
  tool: string;
  duration: string;
}

const problemOptions: ProblemOption[] = [
  {
    id: "pipa-bocor",
    name: "Deteksi Pipa Bocor Tersembunyi",
    icon: FaSearchLocation,
    desc: "Tagihan air PDAM melonjak atau pompa nyala terus di balik dinding/lantai.",
    basePrice: 650000,
    tool: "Sensor Akustik Geofon & Infrared Thermal Camera",
    duration: "1 - 2 Jam Pelacakan Presisi",
  },
  {
    id: "detox-pipa",
    name: "Cuci Detox Pipa Air Bersih",
    icon: FaBroom,
    desc: "Air keran kuning, keruh, berbau besi, atau keluar cacing & kerak.",
    basePrice: 450000,
    tool: "Hydro Pressure Pulsed Flushing (Alami Tanpa Kimia)",
    duration: "1.5 - 3 Jam Pembersihan Menyeluruh",
  },
  {
    id: "saluran-mampet",
    name: "Saluran Pipa Mampet (WC/Wastafel/Got)",
    icon: FaTools,
    desc: "Air kamar mandi menggenang, kloset meluap, atau wastafel penuh lemak.",
    basePrice: 150000,
    tool: "Mesin Kawat Spiral Rigid Fleksibel Heavy-Duty",
    duration: "30 - 60 Menit Lancar Tuntas",
  },
  {
    id: "kamera-endoskop",
    name: "Inspeksi Visual Kamera CCTV Pipa",
    icon: FaVideo,
    desc: "Pengecekan kondisi internal pipa, mendeteksi keretakan atau sambungan lepas.",
    basePrice: 150000,
    tool: "Kamera Endoskop Kabel Flexible HD Waterproof",
    duration: "30 - 45 Menit Pengecekan Riil",
  },
];

const buildingTypes = [
  { id: "rumah-1", name: "Rumah 1 Lantai", multiplier: 1.0 },
  { id: "rumah-2", name: "Rumah 2 Lantai", multiplier: 1.25 },
  { id: "ruko-resto", name: "Ruko / Resto / Kafe", multiplier: 1.4 },
  { id: "kosan-gedung", name: "Kosan / Gedung / Villa", multiplier: 1.6 },
];

export default function CostEstimatorSection() {
  const [selectedProblem, setSelectedProblem] = useState<string>("pipa-bocor");
  const [selectedBuilding, setSelectedBuilding] = useState<string>("rumah-1");
  const [selectedArea, setSelectedArea] = useState<string>("sukajadi");

  const currentProblem = problemOptions.find((p) => p.id === selectedProblem) || problemOptions[0];
  const currentBuilding = buildingTypes.find((b) => b.id === selectedBuilding) || buildingTypes[0];
  const currentArea = siteConfig.areas.find((a) => a.slug === selectedArea) || siteConfig.areas[0];

  // Calculate estimated price
  const estimatedMin = Math.round((currentProblem.basePrice * currentBuilding.multiplier) / 50000) * 50000;
  const estimatedMax = Math.round((estimatedMin * 1.25) / 50000) * 50000;

  const formattedPrice = `Rp${estimatedMin.toLocaleString("id-ID")} - Rp${estimatedMax.toLocaleString("id-ID")}`;

  const waMessage = `Halo Klinik Pipa, saya telah melakukan estimasi online untuk kendala *${currentProblem.name}* pada *${currentBuilding.name}* di area *${currentArea.name}*. Mohon info ketersediaan teknisi dan konfirmasi jadwal pengerjaan.`;
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="kalkulator" className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white text-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            Transparansi Biaya & Konsultasi Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kalkulator Diagnosa & Estimasi Biaya Online
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Pilih jenis permasalahan pipa, tipe properti, dan wilayah Anda di Bandung untuk mendapatkan estimasi tarif terbuka dalam hitungan detik.
          </p>
        </div>

        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
            
            {/* Step 1: Jenis Kendala */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                1. Pilih Jenis Permasalahan Pipa:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problemOptions.map((opt) => {
                  const isSelected = selectedProblem === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedProblem(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-sky-50 border-sky-500 shadow-md ring-2 ring-sky-400/30"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className={`p-2 rounded-xl text-base ${isSelected ? "bg-sky-600 text-white" : "bg-white text-slate-700"}`}>
                          <Icon />
                        </div>
                        <strong className="text-xs font-bold text-slate-900 leading-tight">
                          {opt.name}
                        </strong>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        {opt.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Tipe Bangunan */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                2. Pilih Jenis Bangunan / Properti:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {buildingTypes.map((b) => {
                  const isSelected = selectedBuilding === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBuilding(b.id)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        isSelected
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {b.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Area Bandung */}
            <div className="space-y-2 pt-2">
              <label htmlFor="area-select" className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                3. Lokasi Area di Bandung & Sekitarnya:
              </label>
              <select
                id="area-select"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {siteConfig.areas.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name} (Siaga 24 Jam)
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Results Summary Box (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
              <div className="flex items-center gap-2">
                <FaCalculator className="text-emerald-400 text-lg" />
                <h3 className="text-base font-bold text-white">Ringkasan Estimasi</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                100% Bergaransi
              </span>
            </div>

            {/* Price Box */}
            <div className="space-y-1 relative z-10">
              <span className="text-xs text-slate-400 font-medium">Estimasi Kisaran Biaya:</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">
                {formattedPrice}
              </div>
              <p className="text-[11px] text-slate-400">
                *Tarif final transparan selalu disepakati bersama sebelum teknisi mulai bekerja di lokasi.
              </p>
            </div>

            {/* Diagnosis Details */}
            <div className="space-y-3 pt-2 text-xs border-t border-slate-800 relative z-10">
              <div className="flex items-start gap-2.5">
                <FaShieldAlt className="text-sky-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-200">Teknologi Penanganan:</strong>
                  <span className="text-slate-400">{currentProblem.tool}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaClock className="text-amber-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-200">Durasi Pengerjaan & Kedatangan:</strong>
                  <span className="text-slate-400">Tiba di {currentArea.name} 25-40 mnt • {currentProblem.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-slate-200">Keamanan Bangunan:</strong>
                  <span className="text-slate-400">Tanpa pembongkaran sembarangan, menjaga keutuhan keramik rumah Anda.</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-2 relative z-10">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] pulse-button"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Kirim Hasil Diagnosa via WhatsApp</span>
              </a>
              <span className="block text-center text-[10px] text-slate-400 mt-2">
                Respon Cepat 24 Jam • Konsultasi Gratis Tanpa Komitmen
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
