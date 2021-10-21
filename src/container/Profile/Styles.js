import styled from "styled-components";
import FancyImage1 from "./SpaceThing-min.jpg";
import FancyTexture1 from "./white-simple-textured-design-background-min.jpg";

export const MainWrapper = styled.div`
  display: flex;
  gap: 100px;

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: rgba(74, 125, 255, 0.1);
    border-radius: 10px;
    transform: scale(1);

    /* animation: glitchy 0.3s ease 0.3s infinite;

    @keyframes glitchy {
    0%   {transform: translate(-2px, 2px);}
    25%  {transform: translate(-2px, -2px);}
    50%  {transform: translate(2px, 2px);}
    75%  {transform: translate(2px, -2px);}
    100%  {transform: translate(-2px, 2px);}
} */
    /* animation: pulse-blue 2s infinite;

    @keyframes pulse-blue {
      0% {
        transform: scale(0.99);
        box-shadow: 0 0 0 0 rgba(74, 125, 255, 0.3);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
      }

      100% {
        transform: scale(0.99);
        box-shadow: 0 0 0 0 rgba(74, 125, 255, 0);
      }
    } */

    .Inline-Flex {
      display: flex;
    }

    .Upload-Picture {
      input[type="file"] {
        opacity: 0;
        position: absolute;
        padding: 10px;
        cursor: pointer;
        bottom: -10px;
      }
      .custom-file-upload {
        position: relative;
        display: flex;
        gap: 10px;
        padding-top: 20px;
        text-decoration: underline;
        font-size: 18px;
      }
    }

    .Svg {
      margin-left: auto;
      margin-right: 10px;
      margin-top: -48px;
      opacity: 0.3;
      cursor: pointer;
      transition: opacity 0.3s;
      position: relative;
      z-index: 110;

      &:hover {
        opacity: 1;
      }
    }
  }

  label {
    font-family: Nasa-Font;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }

  h1 {
    font-family: Nasa-Font;
    color: #fff;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  background: url("${FancyTexture1}");
  background-size: cover;
  width: 530px;
  height: 320px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(255, 255, 255, 0.5) 2px 7px 30px 0px;
  transform: rotate(-5deg);
  transition: all 0.5s;
  scale: 0.9;

  &:hover {
    scale: 1.07;
    transform: rotate(0);

    &:after {
      content: "";
      position: absolute;
      top: -30%;
      right: -200%;
      width: 50%;
      height: 200%;
      z-index: 100;
      opacity: 0;
      transform: rotate(30deg);
      background: rgba(255, 255, 255, 0.05);
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 77%,
        rgba(255, 255, 255, 0.1) 92%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shine 3s infinite;
      animation-iteration-count: 3s;

      @keyframes shine {
        to {
          opacity: 1;
          right: 210%;
        }
      }
    }
  }

  h1 {
    color: #fff;
  }

  .Banner {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    z-index: 2;
    background-image: linear-gradient(
      to top,
      #1e3c72 0%,
      #1e3c72 1%,
      #2a5298 100%
    );
    background-size: 300% 100%;
    height: 55px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    position: relative;

    .Logo {
      position: absolute;
      left: 1%;
      top: 34%;
    }

    svg {
      margin-right: 20px;
    }
  }

  .FancyImage {
    width: 330px;
    height: 330px;
    background: #555;
    border-radius: 50%;
    left: -7%;
    bottom: -25%;
    position: absolute;
    z-index: 1;
    background: url("${FancyImage1}");
    background-size: cover;
    background-position: center;
  }

  .Wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 20%;
    position: relative;

    .Text {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  .AstronautImageWrapper {
    position: absolute;
    top: 20px;
    right: 0;
  }

  .AstronautImage {
    margin-right: 30px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    height: 130px;
    width: 130px;
  }

  .ClearanceLevel {
    text-shadow: 1px 2px 3px #fff, 0 0 0 #444, -1px 1px 0 #fff, 1px 1px 0 white;
    color: transparent;
    font-weight: bold;
    font-size: 16px;
    padding-top: 40%;
    position: absolute;
    bottom: 10px;
    right: 20px;
    text-transform: uppercase;
  }
`;

export const NasaParagraph = styled.p`
  font-size: 16px;
  color: transparent;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  width: 250px;
  font-style: italic;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.2),
    10px 10px 10px rgba(0, 0, 0, 0.03);
  text-shadow: 1px 2px 3px #fff, 0 0 0 black, -1px 1px 0 #fff, 1px 1px 0 white;
  margin-bottom: 15px;
  border-bottom-right-radius: 30px 20px;
  border-top-right-radius: 5px;
`;
