import { useState } from 'react'
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi'

function HeroBanner({ slides }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <section className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <button className="arrow arrow-left" onClick={prev}>‹</button>

        <div className="hero-content">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn-red">¡Conoce más!</button>
        </div>

        <button className="arrow arrow-right" onClick={next}>›</button>
      </div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroBanner