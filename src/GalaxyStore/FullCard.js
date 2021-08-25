import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const FullCardStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,0.2);
`

const FullCard = ({ products }) => {
    const { title } = useParams();
    console.log(products)
    console.log(title)

    return (
        <FullCardStyle>
            {products.filter(product => product.title === title).map((product, id) => (
                <div key={id}>
                    <img src={product.image} alt="" />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                </div>
            ))}
        </FullCardStyle>
    )
}

export default FullCard
