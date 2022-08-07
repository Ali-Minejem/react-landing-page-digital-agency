import React from "react";
import { Project as ProjectContainer } from "../../styles";

function Project(props) {
  const { imgSrc, title, body } = props;
  return (
    <ProjectContainer>
      <div className="project__image__container">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </ProjectContainer>
  );
}

export default Project;
