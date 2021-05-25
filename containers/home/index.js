import React from "react";
import Header from "../../components/header"
import Introduction from "../../components/introduction";
import News from "../../components/news"
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header></Header>
      {/* Introduction */}
      <Introduction></Introduction>
      {/* News */}
      <News></News>
    </HomeContainer>
  );
}

export default Home;
