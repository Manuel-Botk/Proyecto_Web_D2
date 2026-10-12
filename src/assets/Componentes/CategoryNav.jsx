function CategoryNav({ categories }) {
  return (
    <nav className="category-nav">
      <div className="container category-nav-inner">
        {categories.map(({ name, Icon }) => (
          <a key={name} href="#" className="category-chip">
            <Icon size={20} className="red" /> {name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default CategoryNav