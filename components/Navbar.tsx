"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Area Bandung", href: "/#area" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Blog & Tips", href: "/blog" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-transparent.png"
            alt={`${siteConfig.name} - ${siteConfig.tagline}`}
            width={220}
            height={65}
            className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Quick Contact Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-sky-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
          >
            <FaPhoneAlt className="text-sky-600" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20bantuan%20solusi%20pipa.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 hover:scale-105 transition-all"
          >
            <FaWhatsapp className="text-lg text-white" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 border border-slate-200"
            >
              <FaPhoneAlt className="text-sky-600" />
              <span>Telepon Langsung: {siteConfig.phone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20butuh%20bantuan%20solusi%20pipa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20"
            >
              <FaWhatsapp className="text-xl" />
              <span>Hubungi Via WhatsApp (24 Jam)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
