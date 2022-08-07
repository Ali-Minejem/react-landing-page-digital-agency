import React from "react";
import {
  BlogStoriesSection as BlogStoriesSectionContainer,
  Paragraph,
} from "../../styles";
import Title from "../Title/Title";
import Blog from "../Blog/Blog";

const blogsData = [
  {
    title: "New Office!",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    subtitle: "Luke Skywalker, 2 days ago",
    badgeText: "company",
  },
  {
    title: "New Office!",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    subtitle: "Luke Skywalker, 2 days ago",
    badgeText: "company",
  },
  {
    title: "New Office!",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    subtitle: "Luke Skywalker, 2 days ago",
    badgeText: "company",
  },
];

const blogRow = blogsData.map(({ title, body, subtitle, badgeText }, index) => (
  <Blog
    key={index}
    title={title}
    body={body}
    subtitle={subtitle}
    badgeText={badgeText}
  />
));
function BlogStoriesSection() {
  return (
    <BlogStoriesSectionContainer id="blog">
      <Title title="Our Blog Stories" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        voluptatibus neque cum a ullam harum!
      </Paragraph>
      <div className="blog__row1">{blogRow}</div> <br />
      <div className="blog__row1">{blogRow}</div>
    </BlogStoriesSectionContainer>
  );
}

export default BlogStoriesSection;
