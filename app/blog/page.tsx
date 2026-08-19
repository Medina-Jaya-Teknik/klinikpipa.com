import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { FaClock, FaTag, FaArrowRight, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Tips Perawatan Pipa Saluran Mampet Bandung",
  description:
    "Kumpulan artikel, solusi DIY, tips mengatasi pipa bocor & mampet, dan rekomendasi perawatan detox pipa dari teknisi Klinik Pipa.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog & Tips", url: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Edukasi & Tips
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Blog & Solusi Saluran Mampet
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
            Temukan artikel praktis seputar penanganan WC tersumbat, pembersihan lemak dapur, dan perawatan pipa PVC di rumah Anda.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-4 font-medium">
                    <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-bold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
                    <FaTag />
                    <span>{post.tags[0]}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 group-hover:translate-x-1 transition-all"
                  >
                    <span>Baca Artikel</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
