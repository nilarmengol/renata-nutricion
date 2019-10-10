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
            <div class="description">
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
            <div className="grid two">
              <div className="smallColumn grey">
                <h3>Transforma Tu Cuerpo En 90 Días</h3>
                <p>
                  Te muestro QUE y COMO debes hacerlo exactamente para conseguir
                  resultados. Prepararé un plan de rutinas de ejercicios para
                  cada semana 100% personalizado para realizar en casa o en el
                  gimnasio, según necesites. Realizo el control y seguimiento de
                  tu evolución de forma contínua y recibes la máxima asesoría
                  para las dudas que tengas en cualquier aspecto de tu plan.
                </p>
                <button type="button">Saber más</button>
              </div>
              <div className="smallColumn darkGrey">
                <h3>Dieta Personalizada y Asesoría Nutricional</h3>

                <p>
                  Recibirás además un plan de dieta cada mes para combinar con
                  tus rutinas, adaptado totalmente a tus necesidades y con todos
                  los detalles: peso, porcentajes de macros y calorías diarias,
                  que te ayudará a complementar con tu entrenamiento para que
                  puedas alcanzar tus objetivos físicos en el menor tiempo
                  posible. Puedes estar tranquil@, ¡no pasarás hambre!
                </p>
                <button type="button">Saber más</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid three">
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
        </div>
      </body>
    );
  }
}

export default Homepage;
