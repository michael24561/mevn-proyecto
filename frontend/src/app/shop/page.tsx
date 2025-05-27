// app/shop/page.tsx
'use client'; // Necesario para usar hooks si implementas búsqueda/filtros

import Head from 'next/head';
import Link from 'next/link';
import { getProductos } from '@/lib/api';
import { useEffect, useState } from 'react';

interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  descripcion?: string;
  imagen?: string;
  stock: number;
  categoria?: {
    _id: string;
    nombre: string;
  };
  proveedor?: {
    _id: string;
    nombre: string;
  };
}

export default function PaginaTienda() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await getProductos();
        // Adaptar los productos para que coincidan con la interfaz local
        const adaptados = data.map((producto: any) => ({
          ...producto,
          categoria: typeof producto.categoria === 'string'
            ? { _id: producto.categoria, nombre: '' }
            : producto.categoria,
          proveedor: typeof producto.proveedor === 'string'
            ? { _id: producto.proveedor, nombre: '' }
            : producto.proveedor,
        }));
        setProductos(adaptados);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center my-5">
        {error}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Licores Deluxe - Nuestra Selección</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap" />
      </Head>

      <div className="container py-5">
        <div className="row">
          {/* Barra Lateral de Categorías */}
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categorías</h1>
            <ul className="list-unstyled templatemo-accordion">
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Tipo
                  <i className="fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul className="collapse show list-unstyled pl-3">
                  <li><Link className="text-decoration-none" href="#">Whisky</Link></li>
                  <li><Link className="text-decoration-none" href="#">Vodka</Link></li>
                  <li><Link className="text-decoration-none" href="#">Ron</Link></li>
                  <li><Link className="text-decoration-none" href="#">Tequila</Link></li>
                </ul>
              </li>
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Ofertas
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                  <li><Link className="text-decoration-none" href="#">Promociones</Link></li>
                  <li><Link className="text-decoration-none" href="#">Ediciones Limitadas</Link></li>
                  <li><Link className="text-decoration-none" href="#">Combos</Link></li>
                </ul>
              </li>
              <li className="pb-3">
                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                  Precio
                  <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                </a>
                <ul id="collapseThree" className="collapse list-unstyled pl-3">
                  <li><Link className="text-decoration-none" href="#">Premium</Link></li>
                  <li><Link className="text-decoration-none" href="#">Gama Media</Link></li>
                  <li><Link className="text-decoration-none" href="#">Básicos</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Listado de Productos */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <Link className="h3 text-dark text-decoration-none mr-3" href="#">Todos</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="h3 text-dark text-decoration-none mr-3" href="#">Destilados</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="h3 text-dark text-decoration-none" href="#">Licores</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Destacados</option>
                    <option>Precio: Menor a Mayor</option>
                    <option>Precio: Mayor a Menor</option>
                    <option>Novedades</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Cuadrícula de Productos */}
            {productos.length === 0 ? (
              <div className="alert alert-warning text-center">
                No hay productos disponibles
              </div>
            ) : (
              <div className="row">
                {productos.map((producto) => (
                  <div key={producto._id} className="col-md-4 mb-4">
                    <div className="card mb-4 product-wap rounded-0 h-100">
                      <div className="card rounded-0">
                        <img 
                          className="card-img rounded-0 img-fluid" 
                          src={producto.imagen || '/assets/img/licor_default.jpg'} 
                          alt={producto.nombre}
                          style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <button className="btn btn-success text-white">
                                <i className="far fa-heart"></i>
                              </button>
                            </li>
                            <li>
                              <Link 
                                href={`/shop-single/${producto._id}`} 
                                className="btn btn-success text-white mt-2"
                              >
                                <i className="far fa-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <button className="btn btn-success text-white mt-2">
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link 
                          href={`/shop-single/${producto._id}`} 
                          className="h3 text-decoration-none"
                        >
                          {producto.nombre}
                        </Link>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                          <li>Stock: {producto.stock}</li>
                          <li className="pt-2">
                            <span className="product-color-dot color-dot-amber float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-clear float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-dark float-left rounded-circle ml-1"></span>
                          </li>
                        </ul>
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                          <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                          </li>
                        </ul>
                        <p className="text-center mb-0">${producto.precio.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Paginación */}
            <div className="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Marcas */}
      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Nuestras Marcas</h1>
              <p>
                Las mejores marcas internacionales de licores y destilados, seleccionadas para los paladares más exigentes.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                <div className="col-1 align-self-center">
                  <a className="h1" href="#brandCarousel" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left"></i>
                  </a>
                </div>

                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="brandCarousel" data-bs-ride="carousel">
                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          {[1, 2, 3, 4].map((brand) => (
                            <div key={brand} className="col-3 p-md-5">
                              <a href="#">
                                <img 
                                  className="img-fluid brand-img" 
                                  src={`/assets/img/marca_0${brand}.png`} 
                                  alt={`Marca ${brand}`} 
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1" href="#brandCarousel" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}