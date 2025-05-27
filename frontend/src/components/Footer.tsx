// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light" id="licores_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Licores Deluxe</h2>
            <ul className="list-unstyled footer-link-list">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt fa-fw me-2"></i>
                Av. de los Licores 123, Madrid 28001
              </li>
              <li className="mb-2">
                <i className="fa fa-phone fa-fw me-2"></i>
                <a className="text-light text-decoration-none" href="tel:+34911234567">+34 911 234 567</a>
              </li>
              <li className="mb-2">
                <i className="fa fa-envelope fa-fw me-2"></i>
                <a className="text-light text-decoration-none" href="mailto:info@licoresdeluxe.com">info@licoresdeluxe.com</a>
              </li>
              <li>
                <i className="fa fa-clock fa-fw me-2"></i>
                Lunes-Viernes: 9:00 - 20:00
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 border-bottom pb-3 border-light">Nuestros Productos</h2>
            <ul className="list-unstyled footer-link-list">
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Whiskies Premium</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Vinos & Champagnes</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Licores Artesanales</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Ron & Brandy</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Vodka & Ginebra</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Ediciones Limitadas</Link></li>
              <li><Link className="text-light text-decoration-none" href="#">Accesorios</Link></li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 border-bottom pb-3 border-light">Información</h2>
            <ul className="list-unstyled footer-link-list">
              <li className="mb-2"><Link className="text-light text-decoration-none" href="/">Inicio</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="/about">Sobre Nosotros</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Política de Envíos</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="#">Preguntas Frecuentes</Link></li>
              <li className="mb-2"><Link className="text-light text-decoration-none" href="/contact">Contacto</Link></li>
              <li><Link className="text-light text-decoration-none" href="#">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center me-2">
                <a className="text-light text-decoration-none d-flex align-items-center justify-content-center" 
                   target="_blank" 
                   href="http://facebook.com/licoresdeluxe" 
                   rel="noopener noreferrer"
                   style={{width: '40px', height: '40px'}}>
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center me-2">
                <a className="text-light text-decoration-none d-flex align-items-center justify-content-center" 
                   target="_blank" 
                   href="https://www.instagram.com/licoresdeluxe" 
                   rel="noopener noreferrer"
                   style={{width: '40px', height: '40px'}}>
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center me-2">
                <a className="text-light text-decoration-none d-flex align-items-center justify-content-center" 
                   target="_blank" 
                   href="https://twitter.com/licoresdeluxe" 
                   rel="noopener noreferrer"
                   style={{width: '40px', height: '40px'}}>
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a className="text-light text-decoration-none d-flex align-items-center justify-content-center" 
                   target="_blank" 
                   href="https://www.youtube.com/licoresdeluxe" 
                   rel="noopener noreferrer"
                   style={{width: '40px', height: '40px'}}>
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="subscribeEmail">Suscríbete</label>
            <div className="input-group mb-2">
              <input 
                type="text" 
                className="form-control bg-dark border-light text-light" 
                id="subscribeEmail" 
                placeholder="Tu correo electrónico" 
              />
              <button className="input-group-text btn-success text-light">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left m-0">
                &copy; {new Date().getFullYear()} Licores Deluxe - Todos los derechos reservados |
                Consumo responsable. Prohibida la venta a menores de 18 años.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}