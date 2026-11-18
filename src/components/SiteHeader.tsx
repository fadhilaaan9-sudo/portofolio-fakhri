import { useEffect, useState } from 'react'
import { contact, navLinks } from '../data/portfolio'

// Header tema terang: logo kotak hijau lembut, nav pill terang di tengah,
// tombol hijau lembut "Hubungi Saya" di kanan.
// Sorotan menu mengikuti section yang sedang dibuka: klik langsung
// memindahkan sorotan, scroll-spy berbasis posisi section mengikutinya
// saat halaman di-scroll.
export default function SiteHeader() {
  const [activeHref, setActiveHref] = useState(navLinks[0].href)

  useEffect(() => {
    let raf = 0
    const updateActive = () => {
      raf = 0
      const y = window.scrollY + 150
      let current = navLinks[0].href
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.offsetTop <= y) current = link.href
      }
      // Di dasar halaman, section terakhir (Keahlian) yang aktif.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = navLinks[navLinks.length - 1].href
      }
      setActiveHref(current)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(updateActive)
    }
    updateActive()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:h-[76px] md:py-0">
        <a href="#atas" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint font-serif text-[27px] font-semibold text-white">
            F
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-ink">
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveHref(link.href)}
              className={
                link.href === activeHref
                  ? 'inline-flex min-h-[40px] items-center rounded-full bg-panel-2 px-4 text-sm font-bold text-ink'
                  : 'inline-flex min-h-[40px] items-center rounded-full px-4 text-sm font-semibold text-muted transition-colors hover:text-ink'
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
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-mint px-5 text-sm font-bold text-white transition-opacity hover:opacity-85"
        >
          Hubungi Saya
        </a>
      </div>

      <nav
        aria-label="Navigasi mobile"
        className="flex gap-1 overflow-x-auto rounded-full border border-border bg-panel p-1.5 mx-4 mb-3 [scrollbar-width:none] sm:mx-6 lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveHref(link.href)}
            className={
              link.href === activeHref
                ? 'inline-flex min-h-[40px] shrink-0 items-center rounded-full bg-panel-2 px-4 text-sm font-bold whitespace-nowrap text-ink'
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
