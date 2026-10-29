# DESIGN.md — Portofolio Fakhri (Aether)

Sumber: file `aether-the-new-frontier-DESIGN.md` kiriman user (template
Neuform "Aether - The New Frontier"). Tidak ada HTML referensi terlampir,
jadi token di bawah ini adalah sumber kebenarannya.

## Warna

| Token | Nilai | Pakai |
|---|---|---|
| background | `#050505` | Latar utama |
| panel / secondary | `#111111` | Latar kartu gelap |
| surface | `#F4F4F4` | Chip terang |
| text-primary | `#FFFFFF` | Judul & teks utama |
| text-secondary | `#A1A1AA` | Deskripsi & metadata |
| border | `#27272A` | Garis & border kartu |

Jangan tukar ke mode terang. Tanpa gradient ungu/biru, tanpa
glassmorphism, tanpa shadow berat.

## Tipografi

- Display & body: Inter. Judul besar 64px (desktop), weight 500,
  line-height 1.04.
- Label teknis: JetBrains Mono 12px, weight 600, uppercase.
- Body: Inter 16px, line-height 1.6.

## Spacing & bentuk

- Base 8px, gap 16px, padding kartu 24px, padding section 80px.
- Radius kartu & kontrol: 8px. Pill: 9999px (badge kecil saja).

## Struktur

Hero nama besar → 01-A/02-B/03-C strip → Profil → Proyek K-Means →
Pengalaman → Pendidikan & Keahlian → Kontak. Section bernomor gaya
mono (`02-A // ...`), dipisah garis `#27272A`.

## Motion

Reveal halus saat masuk layar, hover lift ringan. Hormati
`prefers-reduced-motion`.

## Responsif (320px – 1920px, diverifikasi 2026-10-29)

- Judul pakai `clamp()`: hero 40px → 64px, judul section 28px → 48px,
  judul kontak 32px → 56px. Label mono tracking lebih rapat di mobile.
- Padding section 56px di mobile, 80px di desktop; padding kartu 20px
  di mobile, 24px di desktop.
- Grid 1 kolom di mobile, 3 kolom di `md`, 2 kolom proyek/pendidikan
  di `lg`. Tombol hero full-width di mobile, inline di `sm` ke atas,
  tinggi tap minimal 44–48px.
- Header sticky mobile 110px (bar + nav scroll horizontal), jadi
  `scroll-mt` section 112px di mobile, 96px di desktop — judul section
  tidak tertutup header saat lompat lewat anchor.
- `overflow-x: clip` di body sebagai pengaman; tidak ada overflow
  horizontal dokumen di 320/360/375/390/412/430/768/820/1024/1280/
  1440/1920px.
