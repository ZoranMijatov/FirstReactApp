import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 660px;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  box-shadow: -7px 8px 26px -10px rgba(26, 25, 25, 0.7);
  border-radius: 7px;
  margin: auto;
  margin-top: 50px;
`;

export const FormGroup = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 50px 0;
  margin-left: 50px;

  input:focus {
    border: 3px solid #6253e1;
  }
`;

export const Input = styled.input`
  background: ${(props) =>
    props.Submit
      ? "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)"
      : props.Coupon
      ? "#333"
      : "#222"};
  text-align: ${(props) => (props.Submit ? "center" : "left")};
  background-size: 300% 100%;
  width: ${(props) => (props.Submit || props.WeatherInput ? "190px" : props.Coupon ? "270px" : "370px")};
  outline: none;
  border-radius: 7px;
  border: none;
  height: 50px;
  color: white;
  font-weight: ${(props) => (props.Submit ? "bold" : "regular")};
  font-size: 16px;
  cursor: ${(props) => (props.Submit ? "pointer" : "regular")};
  padding-left: ${(props) => (props.Submit ? "0" : "10px")};
  margin: ${(props) => (props.Submit ? "20px 0 0" : props.Coupon ? "10px 0 30px" : "10px 0 10px")};

  &:hover {
    box-shadow: ${(props) =>
      props.Submit ? "0 0 10px 0 #6253e1 inset, 0 0 20px 2px #6253e1" : "none"};
  }

  &:disabled {
    background: lightgrey;
    color: #777;
    cursor: not-allowed;
    box-shadow: none;
  }

  ::placeholder {
    ${props => props.Coupon ? "#777" : "null"};
  }
`;
