import ProductCard from './ProductCard'

function DonationKits({ kits, img }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">
          Kits<span className="red">Donaciones</span>
        </h2>
        <a href="#" className="link-more">Ver más</a>
      </div>

      <div className="kits-layout">
        <aside className="kits-banner">
          <h3>DE TODOS LOS COLOMBIANOS</h3>
          <p>Donar tu <strong className="red">Kit</strong> es <strong className="red">muy fácil</strong></p>
          <p>D2 se encargará de hacer la entrega del kit al banco de alimentos.</p>
          <button className="btn-red">Compra aquí →</button>
        </aside>

        <div className="product-grid">
          {kits.map((k) => (
            <ProductCard key={k.id} {...k} img={k.img} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DonationKits