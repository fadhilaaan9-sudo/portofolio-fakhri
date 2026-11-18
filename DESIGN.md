# DESIGN.md — Portofolio Fakhri (Tema Terang, Hijau Lembut)

Sumber: gambar referensi kiriman user (Nov 2026). Sistem desain Aether
lama diganti secara keseluruhan dengan sistem di bawah ini.

## Warna

| Token | Nilai | Pakai |
|---|---|---|
| background | `#ffffff` | Latar utama (putih polos) |
| background-soft | `#f2f7f4` | Latar lembut (tag, area hero) |
| panel | `#ffffff` | Latar kartu panel (putih) |
| panel-2 | `#e9f4ed` | Latar pill aktif / hover |
| surface (putih) | `#f4f4f4` | Cadangan (tidak dipakai saat ini) |
| mint | `#4a9470` | Aksen utama: tombol, serif hero, tautan (hijau lembut) |
| jade | `#3d7d5c` | Aksen hijau sekunder |
| amber | `#96690f` | Aksen label mono & badge riset (emas redup) |
| amber-soft | `#8a6d1f` | Teks label mono amber (emas redup) |
| ink | `#3a4740` | Judul & teks utama (abu kehijauan lembut) |
| text-secondary | `#66746b` | Deskripsi & metadata |
| border | `#dfe9e2` | Garis & border kartu (abu hijau muda) |

Latar putih polos, tanpa glow radial (glow hijau jade dihapus saat
pindah ke tema terang, Nov 2026). Tanpa glassmorphism; kartu memakai
bayangan halus agar terbaca di latar terang.

## Tipografi

- Display serif: Fraunces (italic) — hanya untuk kata "Data Analyst"
  di hero dan judul kontak.
- Display & body: Plus Jakarta Sans (fallback Inter). Judul hero
  `clamp(2.75rem, 8vw, 6.375rem)` (~102px desktop), weight 800,
  line-height 1.02, tracking ketat.
- Judul section: Plus Jakarta Sans 28px → 48px, weight 800.
- Label teknis: JetBrains Mono 12px, weight 600, uppercase, tracking
  lebar; label amber untuk subjudul hero.
- Body: Plus Jakarta Sans 16px, line-height 1.6.

## Spacing & bentuk

- Base 8px, gap 16px, padding kartu 32px (desktop) / 20px (mobile),
  padding section 80px (desktop) / 56px (mobile).
- Radius kartu panel: 24px. Radius tombol & chip: 9999px (pill).
- Lebar kontainer: 1240px.

## Struktur

- Header: logo kotak hijau lembut "F." + "Fakhri / DATA ANALYST — PEKANBARU",
  nav pill terang di tengah (Tentang, Pendidikan, Pengalaman, Proyek,
  Pelatihan, Keahlian) dengan item aktif berpill, tombol hijau lembut
  "Hubungi Saya" di kanan yang membuka profil Instagram
  @fakhri_074 (tab baru).
- Hero satu kolom (maks. 860px, tanpa kartu visualisasi K-Means dan
  tanpa blok statistik): eyebrow pill "TERBUKA UNTUK PELUANG DATA
  ANALYST", judul "Fakhri, Data Analyst", subjudul mono amber,
  paragraf ringkasan singkat, tombol pill mint "Lihat Proyek &
  Riset" + tombol outline "Unduh CV" (satu-satunya tombol Unduh CV),
  strip kontak (email, Instagram @fakhri_074 dengan ikon Instagram
  mint, Pekanbaru, Riau). Tidak ada tombol GitHub di hero.
- Keahlian: persis dua grup dari CV — Kemampuan Teknis dan Kemampuan
  Non-Teknis — keduanya memakai pill mint solid.
- Kontak: tombol "Hubungi Saya" (mailto) + "Salin Email", kartu
  Email / Instagram / GitHub. Tombol GitHub hanya ada satu, di sini
  (akhir halaman). Nomor telepon tidak ditampilkan di mana pun.
- Section: Tentang → Pendidikan & Publikasi → Pengalaman → Proyek →
  Pelatihan → Keahlian → Kontak. Judul section tanpa label nomor
  ("01 / ..."), kartu panel radius 24px.

## Motion

Reveal halus saat masuk layar, hover lift ringan. Hormati
`prefers-reduced-motion`.

## Responsif (320px – 1920px)

- Judul pakai `clamp()`: hero 44px → 102px, judul section 28px → 48px,
  judul kontak 32px → 56px.
- Hero selalu 1 kolom. Grid section 1 kolom di mobile, 2–3 kolom
  di `md`/`lg`.
- Tombol hero full-width di mobile, inline di `sm` ke atas, tinggi
  tap minimal 44–48px.
- Nav desktop pill di tengah; nav mobile scroll horizontal dalam pill.
  Header sticky, jadi `scroll-mt` section 112px di mobile, 96px di
  desktop.
- `overflow-x: clip` di body sebagai pengaman; tidak ada overflow
  horizontal dokumen.
