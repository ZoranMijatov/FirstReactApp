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
`
