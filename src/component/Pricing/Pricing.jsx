import React from "react";
import { Paragraph, Pricing as PricingContainer } from "../../styles";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import PricingBlock from "../PricingBlock/PricingBlock";

const pricingData = [
  {
    id: 1111,
    logo: <MdOutlineDesignServices size={45} color="#f2b300" />,
    pricing: "$29,99/mo",
    title: "Starter",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, itaque?",
    list: [
      { id: 1, offer: "Product Offer", checked: true },
      { id: 2, offer: "Offer", checked: true },
      { id: 3, offer: "Product Offer #2", checked: false },
      { id: 4, offer: "Product", checked: false },
      { id: 5, offer: "Product Offer", checked: false },
    ],
  },
  {
    id: 2222,
    logo: <RiComputerFill size={45} color="#f40051" />,
    pricing: "$49,99/mo",
    title: "Basic",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, itaque?",
    list: [
      { id: 6, offer: "Product Offer", checked: true },
      { id: 7, offer: "Offer", checked: true },
      { id: 8, offer: "Product Offer #2", checked: true },
      { id: 9, offer: "Product", checked: true },
      { id: 10, offer: "Product Offer", checked: false },
    ],
  },
  {
    id: 333,
    logo: <FaLaptopCode size={45} color="#4cd5c5" />,
    pricing: "$59,99/mo",
    title: "Golden",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, itaque?",
    list: [
      { id: 11, offer: "Product Offer", checked: true },
      { id: 12, offer: "Offer", checked: true },
      { id: 13, offer: "Product Offer #2", checked: true },
      { id: 14, offer: "Product", checked: true },
      { id: 15, offer: "Product Offer", checked: true },
    ],
  },
];

function Pricing() {
  return (
    <PricingContainer id="pricing">
      <h1>Check Our Pricing</h1>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        minima a dignissimos illo error itaque.
      </Paragraph>
      <br />

      <div className="pricing__blocks__container">
        {pricingData.map((data) => (
          <PricingBlock key={data.id} {...data} />
        ))}
      </div>
    </PricingContainer>
  );
}

export default Pricing;
