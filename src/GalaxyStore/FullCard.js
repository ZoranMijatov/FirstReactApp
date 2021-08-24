import React from 'react'
import { useParams } from 'react-router'

const FullCard = ({ products }) => {
    const { title } = useParams();

    return (
        <div>
            {products.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                    <img src={card.image} alt="" />
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default FullCard
