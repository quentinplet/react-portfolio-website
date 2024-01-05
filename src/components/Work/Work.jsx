import React from "react";
import styled from "styled-components";
import Works from "./Works";

const Work = () => {
  return (
    <WorkStyled className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </WorkStyled>
  );
};

export default Work;

const WorkStyled = styled.section`
  .work__filters {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.75rem;
    margin-bottom: var(--mb-2);
  }

  .work__item {
    cursor: pointer;
    color: var(--title-color);
    padding: 0.25rem 0.75rem;
    font-weight: var(--font-medium);
    border-radius: 0.5rem;
    text-transform: capitalize;
  }

  .work__item:hover {
    background-color: var(--title-color);
    color: var(--container-color);
  }

  .work__container {
    grid-template-columns: repeat(2, max-content);
    gap: 3rem;
    justify-content: center;
  }

  .work__card {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 1.25rem;
  }

  .work__img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 200px;
    border-radius: 1rem;
    margin-bottom: var(--mb-1);
  }

  .work__img:hover {
    transform: scale(1.01);
    filter: brightness(0.95);
  }

  .work__title {
    font-size: var(--normal-dont-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  .work__button {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }

  .work__button-icon {
    font-size: 1rem;
    transition: 0.4s;
  }

  .work__button:hover .work__button-icon {
    transform: translateX(0.25rem);
  }

  /*active work*/
  .active-work {
    background-color: var(--title-color);
    color: var(--container-color);
  }

  /*=============== BREAKPOINTS ===============*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .work__container {
      gap: 1.25rem;
    }

    .work__card {
      padding: 1rem;
    }

    .work__img {
      margin-bottom: 0.75rem;
    }

    .work__title {
      margin-bottom: 0.25rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .work__container {
      grid-template-columns: max-content;
    }
  }

  @media screen and (max-width: 576px) {
    .work__container {
      grid-template-columns: 1fr;
    }

    .work__img {
      width: 100%;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .work__item {
      font-size: var(--small-font-size);
    }

    .work__filters {
      column-gap: 0.25rem;
    }
  }
`;
