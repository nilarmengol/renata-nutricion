import React from "react";
import "../styles/general.css";

class Homepage extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Homepage;
