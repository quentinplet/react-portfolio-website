import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <SocialStyled className="home__social">
      <a
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://dribble.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-dribbble"></i>
      </a>
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </SocialStyled>
  );
};

export default Social;

const SocialStyled = styled.div``;
