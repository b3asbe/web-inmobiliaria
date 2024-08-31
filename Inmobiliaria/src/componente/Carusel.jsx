import Carousel from 'react-bootstrap/Carousel';

function Carusel() {
  return (
    <Carousel>
      <Carousel.Item interval={30000}>
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Inmobiliaria Horizon</h1>
          <p>Nos especializamos en la venta y alquiler de propiedades residenciales y comerciales en áreas urbanas y suburbanas. Proporcionando un servicio personalizado que satisfaga las necesidades específicas de cada cliente.</p>
          <a href="#contacto" className="btn">Contáctanos</a>
        </div>
      </section>
      </Carousel.Item>
   
      <Carousel.Item interval={30000}>
      <section id="inicio" className="hero2">
        <div className="hero-content">
          <h1>Inmobiliaria Horizon</h1>
          <p>Nos especializamos en la venta y alquiler de propiedades residenciales y comerciales en áreas urbanas y suburbanas. Proporcionando un servicio personalizado que satisfaga las necesidades específicas de cada cliente.</p>
          <a href="#contacto" className="btn">Contáctanos</a>
        </div>
      </section>
   
      </Carousel.Item>

      <Carousel.Item interval={30000}>
      <section id="inicio" className="hero3">
        <div className="hero-content">
          <h1>Inmobiliaria Horizon</h1>
          <p>Nos especializamos en la venta y alquiler de propiedades residenciales y comerciales en áreas urbanas y suburbanas. Proporcionando un servicio personalizado que satisfaga las necesidades específicas de cada cliente.</p>
          <a href="#contacto" className="btn">Contáctanos</a>
        </div>
      </section>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;