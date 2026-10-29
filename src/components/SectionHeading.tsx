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
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
        {number} // {label}
      </p>
      <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mt-6 h-px w-full bg-border" aria-hidden="true" />
    </div>
  )
}
