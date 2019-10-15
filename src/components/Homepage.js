import React from "react";
import "../styles/grid.css";
import "../styles/nav.css";
import "../styles/general.css";
import "../styles/button.css";
import "../styles/thumbnail.css";
import "../styles/text.css";

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
          <div class="column background"></div>
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
          <div className="beforeAfter">
            Before/After Picture -- Add Carrousel
          </div>
          <div className="beforeAfter">Before/After Picture</div>
          <div className="beforeAfter">Before/After Picture</div>
        </div>
        <h2 className="question">
          ¿Como funciona mi servicio de Entrenamiento Personal Online?
        </h2>
        <div className="grid four">
          <div className="red hi">
            <i class="fas fa-bullseye"></i>
            <h3>1. Definición de Objetivos</h3>
            <p>
              Una vez definidos los objetivos y tras suscribirte al servicio,
              deberás rellenar el cuestionario inicial con el que conoceré tu
              estado y nivel físico inicial, composición corporal, hábitos,
              estilo de vida, historial de lesiones, y más factores, para poder
              prepararte el plan de entrenamiento 100% personalizado que te
              ayudará a alcanzar tu meta en el menor tiempo
            </p>
          </div>
          <div className="red1">
            <i class="far fa-copy"></i>

            <h3>2. Rutinas de Entrenamiento + Dieta Mensual</h3>
            <p>
              En un plazo de 48 a 72 horas te enviaré un plan de entrenamiento a
              medida para tu primer mes, compuesto por rutinas de ejercicios
              para hacer en casa o en el gimnasio y con todo tipo de detalles y
              explicaciones de ejecución en texto y visual y un plan de dieta a
              medida que te ayudará a perder grasa y recuperar tu mejor forma
              física. Podrás descargar todo y acceder desde móvil, tablet y PC.
            </p>
          </div>
          <div className="red2">
            <i class="fas fa-chart-bar"></i>
            <h3>3. Asesoría y Seguimiento</h3>
            <p>
              Realizaré el seguimiento de tu evolución física cada 15 días y
              realizaré las adaptaciones necesarias cada mes en el programa en
              función de como evolucionas. Mídete, registra tus medidas y sube
              tus fotografías. Te asesoro y respondo a todas las preguntas que
              tengas siempre que lo necesites por el chat o email. ¡Busco
              feedback!
            </p>
          </div>
          <div className="red3">
            <i class="far fa-heart"></i>
            <h3>4. ¡Gana en Salud y Bienestar!</h3>
            <p>
              Este plan de entrenamiento está pensado principalmente para
              mujeres que deseen recuperar su mejor forma física y perder grasa
              de forma saludable en poco tiempo con un programa preparado a
              medida, realizando ejercicio cuando y donde deseen, para ganar en
              salud y bienestar
            </p>
          </div>
        </div>
        <h2 className="question">
          «Busco un plan que me ayude a ponerme en forma y perder grasa en pocas
          semanas, ¿este servicio me puede ayudar?»
        </h2>
        <div className="pad">
          <p className="text">
            Está demostrado que
            <strong>
              {" "}
              una planificación de entrenamiento + dieta es mucho más efectiva
              para la pérdida de grasa y eliminar la celulitis{" "}
            </strong>
            o cualquier objetivo físico que optar únicamente por realizar solo
            ejercicio sin una programación adecuada o seguir temporalmente una
            dieta sin tener en cuenta tu composición corporal, (dietas milagro,
            Herbalife, etc) pasando hambre y sin tener en cuenta el efecto
            rebote que estas siempre generan al hacer que disminuya tu
            metabolismo y por lo tanto vuelvas a aumentar de peso a medio plazo.
            Lógicamente se pueden conseguir resultados y siempre va a ser mejor
            realizar ejercicio que llevar una vida sedentaria, pero si lo que
            buscas es un objetivo y conseguir resultados en menos tiempo, ¡la
            combinación de ambas es la mejor opción para ti! Eso sumado al
            <strong>
              {" "}
              asesoramiento, control de tu evolución y motivación{" "}
            </strong>
            que te pueden proporcionar alguien con experiencia en asesoramiento
            físico, hace que las probabilidades de conseguir resultados aumenten
            forma considerable.
          </p>
        </div>
        <div className="tomato">
          <div className="grid double">
            <div className="examples"></div>
            <div className="examples"></div>
          </div>
        </div>{" "}
        <div className="pad red">
          <h2 className="subtitle">
            <i>
              «Busco un plan que me ayude a ponerme en forma y perder grasa en
              pocas semanas, ¿este servicio me puede ayudar?»
            </i>
          </h2>

          <p className="text center">
            Aunque también realizo el servicio de entrenamiento para hombres, lo
            que más recibo son solicitudes de mujeres de todas las edades que
            quieren recibir un programa para
            <strong> la pérdida de grasa y eliminación de celulitis </strong>,
            así como de tonificación muscular. También clientas quieren
            recuperar la forma después del<strong> embarazo</strong>, y mujeres
            que durante el embarazo quieren mantenerse activas desde casa. Yo
            también he sido mamá y mantener la forma y realizar actividad física
            durante este periodo es imprescindible para recuperarlo más rápido
            tras el parto. También si necesitas perder peso y llegar bien a esa
            ocasión especial como<strong>tu boda</strong> o la de una amiga, o
            estar mejor durante las vacaciones, un plan de entrenamiento
            personalizado específico te ayudará a conseguir los resultados que
            deseas conseguir en menos tiempo.
          </p>
          <div className="cta">
            Explícame tu objetivo y logremos tu objetivo juntas
          </div>
          <button type="button" className="white">
            Contacta hoy conmigo!
          </button>
        </div>
        <div className="grid panel">
          <h2 className="panel">Empieza hoy!</h2>
          <div className="program">
            <h3 className="panel">Plan Entrenamiento Personal de 90 Días</h3>
            <span className="panel">175€</span>
            <p className="panel">
              Mi programa incluye durante 3 meses incluye para cualquier
              objetivo:
            </p>
            <ul className="panel">
              <li>
                Rutinas de entrenamiento personalizadas para cada semana con
                pesas y/o peso corporal para realizar en casa, al aire libre o
                en el gym
              </li>
              <li>Seguimiento, control y registro de medidas</li>
              <li>
                Análisis fotográfico semanal/quincenal para ayudar a realizar un
                seguimiento de tu progreso
              </li>
              <li>
                Asesoramiento personal por chat y correo electrónico ilimitado
                para preguntas y solventar dudas
              </li>
            </ul>
            <button type="button">Contratar plan de entrenamiento</button>
          </div>
        </div>
      </body>
    );
  }
}

export default Homepage;
