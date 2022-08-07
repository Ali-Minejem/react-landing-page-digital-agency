import React, { Fragment } from "react";
import SimpleSlider from "../Slider/Slider";
import Slide1 from "../../assets/detroit-red-wings.svg";
import Slide2 from "../../assets/geniusplast.svg";
import Slide3 from "../../assets/petra-perdana.svg";
import Slide4 from "../../assets/sorbi.svg";

function ClientsSection() {
  const slideImagesSrcs = [Slide1, Slide2, Slide3, Slide4];
  const slides = slideImagesSrcs.map((slide) => (
    <Fragment key={slide}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={slide} alt="slider images" width={120} height={100} />
      </div>
    </Fragment>
  ));
  return (
    <>
      <SimpleSlider slides={slides} />
    </>
  );
}

export default ClientsSection;
