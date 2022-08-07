import React from "react";
import {
  Paragraph,
  WhatTheySaySection as WhatTheySaySectionContainer,
} from "../../styles";
import WhatTheySayBlocks from "../WhatTheySayBlocks/WhatTheySayBlocks";

function WhatTheySaySection() {
  const body =
    "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.";
  const author = "Ralph Waldo Emerson";
  return (
    <WhatTheySaySectionContainer>
      <div className="what__they__say__container">
        <h1>What They Say?</h1>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          minima a dignissimos illo error itaque.
        </Paragraph>
        <br />
        <br />

        <div className="what__they__say__elements__container">
          <WhatTheySayBlocks body={body} author={author} />
          <WhatTheySayBlocks body={body} author={author} />
          <WhatTheySayBlocks body={body} author={author} />
        </div>
      </div>
    </WhatTheySaySectionContainer>
  );
}

export default WhatTheySaySection;
