import React from "react";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import News from "../../components/news";
import { default as NextLink } from "next/link";
import { BioespengContainer } from "./styled";

function Bioesp() {
  return (
    <BioespengContainer>
      {/* Header Component */}
      <Header
        design="bio"
        active="esp"
        linkeng="/biography"
        linkesp="/biografia"
        logolink="/"
      />
      {/* Bio Container */}
      <div id="bioContainer">
        {/* Button Title Container */}
        <div id="titleContainer">
          <div>
            {/* Back Button */}
            <NextLink href="/">
              <a id="backButton" className="animate__animated animate__fadeIn">
                <img
                  src="images/icons/flechaWhite.svg"
                  draggable="false"
                  alt=""
                />
                <span>INICIO</span>
              </a>
            </NextLink>
            {/* Title */}
            <h2 className="animate__animated animate__fadeIn">
              Nicolás Hirschfeld
            </h2>
            {/* Subtitle */}
            <p className="animate__animated animate__fadeIn">
              PRODUCTOR DE HOUSE MUSIC & DJ
            </p>
          </div>
        </div>
        {/* Gradient Line */}
        <div id="gradientLine"></div>
        {/* Paragraph Container */}
        <div id="pContainer" className="animate__animated animate__fadeIn">
          <p>
            Nicolás Hirschfeld (San Antonio de Areco, 1993), es un DJ y
            productor musical Argentino.<br></br>
            <br></br>Inició su carrera musical a los 11 años cuando sus padres,
            viendo el interés que le generaba la música, le regalaron un teclado
            Yamaha para que aprendiera piano. Ya con 14 años, descubrió que lo
            que verdaderamente le apasionaba era la pista de baile, y comenzó a
            incursionar en el mundo del DJ. Gracias a vivir en una ciudad
            pequeña, tuvo la oportunidad de aprender en la empresa local de
            Miguel “Chango” Cárdenas sobre el arte de ser DJ y todo el mundo que
            lo rodea. Así fue comenzando a tocar en eventos sociales, bares y
            discotecas de la ciudad y alrededores. Ya con 18 años, empieza a
            tocar en eventos sociales en la ciudad de Buenos Aires.<br></br>
            <br></br>No conforme con esto, y ante la necesidad de expandir sus
            conocimientos, comienza a estudiar Producción Musical en Sonar Pro
            School, de la ciudad de Pilar (Bs. As.). Allí conoce a su profesor,
            Cristian Gandini, con el que varios años después se reencontraría
            para crear su primer EP, “Overspeed”.
            <br></br>
            <br></br>Luego comienza a estudiar profesorado de música en la
            escuela de arte de San Antonio de Areco, realizando 3 años de la
            carrera. Para ese entonces, decide mudarse definitivamente a Buenos
            Aires, ciudad en donde reside actualmente. Allí inicia sus estudios
            en “Artes Digitales” en la Universidad Nacional de Quilmes, dando
            prioridad a materias como “Diseño Sonoro” o “Síntesis”.<br></br>
            <br></br>Como DJ, ha trabajado para empresas como Grupo Sarapura o
            Pato Zambrano DJ’s, de la mano de su colega Ezequiel Laplacette. Ya
            en el año 2020, debido a las restricciones por la pandemia y ante la
            imposibilidad de tocar en eventos en vivo, toma la decisión de
            enfocarse en la producción musical. Es por ello por lo que se pone
            en contacto con Gandini, quien fue su profesor hace unos años, y
            retoma los estudios. Gandini lo motiva a crear un track propio, ya
            que la idea original era realizar un remix de la canción “Keep on
            Moving”, de la artista noruega Hanne Leland. Con el correr de las
            clases, la canción iba tomando forma, y se planeó el lanzamiento de
            esta en formato EP, que incluía el “Original Mix” y un “Remix” del
            propio Gandini. De estas clases también surge el nombre “Eneich”
            como artista, fácil de nombrar y reconocer a nivel mundial.<br></br>
            <br></br>
            Eneich actualmente se encuentra trabajando en nuevos proyectos,
            experimentando con síntesis y distintos géneros musicales .
          </p>
        </div>
      </div>
      {/* Contact Component */}
      <Contact />
      {/* News Component */}
      <News />
      {/* Footer Component */}
      <Footer
        active="esp"
        linkeng="/biography"
        linkesp="/biografia"
        logolink="/"
      />
    </BioespengContainer>
  );
}

export default Bioesp;
