import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Licores Deluxe - Tienda Premium de Licores</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/assets/img/apple-icon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/templatemo.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
      </Head>

      {/* Modal de Búsqueda */}
      <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
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

      {/* Carrusel Hero */}
      <div id="licores-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#licores-hero-carousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#licores-hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#licores-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src="/assets/img/banner_whisky.jpg" alt="Colección de Whisky" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success"><b>Licores</b> Deluxe</h1>
                    <h3 className="h2">Descubre los sabores más exclusivos</h3>
                    <p>
                      Licores Deluxe es tu tienda premium de bebidas espirituosas con las mejores 
                      selecciones de whisky, ron, vodka y más. Ofrecemos productos de alta gama 
                      cuidadosamente seleccionados por nuestros expertos.
                    </p>
                    <Link href="/shop" className="btn btn-success btn-lg">
                      Explorar Colección
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src="/assets/img/banner_cocteles.jpg" alt="Coctelería Premium" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Ediciones Limitadas</h1>
                    <h3 className="h2">Para los paladares más exigentes</h3>
                    <p>
                      Descubre nuestras exclusivas ediciones limitadas y botellas de coleccionista 
                      que no encontrarás en ningún otro lugar. Cada producto cuenta una historia única.
                    </p>
                    <Link href="/limited-editions" className="btn btn-success btn-lg">
                      Ver Ediciones
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src="/assets/img/banner_regalos.jpg" alt="Regalos de Lujo" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Regalos Exclusivos</h1>
                    <h3 className="h2">Empaquetado premium</h3>
                    <p>
                      Sorprende a tus seres queridos con nuestros packs regalo de alta gama. 
                      Incluyen embalaje de lujo y tarjeta personalizada para ocasiones especiales.
                    </p>
                    <Link href="/gifts" className="btn btn-success btn-lg">
                      Ver Regalos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#licores-hero-carousel" role="button" data-bs-slide="prev">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#licores-hero-carousel" role="button" data-bs-slide="next">
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>

      {/* Categorías Destacadas */}
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categorías Destacadas</h1>
            <p>
              Explora nuestras selecciones premium de las mejores categorías de licores.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="/whisky">
              <img src="/assets/img/categoria_whisky.jpg" className="rounded-circle img-fluid border" alt="Whiskies Premium" />
            </Link>
            <h5 className="text-center mt-3 mb-3">Whiskies Premium</h5>
            <p className="text-center">
              <Link href="/whisky" className="btn btn-success">
                Ver Colección
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="/ron">
              <img src="/assets/img/categoria_ron.jpg" className="rounded-circle img-fluid border" alt="Ron Añejo" />
            </Link>
            <h2 className="h5 text-center mt-3 mb-3">Ron Añejo</h2>
            <p className="text-center">
              <Link href="/ron" className="btn btn-success">
                Ver Colección
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link href="/vodka">
              <img src="/assets/img/categoria_vodka.jpg" className="rounded-circle img-fluid border" alt="Vodka de Lujo" />
            </Link>
            <h2 className="h5 text-center mt-3 mb-3">Vodka de Lujo</h2>
            <p className="text-center">
              <Link href="/vodka" className="btn btn-success">
                Ver Colección
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Productos Destacados</h1>
              <p>
                Nuestras selecciones más exclusivas, elegidas por nuestros expertos en licores.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link href="/producto/macallan-25">
                  <img src="/assets/img/whisky_macallan.jpg" className="card-img-top" alt="Macallan 25 años" />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$1,250.00</li>
                  </ul>
                  <Link href="/producto/macallan-25" className="h2 text-decoration-none text-dark">
                    The Macallan 25 años
                  </Link>
                  <p className="card-text">
                    Whisky escocés single malt envejecido 25 años en barriles de jerez. Notas de frutos secos, chocolate y especias.
                  </p>
                  <p className="text-muted">Valoraciones (42)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link href="/producto/patron-burdeos">
                  <img src="/assets/img/tequila_patron.jpg" className="card-img-top" alt="Patrón Burdeos" />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$350.00</li>
                  </ul>
                  <Link href="/producto/patron-burdeos" className="h2 text-decoration-none text-dark">
                    Patrón Burdeos
                  </Link>
                  <p className="card-text">
                    Tequila añejo envejecido en barricas de vino de Burdeos. Aromas a frutos rojos, vainilla y roble.
                  </p>
                  <p className="text-muted">Valoraciones (28)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <Link href="/producto/hennessy-paradis">
                  <img src="/assets/img/coñac_hennessy.jpg" className="card-img-top" alt="Hennessy Paradis" />
                </Link>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star-half-alt"></i>
                    </li>
                    <li className="text-muted text-right">$2,800.00</li>
                  </ul>
                  <Link href="/producto/hennessy-paradis" className="h2 text-decoration-none text-dark">
                    Hennessy Paradis
                  </Link>
                  <p className="card-text">
                    Coñac excepcional que combina más de 100 eaux-de-vie. Elegancia, complejidad y un final infinito.
                  </p>
                  <p className="text-muted">Valoraciones (65)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">¿Por qué elegir Licores Deluxe?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center p-4">
            <div className="h1 text-success mb-3">
              <i className="fas fa-check-circle"></i>
            </div>
            <h4>Autenticidad Garantizada</h4>
            <p>Trabajamos directamente con productores y distribuidores autorizados</p>
          </div>
          <div className="col-md-4 text-center p-4">
            <div className="h1 text-success mb-3">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <h4>Envío Premium</h4>
            <p>Embalaje especial y control de temperatura para tus licores</p>
          </div>
          <div className="col-md-4 text-center p-4">
            <div className="h1 text-success mb-3">
              <i className="fas fa-user-tie"></i>
            </div>
            <h4>Asesoramiento Expertos</h4>
            <p>Nuestros sommeliers te ayudarán a encontrar el licor perfecto</p>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <script src="/assets/js/jquery-1.11.0.min.js"></script>
      <script src="/assets/js/jquery-migrate-1.2.1.min.js"></script>
      <script src="/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/templatemo.js"></script>
      <script src="/assets/js/custom.js"></script>
    </>
  );
};

export default HomePage;