import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/config/site";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from "@/lib/schema";
import {
  FaClock,
  FaUser,
  FaArrowLeft,
  FaWhatsapp,
  FaSyncAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaListUl,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";
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
    ? post.image.startsWith("http")
      ? post.image
      : `${siteConfig.domain}${post.image}`
    : `${siteConfig.domain}/logo%20landscape.png`;

  return {
    title: `${post.title} - Klinik Pipa Bandung`,
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

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function renderInlineFormatting(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="font-bold text-slate-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[") && token.includes("](")) {
      const closeBracket = token.indexOf("](");
      const linkText = token.slice(1, closeBracket);
      const linkUrl = token.slice(closeBracket + 2, -1);
      parts.push(
        <Link
          key={match.index}
          href={linkUrl}
          className="text-sky-600 hover:text-sky-800 underline font-semibold transition-colors"
        >
          {linkText}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

export default async function BlogSlugPage({ params }: BlogSlugProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Extract table of contents from content (headings starting with "## ")
  const tocHeadings: { id: string; title: string }[] = [];
  post.content.forEach((block) => {
    if (block.startsWith("## ")) {
      const cleanTitle = block.replace(/^##\s+/, "").trim();
      tocHeadings.push({
        id: slugifyHeading(cleanTitle),
        title: cleanTitle,
      });
    }
  });

  // Calculate approximate word count for Schema
  const totalWords = post.content.join(" ").split(/\s+/).length;

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    slug: post.slug,
    author: post.author,
    image: post.image,
    keywords: post.tags,
    wordCount: totalWords,
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

  if (post.slug === "cara-mengatasi-saluran-kamar-mandi-mampet-floor-drain") {
    jsonLdSchemas.push(
      generateHowToSchema({
        name: "Cara Mengatasi Saluran Kamar Mandi Mampet & Floor Drain Tersumbat",
        description:
          "Panduan praktis langkah demi langkah mengatasi saluran kamar mandi menggenang akibat tumpukan rambut dan sisa sabun secara mandiri.",
        totalTime: "PT20M",
        tools: ["Sarung tangan karet", "Kawat hanger baju", "Plunger karet", "Baking soda & cuka dapur"],
        steps: [
          {
            name: "Bersihkan Tutup Grille & U-Trap Saringan Luar",
            text: "Buka tutup saringan floor drain dan angkat mangkuk perangkap bau. Tarik gumpalan rambut yang membelit bibir saringan dan bersihkan dengan sikat gigi bekas.",
          },
          {
            name: "Gunakan Kait Kawat Fleksibel",
            text: "Luruskan gantungan kawat baju dan buat lekukan kait kecil di ujungnya. Masukkan ke lubang floor drain, putar perlahan untuk mengait gumpalan rambut, lalu tarik keluar.",
          },
          {
            name: "Gunakan Plunger Karet",
            text: "Pastikan ada sedikit genangan air, tempelkan mangkuk plunger menutupi seluruh lubang, lalu pompa secara ritmis 10-15 kali untuk mengurai ikatan rambut.",
          },
          {
            name: "Gelontor dengan Baking Soda + Cuka Alami",
            text: "Tuang 1 cangkir baking soda disusul 1 cangkir cuka putih. Diamkan 30 menit lalu bilas dengan air panas kuku.",
          },
        ],
      })
    );
  } else if (post.slug === "tanda-pipa-air-bocor-tersembunyi-dinding") {
    jsonLdSchemas.push(
      generateHowToSchema({
        name: "Cara Melakukan Tes Kebocoran Pipa Mandiri (Uji Meteran PDAM)",
        description:
          "Langkah mudah memeriksa kebocoran pipa tersembunyi di balik dinding atau bawah lantai melalui meteran air PDAM.",
        totalTime: "PT10M",
        tools: ["Meteran air PDAM"],
        steps: [
          {
            name: "Matikan Seluruh Keran Air",
            text: "Pastikan tidak ada orang di rumah yang sedang mandi, menyalakan mesin cuci, atau menggunakan air.",
          },
          {
            name: "Tutup Katup Toren Air",
            text: "Kunci katup pengisian toren agar penampungan tidak mengisi secara otomatis.",
          },
          {
            name: "Periksa Dial Meteran PDAM",
            text: "Amati indikator jarum putar merah kecil (dial leak detector). Jika terus berputar pelan meski keran mati, dipastikan ada kebocoran aktif di jalur pipa distribusi.",
          },
        ],
      })
    );
  }

  // Related posts (same category or others, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

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
            <span>Kembali ke Daftar Artikel Blog</span>
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

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
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

          {/* Table of Contents (Daftar Isi) */}
          {tocHeadings.length >= 2 && (
            <nav className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
                <FaListUl className="text-sky-600" />
                <span>Daftar Isi Panduan</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 font-medium">
                {tocHeadings.map((h, hIdx) => (
                  <li key={h.id} className="flex items-start gap-2">
                    <span className="text-sky-600 font-bold">{hIdx + 1}.</span>
                    <a
                      href={`#${h.id}`}
                      className="text-sky-700 hover:text-sky-900 hover:underline transition-colors"
                    >
                      {h.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Main Article Text */}
          <article className="space-y-6 text-slate-700 text-base leading-relaxed font-normal">
            {post.content.map((paragraph, pIdx) => {
              // 1. Heading 2 (## ...)
              if (paragraph.startsWith("## ")) {
                const title = paragraph.replace(/^##\s+/, "").trim();
                const id = slugifyHeading(title);
                return (
                  <h2
                    key={pIdx}
                    id={id}
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-12 mb-4 pt-6 border-t border-slate-200 scroll-mt-24"
                  >
                    {title}
                  </h2>
                );
              }

              // 2. Heading 3 (### ...)
              if (paragraph.startsWith("### ")) {
                const title = paragraph.replace(/^###\s+/, "").trim();
                const id = slugifyHeading(title);
                return (
                  <h3
                    key={pIdx}
                    id={id}
                    className="text-xl sm:text-2xl font-bold text-slate-800 mt-8 mb-3 scroll-mt-24"
                  >
                    {title}
                  </h3>
                );
              }

              // 3. Warning Alert Box
              if (paragraph.startsWith("Peringatan:") || paragraph.startsWith("Bahaya")) {
                const lines = paragraph.split("\n");
                return (
                  <div
                    key={pIdx}
                    className="my-6 p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 space-y-2"
                  >
                    <div className="flex items-center gap-2 font-bold text-amber-800 text-base">
                      <FaExclamationTriangle className="text-amber-600 text-lg flex-shrink-0" />
                      <span>{lines[0]}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 font-medium whitespace-pre-line leading-relaxed">
                      {renderInlineFormatting(lines.slice(1).join("\n"))}
                    </p>
                  </div>
                );
              }

              // 4. Pro Tip Box
              if (paragraph.startsWith("💡 Tips") || paragraph.startsWith("📌 Catatan")) {
                return (
                  <div
                    key={pIdx}
                    className="my-6 p-5 rounded-2xl bg-sky-50 border border-sky-300 text-sky-950 flex items-start gap-3"
                  >
                    <FaLightbulb className="text-sky-600 text-xl flex-shrink-0 mt-0.5" />
                    <div className="text-sm font-medium leading-relaxed">
                      {renderInlineFormatting(paragraph)}
                    </div>
                  </div>
                );
              }

              // 5. Markdown Table (Contains | and \n)
              if (paragraph.includes("|") && paragraph.includes("\n|---|")) {
                const lines = paragraph
                  .trim()
                  .split("\n")
                  .filter((l) => l.trim().length > 0);
                if (lines.length >= 3) {
                  const headers = lines[0]
                    .split("|")
                    .map((c) => c.trim())
                    .filter((c) => c.length > 0);
                  const rows = lines
                    .slice(2)
                    .map((line) =>
                      line
                        .split("|")
                        .map((c) => c.trim())
                        .filter((c) => c.length > 0)
                    );

                  return (
                    <div
                      key={pIdx}
                      className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
                    >
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase border-b border-slate-200">
                          <tr>
                            {headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className="px-4 py-3 text-slate-700 font-medium"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              }

              // 6. Bullet List (- ...)
              if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
                const lines = paragraph.split("\n");
                return (
                  <ul key={pIdx} className="space-y-2.5 my-4 pl-2">
                    {lines.map((l, lIdx) => {
                      const cleanText = l.replace(/^-\s+/, "").trim();
                      if (!cleanText) return null;
                      return (
                        <li key={lIdx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-sm" />
                          <span>{renderInlineFormatting(cleanText)}</span>
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // 7. Regular paragraph with possible multiple lines
              return (
                <div key={pIdx} className="space-y-3">
                  <p className="whitespace-pre-line leading-relaxed">
                    {renderInlineFormatting(paragraph)}
                  </p>
                </div>
              );
            })}
          </article>

          {/* Quick Highlight Feature Grid */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wide uppercase">
              <FaShieldAlt />
              <span>Jaminan Standar Layanan Klinik Pipa Bandung</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium">
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">100% Tanpa Bongkar Sembarangan</strong>
                  <span className="text-slate-300">
                    Menggunakan sensor akustik dan kabel spiral fleksibel dari luar tanpa merusak lantai.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Respon Cepat Siaga 24 Jam</strong>
                  <span className="text-slate-300">
                    Pos teknisi terdekat di seluruh area Bandung & Cimahi siap meluncur.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Garansi Tuntas Lancar</strong>
                  <span className="text-slate-300">
                    Jaminan hasil pengerjaan hingga aliran air terbukti mengalir deras sempurna.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                <FaCheckCircle className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white">Tarif Transparan & Terjangkau</strong>
                  <span className="text-slate-300">
                    Estimasi biaya jelas di awal sebelum pengerjaan dimulai tanpa biaya jebakan.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-slate-200 flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-bold">Kata Kunci Terkait:</span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-sky-800 border border-slate-200 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Inline Emergency Consultation Banner */}
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Mengalami Masalah Pipa Bocor, Kotor, atau Mampet di Bandung?
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Konsultasikan langsung dengan teknisi Klinik Pipa. Siap datang 24 jam nonstop ke lokasi Anda.
              </p>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Klinik%20Pipa,%20saya%20membaca%20artikel%20${encodeURIComponent(
                post.title
              )}%20dan%20ingin%20konsultasi%20layanan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:scale-105 transition-all flex-shrink-0"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat WhatsApp Teknisi 24 Jam</span>
            </a>
          </div>

          {/* Related Articles (Artikel Terkait) */}
          {relatedPosts.length > 0 && (
            <div className="pt-12 border-t border-slate-200 space-y-6">
              <div className="flex items-center gap-2 text-xl font-extrabold text-slate-900">
                <FaBookOpen className="text-sky-600" />
                <span>Artikel & Panduan Terkait Lainnya</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200 inline-block mb-2">
                        {rPost.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2">
                        {rPost.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-2 font-normal">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:text-sky-800">
                      <span>Baca Panduan</span>
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {post.faqs && <FAQSection faqs={post.faqs} />}
      <CTASection />
    </>
  );
}
