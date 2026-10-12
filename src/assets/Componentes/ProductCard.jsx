import { PiEye, PiListPlus, PiHeart } from 'react-icons/pi'

function ProductCard({ brand, name, price, img }) {
  return (
    <article className="product-card">
      <div className="product-img">
        <img src={img} />
        <div className="product-actions">
          <button><PiEye size={16} /></button>
          <button><PiListPlus size={16} /></button>
          <button><PiHeart size={16} /></button>
        </div>
      </div>
      <p className="product-brand">{brand}</p>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">$ {price.toLocaleString('es-CO')}</p>
    </article>
  )
  
}

export default ProductCard