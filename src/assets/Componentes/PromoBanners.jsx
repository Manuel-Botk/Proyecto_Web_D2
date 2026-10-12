const promos = [
  { title: 'Novedades que no te puedes perder', label: 'PRODUCTO NUEVO', color: '#6f9a2a' },
  { title: 'Aprovecha nuestros precios bajos ¡ahora!', label: 'BAJÓ DE PRECIO', color: '#e8730c' },
  { title: 'Encuentra productos renovados ¡para ti!', label: 'PRODUCTO RENOVADO', color: '#3a8fd1' },
]

function PromoBanners() {
  return (
    <section className="section">
      <h2 className="section-title">
        Conoce más de <span className="red">nuestras promociones</span>
      </h2>

      <div className="promo-list">
        {promos.map((p) => (
          <div key={p.label} className="promo-card" style={{ background: p.color }}>
            <small>{p.label}</small>
            <strong>{p.title}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromoBanners