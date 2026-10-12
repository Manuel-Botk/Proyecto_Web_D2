import ProductCard from './ProductCard'

function ProductSection({ title, highlight, products }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">
          {title} <span className="red">{highlight}</span>
        </h2>
        <a href="#" className="link-more">Ver más</a>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection