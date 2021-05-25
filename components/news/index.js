import React from "react";
import Ticker from "react-ticker";
import { NewsContainer } from "./styled";

function News() {
  return (
    <NewsContainer>
      <Ticker>
        {({ index }) => (
          <>
            <p>Overspeed - Eneich ft. Gandini. Live now on Spotify.</p>
          </>
        )}
      </Ticker>
    </NewsContainer>
  );
}

export default News;
