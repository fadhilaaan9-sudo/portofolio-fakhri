// Judul section gaya referensi: eyebrow mono amber + judul besar.
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
    <div className="mb-8 min-w-0 sm:mb-10 md:mb-12">
      <p className="font-mono text-xs font-semibold tracking-[0.2em] break-words text-amber-soft uppercase">
        {number} // {label}
      </p>
      <h2 className="mt-4 text-[clamp(1.75rem,7.5vw,3rem)] leading-[1.08] font-extrabold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-6 h-1 w-12 rounded-full bg-mint" aria-hidden="true" />
    </div>
  )
}
