import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { FaClock, FaUser, FaArrowLeft, FaWhatsapp, FaSyncAlt, FaShieldAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

interface BlogSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogSlugProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const imageUrl = post.image
    ? (post.image.startsWith("http") ? post.image : `${siteConfig.domain}${post.image}`)
    : `${siteConfig.domain}/logo%20landscape.png`;

  return {
    title: `${post.title} - Blog Klinik Pipa`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `${siteConfig.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogSlugPage({ params }: BlogSlugProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    slug: post.slug,
    author: post.author,
    image: post.image,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const jsonLdSchemas: object[] = [articleSchema, breadcrumbSchema];

  if (post.faqs && post.faqs.length > 0) {
    jsonLdSchemas.push(generateFAQSchema(post.faqs));
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero-bright text-slate-900 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors"
          >
            <FaArrowLeft />
            <span>Kembali ke Daftar Artikel</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-semibold">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
              {post.category}
            </span>

            {post.updatedDate ? (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-300 font-bold">
                <FaSyncAlt className="text-sky-600 animate-spin-slow" />
                <span>Terupdate: {formatDate(post.updatedDate)}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <FaClock />
                <span>{formatDate(post.date)}</span>
              </div>
            )}

            <span>•</span>
            <div className="flex items-center gap-1.5">
              <FaClock />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <FaUser />
              <span>{post.author}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            {post.title}
          </h1>

          <p className="text-slate-700 text-base leading-relaxed font-medium">
            {post.excerpt}
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {post.image && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-100 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          
          {/* Main Article Text */}
          <div className="prose max-w-none space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {post.content.map((paragraph, pIdx) => {
              const isWarning = paragraph.startsWith("Peringatan:") || paragraph.startsWith("Bahaya");
              
              if (isWarning) {
                return (
                  <div key={pIdx} className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-amber-800 text-base">
                      <FaExclamationTriangle className="text-amber-600 text-lg flex-shrink-0" />
                      <span>{paragraph.split("\n")[0]}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-900 font-medium whitespace-pre-line leading-relaxed">
                      {paragraph.split("\n").slice(1).join("\n")}
                    </p>
                  </div>
                );
              }

              return (
                <div key={pIdx} className="space-y-3">
                  <p className="whitespace-pre-line">
                    {paragraph}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Highlight Feature Grid */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wide uppercase">
              <FaShieldAlt />
              <span>Jaminan Layanan Klinik Pipa Bandung</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">100% Tanpa Bongkar Keramik</strong>
                  <span className="text-slate-300">Pipa dilancarkan bersih dari afur luar tanpa membobok dinding & lantai.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Respon Cepat 24 Jam Nonstop</strong>
                  <span className="text-slate-300">Teknisi terdekat meluncur ke lokasi rumah / usaha Anda di Bandung.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Garansi Tuntas 100%</strong>
                  <span className="text-slate-300">Garansi kepuasan pengerjaan hingga aliran air terbukti lancar sempurna.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Mesin Rooter & Water Jetting</strong>
                  <span className="text-slate-300">Alat modern standar luar negeri untuk merontokkan kerak lemak batu.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-200 flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-bold">Kata Kunci:</span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-sky-800 border border-slate-200 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Inline Emergency Banner */}
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Butuh Jasa Pelancar Saluran Mampet Bandung?</h3>
              <p className="text-xs text-slate-600 font-medium">Tim Klinik Pipa siap meluncur ke lokasi Anda 24 jam nonstop.</p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20membaca%20artikel%20${encodeURIComponent(post.title)}%20dan%20butuh%20bantuan%20jasa%20saluran%20mampet.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:scale-105 transition-all flex-shrink-0"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat WA Teknisi 24 Jam</span>
            </a>
          </div>

        </div>
      </section>

      {post.faqs && <FAQSection faqs={post.faqs} />}
      <CTASection />
    </>
  );
}

