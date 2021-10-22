import styled from "styled-components";
import theme from "styled-theming";

const backgroundTheme = theme("theme", {
  light: "rgba(255, 255, 255, 0.1);",
  dark: "rgba(0, 0, 0, 0.2);",
});

const shadowTheme = theme("theme", {
  light: "20px 20px 50px rgba(0, 0, 0, 0.3)",
  dark: "20px 20px 50px rgba(255, 255, 255, 0.2)",
});

const borderTheme = theme("theme", {
  light: "1px solid rgba(255, 255, 255, 0.5)",
  dark: "1px solid rgba(0, 0, 0, 0.5)",
});

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  /* padding-top: 30px; */
  margin: 0 auto;
  max-width: 1450px;
  width: 100%;
  /* padding-right: 70px; */
`;

export const GridChild = styled.div`
  grid-area: ${(props) =>
    props.isFirstChild
      ? "1 / 1 / 2 / 2"
      : props.isSecondChild
      ? "2 / 1 / 3 / 4"
      : props.isThirdChild
      ? "1 / 6 / 3 / 7"
      : props.isFifthChild
      ? "1 / 2 / 2 / 6"
      : props.isSixthChild
      ? "2 / 4 / 3 / 6"
      : null};
  width: ${(props) =>
    props.isFirstChild ? "250px" : props.isFourthChild ? "100px" : null};
  border-radius: 12px;
  background: ${backgroundTheme};
  color: #fff;
  box-shadow: ${shadowTheme};
  border-left: ${borderTheme};
  border-top: ${borderTheme};
  &:first-child {
    padding: ${(props) => (props.isApod ? "0 0 20px" : "50px 20px 50px")};
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }

  .crawl {
    margin-top: 70%;
    color: #feda4a;
    font-family: "Nasa-Font";
    font-weight: 600;
    letter-spacing: 3px;
    line-height: 150%;
    position: relative;
    top: -100px;
    transform-origin: 50% 100%;
    animation: crawl 16s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    p {
      font-size: 43px;
      line-height: 90%;
    }

    span {
      font-size: 100px;
      line-height: 120%;
    }

    div {
      margin-top: 10%;
    }
  }

  @keyframes crawl {
    0% {
      top: 0;
      transform: rotateX(20deg) translateZ(0);
    }
    100% {
      top: -3000px;
      transform: rotateX(25deg) translateZ(-1000px);
    }
  }
`;
