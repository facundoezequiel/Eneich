import React from "react";
import Ticker from "react-ticker";
import { NewsContainer } from "./styled";

function News({ active }) {
  return (
    <NewsContainer>
      <Ticker>
        {({ index }) => (
          <>
            {active === "esp" ? (
              <p>Overspeed - Eneich ft. Gandini. Escuchalo ahora.</p>
            ) : (
              <p>Overspeed - Eneich ft. Gandini. Listen now.</p>
            )}
          </>
        )}
      </Ticker>
    </NewsContainer>
  );
}

export default News;
