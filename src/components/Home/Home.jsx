import React from "react";
import styled from "styled-components";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <HomeStyled className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.section`
  .home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  }
`;
