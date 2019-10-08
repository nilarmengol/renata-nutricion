import React from "react";
import "../styles/general.css";

class Homepage extends React.Component {
  render() {
    return (
      <body>
        <div class="topnav">
          <a href="#news">Contactar</a>
          <a href="#contact">Servicios Nutrición</a>
          <a href="#about">Testimonios</a>
          <a href="#about">Quién soy</a>
          <a href="#about">Cómo funciona</a>
          <a className="logo" href="#about">
            Renata Scassi
          </a>
        </div>
        <div className="grid two medium">
          <div class="background"></div>
          <div class="column">
            <div>
              <h2>SOY RENATA SCASSI</h2>
              <h6>
                Nutricionista Personal Licenciada en Dietética y Nutrición
              </h6>
            </div>
            <div className="highlight">
              <h1>
                ¿Quieres perder grasa y recuperar tu forma física en{" "}
                <u>90 días</u>?
              </h1>
              <h1>¡Te ayudo a conseguirlo!</h1>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Homepage;
