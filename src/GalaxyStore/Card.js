import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardStyle = styled.div`
    width: 250px;
    height: 300px;
    position: relative;
    border-radius: 7px;
    box-shadow: 20px 20px 50px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    border-left: 1px solid rgba(0, 0, 0, 0.5);
        & .card-content {
            color: white;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        & .Product-Link {
            color: #fff;
            text-decoration: none;
            font-size: 25px;
            font-weight: 700;
            margin-top: 50%;
            transition: all ease-in-out 0.3s;
                &:hover {
                    letter-spacing: 1px;
                    scale: 1.1;
                }
        }

`

const Card = ({ products }) => {
    return (
        <>
            {products.map((product, id) => (
                <CardStyle key= {id}>
                    <div className="card-content">
                        <img src={product.image} alt="" />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <Link className="Product-Link" to={`/cards/${product.title}`}>View Product</Link>
                    </div>
                </CardStyle>
            ))}
        </>
    )
}

export default Card
