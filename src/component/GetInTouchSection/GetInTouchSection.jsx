import React from "react";
import {
  GetInTouchSection as GetInTouchSectionContainer,
  Paragraph,
} from "../../styles.js";
import Button from "../Button/Button.jsx";

function GetInTouchSection() {
  return (
    <GetInTouchSectionContainer id="contact">
      <div className="get__in__touch__container">
        <h1>Let's get in touch</h1>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          minima a dignissimos illo error itaque.
        </Paragraph>
        <form action="">
          <label htmlFor="name">
            First Name: <br />
            <input id="name" type="text" />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <br />
            <input id="name" type="email" />
          </label>
          <br />
          <label htmlFor="subject">
            Subject:
            <br />
            <input id="subject" type="text" />
          </label>
          <br />
          <label htmlFor="description">
            <br />
            <textarea id="description" type="text" />
          </label>
          <br />
          <br />
          <div className="send__msg__btn__container">
            <Button label="Send Message" />
          </div>
        </form>
      </div>
    </GetInTouchSectionContainer>
  );
}

export default GetInTouchSection;
