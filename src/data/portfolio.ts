// Semua isi di file ini diambil langsung dari CV Fakhri.
// Jangan tambah angka hasil, proyek, atau pengalaman yang tidak ada di CV.

export const contact = {
  name: 'Fakhri',
  role: 'Data Analyst',
  field: 'Information Technology',
  email: 'mfakhri338@gmail.com',
  // Nomor ditulis persis seperti di CV.
  phoneDisplay: '+62 895 6130 4800 6',
  phoneHref: 'tel:+62895613048006',
  // Link GitHub diubah atas permintaan user 2026-10-29 (di CV tertulis link lain).
  githubLabel: 'github.com/fakhriaja07',
  githubUrl: 'https://github.com/fakhriaja07',
  cvUrl: '/CV-Fakhri.pdf',
}

export const profileSummary =
  'Lulusan S1 Teknik Informatika dengan pengalaman dalam pengolahan dan analisis data melalui penelitian tugas akhir menggunakan metode K-Means Clustering untuk membandingkan metode jarak dalam analisis tingkat kepuasan masyarakat terhadap layanan. Penelitian menggunakan Python dan RapidMiner dengan evaluasi menggunakan Davies-Bouldin Index dan Silhouette Score. Selain itu, memiliki pengalaman sebagai Technical Analyst dalam proyek pengembangan sistem informasi.'

export const distanceMethods = [
  {
    code: '01',
    name: 'Euclidean',
    note: 'Metode jarak yang dibandingkan dalam clustering.',
  },
  {
    code: '02',
    name: 'Manhattan',
    note: 'Metode jarak yang dibandingkan dalam clustering.',
  },
  {
    code: '03',
    name: 'Canberra',
    note: 'Metode jarak yang dibandingkan dalam clustering.',
  },
  {
    code: '04',
    name: 'Chebyshev',
    note: 'Metode jarak yang dibandingkan dalam clustering.',
  },
  {
    code: '05',
    name: 'Cosine',
    note: 'Metode jarak yang dibandingkan dalam clustering.',
  },
]

export const projectSteps = [
  {
    code: '01',
    title: 'Olah data kuesioner',
    description:
      'Mengolah data hasil kuesioner untuk menganalisis tingkat kepuasan masyarakat.',
  },
  {
    code: '02',
    title: 'Terapkan K-Means Clustering',
    description:
      'Menerapkan K-Means Clustering dengan membandingkan lima metode jarak.',
  },
  {
    code: '03',
    title: 'Evaluasi hasil clustering',
    description:
      'Mengevaluasi hasil clustering menggunakan Davies-Bouldin Index dan Silhouette Score.',
  },
  {
    code: '04',
    title: 'Bandingkan dengan Python & RapidMiner',
    description:
      'Mengolah dan menganalisis data menggunakan Python dan RapidMiner untuk memperoleh hasil perbandingan clustering.',
  },
]

export const experiences = [
  {
    place: 'DPMPTSP Kota Pekanbaru',
    role: 'IT Support Intern',
    period: 'Januari 2025 – Maret 2025',
    points: [
      'Mengikuti proses kerja dan pelayanan yang berlangsung di lingkungan instansi.',
      'Menyelesaikan tugas yang diberikan pembimbing sesuai kebutuhan selama kegiatan magang.',
      'Berkoordinasi dengan pegawai dan menyesuaikan diri dengan prosedur kerja dalam pelaksanaan tugas.',
    ],
  },
  {
    place: 'Dinas Lingkungan Hidup dan Kehutanan',
    role: 'IT Support Intern',
    period: 'Maret 2021 – Mei 2021',
    points: [
      'Mengikuti aktivitas kerja di lingkungan instansi dan memahami alur kerja yang diterapkan.',
      'Menyelesaikan tugas yang diberikan pembimbing dengan mengikuti arahan dan prosedur kerja yang berlaku.',
      'Beradaptasi dengan lingkungan kerja serta berkoordinasi dengan pihak terkait selama kegiatan magang.',
    ],
  },
]

export const education = {
  degree: 'S1 Teknik Informatika',
  school: 'Universitas Islam Negeri Sultan Syarif Kasim Riau',
  period: 'Juli 2022 – Juli 2026',
}

export const skillGroups = [
  {
    title: 'Data Analysis',
    items: [
      'Pengolahan data',
      'K-Means Clustering',
      'Perbandingan metode jarak',
      'Evaluasi clustering',
    ],
  },
  {
    title: 'Data Analysis Tools',
    items: ['Python', 'RapidMiner'],
  },
  {
    title: 'Office Tools',
    items: ['Microsoft Word', 'Microsoft Excel'],
  },
]

export const navLinks = [
  { label: 'Profil', href: '#profil' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Kontak', href: '#kontak' },
]
