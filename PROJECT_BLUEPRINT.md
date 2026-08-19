# Blueprint & Rangkuman Detail Project: Klinik Pipa (klinikpipa.com)

Dokumen ini berisi rangkuman teknis lengkap, arsitektur SEO, komponen UI, serta panduan untuk membuat **project baru yang serupa, lebih fresh, modern, dan scalable** tanpa mengurangi standar teknologi serta fondasi SEO yang sudah dibangun.

---

## 1. Ringkasan Project & Tujuan Bisnis

* **Nama Business / Brand**: Klinik Pipa — Solusi Pipa Bocor, Pipa Kotor dan Pipa Mampet
* **Domain Utama**: `klinikpipa.com`
* **Niche**: Jasa Saluran Mampet, Perbaikan WC Tersumbat, Pembersihan Pipa, Sedot Grease Trap Restoran (Local Service / Plumbing Services).
* **Target Utama (Conversion Goal)**: Menghasilkan *lead* langsung melalui **WhatsApp** (`0851-2277-7253`) & Telepon.
* **Strategi Pemasaran**: Local SEO Dominance (Targeting area Kota Bandung & Kecamatan/Kelurahan di sekitarnya) & Content Marketing (Blog).

---

## 2. Technology Stack & Tooling

| Kategori | Teknologi / Library | Keterangan & Versi |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Versi 16.1.6 — SSR, SSG, & Programmatic Routing |
| **UI Library** | **React 19** | Versi 19.2.3 — Server & Client Components |
| **Language** | **TypeScript** | Versi 5 — Type-safe props & schemas |
| **Styling** | **Tailwind CSS v4** | Versi 4 (`@tailwindcss/postcss`) — Utility-first styling & custom gradients |
| **Icons** | **React Icons** | Versi 5.5.0 (`react-icons/fa`) — FontAwesome Icons |
| **SEO Indexing** | **xml2js & Native Node https** | Script otomatis IndexNow untuk submission sitemap ke Bing/Yandex |

---

## 3. Struktur Direktori & Arsitektur Project

```text
perbaikan-saluran-mampet/
├── app/
│   ├── layout.tsx              # Root layout + Global JSON-LD Schema + Floating WhatsApp
│   ├── page.tsx                # Homepage (Beranda)
│   ├── globals.css             # Tailwind v4 directives & custom styling
│   ├── sitemap.ts              # Dynamic Sitemap Generator (Static, Area, & Blog routes)
│   ├── layanan/
│   │   └── page.tsx            # Halaman Detail Layanan & Service Schema
│   ├── tentang/
│   │   └── page.tsx            # Halaman Profil Perusahaan & About Schema
│   ├── kontak/
│   │   └── page.tsx            # Halaman Kontak + Contact Schema + Maps Embed
│   ├── kota/
│   │   └── [area]/
│   │       └── page.tsx        # Dynamic Programmatic Local SEO Pages (Bandung, Sukajadi, dll)
│   └── blog/
│       ├── page.tsx            # Daftar Artikel Blog
│       └── [slug]/             # Detail Artikel Blog (Artikel Individual + Article Schema)
├── components/
│   ├── Navbar.tsx              # Header & Navigasi Mobile/Desktop
│   ├── Hero.tsx                # Hero section utama (Dark theme + High Conversion)
│   ├── TrustSection.tsx        # Section keunggulan & poin kepercayaan
│   ├── CTASection.tsx          # Call to Action banner
│   ├── FAQSection.tsx          # Accordion FAQ & Keyword optimization
│   ├── BlogPreviewSection.tsx  # Widget preview artikel terbaru (Internal linking)
│   ├── MapSection.tsx          # Embed Google Maps lokasi fisik
│   ├── Footer.tsx              # Footer 4 kolom dengan NAP & Link area
│   └── FloatingWhatsApp.tsx    # Floating CTA button di pojok kanan bawah
├── lib/
│   └── blog-data.ts            # Data statis postingan blog & metadata
├── public/
│   ├── logo.png / hero.png     # Asset gambar & branding
│   └── [key].txt               # File verifikasi IndexNow
├── scripts/
│   └── indexnow.js             # Post-build script otomatisasi kirim URL sitemap ke IndexNow
├── package.json                # Dependencies & script `postbuild`
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 4. Fondasi SEO & Structured Data (Wajib Dipertahankan)

Project ini memiliki arsitektur SEO tingkat tinggi yang **WAJIB dipertahankan** pada project baru:

### A. Dynamic Local SEO Pages (`/kota/[area]`)
* Menggunakan dynamic route Next.js `app/kota/[area]/page.tsx` untuk menembak kata kunci berbasis lokasi (contoh: *Jasa Saluran Mampet di Sukajadi*, *Jasa Saluran Mampet di Antapani*).
* Memiliki custom `generateMetadata()` yang secara dinamis menyusun Title Tag & Description sesuai nama area.
* Meng inject schema `@graph` khusus area yang menggabungkan:
  1. `LocalBusiness` Schema
  2. `Service` Schema khusus area
  3. `FAQPage` Schema khusus area
  4. `BreadcrumbList` Schema (Beranda > Bandung > [Area])

### B. Schema JSON-LD (Structured Data) di Setiap Halaman
1. **Root Layout (`app/layout.tsx`)**: `LocalBusiness` Schema global lengkap dengan NAP (Name, Address, Phone), Price Range, Geo-coordinates (lat/long), `openingHoursSpecification` (24/7), dan `sameAs`.
2. **Homepage (`components/Hero.tsx`)**: Schema `@type: "Plumber"` lengkap dengan `aggregateRating`, `review`, dan `hasOfferCatalog`.
3. **Halaman Layanan (`app/layanan/page.tsx`)**: `LocalBusiness` + `serviceOffered` array + `FAQPage` Schema.
4. **Halaman Kontak (`app/kontak/page.tsx`)**: `ContactPage` Schema menyatu dengan `LocalBusiness` dan GeoLocation.
5. **Halaman Tentang (`app/tentang/page.tsx`)**: `AboutPage` Schema.
6. **Blog Detail (`app/blog/[slug]/page.tsx`)**: `Article` Schema dengan `headline`, `author`, `publisher`, dan `logo`.

### C. Automated Indexing via IndexNow (`scripts/indexnow.js`)
* Pada file `package.json`, script `postbuild` menjalankan `node scripts/indexnow.js`.
* Script ini otomatis membaca `sitemap.xml` yang di-generate Next.js (`app/sitemap.ts`) dan secara otomatis mem-push seluruh URL baru/terupdate ke **IndexNow API** (Bing, Yandex, Seznam, dll) menggunakan kunci API (`a0bf1e37ff7349b99df98736ab383c0f`).

### D. On-Page SEO Standard
* Metatag Canonical URL (`alternates: { canonical: "..." }`) di setiap halaman untuk mencegah duplicate content.
* OpenGraph metadata (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) & Twitter Card.
* Penggunaan tag HTML5 Semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Internal Linking strategy: Dari artikel blog & halaman area ke halaman utama/layanan.

---

## 5. Rencana Pembaharuan (Fresh UI & Upgrade modern untuk Project Baru)

Agar project baru terlihat lebih **fresh, premium, dan state-of-the-art**, berikut adalah poin-poin penyempurnaan UI/UX dan arsitektur tanpa mengurangi struktur SEO di atas:

### A. Peningkatan Visual & UI/UX (Fresh Aesthetics)
1. **Modern Color Palette & Glassmorphism**:
   - Gunakan kombinasi warna modern (misal: Deep Emerald & Cyan Gradient, atau Modern Slate & Vibrant Blue / Electric Gold).
   - Efek *glassmorphism* (backdrop blur + border transparan `border-white/10 bg-white/5`) pada card & hero.
2. **Typography Modern**:
   - Gunakan font Google Fonts berkualitas tinggi seperti **Plus Jakarta Sans**, **Inter**, atau **Outfit** melalui `next/font/google`.
3. **Micro-Animations & Dynamic Interactions**:
   - Tambahkan animasi halus pada hover button, card transition, floating WhatsApp pulse effect, dan scroll reveal effect.
4. **Visual Assets**:
   - Sertakan ilustrasi 3D / foto realistik berkualitas tinggi yang di-generate khusus atau di-optimize via `next/image` dengan proper format (WebP/AVIF).

### B. Arsitektur Data Terpusat (Centralized Site Config)
Pada project lama, data bisnis (nama, telepon, alamat, daftar area) masih *hardcoded* di beberapa file component. Pada project baru, buat file **`config/site.ts`**:
```typescript
export const siteConfig = {
  name: "Klinik Pipa",
  tagline: "Solusi pipa bocor, pipa kotor dan pipa mampet",
  domain: "https://klinikpipa.com",
  phone: "0851-2277-7253",
  whatsappNumber: "6285122777253",
  address: {
    street: "Jl. Baladewa No.114, Pamoyanan, Kec. Cicendo",
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40173",
    country: "ID",
    geo: { latitude: -6.9175, longitude: 107.6191 }
  },
  priceRange: "Rp150.000 - Rp500.000",
  areas: [
    { slug: "bandung", name: "Bandung" },
    { slug: "sukajadi", name: "Sukajadi" },
    { slug: "cicendo", name: "Cicendo" },
    { slug: "buah-batu", name: "Buah Batu" },
    { slug: "antapani", name: "Antapani" },
    { slug: "arcamanik", name: "Arcamanik" },
    { slug: "dago", name: "Dago" },
    { slug: "cileunyi", name: "Cileunyi" },
  ],
  services: [
    { id: "wc-mampet", name: "Perbaikan WC Mampet" },
    { id: "pipa-tersumbat", name: "Pipa Air Tersumbat" },
    { id: "got-saluran", name: "Got & Saluran Hujan" },
    { id: "grease-trap", name: "Grease Trap Restoran" },
  ]
};
```
*Dengan file ini, jika Anda ingin menduplikasi project untuk kota/brand lain (misal: "Jasa Saluran Mampet Jakarta" atau "Bintang Teknik"), Anda hanya perlu mengubah 1 file ini saja!*

### C. Penambahan Fitur Dynamic OG Image Generator
* Gunakan `@vercel/og` atau `next/og` untuk membuat OpenGraph Image secara otomatis berbasis title halaman (terutama untuk halaman dinamik `/kota/[area]` dan `/blog/[slug]`).

---

## 6. Check-list Panduan Pembuatan Project Baru

Saat membuat project baru berbasis blueprint ini, ikuti urutan berikut:

1. [ ] **Setup Project**: Run Next.js 16 App Router dengan TypeScript & Tailwind CSS v4 (`npx create-next-app@latest`).
2. [ ] **Konfigurasi Font & Theme**: Setup Google Font (misal: Plus Jakarta Sans) di `layout.tsx` & style token di `globals.css`.
3. [ ] **Centralized Config (`config/site.ts`)**: Masukkan seluruh data NAP, daftar kota/area, layanan, dan kontak.
4. [ ] **Build Helper JSON-LD Generator (`lib/schema.ts`)**: Buat helper function untuk me-generate Schema LocalBusiness, Service, FAQPage, Article, dan BreadcrumbList secara clean.
5. [ ] **Core Layout & Global Components**:
   - `Navbar.tsx` (Glassmorphism sticky header + mobile drawer).
   - `Footer.tsx` (4-column layout dengan internal link otomatis dari `config/site.ts`).
   - `FloatingWhatsApp.tsx` (dengan animasi ping/pulse lembut).
6. [ ] **Halaman Utama & Sub-halaman**:
   - `app/page.tsx` (Hero, Feature Grid, Trust Badges, Testimonial/FAQ, Map).
   - `app/layanan/page.tsx`
   - `app/tentang/page.tsx`
   - `app/kontak/page.tsx`
7. [ ] **Programmatic Local SEO Engine**:
   - `app/kota/[area]/page.tsx` (Menggunakan `generateStaticParams()` dan `generateMetadata()`).
8. [ ] **Blog Engine**:
   - `app/blog/page.tsx` & `app/blog/[slug]/page.tsx`.
9. [ ] **Sitemap & Automated Indexing Setup**:
   - `app/sitemap.ts` (Dynamic URL generation).
   - `public/[indexnow-key].txt`.
   - `scripts/indexnow.js` + `postbuild` script di `package.json`.
10. [ ] **Testing & Verification**:
    - Validasi Rich Results Google (`schema.org` validator).
    - Cek kepatuhan Lighthouse SEO (Target 100/100).
