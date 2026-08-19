export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tanda-pipa-air-bocor-tersembunyi-dinding",
    title: "5 Tanda Pipa Air Bocor Tersembunyi di Dalam Dinding & Cara Mendeteksinya",
    excerpt:
      "Kenali gejala kebocoran pipa air PDAM atau pompa tersembunyi seperti tagihan air membengkak dan tembok lembab, serta teknologi deteksi akustik tanpa bobok.",
    category: "Deteksi Pipa Bocor",
    date: "2026-02-18",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "4 menit baca",
    tags: ["Pipa Bocor", "Deteksi Akustik", "Tips Bandung", "Kebocoran Tembok"],
    content: [
      "Kebocoran pipa air tersembunyi di balik dinding beton atau bawah lantai keramik adalah salah satu masalah paling merugikan bagi pemilik rumah di Bandung.",
      "Selain menyebabkan pemborosan air dan pembengkakan tagihan bulanan, air yang terus menetes di dalam struktur bangunan dapat merusak dinding, melapukkan cat, hingga memicu pertumbuhan jamur berbahaya.",
      "Berikut adalah 5 tanda utama adanya pipa air bocor tersembunyi:",
      "1. Tagihan Air PDAM Membengkak Secara Tiba-Tiba\nJika penggunaan air harian Anda stabil namun tagihan bulanan melonjak signifikan, hampir dapat dipastikan ada titik bocor halus pada jalur distribusi utama.",
      "2. Pompa Air Otomatis Sering Menyala Sendiri (Menyala-Mati)\nJika pompa pendorong atau jet pump terus menyala berkala padahal tidak ada keran yang dibuka, tekanan air dalam jalur pipa sedang bocor keluar.",
      "3. Tembok Berjamur, Cat Mengelupas, atau Berkelupas Lembab\nBercak basah di tembok tanpa sebab hujan luar menandakan air pipa di dalam tembok merembes dan diserap oleh dinding batu bata.",
      "4. Suara Gemericik Air Halus di Malam Hari\nPada saat kondisi rumah tenang, terdengar bunyi desis atau tetesan air halus dari bawah lantai atau balik dinding kamar mandi.",
      "5. Solusi Modern: Deteksi Sensor Akustik & Thermal Camera\nTanpa perlu membongkar seluruh keramik atau tembok, teknisi Klinik Pipa melacak titik bocor presisi menggunakan Acoustic Leak Detector & Thermal Camera. Titik bocor ditemukan akurat hingga ukuran sentimeter!",
    ],
    faqs: [
      {
        question: "Apakah proses deteksi pipa bocor harus membongkar tembok?",
        answer:
          "Tidak. Deteksi awal menggunakan alat frekuensi akustik dan kamera thermal dari permukaan luar tanpa merusak tembok. Pembongkaran hanya dilakukan kecil tepat di titik bocor yang terdeteksi.",
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk melacak titik bocor?",
        answer:
          "Proses pemindaian lokasi kebocoran biasanya memakan waktu 1 hingga 2 jam tergantung panjang jalur instalasi pipa rumah.",
      },
    ],
  },
  {
    slug: "apa-itu-detox-pipa-air-bersih-bandung",
    title: "Apa Itu Detox Pipa Air Bersih? Solusi Air Keran Kuning & Berbau di Bandung",
    excerpt:
      "Pelajari metode pencucian pipa air minum & keran rumah menggunakan teknologi Hydro Pressure Flushing untuk menguras kerak hitam, lumpur, dan cacing.",
    category: "Detox Pipa Kotor",
    date: "2026-02-12",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "5 menit baca",
    tags: ["Detox Pipa", "Cuci Pipa Bandung", "Air Keran Jernih", "Pipa Kotor"],
    content: [
      "Banyak penghuni rumah di Bandung mengeluhkan air keran yang berwarna kekuningan, berbau besi, keruh, atau bahkan keluar cacing kecil padahal toren air sudah dibersihkan secara rutin.",
      "Tahukah Anda bahwa penyebab utamanya berada di sepanjang dinding dalam instalasi pipa PVC/besi rumah Anda? Pipa air bersih yang sudah berumur bertahun-tahun mengendapkan kerak lumut, logam karat, lumpur tebal, dan bio-film bakteri.",
      "Mengapa Membersihkan Toren Saja Tidak Cukup?\nToren adalah wadah penampung, sedangkan pipa adalah jalur distribusi yang panjangnya bisa belasan meter di bawah tanah dan dinding. Kerak tebal yang menempel di dinding dalam pipa akan terus mengotori air setiap kali keran dibuka.",
      "Bagaimana Cara Kerja Detox Pipa (Hydro Pressure Flushing)?\n1. Mesin Detox dihubungkan ke titik masuk utama instalasi pipa rumah.\n2. Aliran air bertekanan tinggi yang dikombinasikan dengan dorongan udara khusus dialirkan ke dalam pipa.\n3. Tekanan gelombang ini merontokkan kerak kotoran tebal, cacing, dan racun bio-film tanpa merusak sambungan pipa PVC.\n4. Kotoran hitam dan berlumpur dibuang keluar melalui titik keran buangan hingga air benar-benar jernih 100%.",
    ],
    faqs: [
      {
        question: "Apakah cairan kimia berbahaya digunakan saat detox pipa?",
        answer:
          "Tidak. Klinik Pipa menggunakan metode Hydro Flushing alami berbasis dorongan tekanan air dan udara yang 100% aman untuk pipa air minum keluarga.",
      },
      {
        question: "Seberapa sering pipa air bersih rumah harus di-detox?",
        answer:
          "Disarankan untuk melakukan cuci detox pipa berkala setiap 1 hingga 2 tahun sekali agar kualitas air keran tetap higienis.",
      },
    ],
  },
  {
    slug: "keunggulan-mesin-spiral-rigid-pelancarkan-saluran",
    title: "Mengenal Teknologi Kamera Endoskop Pipa & Mesin Spiral Modern",
    excerpt:
      "Kombinasi teknologi inspeksi kamera CCTV pipa HD dan kawat fleksibel spiral untuk mendiagnosis serta melancarkan saluran mampet tanpa bobok.",
    category: "Teknologi Peralatan",
    date: "2026-01-28",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "3 menit baca",
    tags: ["Kamera Pipa", "Mesin Spiral", "Deteksi Mampet", "Tukang Pipa Bandung"],
    content: [
      "Memperbaiki masalah pipa saluran tanpa mengetahui kondisi riil di dalam saluran adalah tindakan berisiko yang bisa menyebabkan kerusakan permanen pada struktur pipa.",
      "Klinik Pipa mengintegrasikan teknologi Kamera Endoskop Waterproof HD dengan Mesin Kabel Spiral Rigid Fleksibel.",
      "Manfaat Inspeksi Kamera & Mesin Spiral:\n1. Kamera Endoskop memberikan tampilan visual jernih dari kondisi dalam pipa di layar monitor secara real-time.\n2. Mengetahui secara pasti jenis sumbatan: tumpukan lemak, sisa semen bangunan, atau akar pohon yang menembus pipa.\n3. Mesin kabel spiral Rigid memutar kawat khusus untuk menghancurkan sumbatan tanpa melukai dinding internal PVC.",
      "Layanan ini tersedia untuk perumahan, restoran, gedung perkantoran, dan pabrik di seluruh wilayah Bandung.",
    ],
  },
];
