import React from "react";
import styled from "styled-components";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <HomeStyled className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.section`
  .home__container {
    row-gap: 7rem;
  }

  .home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  }

  .home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }

  .home__social-icon {
    font-size: 1.25rem;
    color: var(--title-color);
    /* transition: 0.3s; */

    &:hover {
      color: var(--title-color-dark);
      scale: 1.1;
    }

    .home__social-icon-label {
      margin-left: 0.4rem;
      font-size: var(--small-font-size);
      color: var(--text-color);
    }
  }

  .home__title {
    font-size: var(--big-font-size);
    margin-bottom: var(--mb-0-25);
  }

  .home__hand {
    width: 38px;
    height: 38px;
    margin-left: 0.4rem;
  }

  .home__subtitle {
    position: relative;
    font-size: var(--h3-font-size);
    font-weight: var(--font-normal);
    margin-bottom: var(--mb-1);
    padding-left: 5.4rem;

    &::before {
      content: "";
      position: absolute;
      width: 70px;
      height: 1px;
      background-color: var(--text-color);
      left: 0;
      top: 1rem;
    }
  }

  .home__description {
    max-width: 400px;
    margin-bottom: var(--mb-3);
  }

  .home__img {
    background: url(../../assets//picture-profile.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
    order: 1;
    justify-self: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    /* animation: profile__animate 8s ease-in-out infinite 1s; */
  }

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  .home__scroll {
    margin-left: 9.25rem;
  }

  .wheel {
    animation: scroll 2s ease infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(3.75rem);
    }
  }

  .home__scroll-name {
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
    margin-left: 2px;
  }

  .home__scroll-arrow {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .home__button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    font-size: var(--small-font-size);
  }

  /*=============== BREAKPOINTS ===============*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .home__content {
      grid-template-columns: 100px repeat(2, 1fr);
      column-gap: 1.25rem;
    }

    .home__title {
      font-size: var(--h1-font-size);
    }

    .home__hand {
      width: 26px;
      height: 26px;
    }

    .home__subtitle {
      padding-left: 3.75rem;
      margin-bottom: var(--mb-1);
    }

    .home__subtitle::before {
      width: 42px;
      top: 0.8rem;
    }

    .home__description {
      max-width: initial;
      margin-bottom: var(--mb-2-5);
    }

    .home__img {
      width: 250px;
      height: 250px;
      box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
    }

    .home__scroll {
      margin-left: 7.5rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .home__content {
      /* grid-template-columns: 0.5fr 3fr; */
      display: flex;
      flex-direction: column;
      padding-top: 3.5rem;
    }

    .home__social {
      display: flex;
      flex-direction: row;
      justify-content: center;
      column-gap: 1.5rem;
    }

    .home__img {
      order: initial;
      justify-self: center;
    }

    .home__data {
      grid-column: 1/3;
      display: flex;
      flex-direction: column;
      align-items: center;

      .home__description {
        width: 70%;
        text-align: center;
      }
    }

    .home__img {
      box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
      width: 200px;
      height: 200px;
    }

    .home__scroll {
      display: none;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .home__img {
      width: 180px;
      height: 180px;
    }

    .home__hand {
      width: 22px;
      height: 22px;
    }
  }
`;
