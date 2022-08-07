import React from "react";

function Breaker(props) {
  const { numberOfBreakers } = props;
  const helperArray = Array(numberOfBreakers).fill(0);

  return (
    <>
      {helperArray.map((item, index) => (
        <br key={index} />
      ))}
    </>
  );
}

export default Breaker;
