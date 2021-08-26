import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const FullCardStyle = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,0.2);
    .Flex-Wrapper {
        display: flex;
    }
`

const FullCard = ({ products }) => {
    const { title } = useParams();

    return (
        <FullCardStyle>
            {products.filter(product => product.title === title).map((product, id) => (
                <div className="Flex-Wrapper" key={id}>
                    
                    <div className="Flex-Right-Half">
                        <p>{product.image}</p>
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
