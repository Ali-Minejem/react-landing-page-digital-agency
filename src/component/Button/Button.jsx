import React from "react";
import { Button as StyledButton } from "../../styles";

function Button(props) {
  const { type = "button", label, handleClick, outlined = false } = props;
  return (
    <StyledButton type={type} onClick={handleClick} outlined={outlined}>
      {label}
    </StyledButton>
  );
}

export default Button;
