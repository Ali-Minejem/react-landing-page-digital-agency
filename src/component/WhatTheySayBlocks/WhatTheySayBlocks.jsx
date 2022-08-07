import React from "react";
import { WhatTheySayBlocks as WhatTheySayBlocksContainer } from "../../styles";

function WhatTheySayBlocks(props) {
  const { body, author } = props;
  return (
    <WhatTheySayBlocksContainer>
      <div className="wts__block__body">{body}</div>
      <div className="wts__block__author">
        <i>{author}</i>
      </div>
    </WhatTheySayBlocksContainer>
  );
}

export default WhatTheySayBlocks;
