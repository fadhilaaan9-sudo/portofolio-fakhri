import { contact, navLinks } from '../data/portfolio'

// Header gaya referensi: logo kotak mint, nav pill gelap di tengah,
// tombol putih "Hubungi Saya" di kanan.
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:h-[76px] md:py-0">
        <a href="#atas" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint font-serif text-[27px] font-semibold text-background">
            F
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">
              Fakhri
            </span>
            <span className="block font-mono text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
              Data Analyst — Pekanbaru
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1 rounded-full border border-border bg-panel p-1.5 lg:flex"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? 'inline-flex min-h-[40px] items-center rounded-full bg-panel-2 px-4 text-sm font-bold text-white'
                  : 'inline-flex min-h-[40px] items-center rounded-full px-4 text-sm font-semibold text-muted transition-colors hover:text-white'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-surface px-5 text-sm font-bold text-black transition-opacity hover:opacity-85"
        >
          Hubungi Saya
        </a>
      </div>

      <nav
        aria-label="Navigasi mobile"
        className="flex gap-1 overflow-x-auto rounded-full border border-border bg-panel p-1.5 mx-4 mb-3 [scrollbar-width:none] sm:mx-6 lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={
              index === 0
                ? 'inline-flex min-h-[40px] shrink-0 items-center rounded-full bg-panel-2 px-4 text-sm font-bold whitespace-nowrap text-white'
                : 'inline-flex min-h-[40px] shrink-0 items-center rounded-full px-4 text-sm font-semibold whitespace-nowrap text-muted'
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
