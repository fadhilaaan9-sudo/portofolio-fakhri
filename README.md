# Portofolio Fakhri — Data Analyst

Portofolio satu halaman dari CV Fakhri, dibangun dengan React + Vite +
TypeScript + Tailwind CSS v4. Gaya visual mengikuti DESIGN.md Aether
(latar gelap `#050505`, Inter + JetBrains Mono, radius 8px).

Isi portfolio hanya dari CV: ringkasan profil, proyek K-Means Clustering
(perbandingan 5 metode jarak, evaluasi Davies-Bouldin Index dan
Silhouette Score), 2 pengalaman magang IT Support, pendidikan S1 Teknik
Informatika UIN Sultan Syarif Kasim Riau, dan kontak. Tidak ada angka
hasil, proyek, atau pengalaman tambahan — karena tidak tertulis di CV.

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
(`tsc -b && vite build`) pada 29 Oktober 2026.

## Deploy ke Vercel

1. Push repo ini ke GitHub (`fadhilaaan9-sudo/portofolio-fakhri`).
2. Di Vercel: Add New Project → import repo tersebut.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Deploy. File CV ikut ter-build di `/CV-Fakhri.pdf`.
