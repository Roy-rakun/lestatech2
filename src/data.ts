import { Service, Project, CaseStudy, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "solusi-digital",
    title: "Digital Transformation",
    description: "Transformasikan proses bisnis menjadi lebih efisien, terukur dan siap berkembang melalui solusi digital yang dirancang sesuai kebutuhan bisnis anda.",
    iconName: "Cpu",
    details: [
      "Sistem Web & Mobile Enterprise",
      "Portal Pelayanan Publik",
      "Cloud Infrastructure & Migration (GCP, AWS)",
      "Erp & Sistem Operasional",
      "Integrasi IoT & Cloud"
    ]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Automation",
    description: "Otomatiskan pekerjaan berulang, tingkatkan akurasi operasional, dan percepat pengambilan Keputusan melalui penerapan kecerdasan buatan yang sesuai kebutuhan bisnis Anda.",
    iconName: "BrainCircuit",
    details: [
      "AI Chatbot & Smart Assitants",
      "Natural Language Processing (NLP) & Smart Agents",
      "Computer Vision",
      "Predictive AI Models",
      "Workflow Automation"
    ]
  },
  {
    id: "analitik-data",
    title: "Data & Business Intelligence",
    description: "Mengubah data operasional menjadi insight strategis yang membantu identifikasi peluang dan mengurangi resiko bisnis Anda sehingga dapat mengambil keputusan lebih akurat.",
    iconName: "BarChart3",
    details: [
      "Executive Dashboard",
      "Business Intelligence",
      "Predictive Analytics",
      "Data Warehousing"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Real Time Energy Monitoring Platform",
    category: "IoT & Solusi Digital",
    description: "Membantu operator pembangkit listrik memantau performa energi secara real-time untuk meningkatkan efisiensi distribusi dan mengurangi kehilangan daya.",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    stats: { label: "Peningkatan Efisiensi", value: "24%" },
    tags: ["React", "IoT", "TimescaleDB", "GCP"]
  },
  {
    id: "proj-2",
    title: "Automated Defect Detection System",
    category: "Computer Vision & AI",
    description: "Mengurangi risiko produk cacat lolos ke distribusi melalui inspeksi visual otomatis dengan akurasi hingga 99.8%.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    stats: { label: "Akurasi Deteksi", value: "99.8%" },
    tags: ["PyTorch", "OpenCV", "Kubernetes", "C++"]
  },
  {
    id: "proj-3",
    title: "Predictive Supply Chain Optimization",
    category: "Analitik Data & ML",
    description: "Membantu perusahaan logistik mengoptimalkan rute pengiriman dan mengurangi biaya operasional melalui analisis prediktif.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    stats: { label: "Biaya Bahan Bakar", value: "-15%" },
    tags: ["Python", "TensorFlow", "BigQuery", "Looker"]
  },
  {
    id: "proj-4",
    title: "Enterprise ERP for Corporate",
    category: "Web & Mobile Dev",
    description: "ERP untuk standar perusahaan berskala besar yang menyatukan alur kerja manufaktur, keuangan real-time, manajemen gudang otomatis, dan integrasi rantai pasokan global ke dalam satu ekosistem digital yang responsif.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    stats: { label: "Efisiensi Operasional", value: "+35%" },
    tags: ["React Native", "TypeScript", "PostgreSQL", "Docker"]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Enabling Faster and More Consistent Decision-Making.",
    subtitle: "Membangun fondasi strategi bisnis dan tata kelola yang memungkinkan bisnis bergerak lebih terarah, konsisten, dan efisien.",
    client: "PT Global Optima Abadi",
    impact: "+76% EFISIENSI CORPORATE BUDGET",
    background: "PT Global Optima Abadi berada pada fase pertumbuhan yang membutuhkan arah bisnis, positioning perusahaan, dan struktur pengambilan keputusan yang lebih terdefinisi untuk mendukung ekspansi yang berkelanjutan.",
    challenge: "Strategi bisnis yang belum terdefinisi secara jelas serta proses manajemen yang belum konsisten menyebabkan pengambilan keputusan dan ekspansi perusahaan berjalan kurang optimal.",
    solution: "Melakukan evaluasi menyeluruh terhadap model bisnis, segmentasi pasar, dan proses pengambilan keputusan untuk merancang strategi bisnis yang lebih terarah, memperkuat positioning perusahaan, serta membangun kerangka kerja manajemen yang lebih konsisten.",
    results: [
      "Positioning Perusahaan yang lebih jelas untuk mendukung arah pertumbuhan jangka Panjang",
      "Kerangka manajemen yang lebih konsisten dalam menjalankan strategis bisnis",
      "Proses pengambilan Keputusan yang lebih cepat dan terstruktur serta tersistematis di seluruh divisi”
    ],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-2",
    title: "Connecting Communities, Services, and Local Businesses",
    subtitle: "Memperluas akses informasi publik sekaligus mendukung pertumbuhan UMKM melalui platform digital terintegrasi.",
    client: "Seguguk Ogan Ilir",
    impact: "Optimalisasi Layanan & UMKM",
    background: "Pemerintah daerah Kabupaten Ogan Ilir membutuhkan platform digital terintegrasi yang mampu memperluas akses informasi publik sekaligus mendukung promosi dan pengembangan UMKM lokal secara lebih efektif.",
    challenge: "Informasi publik dan potensi UMKM masih tersebar di berbagai kanal, sehingga masyarakat kesulitan memperoleh informasi yang terpusat dan mudah diakses.",
    solution: "Merancang platform mobile terintegrasi yang menyatukan informasi publik, layanan daerah, dan potensi UMKM dalam satu pengalaman digital yang mudah diakses masyarakat.",
    results: [
      "Akses informasi Publik yang lebih terpusat dan mudah dijangkau oleh Masyarakat",
      "Saluran digital yang mendukung promosi dan visibilitas UMKM Lokal secara lebih efektif",
      "Pengalaman layanan yang lebih sederhana melalui integrasi berbagai kebutuhan infroamsi dalam satu aplikasi"
    ],
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ir. Handoto Wibowo",
    role: "Director of Digital Infrastructure",
    company: "PT Bakti Nusantara",
    content: "PT Lestari Surya Technology adalah sedikit dari mitra teknologi lokal yang mengutamakan presisi ilmiah. Dasbor analitik serta model AI yang mereka kembangkan berdampak instan terhadap profitabilitas proyek nasional kami.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "Ratna Sari, M.Kom.",
    role: "Head of Data Engineering",
    company: "Apex Tech Venture",
    content: "Sangat terkesan dengan tingkat pemahaman arsitektur cloud mereka. Migrasi sistem lama kami ke infrastruktur cloud baru berjalan zero-downtime, sangat aman, dan langsung memotong biaya operasional server bulanan hampir 40%.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];
