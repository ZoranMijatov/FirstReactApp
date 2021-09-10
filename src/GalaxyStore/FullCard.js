import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FullCardStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,0.2);
    .Flex-Wrapper {
        display: flex;
    }
`

const FullCard = () => {
    const { title } = useParams();
    const products = useSelector(state => state.cartReducer.products)

    return (
        <FullCardStyle>
            {products.filter(product => product.title === title).map((product) => (
                <div className="Flex-Wrapper" key={product.id}>
                    
                    <div className="Flex-Right-Half">
                        <img src={product.image} alt="" />
                    </div>

                    <div className="Flex-Left-Half">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>

                </div>
            ))}
        </FullCardStyle>
    )
}

export default FullCard
