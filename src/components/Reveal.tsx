import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

// Pembungkus reveal: tambah class is-visible saat elemen masuk layar.
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      // Threshold kecil supaya section tinggi tetap ter-reveal saat scroll cepat di mobile.
      { threshold: 0.05 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
