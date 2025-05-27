// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export default function PaginaDeContacto() {
  return (
    <>
      {/* Sección Principal */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contáctanos</h1>
          <p>
            ¿Tienes dudas sobre nuestros licores? Escríbenos y con gusto te atenderemos.
            Descubre el arte del buen beber.
          </p>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="container py-5">
        <div className="row py-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
}