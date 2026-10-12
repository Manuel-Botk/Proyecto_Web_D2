import { PiPhone, PiEnvelopeSimple, PiUsersThree } from 'react-icons/pi'


const columns = [
  { title: 'Corporativo', links: ['Historia', 'Calidad D2', 'Nuestras tiendas', 'Sostenibilidad', 'Trabaja con nosotros', 'Estados financieros', 'Línea ética'] },
  { title: 'Servicio al cliente', links: ['Crear PQR', 'Consultar PQR', 'Devolución por PSE', 'Preguntas frecuentes', 'Garantías'] },
  { title: 'Legales', links: ['Términos y condiciones', 'Tratamiento de datos', 'Ética y cumplimiento', 'Código ética'] },
  { title: 'Links de interés', links: ['Facturación electrónica', 'Recetas', 'Información Nutricional', 'Colores D2', 'Rastrear pedido'] },
]

function Footer() {
  return (
    <footer>
      <section className="subscribe">
        <div className="subscribe-img"></div>
        <div className="container subscribe-inner">
          <div className="subscribe-img"><PiUsersThree size={70} /></div>
          <div>
            <h2>Suscríbete</h2>
            <p>Déjanos tu correo y recibe promociones únicas</p>
            <input type="email" placeholder="Correo electrónico" />
            <label className="check">
              <input type="checkbox" /> Autorizo el tratamiento de mis datos personales a D2 S.A.S.
            </label>
          </div>
        </div>
      </section>

      <section className="footer-main">
        <div className="container footer-grid">
          <div>
            <div className="logo small"></div>
            <h4>Atención al cliente</h4>
            <p><PiPhone size={20} /> 01 8000 120201</p>
            <p><PiEnvelopeSimple size={20} /> atencion.cliente@d2.com.co</p>
            <h4>Descarga nuestra app</h4>
            <p>Google Play · App Store</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer