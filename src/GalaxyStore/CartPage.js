import React, { createRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Redux/actions";
import { RecieptText } from "./Styles";
import Button from "../Button";
import { gsap } from "gsap";

const CartPage = () => {
  const products = useSelector((state) => state.cartReducer.addedProducts);
  const subTotal = useSelector((state) => state.cartReducer.sum);
  const qty = useSelector((state) => state.quantity);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const vat = subTotal * 0.2;
  const total = subTotal + vat;
  console.log(products);
  const heading = React.createRef();
  const receipt = React.createRef();

  useEffect(() => {
    gsap.to(heading.current, { color: "#9b6dff", duration: 1 });
    gsap.to(receipt.current, { duration: 0.5, x: 0, startAt: { x: 500 } });
    gsap.from(".testing", { y: -100, height: 100, duration: 0.5 });
  }, []);

  let addedProducts = products.length ? (
    products.map((product) => {
      return (
        <li className="testing" key={product.id}>
          <div>
            <img src={product.image} alt={product.image} className="" />
          </div>

          <div class="inCart-heading">
            <h4>
              <b>{product.title}</b>
            </h4>
            <p>{product.price}$</p>
          </div>

          <div class="quantity">
            <input
              type="number"
              min="1"
              max=""
              name="quantity"
              value={product.quantity}
              class="input-text qty text"
            />
            <div className="PlusMinus">
              <input type="button" value="+" class="plus" title="Increase Quantity" />
              <input type="button" value="-" class="minus" title="Decrease Quantity" />
            </div>
          </div>

          <Link
            title="Remove"
            to="/cart"
            className="RemoveFromCart"
            onClick={() => dispatch(actions.removeFromCart(product.id))}
          >
            <svg
              width="37"
              height="37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="Trashcan"
                d="M23.125 5.781h-2.313V2.313h-4.625V5.78h-2.312V0h9.25v5.781Z"
                fill="#62808C"
              />
              <path
                d="M26.594 37H10.406a3.469 3.469 0 0 1-3.469-3.469V9.25h23.125v24.281A3.469 3.469 0 0 1 26.595 37Z"
                fill="#E76E54"
              />
              <path
                className="Trashcan"
                d="M32.375 11.563H4.625V6.936a2.313 2.313 0 0 1 2.313-2.312h23.125a2.313 2.313 0 0 1 2.312 2.313v4.625Z"
                fill="#77959E"
              />
              <path
                d="M23.414 18.79a1.156 1.156 0 0 0-1.635 0l-2.99 2.99-2.99-2.99a1.156 1.156 0 0 0-1.635 1.634l2.99 2.99-2.99 2.99A1.156 1.156 0 0 0 15.8 28.04l2.99-2.99 2.99 2.99a1.156 1.156 0 0 0 1.635-1.635l-2.99-2.99 2.99-2.99a1.156 1.156 0 0 0 0-1.635Z"
                fill="#fff"
              />
            </svg>
          </Link>
        </li>
      );
    })
  ) : (
    <h2 ref={heading} style={{ color: "white" }}>
      Cart is empty
    </h2>
  );

  return (
    <div className="container">
      <div className="cart">
        <h2 style={{ color: "white" }}>You have ordered:</h2>
        <ul className="products-in-cart">{addedProducts}</ul>
      </div>
      <div ref={receipt} className="Receipt">
        <h2 styles={{ marginTop: "30px" }}>Summary</h2>
        <div className="Reciept-Text-Wrapper">
          <p>
            {qty} {title}{" "}
          </p>
        </div>
        <div className="Reciept-Text-Wrapper">
          <RecieptText>Subtotal:</RecieptText>
          <RecieptText>{`${subTotal}$`}</RecieptText>
        </div>
        <div className="Reciept-Text-Wrapper">
          <RecieptText>VAT:</RecieptText>
          <RecieptText>{`${vat}$`}</RecieptText>
        </div>
        <div className="Reciept-Text-Wrapper">
          <RecieptText>Shipping:</RecieptText>
          <RecieptText isMediumImportance>FREE</RecieptText>
        </div>
        <hr />
        <input
          className="Inputic"
          type="text"
          name="Coupon"
          placeholder="Coupon code"
        />
        <div className="Reciept-Text-Wrapper">
          <RecieptText IsImportant>Total:</RecieptText>
          <RecieptText IsImportant IsImportantNumber>{`${total}$`}</RecieptText>
        </div>
        <Button Checkout>Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
