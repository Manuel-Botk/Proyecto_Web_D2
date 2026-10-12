function RecipeSection({ recipes, img }) {
  return (
    <section className="section section-pink">
      <div className="section-header">
        <h2 className="section-title">
          Las mejores recetas <span className="red">con productos D2</span>
        </h2>
        <a href="#" className="link-more">Ver todas las recetas</a>
      </div>
      <p className="section-sub">
        Selecciona cuántas personas son y agrega todos los ingredientes al carrito en un clic.
      </p>

      <div className="product-grid">
        {recipes.map((r) => (
          <article key={r.id} className="product-card">
            <div className="product-img recipe-img">
              <img src={r.img} alt={r.name} />
            </div>
            <p className="product-brand">{r.tag}</p>
            <h3 className="product-name upper">{r.name}</h3>
            <p className="product-price">$ {r.price.toLocaleString('es-CO')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecipeSection