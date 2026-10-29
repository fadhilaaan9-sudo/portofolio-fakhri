// Judul section gaya Aether: nomor mono + garis pemisah.
export default function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <div className="mb-8 min-w-0 sm:mb-10 md:mb-14">
      <p className="font-mono text-xs font-semibold tracking-[0.16em] break-words text-muted uppercase sm:tracking-[0.2em]">
        {number} // {label}
      </p>
      <h2 className="mt-4 text-[clamp(1.75rem,7.5vw,3rem)] font-medium tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-6 h-px w-full bg-border" aria-hidden="true" />
    </div>
  )
}
