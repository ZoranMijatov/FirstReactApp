import styled from "styled-components";

export default styled.button`
  position: relative;
  z-index: 10;
  font-family: "Montserrat", sans-serif;
  background: ${(props) =>
    props.IsGhost
      ? "transparent"
      : "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)"};
  border-radius: 7px;
  width: ${(props) => {
    if (props.Checkout) {
      return "280px";
    } else if (props.AddToCart || props.Medium) {
      return "140px";
    } else {
      return "null";
    }
  }};

  height: ${(props) => (props.AddToCart ? "48px" : "null")};
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  background-size: 300% 100%;
  color: white;
  text-align: center;
  border: ${(props) => (props.IsGhost ? "2px solid #fff" : "none")};
  font-weight: 700;
  font-size: 16px;
  margin: ${(props) => (props.Checkout || props.AddToCart ? "0" : "0 1em")};
  padding: ${(props) => (props.AddToCart ? "0" : "18px 43px")};
  box-shadow: 3px 4px 17px -12px rgba(0, 0, 0, 0.75);
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: ${(props) =>
      props.IsGhost
        ? "0 0 10px 0 #fff inset, 0 0 20px 2px #fff"
        : "0 0 10px 0 #6253e1 inset, 0 0 20px 2px #6253e1"};
    text-shadow: ${(props) => (props.IsGhost ? "0 0 7px #fff" : "null")};
  }
`;
