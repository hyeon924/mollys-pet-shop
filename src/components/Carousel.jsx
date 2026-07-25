import { useEffect, useState } from 'react'

export function Carousel({ items, renderItem, className = '', autoPlay = false }) {
  const [index, setIndex] = useState(0)
  const previous = () => setIndex((current) => (current - 1 + items.length) % items.length)
  const next = () => setIndex((current) => (current + 1) % items.length)

  useEffect(() => {
    if (!autoPlay) return undefined
    const timer = window.setInterval(next, 3800)
    return () => window.clearInterval(timer)
  }, [autoPlay, items.length])

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, itemIndex) => <div className="carousel-slide" key={item.id ?? itemIndex}>{renderItem(item)}</div>)}
      </div>
      <button className="carousel-control previous" type="button" onClick={previous} aria-label="이전 항목">‹</button>
      <button className="carousel-control next" type="button" onClick={next} aria-label="다음 항목">›</button>
    </div>
  )
}
