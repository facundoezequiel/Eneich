import React from "react";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import News from "../../components/news";
import { default as NextLink } from "next/link";
import { BioespengContainer } from "./styled";

function Bioeng() {
  return (
    <BioespengContainer>
      {/* Header Component */}
      <Header
        design="bio"
        active="eng"
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
                <span>HOME</span>
              </a>
            </NextLink>
            {/* Title */}
            <h2 className="animate__animated animate__fadeIn">
              Nicolás Hirschfeld
            </h2>
            {/* Subtitle */}
            <p className="animate__animated animate__fadeIn">
              HOUSE MUSIC PRODUCER & DJ
            </p>
          </div>
        </div>
        {/* Gradient Line */}
        <div id="gradientLine"></div>
        {/* Paragraph Container */}
        <div id="pContainer" className="animate__animated animate__fadeIn">
          <p>
            Gallardo is a well-known Argentine soccer player who plays in the
            midfield. He has a great career in soccer European and in the
            National Team. Marcelo Daniel Gallardo was born on January 18, 1976
            in Merlo, province of Buenos Aires, Argentina. Since he was little,
            "El Muñeco" as he was affectionately baptized by his parents because
            he was small, he showed great love and devotion for the football.
            For this reason his father wrote him down in a small club where he
            practiced during his childhood, the Estrella de Maldonado. There
            Gallardo befriended the ball very quickly and showed that he was
            very difficult to remove the same once he started playing. I know
            played as a midfielder and playmaker, as he has a dribbling ability
            that is almost enviable. This feature of his game did not go
            unnoticed by the talent scouts of the River Plate, who decided to
            give it the possibility of including it in the lower divisions of
            the club. A short time later, Gallardo moved to the Federal Capital
            and went through each of the divisions under the club to get to the
            big debut of him. This one occurred on 18 April 1993 when "The doll"
            was only 16 years old. Who decided to include him in the team that
            beat Newell’s Old 2-0 Boys, it was none other than Daniel
            Passarella, who later he kept a great affection for the player. From
            that moment to Gallardo at River Plate was all happiness, since he
            was one of the biggest participants in the glory of the team in the
            '90s. the same year of his admission, River Plate became champion of
            the Tournament Apertura 1993 and the following year once again in
            the Apertura Tournament 1994. In both cases Gallardo's appearances
            were planting him as one of those players whom he could not do
            without, because they put together most of the game. Later came the
            triumph in the Copa Libertadores de América, in 1996. One of the
            most remembered by River Plate supporters. It was for this time
            Gallardo shared a team with some of the best players of the decade
            such as Enzo Francescoli, Gabriel Batistuta, Hernán Crespo, Juan
            Pablo Sorín, Matias Almeyda, Ángel Comizzo, Julio Cruz, Ariel
            Ortega, Marcelo Salas, Germán Burgos and many others that would come
            later. After all the hubbub of the Copa Libertadores, the triumphs
            of River Plate did not stop: the Opening Tournament 1996 also
            remained in the "Monumental". In 1997 Gallardo was already an
            indisputable figure in the River environment, and hand in hand with
            him as team captain, the institution reached the Tournament Clausura
            1997, the Super Cup and the Opening Tournament of the same year. On
            1998 he was called up to play with the National Soccer Team
            Argentine for the World Cup in France that year. Unfortunately For
            him, a series of injuries prevented him from enjoying all the
            encounters, although he participated in victories against Japan,
            Jamaica, Croatia and England. Also in '98 his transfer was completed
            to Monaco of France where he came stomping and marking the soccer
            superiority of him. This team, thanks to Gallardo, got the triumph
            of the French League and the French Cup in the 1999/2000 season. At
            the end of 2002, "the doll" had a difference of criteria with the
            then coach of the team, and at the shortly after he returned to play
            at River Plate. That same year he was a member of the Argentine team
            that played the World Cup in Korea-Japan, but once again the
            injuries were present and he could not play many games. In 2004 he
            lifted his last trophy with the red and white jersey, the 2004
            Clausura Tournament together with the new riverplantenses litter of
            stars: Fernando Cavenaghi, Ariel Ortega, Andrés D´Alessandro, Pablo
            Aimar, Javier Saviola, Javier Mascherano, Luis González, German Lux
            and Eduardo Coudet among others. At the end of 2006 and beginning of
            2007 the transfer from him to Paris Saint-Germain Football Club was
            finalized and he plays there until moment.
          </p>
        </div>
      </div>
      {/* Contact Component */}
      <Contact />
      {/* News Component */}
      <News />
      {/* Footer Component */}
      <Footer
        active="eng"
        linkeng="/biography"
        linkesp="/biografia"
        logolink="/"
      />
    </BioespengContainer>
  );
}

export default Bioeng;
