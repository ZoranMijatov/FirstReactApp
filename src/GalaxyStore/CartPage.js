import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Redux/actions";
import * as Styled from "./Styles";
import Button from "../Button";
import { gsap } from "gsap";
import { Input } from "../Form/Styles";

const CartPage = () => {
  const products = useSelector((state) => state.cartReducer.addedProducts);
  const subTotal = useSelector((state) => state.cartReducer.sum);
  const dispatch = useDispatch();

  const vat = useMemo(() => Math.floor(subTotal * 0.2), [subTotal]);

  const total = useMemo(() => {
    return subTotal + vat;
  }, [subTotal, vat]);

  const receipt = React.useRef(null);

  useEffect(() => {
    gsap.to(receipt.current, { duration: 1, x: 0, startAt: { x: 500 } });
    gsap.from(".Animated-Item", {
      opacity: 0,
      scale: 0.3,
      stagger: 0.25,
      duration: 0.5,
    });
    gsap.to(".Animated-Text", {
      duration: 1,
      ease: "back.out",
      y: 0,
      startAt: { y: -300 },
    });
  }, [receipt]);

  let addedProducts = products.length ? (
    products.map((product) => {
      return (
        <Styled.ListedItem className="Animated-Item" key={product.id}>
          <div style={{ paddingLeft: "20px;" }}>{product.imageSmall}</div>

          <div>
            <h4 style={{ fontSize: "20px" }}>
              <b>{product.title}</b>
            </h4>
            <p>{product.price}$</p>
          </div>

          <div class="quantity">
            <p className="input-text qty text">{product.quantity}</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="button"
                value="+"
                class="plus"
                title="Increase Quantity"
                onClick={() => dispatch(actions.addToCart(product.id))}
              />
              <input
                type="button"
                value="-"
                class="minus"
                title="Decrease Quantity"
                onClick={() => dispatch(actions.subQty(product.id))}
              />
            </div>
          </div>

          <Link
            title="Remove"
            to="/cart"
            style={{ paddingRight: "20px" }}
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
        </Styled.ListedItem>
      );
    })
  ) : (
    <h2 className="Animated-Text">Cart is empty</h2>
  );

  return (
    <Styled.CartWrapper>
      <div style={{ flex: "0 60%" }}>
        <h2 className="Animated-Text">You have ordered:</h2>
        <ul style={{ height: "600px", overflowY: "auto" }}>{addedProducts}</ul>
      </div>

      <Styled.Wrapper Receipt ref={receipt}>
        <h2 styles={{ marginTop: "30px" }}>Summary</h2>

        <Styled.Wrapper SpaceBetween>
          <Styled.Paragraph>Subtotal:</Styled.Paragraph>
          <Styled.Paragraph>{`${subTotal}$`}</Styled.Paragraph>
        </Styled.Wrapper>

        <Styled.Wrapper SpaceBetween>
          <Styled.Paragraph>VAT:</Styled.Paragraph>
          <Styled.Paragraph>{`${vat}$`}</Styled.Paragraph>
        </Styled.Wrapper>

        <Styled.Wrapper SpaceBetween>
          <Styled.Paragraph>Shipping:</Styled.Paragraph>
          <Styled.Paragraph isMediumImportance>FREE</Styled.Paragraph>
        </Styled.Wrapper>

        <hr style={{ margin: "20px 0", color: "#a9a9a9" }} />
        <Input Coupon type="text" name="Coupon" placeholder="Coupon code" />
        <Styled.Wrapper SpaceBetween>
          <Styled.Paragraph IsImportant>Total:</Styled.Paragraph>
          <Styled.Paragraph
            IsImportant
            IsImportantNumber
          >{`${total}$`}</Styled.Paragraph>
        </Styled.Wrapper>
        <Button Checkout>Checkout</Button>
        <Styled.Wrapper Gap30>
          <svg
            width="48"
            height="48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.594 0H4.219A4.224 4.224 0 0 0 0 4.219V27a4.224 4.224 0 0 0 4.219 4.219h33.375A4.224 4.224 0 0 0 41.812 27V4.219A4.224 4.224 0 0 0 37.594 0Z"
              fill="#5E69E2"
            />
            <path
              d="M41.813 4.219V27a4.224 4.224 0 0 1-4.22 4.219h-10.5V0h10.5a4.224 4.224 0 0 1 4.22 4.219Z"
              fill="#006AC1"
            />
            <path
              d="M6.188 15.75v17.344a4.224 4.224 0 0 0 4.218 4.218h33.375A4.224 4.224 0 0 0 48 33.094V15.75H6.187Z"
              fill="#6BA7FF"
            />
            <path
              d="M48 15.75v17.344a4.224 4.224 0 0 1-4.219 4.218H27.094V15.75H48Z"
              fill="#5E69E2"
            />
            <path
              d="M16.594 31.406h-3a1.406 1.406 0 1 1 0-2.812h3a1.406 1.406 0 0 1 0 2.812ZM25.594 31.406h-3a1.406 1.406 0 1 1 0-2.812h3a1.406 1.406 0 0 1 0 2.812Z"
              fill="#F2F2FC"
            />
            <path
              d="M48 10.313v5.437H6.187v-5.438a4.224 4.224 0 0 1 4.22-4.218H43.78A4.224 4.224 0 0 1 48 10.312Z"
              fill="#00E4EF"
            />
            <path
              d="M48 10.313v5.437H27.094V6.094H43.78A4.224 4.224 0 0 1 48 10.312Z"
              fill="#6BA7FF"
            />
            <path
              d="M24 20.156H13.5c-.777 0-1.406-.63-1.406-1.406v-6c0-.777.63-1.406 1.406-1.406H24c.777 0 1.406.63 1.406 1.406v6c0 .777-.63 1.406-1.406 1.406Z"
              fill="#FFDF40"
            />
            <path
              d="M36.93 20.09a14.903 14.903 0 0 0 9.521 3.448h.143c.72 0 1.306.585 1.306 1.306v7.83c0 3.457-1.1 6.743-3.182 9.504a15.664 15.664 0 0 1-8.266 5.672 1.287 1.287 0 0 1-.717 0 15.664 15.664 0 0 1-8.265-5.672 15.662 15.662 0 0 1-3.182-9.504v-7.83c0-.721.585-1.306 1.306-1.306h.142c3.473 0 6.854-1.225 9.522-3.447a1.302 1.302 0 0 1 1.672 0Z"
              fill="#ACE233"
              stroke="#fff"
              strokeWidth=".2"
            />
            <path
              d="M36.453 47.85c-.086.024-.172.04-.26.046V19.791c.264.02.522.12.737.3a14.903 14.903 0 0 0 9.521 3.447h.143c.72 0 1.306.585 1.306 1.306v7.83c0 3.457-1.1 6.743-3.182 9.504a15.664 15.664 0 0 1-8.266 5.672Z"
              fill="#65CC3A"
              stroke="#fff"
              strokeWidth=".2"
            />
            <path
              d="m42.9 31.37-5.812 5.812a1.402 1.402 0 0 1-.995.411c-.36 0-.72-.136-.994-.411l-3-3a1.408 1.408 0 0 1 0-1.99 1.408 1.408 0 0 1 1.99 0l2.005 2.007 4.817-4.819a1.408 1.408 0 0 1 1.99 0c.548.55.548 1.44 0 1.99Z"
              fill="#fff"
            />
            <path
              d="m42.9 31.37-5.812 5.812a1.402 1.402 0 0 1-.994.411V34.2l4.818-4.819a1.408 1.408 0 0 1 1.989 0c.548.55.548 1.44 0 1.99Z"
              fill="#fff"
            />
          </svg>
          <Styled.Paragraph IsImportant>Secure Payment</Styled.Paragraph>
        </Styled.Wrapper>
      </Styled.Wrapper>
    </Styled.CartWrapper>
  );
};

export default CartPage;
