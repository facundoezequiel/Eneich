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
            Gallardo es un conocidísimo jugador de fútbol argentino que se
            desempeña en el medio campo. Posee una gran trayectoria en el fútbol
            europeo y en la Selección Nacional. Marcelo Daniel Gallardo nació el
            18 de Enero de 1976 en Merlo, provincia de Buenos Aires, Argentina.
            Ya desde pequeño “El Muñeco” como lo bautizaron cariñosamente sus
            padres por ser pequeño, demostró un gran amor y devoción por el
            fútbol. Por esta razón su padre lo anotó en un pequeño club donde
            practicó durante su infancia, el Estrella de Maldonado. Allí
            Gallardo se hizo amigo del balón muy rápidamente y demostró que era
            muy difícil quitarle el mismo una vez que empezaba a jugar. Se
            desempeñó como mediocampista y armador de jugadas, pues posee una
            capacidad de dribleo que es casi envidiable. Esta característica de
            su juego no pasó desapercibida por los buscadores de talentos del
            River Plate, quienes decidieron darle la posibilidad de incluirlo en
            las divisiones inferiores del club. Poco tiempo después Gallardo se
            mudó a la Capital Federal y pasó por cada una de las divisiones
            menores del club para llegar a su gran debut. Éste se produjo el 18
            de Abril de 1993 cuando “El muñeco” solo contaba con 16 años. Quien
            decidió incluirlo en el equipo que le ganó 2 a 0 a Newell’s Old
            Boys, fue nada menos que Daniel Passarella, quien posteriormente
            guardó un gran cariño por el jugador. A partir de ese momento para
            Gallardo en el River Plate fue todo felicidad, puesto que fue uno de
            los mayores partícipes de la gloria del equipo en los ’90. El mismo
            año de su ingreso, el River Plate se consagró campeón del Torneo
            Apertura 1993 y al año siguiente una vez más en el Torneo Apertura
            1994. En ambos casos las apariciones de Gallardo lo fueron plantando
            como uno de esos jugadores de quienes no se podía prescindir, pues
            armaban casi todo el juego. Posteriormente llegó el triunfo en la
            Copa Libertadores de América, en 1996. Uno de los momentos más
            recordados por los simpatizantes del River Plate. Fue por este
            tiempo que Gallardo compartió equipo con algunos de los mejores
            jugadores de la década como ser Enzo Francescoli, Gabriel Batistuta,
            Hernán Crespo, Juan Pablo Sorín, Matias Almeyda, Ángel Comizzo,
            Julio Cruz, Ariel Ortega, Marcelo Salas, Germán Burgos y muchos
            otros que vendrían posteriormente. Luego de toda la algarabía de la
            Copa Libertadores, los triunfos del River Plate no cesaban: el
            Torneo Apertura 1996 también quedó en el “Monumental”. En 1997
            Gallardo era ya una figura indiscutible en el ambiente del River, y
            de su mano como capitán del equipo, la institución alcanzó el Torneo
            Clausura 1997, la Supercopa y el Torneo Apertura del mismo año. En
            1998 fue convocado para jugar con el Seleccionado de Fútbol
            Argentino para el mundial de Francia de ese año. Lamentablemente
            para él, una serie de lesiones le impidieron disfrutar de todos los
            encuentros, aunque participó en las victorias contra Japón, Jamaica,
            Croacia e Inglaterra. También en el '98 se completó su transferencia
            al Mónaco de Francia al cual llegó pisando fuerte y marcando la
            superioridad de su fútbol. Este equipo gracias a Gallardo consiguió
            el triunfo de la Liga de Francia y la Copa de Francia en la
            temporada 1999/2000. A fines del 2002, “el muñeco” tuvo una
            diferencia de criterios con el entonces entrenador del equipo, y al
            poco tiempo volvió a jugar al River Plate. Ese mismo año fue miembro
            del equipo Argentino que disputó la Copa Mundial en Korea-Japón,
            pero una vez más las lesiones se hicieron presentes y no pudo
            disputar muchos partidos. En el 2004 levantó su último trofeo con la
            camiseta roja y blanca, el Torneo Clausura 2004 junto a la nueva
            camada de estrellas riverplantenses: Fernando Cavenaghi, Ariel
            Ortega, Andrés D´Alessandro, Pablo Aimar, Javier Saviola, Javier
            Mascherano, Luis González, German Lux y Eduardo Coudet entre otros.
            A finales del 2006 y comienzos del 2007 su pase al Paris
            Saint-Germain Football Club fue concretado y juega ahí hasta el
            momento.
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
