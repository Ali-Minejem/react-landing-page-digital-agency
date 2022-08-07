import React from "react";
import { Footer as FooterContainer } from "../../styles";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer__content__container">
        <div className="footer__logo">DevEnhancer</div>
        <div className="footer__rights">
          &#169; 2022, Developed by
          <a
            href="https://github.com/Ali-Minejem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ali
          </a>
          Inspired by
          <a
            href="https://fanatic-theme.ivkovic.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fanatic
          </a>
        </div>

        <a href="#home"> Back to top</a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
