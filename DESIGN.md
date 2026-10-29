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
