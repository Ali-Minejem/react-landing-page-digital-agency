import styled from "styled-components";

export const NavList = styled.ul`
  margin: 0 !important;
  padding-top: 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  & li a {
    text-decoration: dashed;
    color: #1e144d;
    font-size: 19px;
    transition: 0.2s;

    &:hover {
      color: #766dff;
      text-decoration: underline;
      transition: 0.2s;
    }
  }
  @media screen and (min-width: 870px) and (max-width: 920px) {
    & {
      gap: 30px;
    }
  }
  @media screen and (max-width: 870px) {
    & {
      display: ${(props) => (props.toggleMenu ? "block" : "none")};
      margin: 0;
      padding: 25px 0;
      margin-top: 50px;
      background-color: #766dff;
      padding-bottom: 30px;
      text-align: center;
      border-radius: 8px;
      li a {
        color: #fff;
        &:hover {
          color: #fff;
          opacity: 0.8;
        }
      }
    }
  }
`;

export const PresentationSection = styled.section`
  display: flex;
  color: #1e144d;
  justify-content: space-between;
  margin-top: 80px;

  & .presentation__section__col1,
  & .presentation__section__col2 {
    flex-basis: 50%;
  }

  & h1 {
    font-size: 64px;
    font-weight: bolder;
    line-height: 75px;
  }

  &
    .presentation__section__col2
    .presentation__section__col2__image__container {
    text-align: right;
  }

  & .presentation__section__col2 img {
    width: 350px;
    height: 500px;
    border-radius: 20px;
  }
  @media screen and (max-width: 1110px) {
    & {
      gap: 25px;
    }
    & h1 {
      font-size: 45px;
      line-height: 60px;
      margin-top: 0px;
    }
  }
  @media screen and (max-width: 870px) {
    & {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;
      .presentation__section__col2
        .presentation__section__col2__image__container {
        text-align: center;
      }
    }
  }
`;

export const Button = styled.button`
  text-align: center;
  color: ${(props) => (props.outlined ? "#7620ff" : "#fff")};
  font-size: 16px;
  background-color: ${(props) => (props.outlined ? "#f5f5f5" : "#7620ff")};
  padding: 15px 50px;
  border: ${(props) => (props.outlined ? "1px solid #7620ff" : "none")};
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Paragraph = styled.p`
  max-width: 60%;
  margin-bottom: 50px;
  @media screen and (max-width: 870px) {
    max-width: 100% !important;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #1e144d;
  font-size: 36px;
  font-weight: bolder;
  text-decoration: underline;
  text-decoration-color: #f2b300;
  @media screen and (max-width: 870px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const ServicesSection = styled.section`
  & .services__section__text {
    font-size: 16px;
    max-width: 60%;
  }
  & .services__list__container {
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
  }
  @media screen and (max-width: 870px) {
    & .services__section__text {
      max-width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 800px) {
    & .services__list__container {
      flex-direction: column;
    }
  }
`;

export const Card = styled.div`
  color: #1e144d;
  & .card__logo {
    margin-bottom: 30px;
  }
  & .card__title {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bolder;
  }
  & .card__body {
    margin-bottom: 30px !important;
    font-size: 15px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    & .card__body {
      max-width: 75%;
      margin: 0 auto;
    }
  }
`;

export const StudyCreativitySection = styled.section`
  background: #f5f5f5;
  padding: 30px 0;
  & .study__creativity__parent {
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => (props.reverseColumn ? "row-reverse" : "row")};
  }
  & .study__creativity__col1,
  & .study__creativity__col2 {
    flex-basis: 50%;
  }
  & .study__creativity__col1 {
    align-self: center;
  }

  & {
    .study__creativity__col1 {
      h6 {
        margin-bottom: 10px;
        font-size: 13px;
        font-weight: bold;
      }
      h2 {
        margin-top: 5px;
        font-size: 42px;
        font-weight: bolder;
        margin-bottom: 2px !important;
      }
      p {
        max-width: 80%;
        margin-top: 0px;
        margin-bottom: 40px;
      }
      .study__creativity__button__container {
        display: flex;
        gap: 10px;
      }
    }
  }

  & .study__creativity__col2 {
    text-align: ${(props) => (props.reverseColumn ? "left" : "right")};
  }

  & .study__creativity__col2 img {
    width: 300px;
    height: 500px;
    border-radius: 20px;
    margin-top: -100px;
  }

  @media screen and (max-width: 1090px) {
    .study__creativity__parent {
      flex-direction: column-reverse;
    }
    .study__creativity__col1 {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      p {
        max-width: 100%;
      }
      h2 {
        font-size: 36px;
      }
    }
    .study__creativity__col2 {
      flex-basis: 100%;
      text-align: center !important;
    }
    .study__creativity__col2 img {
      margin-top: -80px;
      width: 275px;
      height: 480px;
    }
  }
  @media screen and (max-width: 800px) {
    & .study__creativity__parent {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 450px) {
    .study__creativity__button__container {
      flex-direction: column;
    }
    .study__creativity__col1 {
      h2 {
        font-size: 30px;
      }
    }
  }
`;

export const ProjectsSection = styled.section`
  .project__container {
    display: flex;
    gap: 20px;
  }
  .project__btn {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 800px) {
    .project__container {
      flex-direction: column !important;
    }
  }
`;

export const Project = styled.div`
  text-align: center;
  .project__image__container img {
    width: 95%;
    height: 100%;
    border-radius: 10px;
  }
  @media screen and (max-width: 800px) {
    .project__container {
      flex-direction: column;
    }
  }
`;

export const BlogStoriesSection = styled.section`
  .blog__row1 {
    display: flex;
    gap: 30px;
  }
  @media screen and (max-width: 800px) {
    .blog__row1 {
      flex-direction: column;
    }
  }
`;

export const Blog = styled.div`
  box-shadow: 0px 0px 11px rgb(237 232 237 / 50%);
  padding: 5px 15px;
  border-radius: 15px;
  h2 {
    margin: 10px 0px;
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: bolder;
  }
  p {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 13px;
  }
  h6 {
    font-size: 16px;
    font-weight: bolder;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .blog__badge {
    background-color: #c4ffff;
    font-size: 13px;
    font-weight: bold;
    width: min-content;
    padding: 5px 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
export const WhatTheySaySection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 0;
  .what__they__say__container {
    max-width: 70%;
    margin: 0 auto;
    h1 {
      font-size: 36px;
      font-weight: bolder;
      margin-bottom: 5px;
    }
  }
  .what__they__say__elements__container {
    margin-top: -30px;
    display: flex;
    gap: 30px;
  }
  @media screen and (max-width: 870px) {
    .what__they__say__container {
      max-width: 90%;
      margin: 0 auto;
      h1 {
        text-align: center !important;
        font-size: 30px;
        font-weight: bolder;
        margin-bottom: 5px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .what__they__say__elements__container {
      flex-direction: column;
    }
  }
`;

export const WhatTheySayBlocks = styled.div`
  background-color: #1e144d;
  padding: 50px 20px 20px;
  border-radius: 10px;
  .wts__block__body {
    color: #fff;
    font-size: 13px;
    margin-bottom: 20px;
  }
  .wts__block__author {
    color: #f2b300;
    text-align: right;
    font-size: 13px;
  }
`;

export const Pricing = styled.section`
  h1 {
    font-size: 36px;
    font-weight: bolder;
    margin-bottom: 5px;
  }
  .pricing__blocks__container {
    display: flex;
    gap: 30px;
  }
  @media screen and (max-width: 870px) {
    h1 {
      text-align: center !important;
      font-size: 30px;
      font-weight: bolder;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 1050px) {
    .pricing__blocks__container {
      flex-direction: column;
    }
  }
`;

export const PricingBlock = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 15px 30px;
  header {
    display: flex;
    justify-content: space-between;

    .pricing {
      font-size: 22px;
      font-weight: bolder;
      align-self: center;
    }
  }

  .body__container {
    h2 {
      font-size: 25px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      margin-bottom: 35px;
    }
  }

  .privileges__list {
    .offer__value {
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 15px;
    }
  }
  .buy__btn__container {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

export const GetInTouchSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 0;
  .get__in__touch__container {
    max-width: 70%;
    margin: 0 auto;
    h1 {
      font-size: 36px;
      font-weight: bolder;
      margin-bottom: 5px;
    }
    form {
      label {
        font-size: 14px;
        font-weight: lighter;
        color: #0b093b;
      }
      textarea {
        resize: none;
      }
      input,
      textarea {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bolder;
        border: none;
        background-color: inherit;
        width: 100%;
        border-bottom: 1px solid rgb(112, 112, 112);
        padding: 10px 5px;
        outline: none;
      }
    }
  }

  @media screen and (max-width: 870px) {
    .get__in__touch__container {
      max-width: 90%;
      margin: 0 auto;
      h1 {
        text-align: center !important;
        font-size: 30px;
        font-weight: bolder;
        margin-bottom: 5px;
      }
    }
    form {
      .send__msg__btn__container {
        text-align: center;
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: #0b093b;
  padding: 60px 0;
  color: #fff;
  font-size: 18px;
  a {
    color: #fff;
  }
  .footer__content__container {
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__logo {
    font-size: 28px;
    font-weight: bolder;
  }

  .footer__rights {
    color: #fff;
    a {
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 1000px) {
    .footer__content__container {
      max-width: 90%;
      flex-direction: column;
      gap: 30px;
    }
  }
`;
