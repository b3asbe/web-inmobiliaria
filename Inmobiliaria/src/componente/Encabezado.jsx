import { Fragment } from "react";

function Encabezado()
{
    return (

        <>
        <header>
      <div className="header-content">
        <div className="logo">INMOBILIARIA HORIZON</div>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#quienes-somos">Quienes Somos</a></li>
            <li><a href="#certificaciones">Experiencia y Certificaciones</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
        </>
    )
}
export default Encabezado;