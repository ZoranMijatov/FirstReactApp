import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 250px;
  height: 300px;
  position: relative;
  border-radius: 7px;
  box-shadow: 20px 20px 50px rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  & .card-content {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  & img {
    position: absolute;
    transform: translate(-15%, -50%);
  }

  & .Product-Link {
    display: block;
    margin: 0 auto;
    padding-top: 7px;
    width: 140px;
    height: 43px;
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    background-size: 300% 100%;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    margin-top: 50%;
    border-radius: 7px;
    transition: all ease-in-out 0.3s;
    z-index: 1;
        &:hover {
            scale: 1.1;
        }
  }
`;

const Card = ({ products }) => {
  return (
    <>
      {products.map((product, id) => (
        <CardStyle key={id}>
          <div className="card-content">
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link className="Product-Link" to={`/cards/${product.title}`}>
              View Product
            </Link>
          </div>
        </CardStyle>
      ))}
    </>
  );
};

export default Card;
