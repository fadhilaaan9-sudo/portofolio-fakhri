// Judul section gaya referensi: judul besar + garis mint.
// (Label nomor section "01 / ..." sudah dihapus atas permintaan user.)
export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 min-w-0 sm:mb-10 md:mb-12">
      <h2 className="text-[clamp(1.75rem,7.5vw,3rem)] leading-[1.08] font-extrabold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-6 h-1 w-12 rounded-full bg-mint" aria-hidden="true" />
    </div>
  )
}
