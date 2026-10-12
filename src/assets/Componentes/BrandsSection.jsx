function BrandsSection({ brands }) {
  return (
    <section className="section">
      <h2 className="section-title">
        Nuestras <span className="red">marcas</span>
      </h2>

      <div className="brands-list">
        {brands.map((b) => (
          <div key={b} className="brand-card">{b}</div>
        ))}
      </div>
    </section>
  )
}

export default BrandsSection