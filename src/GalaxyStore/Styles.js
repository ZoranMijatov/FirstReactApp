import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) => (props.IsImportantNumber ? "23px" : "18px")};
  font-weight: ${(props) => (props.IsImportant ? "bold" : "normal")};
  color: ${(props) => (props.IsImportant ? "#fff" : "#a9a9a9")};
  color: ${(props) => (props.isMediumImportance ? "#fff" : "null")};
  max-width: ${(props) => (props.ProdDesc ? "550px" : "null")};
  overflow-wrap: ${(props) => (props.ProdDesc ? "break-word" : "null")};
  padding: ${(props) => (props.ProdDesc ? "20px 0" : "null")};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.SpaceBetween ? "space-between" : "center"};

  align-items: ${(props) => (props.Receipt ? "null" : "center")};

  padding: ${(props) => {
    if (props.SpaceBetween) {
      return "0 0 20px";
    } else if (props.ButtonWrapper) {
      return "10px 0 0";
    } else if (props.ContentWrapper) {
      return "0 0 20px";
    } else if (props.Receipt) {
      return "0 50px";
    } else {
      return "40px 0 0";
    }
  }};

  gap: ${(props) => {
    if (props.Gap30) {
      return "30px";
    } else if (props.ContentWrapper) {
      return "10px";
    } else {
      return "0";
    }
  }};

  color: white;
  flex-direction: ${(props) =>
    props.ContentWrapper || props.Receipt ? "column" : "null"};

  position: relative;
  z-index: 10;
  text-align: ${(props) => (props.ContentWrapper ? "center" : "null")};

  background: ${(props) =>
    props.Receipt
      ? `linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    )`
      : "null"};

  border-radius: 7px;
  box-shadow: ${(props) =>
    props.Receipt ? "20px 20px 50px rgba(255, 255, 255, 0.2)" : "null"};
  width: ${(props) => (props.Receipt ? "280px" : "null")};
  height: ${(props) => (props.Receipt ? "600px" : "null")};
  margin: ${(props) => (props.Receipt ? "60px 120px 0 0" : "null")};
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  flex: 50%;
`;

export const Cart = styled.div`
  position: relative;
  transition: transform 0.2s ease-in-out;
  margin-left: 20px;

  &:hover {
    transform: rotate(-5deg);
  }

  p {
    position: absolute;
    left: -43%;
    top: -20%;
    height: 24px;
    width: 24px;
    background: rgb(212, 4, 4);
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

export const CardWrapper = styled.div`
  width: 250px;
  height: 320px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-left: 1.5px solid rgb(255, 255, 255, 0.18);
  border-top: 1.5px solid rgb(255, 255, 255, 0.18);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    transition-duration: 150ms;
    box-shadow: 0 5px 20px 5px #00000044;
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
    padding: 0;
  }

  p {
    font-weight: bold;
    font-size: 23px;
  }

  .Product-Link {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
    &:hover {
      text-shadow: 0 0 7px #fff;
      scale: 1.2;
    }
  }
`;

export const ListedItem = styled.li`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.25);
  height: 140px;
  margin-bottom: 10px;
`;

export const FullCardStyle = styled.div`
  width: 100%;
  height: 75vh;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 7px;
  margin-right: 41px;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 55px;
  }

  .FlexWrap {
    display: flex;

    .Wishlist {
      cursor: pointer;
    }
  }
`;
