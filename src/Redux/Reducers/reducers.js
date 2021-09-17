import * as actions from "../actions";
import { combineReducers } from "redux";
import Aircraft from "../ItemsSVG/Aircraft.svg";
import Asteroid from "../ItemsSVG/Asteroid.svg";
import Earth from "../ItemsSVG/Earth.svg";
import Telescope from "../ItemsSVG/Telescope.svg";
import Rocket from "../ItemsSVG/Rocket.svg";

const preferences = (state = { lightModeEnabled: false }, action) => {
  switch (action.type) {
    case actions.LIGHTMODE_TOGGLE:
      return { ...state, lightModeEnabled: !state.lightModeEnabled };

    default:
      return state;
  }
};

const initialState = {
  products: [
    {
      id: 1,
      image: Rocket,
      title: "Satellite",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 2,
      image: "Link, Link, link, link",
      title: "C4",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 3,
      image: Aircraft,
      title: "Rocket",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 4,
      image: "Link, Link, link, link",
      title: "Atom-Bomb",
      description: "Text about the product",
      price: 690000,
    },
    {
      id: 5,
      image: "Link, Link, link, link",
      title: "Alien",
      description: "Text about the product",
      price: 420000,
    },
    {
      id: 6,
      image: "Link, Link, link, link",
      title: "Ufo",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 7,
      image: Earth,
      title: "Earth",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 8,
      image: Asteroid,
      title: "Asteroid",
      description: "Text about the product",
      price:1000000,
    },
    {
      id: 9,
      image: Telescope,
      title: "Telescope",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 10,
      image: "Link, Link, link, link",
      title: "Black-Hole",
      description: "Text about the product",
      price: 1000000,
    },
  ],

  addedProducts: [],
  sum: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.id);
      let addedToCart = state.products.find(
        (product) => product.id === action.id
      );
      let existsInCart = state.addedProducts.find(
        (product) => product.id === action.id
      );
      if (existsInCart) {
        if (addedToCart) {
          addedToCart.quantity += 1;
          return {
            ...state,
            sum: state.sum + addedToCart.price
          };
        } else {
          return state;
        }
      } else {
        if (addedToCart) {
          addedToCart.quantity = 1;
          let newSum = state.sum + addedToCart.price

          return {
            ...state,
            addedProducts: [...state.addedProducts, addedToCart],
            sum: newSum,
          };
        } else {
          return state;
        }
      }

    case "REMOVE_FROM_CART":
      let productRemoved = state.addedProducts.find(
        (product) => action.id === product.id
      );
      let newProducts = state.addedProducts.filter(
        (product) => action.id !== product.id
      );

      let newSum = state.sum - productRemoved.price * productRemoved.quantity;
      console.log(productRemoved);
      return {
        ...state,
        addedProducts: newProducts,
        sum: newSum,
      };

    default:
      return state;
  }
};

export default combineReducers({ preferences, cartReducer });
