import React from "react";
import { ServicesSection as ServicesSectionContainer } from "../../styles";
import Card from "../Card/Card";
import Title from "../Title/Title";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
function ServicesSection() {
  return (
    <ServicesSectionContainer id="services">
      <Title title="Our Awesome Services" />
      <p className="services__section__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        est unde voluptate repellat culpa nesciunt.
      </p>
      <br />
      <br />
      <div className="services__list__container">
        <Card
          logo={<MdOutlineDesignServices size={45} color="#f2b300" />}
          title="Title 1"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        est unde voluptate repellat culpa nesciunt."
        />
        <Card
          logo={<RiComputerFill size={45} color="#f40051" />}
          title="Title 2"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        est unde voluptate repellat culpa nesciunt."
        />
        <Card
          logo={<FaLaptopCode size={45} color="#4cd5c5" />}
          title="Title 3"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        est unde voluptate repellat culpa nesciunt."
        />
      </div>
    </ServicesSectionContainer>
  );
}

export default ServicesSection;
