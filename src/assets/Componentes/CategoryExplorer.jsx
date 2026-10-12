function CategoryExplorer({ categories }) {
  return (
    <section className="section">
      <h2 className="section-title">
        Explora <span className="red">por categoría</span>
      </h2>

      <div className="explore-list">
        {categories.map(({ name, Icon }) => (
          <a key={name} href="#" className="explore-item">
            <div className="explore-circle"><Icon size={56} /></div>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CategoryExplorer