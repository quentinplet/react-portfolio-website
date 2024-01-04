import React from "react";
import styled from "styled-components";

const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <ScrollUpStyled href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </ScrollUpStyled>
  );
};

export default ScrollUp;

const ScrollUpStyled = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: -20%;
  background-color: var(--title-color);
  opacity: 0.8;
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
  z-index: var(--z-tooltip);
  transition: 0.4s;

  &:hover {
    background-color: var(--title-color-dark);
  }

  .scrollup__icon {
    font-size: 1.5rem;
    color: var(--container-color);
  }

  /* Show-scroll */
  &.show-scroll {
    bottom: 3rem;
  }

  /*=============== BREAKPOINTS ===============*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    & {
      right: 1.5rem;
      padding: 0.25rem 0.4rem;
    }

    .scrollup__icon {
      font-size: 1.25rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    .show-scroll {
      bottom: 4rem;
    }
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    & {
      right: 1rem;
    }
  }
`;
