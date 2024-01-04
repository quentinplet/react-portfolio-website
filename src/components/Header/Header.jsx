import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";

const Header = () => {
  /*===== Change Background Header =====*/
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  /*===== Toggle Menu =====*/
  const [Toggle, setToggle] = useState(false);
  const showMenu = () => setToggle(!Toggle);

  const [activeNav, setActiveNav] = useState("#home");
  const handleNav = (href) => setActiveNav(href);

  return (
    <HeaderStyled className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Smith
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => handleNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => handleNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => handleNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => handleNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={showMenu}
          ></i>
        </div>

        <div className="nav__toggle" onClick={showMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--container-color);

  .nav {
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }

  .nav__logo,
  .nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
  }

  .nav__list {
    display: flex;
    column-gap: 2rem;
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: 0.1s;
  }

  .nav__icon,
  .nav__close,
  .nav__toggle {
    display: none;
  }

  /* Active link */
  .active-link,
  .nav__link:hover {
    color: var(--title-color-dark);
    font-weight: var(--font-semi-bold);
  }

  /* Change background header */
  &.scroll-header {
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  }

  /*=============== BREAKPOINTS ===============*/

  @media screen and (max-width: 992px) {
    .nav__link {
      font-size: var(--smaller-font-size);
    }
  }
  /* For medium devices */
  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;

    .nav {
      height: var(--header-height);
    }

    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
    }

    /* Show menu */
    .show-menu {
      bottom: 0;
    }

    .nav__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .nav__icon {
      font-size: 1.2rem;
    }

    .nav__close {
      position: absolute;
      right: 1.3rem;
      bottom: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--title-color);
    }

    .nav__close:hover {
      color: var(--title-color-dark);
    }

    .nav__toggle {
      font-size: 1.1rem;
      cursor: pointer;
    }

    .nav__icon,
    .nav__close,
    .nav__toggle {
      display: block;
    }
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
    .nav__menu {
      padding: 2rem 0.25rem 4rem;
    }

    .nav__list {
      column-gap: 0;
    }
  }
`;
