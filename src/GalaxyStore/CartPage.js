import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
    const products = useSelector((state) => state.cartReducer.products);
    const dispatch = useDispatch()
  
  let addedProducts = products.length ? (
    products.map((product) => {
      return (
        <li key={product.id}>
          <div className="item-img">
            <img src={product.image} alt={product.image} className="" />
          </div>

          <div className="product-desc">
            <span className="title">{product.title}</span>
            <p>{product.desc}</p>
            <p>
              <b>Price: {product.price}$</b>
            </p>
            <p>
              <b>Quantity: {product.quantity}</b>
            </p>
            <div className="add-remove">
              {/* <Link
                to="/cart"
                
              >
                Up
              </Link>
              <Link
                to="/cart"
                
              >
                Down
              </Link> */}
            </div>
            <button
              className=""
              
            >
              Remove
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <h2>Cart is empty.</h2>
  );

  return (
    <div className="container">
      <div className="cart">
        <h2>You have ordered:</h2>
        <ul className="collection">{addedProducts}</ul>
      </div>
    </div>
  );
};

export default CartPage;
