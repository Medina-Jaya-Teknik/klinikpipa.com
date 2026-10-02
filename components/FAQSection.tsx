"use client";

import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

import { defaultFaqs, type FAQItem } from "@/lib/faq-data";
export type { FAQItem };

export default function FAQSection({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider">
            Pertanyaan Populer (FAQ)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan Seputar Deteksi Bocor & Detox Pipa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Jawaban lengkap mengenai teknologi sensor akustik, metode hydro flushing, keamanan pipa, dan garansi.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-sky-400 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-slate-900"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className={`text-xl flex-shrink-0 ${isOpen ? "text-sky-600" : "text-slate-400"}`} />
                    <span>{faq.question}</span>
                  </div>
                  <FaChevronDown
                    className={`text-sm text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
