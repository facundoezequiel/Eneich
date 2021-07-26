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
        logolink="/english"
      />
      {/* Bio Container */}
      <div id="bioContainer">
        {/* Button Title Container */}
        <div id="titleContainer">
          <div>
            {/* Back Button */}
            <NextLink href="/english">
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
              DJ & MUSIC PRODUCER
            </p>
          </div>
        </div>
        {/* Gradient Line */}
        <div id="gradientLine"></div>
        {/* Paragraph Container */}
        <div id="pContainer" className="animate__animated animate__fadeIn">
          {/* Bio Image */}
          <img
            src="images/bio/bioimage.jpg"
            draggable="false"
            alt="Nicolás Hirschfeld"
          />
          {/* Bio Text */}
          <p>
            Nicolás Hirschfeld (
            <NextLink href="https://www.google.com/maps/place/San+Antonio+de+Areco,+Provincia+de+Buenos+Aires/@-34.2499035,-59.4971243,13z/data=!3m1!4b1!4m5!3m4!1s0x95bb9533fc84b0c1:0x33d6b6bd3a65b27f!8m2!3d-34.2436166!4d-59.4738665">
              <a target="_blank">San Antonio de Areco</a>
            </NextLink>
            , 1993), is an argentinian DJ and music producer.<br></br>
            <br></br>He started his musical career at the age of 11 when his
            parents, seeing the interest that music generated in him, gave him a
            Yamaha key piano so that he could learn how to use it. At the age of
            14, he discovered that what he was truly passionate about was the
            dance floor, and began to adventure into the world of DJ. Thanks to
            living in a small town, he had the opportunity to learn at Miguel
            “Chango” Cárdenas's local company about the art of being a DJ and
            everything around it. That´s hpw he began to play in social events,
            bars and discos in the city and surroundings. At the age of 18, he
            began to play at social events in the city of Buenos Aires.
            <br></br>
            <br></br>Not satisfied with this, and faced with the need to expand
            his knowledge, he began to study Musical Production at Sonar Pro
            School, in the city of Pilar (Bs. As.). There he meets his teacher,
            Cristian Gandini, with who he would meet again several years later
            to create his first EP, "
            <NextLink href="https://www.youtube.com/watch?v=-_nupRfjkWw">
              <a target="_blank">Overspeed</a>
            </NextLink>
            ".<br></br>
            <br></br>After that he begins to study music teaching at the San
            Antonio de Areco art school, completing 3 years of the career. By
            that time, he decided to move permanently to Buenos Aires, the city
            where he currently resides. There he began his studies in "Digital
            Arts" at the National University of Quilmes, giving priority to
            subjects such as "Sound Design" or "Synthesis".<br></br>
            <br></br>As a DJ, he has worked for companies such as{" "}
            <NextLink href="https://www.sarapura.com/">
              <a target="_blank">Grupo Sarapura</a>
            </NextLink>{" "}
            or{" "}
            <NextLink href="https://www.patozambranodjs.com.ar/">
              <a target="_blank">Pato Zambrano DJ's</a>
            </NextLink>
            , under the guidance of his partner{" "}
            <NextLink href="https://www.instagram.com/laplacette.ts/">
              <a target="_blank">Ezequiel Laplacette</a>
            </NextLink>
            . Already in 2020, due to restrictions due to the pandemic and the
            impossibility of playing live events, he made the decision to focus
            on music production. That is why he gets in touch with{" "}
            <NextLink href="https://www.gandinimusic.com/">
              <a target="_blank">Gandini</a>
            </NextLink>
            , who was his teacher a few years ago, and takes up his studies
            again. Gandini motivates him to create his own track, since the
            original idea was to make a remix of the song “Keep on Moving”, by
            the Norwegian artist Hanne Leland. As classes went by, the song was
            taking shape, and the release of this in EP format was planned,
            which included the "Original Mix" and a "Remix" by Gandini himself.
            From these classes also emerges the name "Eneich" as an artist, easy
            to name and recognize worldwide.
            <br></br>
            <br></br>
            Eneich is currently working on new projects, experimenting with
            syntheses and different musical genres.
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
        logolink="/english"
      />
    </BioespengContainer>
  );
}

export default Bioeng;
