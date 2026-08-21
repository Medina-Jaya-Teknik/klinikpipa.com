import { blogPosts } from "@/lib/blog-data";
import { FaClock, FaTag, FaArrowRight, FaBookOpen } from "react-icons/fa";
import Link from "next/link";

export default function BlogPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
              Blog & Tips Perawatan Pipa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Artikel Edukasi & Solusi Mampet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Panduan praktis mencegah dan merawat saluran air rumah tangga agar tetap lancar tanpa terkendala.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-all self-start md:self-auto"
          >
            <FaBookOpen className="text-sky-600" />
            <span>Lihat Semua Artikel</span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {post.image && (
                  <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200/80 -mx-1 -mt-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-4 font-semibold">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200 font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
                  <FaTag />
                  <span>{post.tags[0]}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 group-hover:translate-x-1 transition-all"
                >
                  <span>Baca</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
