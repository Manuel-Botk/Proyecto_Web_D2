import { useState } from 'react'
import {
  PiList, PiMapPin, PiCaretRight, PiMagnifyingGlass,
  PiStorefront, PiListPlus, PiUser, PiShoppingCart,
} from 'react-icons/pi'
import logoD2 from '../D2.png'

function Header() {
  const [search, setSearch] = useState('')

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <img src={logoD2} alt="Logo D2" />
        </div>

        <button className="btn-outline"><PiList size={20} /> Categorías</button>
        <button className="btn-outline">
          <PiMapPin size={20} className="red" /> Dirección de envío <PiCaretRight size={16} />
        </button>

        <div className="search">
          <input
            type="text"
            placeholder="¿Qué estas buscando?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn"><PiMagnifyingGlass size={18} /></button>
        </div>

        <nav className="header-actions">
          <a href="#"><PiStorefront size={26} /><span>Tiendas</span></a>
          <a href="#"><PiListPlus size={26} /><span>Mis listas</span></a>
          <a href="#"><PiUser size={26} /><span>Perfil</span></a>
          <a href="#"><PiShoppingCart size={26} /><span>$ 0.00</span></a>
        </nav>
      </div>
    </header>
  )
}

export default Header