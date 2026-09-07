export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updatedDate?: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string[];
  image?: string;
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tanda-pipa-air-bocor-tersembunyi-dinding",
    title: "5 Tanda Pipa Air Bocor Tersembunyi di Dalam Dinding",
    excerpt:
      "Kenali gejala kebocoran pipa air PDAM atau pompa tersembunyi seperti tagihan air membengkak dan tembok lembab, serta teknologi deteksi akustik tanpa bobok.",
    category: "Deteksi Pipa Bocor",
    date: "2026-02-18",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "4 menit baca",
    tags: ["Pipa Bocor", "Deteksi Akustik", "Tips Bandung", "Kebocoran Tembok"],
    image: "/images/blog/tanda-pipa-air-bocor-tersembunyi-dinding.webp",
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
    title: "Apa Itu Detox Pipa Air Bersih? Solusi Air Keran Kuning",
    excerpt:
      "Pelajari metode pencucian pipa air minum & keran rumah menggunakan teknologi Hydro Pressure Flushing untuk menguras kerak hitam, lumpur, dan cacing.",
    category: "Detox Pipa Kotor",
    date: "2026-02-12",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "5 menit baca",
    tags: ["Detox Pipa", "Cuci Pipa Bandung", "Air Keran Jernih", "Pipa Kotor"],
    image: "/images/blog/apa-itu-detox-pipa-air-bersih-bandung.webp",
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
    title: "Teknologi Kamera Endoskop & Mesin Spiral Pipa Mampet",
    excerpt:
      "Kombinasi teknologi inspeksi kamera CCTV pipa HD dan kawat fleksibel spiral untuk mendiagnosis serta melancarkan saluran mampet tanpa bobok.",
    category: "Teknologi Peralatan",
    date: "2026-01-28",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "3 menit baca",
    tags: ["Kamera Pipa", "Mesin Spiral", "Deteksi Mampet", "Tukang Pipa Bandung"],
    image: "/images/blog/keunggulan-mesin-spiral-rigid-pelancarkan-saluran.webp",
    content: [
      "Memperbaiki masalah pipa saluran tanpa mengetahui kondisi riil di dalam saluran adalah tindakan berisiko yang bisa menyebabkan kerusakan permanen pada struktur pipa.",
      "Klinik Pipa mengintegrasikan teknologi Kamera Endoskop Waterproof HD dengan Mesin Kabel Spiral Rigid Fleksibel.",
      "Manfaat Inspeksi Kamera & Mesin Spiral:\n1. Kamera Endoskop memberikan tampilan visual jernih dari kondisi dalam pipa di layar monitor secara real-time.\n2. Mengetahui secara pasti jenis sumbatan: tumpukan lemak, sisa semen bangunan, atau akar pohon yang menembus pipa.\n3. Mesin kabel spiral Rigid memutar kawat khusus untuk menghancurkan sumbatan tanpa melukai dinding internal PVC.",
      "Layanan ini tersedia untuk perumahan, restoran, gedung perkantoran, dan pabrik di seluruh wilayah Bandung.",
    ],
  },
  {
    slug: "jasa-saluran-mampet-bandung",
    title: "Jasa Saluran Mampet Bandung 24 Jam - Pelancar Pipa & WC",
    excerpt:
      "Layanan profesional pelancaran saluran mampet 24 jam di Bandung untuk WC, wastafel, kitchen sink, floor drain, dan got. Menggunakan mesin spiral rigid & water jetting tanpa bongkar keramik, garansi 100% lancar.",
    category: "Saluran Mampet",
    date: "2026-08-21",
    updatedDate: "2026-09-07",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "6 menit baca",
    tags: [
      "Jasa Saluran Mampet Bandung",
      "Pelancar WC Mampet Bandung",
      "Tukang Pipa Mampet Bandung 24 Jam",
      "Saluran Wastafel Mampet",
      "Pelancar Pipa Tanpa Bongkar",
      "Water Jetting Bandung",
    ],
    image: "/images/blog/jasa-saluran-mampet-bandung.webp",
    content: [
      "Saluran air tersumbat atau mampet adalah salah satu kedaruratan rumah tangga dan komersial paling mengganggu di wilayah Bandung dan sekitarnya. Air keran dapur yang menggenang akibat lemak beku, toilet disiram meluap ke lantai, atau floor drain kamar mandi yang menimbulkan bau tak sedap dapat menghentikan aktivitas keluarga dan merusak reputasi bisnis tempat usaha Anda.",
      "Ketika sumbatan terjadi di dalam jalur instalasi pipa PVC bawah lantai atau balik dinding beton, penanganan tradisional dengan menyiram air panas saja sering kali tidak memicu hasil permanen. Tim teknisi Klinik Pipa Bandung hadir dengan teknologi pelancaran modern bebas pembongkaran keramik yang siap dipanggil 24 jam nonstop ke seluruh lokasi Anda.",
      "Penyebab Utama Saluran Mampet & Tersumbat di Rumah / Usaha Bandung:\n1. Tumpukan Lemak Dapur (Kitchen Sink): Sisa minyak goreng, kuah masakan, dan mentega yang tercuci di wastafel meluncur ke dalam pipa lalu mendingin, mengeras, dan membentuk kerak lilin padat seperti batu.\n2. Serabut Rambut & Bio-film Sabun (Kamar Mandi): Helai rambut gugur yang tersangkut di elbow pipa kamar mandi menangkap sisa sabun mandi dan sel kulit mati, membentuk sumbatan berserat yang semakin membesar.\n3. Benda Asing Mampet di Kloset WC: Tisu basah, pembalut wanita, pembersih telinga, atau mainan anak yang tak sengaja terbuang ke dalam saluran kloset.\n4. Endapan Semen & Pasir Sisa Proyek: Pasca renovasi rumah atau instalasi baru, sisa adukan semen cair meluncur masuk ke saluran buangan dan membeku keras di belokan pipa.",
      "Peringatan: Bahaya Penggunaan Soda Api & Cairan Kimia Keras!\nBanyak pemilik rumah terkecoh dengan solusi instan menyiram soda api (sodium hidroksida) atau bahan kimia anti-mampet konsentrasi tinggi. Reaksi kimia soda api menghasilkan panas ekstrem di atas 100°C yang dapat melelehkan sambungan fitting PVC, melengkungkan pipa, dan menyebabkan kebocoran fatal di balik dinding. Selain itu, uap kimia soda api sangat beracun bagi pernapasan dan mata.",
      "Solusi Modern Klinik Pipa Bandung: 100% Tanpa Bongkar & Bergaransi:\nKlinik Pipa mengandalkan kombinasi peralatan berstandar internasional untuk melancarkan pipa mampet dengan cepat dan aman:\n- Mesin Spiral Rigid Fleksibel (Rooter Machine): Kabel baja khusus berulir lentur diputar dengan kecepatan tinggi melintasi lekukan pipa (elbow) hingga 30+ meter. Spiral ini merontokkan kerak lemak, menghancurkan benda keras, dan menarik keluar gumpalan sampah tanpa merusak dinding dalam PVC.\n- High-Pressure Water Jetting (Hydro Jetting): Menyemprotkan dorongan air bertekanan ribuan PSI untuk membilas bersih sisa endapan lemak di pipa restoran, hotel, pabrik, dan jaringan saluran got utama.\n- Inspeksi Kamera Endoskop Pipa HD: Kamera waterproof berukuran mikro dimasukkan ke dalam jalur pipa untuk melihat titik lokasi sumbatan secara visual sebelum dan sesudah tindakan.",
      "Cakupan Wilayah Layanan Pelancar Saluran Mampet Bandung 24 Jam:\nKlinik Pipa menyiagakan armada teknisi terdekat di seluruh penjuru Bandung:\n- Kota Bandung: Dago, Coblong, Pasteur, Sukajadi, Cidadap, Antapani, Buahbatu, Lengkong, Arcamanik, Cibiru, Kopo, Bojongloa, Batununggal, dan sekitarnya.\n- Kota Cimahi: Cimahi Utara, Cimahi Tengah, Cimahi Selatan.\n- Kabupaten Bandung & Bandung Barat: Lembang, Padalarang, Soreang, Dayeuhkolot, Bojongsoang, Rancaekek, Margahayu.",
      "Mengapa Memilih Jasa Pelancar Saluran Mampet Klinik Pipa?\n1. Respon Cepat 24/7: Siap datang ke lokasi Anda kapan saja, baik pagi, malam, maupun hari libur nasional.\n2. Pengerjaan 100% Tanpa Bongkar: Bebas dari biaya renovasi mahal karena lantai keramik dan tembok rumah Anda tetap aman utuh.\n3. Garansi Tuntas 100%: Pembayaran dilakukan setelah pengerjaan selesai dan aliran pipa diuji coba mengalir lancar kembali.\n4. Biaya Transparan & Terjangkau: Estimasi harga disampaikan secara jelas di awal sebelum pengerjaan dimulai.",
    ],
    faqs: [
      {
        question: "Berapa lama waktu pengerjaan pelancaran saluran mampet di lokasi?",
        answer:
          "Rata-rata pengerjaan membutuhkan waktu 30 hingga 60 menit saja tergantung pada panjang jalur pipa dan tingkat keparahan sumbatan.",
      },
      {
        question: "Apakah pengerjaan saluran mampet perlu merusak atau membongkar lantai keramik?",
        answer:
          "Tidak sama sekali. Klinik Pipa menggunakan mesin kawat spiral rigid fleksibel dan water jetting yang masuk langsung melalui lubang afur atau kloset tanpa merusak keramik maupun dinding.",
      },
      {
        question: "Apakah ada garansi setelah pengerjaan selesai dilakukan?",
        answer:
          "Ya! Semua layanan pelancaran saluran mampet di Klinik Pipa dilengkapi dengan garansi pengerjaan untuk memastikan saluran Anda tetap lancar bebas mampet.",
      },
      {
        question: "Berapa estimasi biaya jasa pelancar saluran mampet di Bandung?",
        answer:
          "Biaya disesuaikan dengan jenis saluran (wastafel, WC, kamar mandi, atau got) dan tingkat kesulitan. Teknisi kami akan memberikan rincian harga transparan sebelum tindakan dilakukan.",
      },
      {
        question: "Bagaimana cara memanggil teknisi pelancar saluran mampet 24 jam?",
        answer:
          "Anda cukup menghubungi Call Center / WhatsApp Klinik Pipa. Tim teknisi terdekat akan langsung diberangkatkan ke alamat Anda di area Bandung dan sekitarnya.",
      },
    ],
  },
  {
    slug: "jasa-detox-pipa-kotor-bandung",
    title: "Jasa Detox Pipa Kotor Bandung - Cuci Pipa Air Bersih",
    excerpt:
      "Layanan jasa cuci & detox pipa air bersih kotor di Bandung menggunakan teknologi Hydro Pressure Flushing tanpa bahan kimia. Menghilangkan kerak hitam, lumpur, dan bau.",
    category: "Detox Pipa Kotor",
    date: "2026-08-21",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "5 menit baca",
    tags: ["Jasa Detox Pipa", "Cuci Pipa Air Bersih", "Pipa Berbau Bandung", "Air Keran Kuning", "Hydro Flushing"],
    image: "/images/blog/jasa-detox-pipa-kotor-bandung.webp",
    content: [
      "Apakah air keran di rumah Anda di Bandung berwarna kekuningan, berbau kotor/besi, keruh, atau bahkan mengeluarkan serpihan kerak kotoran hitam? Masalah ini bukan selalu disebabkan oleh toren/penampung air yang kotor, melainkan oleh endapan kerak tebal di dalam dinding instalasi pipa air bersih.",
      "Mengapa Pipa Air Bersih Perlu Di-detox (Dicuci Berkala)?\nInstalasi pipa air PVC maupun besi yang terpasang di bawah tanah atau dalam tembok rumah selama bertahun-tahun akan menumpuk bio-film (lapisan lendir bakteri), karat logam, lumut, dan lumpur halus. Menguras toren saja hanya membersihkan penampung, tetapi tidak dapat menjangkau puluhan meter saluran pipa yang mengalirkan air ke keran mandi, wastafel, dan dapur Anda.",
      "Dampak Buruk Pipa Air Kotor yang Dibiarkan:\n1. Risiko Kesehatan Kulit & Pencernaan: Air yang tercemar bio-film bakteri dan cacing kecil dapat memicu gatal-gatal pada kulit sensitif serta gangguan kesehatan keluarga.\n2. Debit Air Keran Menjadi Kecil: Penyumbatan kerak endapan membuat tekanan air berkurang drastis sehingga kucuran keran menjadi pelan.\n3. Kerusakan Peralatan Rumah Tangga: Kerak besi dan lumpur merusak komponen mesin cuci, pemanas air (water heater), dan filter air keran.",
      "Teknologi Cuci Pipa Hydro Pressure Flushing (Tanpa Bahan Kimia)\nKlinik Pipa hadir dengan solusi profesional Jasa Detox Pipa Kotor di Bandung menggunakan metode pendorong Hydro Pressure Flushing modern:\n- 100% Tanpa Bahan Kimia Berbahaya: Kami hanya menggunakan dorongan gelombang tekanan air steril dan udara bertekanan terkontrol (push-pull wave) yang aman untuk pipa air minum.\n- Merontokkan Kerak Hitam & Lumpur: Gelombang udara bertekanan merontokkan kerak biofilm yang menempel di dinding pipa hingga bersih total.\n- Hasil Langsung Terlihat: Kotoran dan lumpur pekat dibuang melalui keran buangan hingga air mengalir 100% jernih dan bebas bau.\n- Garansi & Teknisi Ahli: Pengerjaan dilakukan oleh teknisi berpengalaman tanpa merusak konstruksi bangunan.",
    ],
    faqs: [
      {
        question: "Apakah proses detox pipa aman untuk pipa PVC rumah yang sudah tua?",
        answer:
          "Sangat aman. Tekanan udara dan air dari mesin Hydro Flushing disesuaikan secara presisi dengan spesifikasi pipa PVC rumah sehingga tidak menimbulkan kebocoran atau kerusakan pada sambungan pipa.",
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk proses cuci detox pipa rumah?",
        answer:
          "Proses detox pipa untuk rumah tinggal 1 sampai 2 lantai biasanya berlangsung antara 2 hingga 3 jam saja.",
      },
      {
        question: "Apakah air langsung bisa digunakan setelah detox selesai?",
        answer:
          "Ya! Karena kami tidak menggunakan bahan kimia beracun sama sekali, air keran di rumah Anda langsung aman digunakan untuk mandi, mencuci pakaian, dan kebutuhan harian keluarga.",
      },
    ],
  },
  {
    slug: "jasa-deteksi-pipa-bocor-bandung",
    title: "Jasa Deteksi Pipa Bocor Bandung - Pelacakan Akustik",
    excerpt:
      "Layanan jasa deteksi lokasi pipa air bocor tersembunyi di dalam tembok atau bawah lantai di Bandung menggunakan teknologi sensor akustik & thermal camera presisi tinggi.",
    category: "Deteksi Pipa Bocor",
    date: "2026-08-21",
    author: "Tim Teknisi Klinik Pipa",
    readTime: "5 menit baca",
    tags: ["Jasa Deteksi Pipa Bocor", "Tukang Pipa Bocor Bandung", "Pipa Bocor Tersembunyi", "Deteksi Akustik", "Kamera Thermal"],
    image: "/images/blog/jasa-deteksi-pipa-bocor-bandung.webp",
    content: [
      "Kebocoran pipa air bersih (PDAM atau pendorong jet pump) yang tersembunyi di balik dinding beton atau di bawah lantai keramik adalah salah satu masalah paling merugikan bagi pemilik rumah, pengelola gedung, dan bisnis di Bandung.",
      "Kebocoran halus yang tidak terlihat dapat memicu masalah serius seperti tagihan air PDAM melonjak tajam secara tidak wajar, pompa air otomatis menyala mati sendiri tanpa ada keran yang dibuka, hingga struktur dinding menjadi basah, berkelupas, dan berjamur.",
      "Kerugian Jika Pembongkaran Dilakukan Secara Asal-asalan:\nTanpa peralatan pelacak khusus, pembongkaran tembok atau keramik secara acak hanya akan merusak keindahan rumah, membuang biaya renovasi mahal, dan belum tentu menemukan titik bocor yang sebenarnya karena air bisa merembes jauh dari sumber bocor asli.",
      "Teknologi Deteksi Presisi Klinik Pipa (Tanpa Merusak):\nKlinik Pipa mengintegrasikan alat pelacak modern terbaik untuk menemukan titik kebocoran pipa hingga skala sentimeter:\n- Acoustic Leak Detector: Sensor frekuensi tinggi yang menangkap gelombang suara desis air bocor di bawah tanah atau balik dinding beton tebal.\n- Thermal Imaging Camera: Mengidentifikasi perbedaan suhu dan pola rembesan air tersembunyi di balik permukaan tembok dan lantai.\n- Pressure Test & Gas Tracer: Pengujian tekanan pipa sistematis untuk memvalidasi tingkat kebocoran sebelum pembobokan kecil tepat di titik lokasi bocor.\n- Bergaransi & Hemat Biaya: Menghindari pembongkaran luas yang tidak perlu, menghemat waktu dan biaya perbaikan Anda.",
    ],
    faqs: [
      {
        question: "Bagaimana cara teknisi mengetahui ada kebocoran pipa tersembunyi tanpa membongkar lantai?",
        answer:
          "Teknisi menggunakan Acoustic Leak Detector yang dapat mendengarkan desis arus air keluar dari pipa bocor serta Kamera Thermal untuk melihat rembesan air di balik keramik secara non-invasif.",
      },
      {
        question: "Berapa lama proses pendeteksian titik pipa bocor dilakukan?",
        answer:
          "Pendeteksian lokasi bocor rata-rata membutuhkan waktu 1 hingga 2 jam tergantung luas bangunan dan kompleksitas jalur instalasi pipa.",
      },
      {
        question: "Apakah Klinik Pipa juga memberikan layanan perbaikan langsung setelah titik bocor ditemukan?",
        answer:
          "Ya, setelah titik bocor terdeteksi akurat, teknisi kami siap melakukan pembobokan minimalis dan penggantian/penambalan pipa yang bocor hingga selesai bergaransi.",
      },
    ],
  },
];
