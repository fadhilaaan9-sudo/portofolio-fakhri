# Portofolio Fakhri — Data Analyst

Portofolio satu halaman dari CV Fakhri, dibangun dengan React + Vite +
TypeScript + Tailwind CSS v4. Gaya visual mengikuti DESIGN.md (hijau
mint/jade di latar gelap kehijauan `#060a08`, Fraunces serif italic
untuk "Data Analyst", Plus Jakarta Sans, JetBrains Mono, kartu panel
radius 24px, nav pill, dan kartu visualisasi clustering K-Means).

Isi portfolio hanya dari CV terbaru (CV__FAKHRI.docx, November 2026):
ringkasan profil, proyek K-Means Clustering (perbandingan 5 metode jarak,
evaluasi Davies-Bouldin Index dan Silhouette Score), proyek Brandis
(Brand Ikasari) sebagai Data Analyst 2024–2025, 2 pengalaman magang
IT Support, 4 pelatihan nasional 2026, pendidikan S1 Teknik Informatika
UIN Sultan Syarif Kasim Riau (IPK 3.46/4.00), publikasi di Jurnal Terapan
Informatika Nusantara Vol. 7 No. 1 Juni 2026 (SINTA 4), keahlian teknis
termasuk SQL, soft skills, dan kontak. Tidak ada angka hasil, proyek,
atau pengalaman tambahan — karena tidak tertulis di CV.

> Catatan: file `public/CV-Fakhri.pdf` di repo masih berisi CV lama.
> Push lewat GitHub MCP hanya mendukung file teks, jadi PDF baru dari
> CV__FAKHRI.docx (November 2026) perlu di-upload manual ke folder
> `public/` dan menimpa file lama, supaya tombol "Unduh CV" mengunduh
> versi yang sama dengan isi portofolio.

## Jalankan di lokal

```cmd
npm install
npm run dev
```

## Build

```cmd
npm run build
```

Hasil build ada di folder `dist/`. Build sudah diverifikasi lolos
(`tsc -b && vite build`) pada 13 November 2026.

## Deploy ke Vercel

1. Push repo ini ke GitHub (`fadhilaaan9-sudo/portofolio-fakhri`).
2. Di Vercel: Add New Project → import repo tersebut.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Deploy. File CV ikut ter-build di `/CV-Fakhri.pdf`.
