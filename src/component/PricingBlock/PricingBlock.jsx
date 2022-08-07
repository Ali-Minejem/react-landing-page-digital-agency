import React from "react";
import { PricingBlock as PricingBlockContainer } from "../../styles";
import Button from "../Button/Button";
import { FcCheckmark } from "react-icons/fc";

function PricingBlock(props) {
  const { logo, pricing, title, bodyText, list } = props;
  return (
    <PricingBlockContainer>
      <header>
        <div className="logo__container">{logo}</div>
        <div className="pricing">{pricing}</div>
      </header>
      <div className="body__container">
        <h2>{title}</h2>
        <p>{bodyText}</p>
      </div>
      <div className="privileges__list">
        {list.map((listElement) => (
          <>
            <div style={{ display: "flex", gap: 10 }}>
              <FcCheckmark
                size={25}
                style={{
                  visibility: listElement.checked ? "visible" : "hidden",
                  fontWeight: "bolder",
                }}
              />

              <div key={listElement.id} class="offer__value">
                {listElement.offer}
              </div>
            </div>
          </>
        ))}
      </div>
      <br />
      <div className="buy__btn__container">
        <Button label="Buy" />
      </div>
    </PricingBlockContainer>
  );
}

export default PricingBlock;
