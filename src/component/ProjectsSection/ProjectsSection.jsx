import React from "react";
import {
  Paragraph,
  ProjectsSection as ProjectsSectionContainer,
} from "../../styles";
import Project from "../Project/Project";
import Title from "../Title/Title";
import ProjectSrc1 from "../../assets/project1.jpg";
import ProjectSrc2 from "../../assets/project2.jpg";
import ProjectSrc3 from "../../assets/project3.jpg";
import ProjectSrc4 from "../../assets/project4.jpg";
import ProjectSrc5 from "../../assets/project5.jpg";
import ProjectSrc6 from "../../assets/project6.jpg";
import Button from "../Button/Button";

const projectsRow1 = [
  {
    imgSrc: ProjectSrc1,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    imgSrc: ProjectSrc2,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    imgSrc: ProjectSrc3,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
];
const projectsRow2 = [
  {
    imgSrc: ProjectSrc4,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    imgSrc: ProjectSrc5,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
  {
    imgSrc: ProjectSrc6,
    title: "Awesome Project",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
  },
];
const projectsRow1Content = projectsRow1.map(({ imgSrc, title, body }) => (
  <Project imgSrc={imgSrc} title={title} body={body} />
));

const projectsRow2Content = projectsRow2.map(({ imgSrc, title, body }) => (
  <Project imgSrc={imgSrc} title={title} body={body} />
));

function ProjectsSection() {
  return (
    <ProjectsSectionContainer id="projects">
      <Title title="Our Awesome Projects" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum iste
        veniam ullam distinctio, deserunt illum.
      </Paragraph>

      <div className="project__container">{projectsRow1Content}</div>
      <div className="project__container">{projectsRow2Content}</div>
      <div className="project__btn">
        <Button label="Load More" />
      </div>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
