import React from "react";
import PresentationSectionSrc from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import { PresentationSection as PresentationSectionContainer } from "../../styles";
import Button from "../Button/Button";

function PresentationSection() {
  return (
    <PresentationSectionContainer>
      <div className="presentation__section__col1" id="#home">
        <h1>
          We are Digital <br /> Agency.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <br />
        <Button label="Get Started" handleClick={() => {}} />
      </div>
      <div className="presentation__section__col2">
        <div className="presentation__section__col2__image__container">
          <img src={PresentationSectionSrc} alt="presentation section" />
        </div>
      </div>
    </PresentationSectionContainer>
  );
}

export default PresentationSection;
