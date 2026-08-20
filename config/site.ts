export interface AreaInfo {
  slug: string;
  name: string;
  description?: string;
  landmark?: string;
}

export interface ServiceInfo {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  price: string;
  features: string[];
}

export const siteConfig = {
  name: "Klinik Pipa",
  legalName: "Klinik Pipa Bandung",
  tagline: "Solusi pipa bocor, pipa kotor dan pipa mampet",
  description:
    "Klinik Pipa adalah solusi pipa bocor, pipa kotor (detox pipa) dan pipa mampet. Melayani deteksi pipa bocor tersembunyi tanpa bongkar, cuci detox pipa air bersih, dan pelancaran saluran mampet 24 jam di Bandung.",
  domain: "https://klinikpipa.com",
  phone: "+62 898-9890-071",
  phoneRaw: "+628989890071",
  whatsappNumber: "628989890071",
  address: {
    street: "Jl. Cibarengkok RT/RW 09/04, Kel. Sukabungah, Kec. Sukajadi",
    city: "Kota Bandung",
    province: "Jawa Barat",
    postalCode: "40162",
    country: "ID",
    geo: {
      latitude: -6.8928,
      longitude: 107.5959,
    },
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "Rp200.000 - Rp750.000",
  rating: {
    ratingValue: "4.9",
    reviewCount: "412",
    bestRating: "5",
  },
  areas: [
    {
      slug: "bandung",
      name: "Kota Bandung",
      description: "Pusat layanan deteksi pipa bocor tersembunyi & detox pipa air bersih seluruh wilayah Kota Bandung 24 jam.",
      landmark: "Alun-Alun Bandung, Gedung Sate, Pasupati",
    },
    {
      slug: "sukajadi",
      name: "Sukajadi",
      description: "Deteksi titik kebocoran pipa & pencucian kerak pipa air bersih untuk rumah & usaha area Sukajadi & PVJ.",
      landmark: "Paris Van Java, Pasteur, Gunung Batu",
    },
    {
      slug: "cicendo",
      name: "Cicendo",
      description: "Pos siaga teknisi deteksi pipa bocor akustik & detox pipa kotor tanpa bobok area Cicendo.",
      landmark: "Stasiun Bandung, Rajawali, Pasirkaliki",
    },
    {
      slug: "buah-batu",
      name: "Buah Batu",
      description: "Jasa deteksi kebocoran pipa air PDAM/pompa & flushing detox pipa kotor area Buah Batu & Batununggal.",
      landmark: "Passer Kalapa, Batununggal, Terusan Buah Batu",
    },
    {
      slug: "antapani",
      name: "Antapani",
      description: "Penanganan pipa bocor halus di dinding & cuci kerak pipa air keran tanpa merusak lantai Antapani.",
      landmark: "Gasibu Antapani, Terusan Jakarta",
    },
    {
      slug: "arcamanik",
      name: "Arcamanik",
      description: "Spesialis pelacakan titik pipa bocor & detox instalasi pipa air bersih rumah area Arcamanik & Sukamiskin.",
      landmark: "SOR Arcamanik, Pacantel, Cisaranten",
    },
    {
      slug: "dago",
      name: "Dago / Coblong",
      description: "Deteksi kebocoran pipa & detox instalasi air kosan, resto, & hunian Dago, Dipatiukur & Simpang Dago.",
      landmark: "ITB, Simpang Dago, Dago Pakar",
    },
    {
      slug: "cileunyi",
      name: "Cileunyi",
      description: "Layanan deteksi kebocoran pipa tersembunyi & detox pipa kotor wilayah Cileunyi & Jatinangor.",
      landmark: "Gerbang Tol Cileunyi, Ubertos, Cibiru",
    },
    {
      slug: "ujungberung",
      name: "Ujungberung",
      description: "Pelacakan pipa bocor tanpa bobok keramik & detox pipa air keran kotor/berbau area Ujungberung.",
      landmark: "Alun-Alun Ujungberung, AH Nasution",
    },
    {
      slug: "cimahi",
      name: "Cimahi",
      description: "Tukang deteksi pipa bocor bergaransi & hydro detox pipa air kotor area Kota Cimahi & sekitarnya.",
      landmark: "Alun-Alun Cimahi, Leuwigajah, Cihanjuang",
    },
  ] as AreaInfo[],
  services: [
    {
      id: "deteksi-pipa-bocor",
      name: "Deteksi Kebocoran Pipa Tersembunyi",
      shortDesc: "Pelacakan akurat titik pipa bocor di dalam dinding/lantai menggunakan sensor geofon akustik & thermal imaging.",
      fullDesc:
        "Tagihan air melonjak atau tembok sering rembes? Kami melacak posisi pasti pipa bocor halus yang tertanam di bawah lantai beton atau dinding tanpa perlu membongkar sembarangan.",
      iconName: "FaSearchLocation",
      price: "Mulai Rp350.000",
      features: [
        "Teknologi Acoustic Leak Locator & Thermal Camera",
        "Akurasi titik bocor hingga 99%",
        "Tanpa pembongkaran lantai/dinding secara acak",
        "Laporan posisi titik kerusakan presisi",
      ],
    },
    {
      id: "detox-pipa-kotor",
      name: "Detox & Pencucian Pipa Air Bersih",
      shortDesc: "Pembersihan total kerak hitam, bio-film, lumpur, & cacing di dalam jalur pipa air minum/keran rumah.",
      fullDesc:
        "Air keran keruh, kuning, berbau, atau mengalir kecil? Metode Hydro Flushing Pressure Detox membersihkan seluruh kerak dan kuman yang mengendap di sepanjang pipa air bersih Anda secara aman.",
      iconName: "FaBroom",
      price: "Mulai Rp300.000",
      features: [
        "Pembersihan kerak & bio-film cacing tanpa kimia berbahaya",
        "Teknologi Hydro Pressure Flushing modern",
        "Aliran air keran kembali lancar & jernih",
        "Menjaga kualitas air bersih kesehatan keluarga",
      ],
    },
    {
      id: "inspeksi-kamera-pipa",
      name: "Inspeksi Visual Kamera Endoskop Pipa",
      shortDesc: "Pemeriksaan kondisi dalam pipa menggunakan kamera kabel endoskop HD untuk mendeteksi retakan & kerusakkan.",
      fullDesc:
        "Memvisualisasikan kondisi riil bagian dalam pipa buangan maupun air bersih secara real-time. Mengetahui posisi sumbatan keras, patahan pipa, atau pergeseran sambungan elbow.",
      iconName: "FaEye",
      price: "Mulai Rp250.000",
      features: [
        "Kamera kabel flexible HD waterproof",
        "Layar monitor langsung di lokasi",
        "Mengetahui struktur kerusakan secara pasti",
        "Rekomendasi tindakan perbaikan yang tepat",
      ],
    },
    {
      id: "pelancaran-saluran-mampet",
      name: "Pelancaran Saluran Mampet Rigid Cable",
      shortDesc: "Pelancaran pipa wastafel, WC, got, dan floor drain mampet menggunakan kawat spiral fleksibel bertenaga tinggi.",
      fullDesc:
        "Pembersihan sumbatan lemak keras, rambut, dan sampah padat pada saluran air buangan dengan mesin spiral fleksibel profesional tanpa merusak pipa PVC.",
      iconName: "FaTools",
      price: "Mulai Rp200.000",
      features: [
        "Mengikis lemak & sumbatan tanpa bongkar keramik",
        "Mesin Spiral Heavy-Duty bertenaga tinggi",
        "Garansi pengerjaan pasti lancar kembali",
        "Siap panggil 24 jam nonstop",
      ],
    },
  ] as ServiceInfo[],
  advantages: [
    {
      title: "Teknologi Sensor Akustik & Thermal",
      desc: "Menemukan lokasi pasti pipa bocor tersembunyi di bawah lantai atau balik tembok tanpa perlu membongkar seluruh ruangan.",
      icon: "FaSearchLocation",
    },
    {
      title: "Pencucian Pipa Hydro Detox Aman",
      desc: "Membersihkan endapan cacing, lumpur, & kerak air tanpa bahan kimia keras yang merusak pipa PVC atau membahayakan kesehatan.",
      icon: "FaBroom",
    },
    {
      title: "Akurasi Tinggi & Tanpa Bobok Acak",
      desc: "Hanya membongkar titik yang rusak tepat pada sasaran, menghemat biaya perbaikan & pemulihan keramik rumah Anda.",
      icon: "FaShieldAlt",
    },
    {
      title: "Layanan Siaga 24 Jam Bandung",
      desc: "Tim teknisi berpengalaman siap meluncur ke lokasi rumah, gedung, resto, atau ruko di seluruh area Bandung & sekitarnya.",
      icon: "FaClock",
    },
  ],
};
