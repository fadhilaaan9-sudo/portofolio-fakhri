import { contact, navLinks } from '../data/portfolio'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-16">
        <a
          href="#atas"
          className="text-lg font-medium tracking-tight text-white"
        >
          FAKHRI <span className="text-muted">™</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center font-mono text-xs font-semibold tracking-[0.14em] text-muted uppercase transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="inline-flex min-h-[44px] items-center rounded-full bg-white px-4 text-sm font-medium text-black transition-opacity hover:opacity-80"
        >
          Kontak
        </a>
      </div>

      <nav
        aria-label="Navigasi mobile"
        className="flex gap-5 overflow-x-auto border-t border-border px-4 py-1 [scrollbar-width:none] sm:px-6 md:hidden [&::-webkit-scrollbar]:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-[44px] shrink-0 items-center font-mono text-xs font-semibold tracking-[0.14em] whitespace-nowrap text-muted uppercase"
          >
            {link.label}
          </a>
        ))}
        <span className="sr-only">{contact.role}</span>
      </nav>
    </header>
  )
}
