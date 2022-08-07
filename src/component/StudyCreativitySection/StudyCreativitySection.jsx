import React from "react";
import { StudyCreativitySection as StudyCreativityContainer } from "../../styles";
import Button from "../Button/Button";
import StudyCreativityImgSrc from "../../assets/team-work.jpg";
import TeamWorkImgSrc from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
function StudyCreativitySection(props) {
  const { srcImage = 1, reverseColumn = false } = props;
  return (
    <StudyCreativityContainer reverseColumn={reverseColumn}>
      <div className="study__creativity__parent">
        <div className="study__creativity__col1">
          <h6>A few words about company</h6>
          <h2>A Study of Creativity</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="study__creativity__button__container">
            <Button label="Get Started" />
            <Button label="Contact US" outlined />
          </div>
        </div>
        <div className="study__creativity__col2">
          <div>
            <img
              src={srcImage !== 2 ? StudyCreativityImgSrc : TeamWorkImgSrc}
              alt=""
            />
          </div>
        </div>
      </div>
    </StudyCreativityContainer>
  );
}

export default StudyCreativitySection;
