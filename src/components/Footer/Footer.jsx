import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Quentin Plet</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/quentinplet"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2024 Quentin Plet. All right reserved
        </span>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .footer__container {
    padding: 2rem 0 6rem;
  }

  .footer__title,
  .footer__link {
    color: var(--title-color);
  }

  .footer__title {
    text-align: center;
    margin-bottom: var(--mb-2);
  }

  .footer__link:hover {
    color: var(--title-color-dark);
  }

  .footer__list {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: var(--mb-2);
  }

  .footer__social {
    display: flex;
    justify-content: center;
    column-gap: 1.25rem;
  }

  .footer__social-link {
    background-color: var(--title-color);
    color: var(--container-color);
    font-size: 1.125rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    display: inline-flex;
  }

  .footer__social-link:hover {
    background-color: var(--title-color-dark);
  }

  .footer__copy {
    display: block;
    margin-top: 4.5rem;
    color: var(--title-color);
    text-align: center;
    font-size: var(--smaller-font-size);
  }

  /*=============== BREAKPOINTS ===============*/
  /* For large devices */
  @media screen and (max-width: 992px) {
    .footer__social-link {
      padding: 0.25rem;
      border-radius: 0.25rem;
    }
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 576px) {
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
