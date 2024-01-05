import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <SocialStyled className="home__social">
      {/* <a
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
      </a> */}
      <a
        href="https://github.com/quentinplet"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-icon-label">Github</span>
      </a>
      <a
        href="https://linkedin.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
        <span className="home__social-icon-label">Linkedin</span>
      </a>
    </SocialStyled>
  );
};

export default Social;

const SocialStyled = styled.div``;
