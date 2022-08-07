import React from "react";
import { Blog as BlogContainer } from "../../styles";

function Blog(props) {
  const { title, body, subtitle, badgeText } = props;
  return (
    <BlogContainer>
      <h2>{title}</h2>
      <p>{body}</p>
      <h6>{subtitle}</h6>
      <div className="blog__badge">{badgeText}</div>
    </BlogContainer>
  );
}

export default Blog;
