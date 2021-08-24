import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ products }) => {
    return (
        <>
            {products.map((card, index) => (
                <div key= {index} className="Card">
                    <img src={card.image} alt="" />
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Link to={`/galaxystore/${card.title}`}> View Product </Link>
                </div>
            ))}
        </>
    )
}

export default Card
