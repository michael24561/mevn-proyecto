import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Licores Deluxe - Sobre Nosotros</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap" />
      </Head>

      {/* Modal de Búsqueda */}
      <div className="modal fade bg-white" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <form action="" method="get" className="modal-content modal-body border-0 p-0">
            <div className="input-group mb-2">
              <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Buscar licores..." />
              <button type="submit" className="input-group-text bg-success text-light">
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sección Hero */}
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>Nuestra Historia</h1>
              <p>
                Licores Deluxe nació de la pasión por los destilados finos y el arte de la mixología. 
                Desde 2010, nos dedicamos a seleccionar las mejores bebidas espirituosas del mundo 
                para los paladares más exigentes. Nuestro equipo de sommeliers y expertos en licores 
                viaja por los cinco continentes en busca de productos exclusivos y ediciones limitadas.
              </p>
              <p>
                Más que una tienda, somos una comunidad de amantes de los buenos licores que valoran 
                la calidad, el origen y las historias detrás de cada botella.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/assets/img/about-hero.svg" alt="Licores Premium" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Nuestros Servicios</h1>
            <p>
              Ofrecemos una experiencia de compra premium para los verdaderos conocedores de bebidas espirituosas.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
              <h2 className="h5 mt-4 text-center">Entrega Express</h2>
              <p className="text-center px-3">Envío en 24/48h con embalaje especial para licores</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
              <h2 className="h5 mt-4 text-center">Asesoramiento Expertos</h2>
              <p className="text-center px-3">Recomendaciones personalizadas por nuestros sommeliers</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-gift"></i></div>
              <h2 className="h5 mt-4 text-center">Regalos Premium</h2>
              <p className="text-center px-3">Embalaje de lujo y tarjetas personalizadas</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center"><i className="fa fa-lock"></i></div>
              <h2 className="h5 mt-4 text-center">Compra Segura</h2>
              <p className="text-center px-3">Proceso de verificación de edad y entrega responsable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Marcas */}
      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Nuestras Marcas</h1>
              <p>
                Colaboramos con las mejores destilerías y bodegas del mundo para ofrecerte una selección exclusiva.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#brandCarousel" role="button" data-bs-slide="prev">
                    <i className="text-dark fas fa-chevron-left"></i>
                  </a>
                </div>

                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="brandCarousel" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/whisky-brand.png" alt="Whisky Premium" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/tequila-brand.png" alt="Tequila Artesanal" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/gin-brand.png" alt="Gin Botánico" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/rum-brand.png" alt="Ron Añejo" /></a>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/vodka-brand.png" alt="Vodka Premium" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/cognac-brand.png" alt="Cognac Exclusivo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/mezcal-brand.png" alt="Mezcal Artesanal" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="/assets/img/champagne-brand.png" alt="Champagne de Lujo" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1" href="#brandCarousel" role="button" data-bs-slide="next">
                    <i className="text-dark fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Compromiso */}
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="h2 text-success">Nuestro Compromiso</h2>
            <p>
              En Licores Deluxe garantizamos la autenticidad de cada botella. Trabajamos directamente 
              con productores y distribuidores autorizados para ofrecerte productos 100% originales.
            </p>
            <ul className="list-unstyled">
              <li className="py-2"><i className="fas fa-check text-success me-2"></i> Certificados de autenticidad</li>
              <li className="py-2"><i className="fas fa-check text-success me-2"></i> Condiciones óptimas de almacenamiento</li>
              <li className="py-2"><i className="fas fa-check text-success me-2"></i> Entrega con control de temperatura</li>
              <li className="py-2"><i className="fas fa-check text-success me-2"></i> Servicio de verificación de coleccionables</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/assets/img/wine-cellar.jpg" alt="Bodega de Licores" className="img-fluid rounded shadow" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;