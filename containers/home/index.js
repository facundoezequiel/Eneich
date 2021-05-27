import React from "react";
import Header from "../../components/header"
import Introduction from "../../components/introduction";
import News from "../../components/news"
import Biography from "../../components/biography";
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header></Header>
      {/* Introduction Section */}
      <Introduction></Introduction>
      {/* News Section */}
      <News></News>
      {/* Biography Section */}
      <Biography></Biography>
    </HomeContainer>
  );
}

export default Home;
