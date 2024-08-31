import { Fragment } from "react";
import Carusel from "./Carusel";
import Formulario from "../Formulario";
import Destacados from "./Destacados";


function Cuerpo()
{
    return(
        <>
   
        <main>
        <Carusel/>



      <section id="quienes-somos">
        <div class="section-content">
                <h2 class="section-title">Quienes Somos</h2>
                <p class="intro-text">Somos una inmobiliaria líder en el mercado, dedicada a satisfacer las necesidades
                    de nuestros clientes, ya sean particulares en busca de su hogar ideal o inversores en busca de
                    oportunidades inmobiliarias excepcionales.</p>

                <div class="info-grid">
                    <div class="info-item">
                        <h3>Ubicación</h3>
                        <p>Inmobiliaria Horizon tiene su sede en el centro de Lima, con alcance tanto local como
                            regional para cubrir las necesidades de nuestros clientes en áreas urbanas y suburbanas.</p>
                    </div>
                    <div class="info-item">
                        <h3>Visión</h3>
                        <p>Ser reconocidos como líderes en el sector inmobiliario por nuestra excelencia en servicio al
                            cliente, innovación y resultados sobresalientes.</p>
                    </div>
                    <div class="info-item">
                        <h3>Misión</h3>
                        <p>Facilitar transacciones inmobiliarias exitosas mediante un servicio personalizado y
                            transparente que satisfaga las necesidades individuales de cada cliente.</p>
                    </div>
                </div>

                <h3 class="section-title">Nuestros Valores</h3>
                <div class="values-grid">
                    <div class="value-item">
                        <h4>Profesionalismo</h4>
                        <p>Nos comprometemos a proporcionar un servicio de alta calidad con integridad y ética
                            profesional.</p>
                    </div>
                    <div class="value-item">
                        <h4>Confianza</h4>
                        <p>Construimos relaciones basadas en la confianza mutua con nuestros clientes y socios.</p>
                    </div>
                    <div class="value-item">
                        <h4>Innovación</h4>
                        <p>Adoptamos tecnologías y prácticas innovadoras para mejorar continuamente nuestros servicios.
                        </p>
                    </div>
                    <div class="value-item">
                        <h4>Compromiso</h4>
                        <p>Estamos comprometidos con la satisfacción del cliente y trabajamos arduamente para superar
                            expectativas.</p>
                    </div>
                </div>

                <div class="experience-list">
                    <h3>Nuestra Experiencia</h3>
                    <ul>
                        <li>Más de 10 años de experiencia combinada en el equipo directivo en la industria inmobiliaria.
                        </li>
                        <li>Hemos facilitado la compra, venta o alquiler de más de 500 propiedades residenciales y
                            comerciales en la región.</li>
                        <li>Tasa de satisfacción del cliente del 95%, basada en encuestas de satisfacción
                            post-transacción.</li>
                        <li>Implementación de tecnologías avanzadas como tours virtuales 3D y marketing digital
                            dirigido.</li>
                    </ul>
                </div>

            </div>
      </section>


      <section id="destacados">
      <div class="section-content">
                <h2 class="section-title">Servicios Destacados</h2>
                <div class="experience-grid">
                <Destacados/>
                </div>
            </div>
      </section>

      <section id="certificaciones">
      <div class="section-content">
                <h2 class="section-title">Experiencia y Certificaciones</h2>
                <div class="experience-grid">
                    <div class="experience-item">
                        <h3>Experiencia en el Mercado</h3>
                        <ul>
                            <li>Más de 10 años de experiencia combinada en el equipo directivo.</li>
                            <li>Más de 500 propiedades vendidas o alquiladas en la región.</li>
                        </ul>
                    </div>
                    <div class="experience-item">
                        <h3>Satisfacción del Cliente</h3>
                        <p>Tasa de satisfacción del cliente del 95%, basada en encuestas post-transacción.</p>
                    </div>
                    <div class="experience-item">
                        <h3>Innovación Tecnológica</h3>
                        <p>Implementación de tours virtuales 3D y marketing digital dirigido.</p>
                    </div>
                </div>
                <h3 class="section-title">Nuestras Certificaciones</h3>
                <div class="certifications-grid">
                    <div class="certification-item">
                        <h3>CGIP (2017)</h3>
                        <p>Certificación en Gestión Inmobiliaria Profesional.</p>
                    </div>
                    <div class="certification-item">
                        <h3>CVIA (2018)</h3>
                        <p>Certificación en Valoración Inmobiliaria Avanzada.</p>
                    </div>
                    <div class="certification-item">
                        <h3>CEPC (2018)</h3>
                        <p>Certificado de Especialista en Propiedades Comerciales.</p>
                    </div>
                    <div class="certification-item">
                        <h3>CECI (2019)</h3>
                        <p>Certificación en Ética y Cumplimiento Inmobiliario.</p>
                    </div>
                </div>
            </div>
      </section>

      <section id="servicios">
      <div class="section-content">
                <h2 class="section-title">Nuestros Servicios</h2>
                <div id="imagen-ciudad"></div>
                <div class="services-grid">
                    <div class="service-item">
                        <h3>Venta de Propiedades</h3>
                        <p>Ofrecemos una amplia gama de propiedades residenciales y comerciales para la venta.</p>
                    </div>
                    <div class="service-item">
                        <h3>Alquiler de Propiedades</h3>
                        <p>Opciones de alquiler a corto y largo plazo para apartamentos y locales comerciales.</p>
                    </div>
                    <div class="service-item">
                        <h3>Asesoramiento Personalizado</h3>
                        <p>Asesoramiento experto en el proceso de compra, venta o alquiler de propiedades.</p>
                    </div>
                    <div class="service-item">
                        <h3>Valoración de Propiedades</h3>
                        <p>Realizamos valoraciones precisas para garantizar transacciones justas y transparentes.</p>
                    </div>
                </div>
            </div>
      </section>
     

      <section id="contacto">
      <div class="section-content">
               <Formulario/>
       
            </div>
      </section>

      <div className="redes">
        <a href="https://www.facebook.com/profile.php?id=100082635241911" target="_blank" rel="noopener noreferrer"><img src="imagen/Icono/facebook.png" width="40" alt="Facebook" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="imagen/Icono/instagram.png" width="40" alt="Instagram" /></a>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj4qIGW47L4AhVyDtQKHbvZALIQFnoECCIQAQ&url=http%3A%2F%2Fprueba-srpm.apese.org%2Flibro-de-reclamaciones%2F&usg=AOvVaw0JegY0rCmiIz5thV_Z5OR8" target="_blank" rel="noopener noreferrer"><img src="imagen/Icono/libro.png" width="40" alt="Libro de reclamaciones" /></a>
      </div>
    </main>
   
        </>
    )

}
export default Cuerpo;