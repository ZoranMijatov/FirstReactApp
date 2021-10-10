import * as actions from "../actions";
import { combineReducers } from "redux";
import Sun from "../ItemsSVG/Sun";
import Mars from "../ItemsSVG/Mars";
import Saturn from "../ItemsSVG/Saturn";
import Telescope from "../ItemsSVG/Telescope";
import Comet from "../ItemsSVG/Comet";
import PizzaPlanet from "../ItemsSVG/PizzaPlanet";
import Earth from "../ItemsSVG/Earth";
import Moon from "../ItemsSVG/Moon";

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
      image: <Sun />,
      title: "The Sun",
      slang: "Fireball that hangs in the sky",
      description:
        "The sun is a star, a hot ball of glowing gases at the heart of our solar system. Without the sun's intense energy and heat, there would be no life on Earth. The temperature at the sun's core is about 27 million degrees Fahrenheit.  ",
      price: 69,
    },
    {
      id: 2,
      image: <Earth />,
      title: "Earth",
      slang: "A plastic explosive that blows the shit out of everything.",
      description:
        "Explosive material that looks and feels like white clay. Most often used by military personnel, terrorists and modern-day bank robbers! C-4 can also be called Composition 4 since it includes three other types of explosives along with the original base catalyst. Form of plastique.",
      price: 911,
    },
    {
      id: 3,
      image: <Moon />,
      title: "The Moon",
      description: "Text about the product",
      price: 25000,
    },
    {
      id: 4,
      image: <Mars />,
      title: "Mars",
      description: "Text about the product",
      price: 8250000000,
    },
    {
      id: 5,
      image: "Link, Link, link, link",
      title: "Alien",
      description: "Text about the product",
      price: 3.5,
    },
    {
      id: 6,
      image: "Link, Link, link, link",
      title: "Ufo",
      description: "Text about the product",
      price: 20,
    },
    {
      id: 7,
      image: <PizzaPlanet />,
      title: "Pizza planet",
      description: "Text about the product",
      price: 5000000000000000,
    },
    {
      id: 8,
      image: <Saturn />,
      title: "Saturn",
      description: "Text about the product",
      price: 1000000,
    },
    {
      id: 9,
      image: <Comet />,
      title: "Comet",
      description: "Text about the product",
      price: 700,
    },
    {
      id: 10,
      image: <Telescope />,
      title: "Telescope",
      description: "Text about the product",
      price: 42,
    },
  ],

  addedProducts: [],
  sum: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
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
            sum: state.sum + addedToCart.price,
          };
        } else {
          return state;
        }
      } else {
        if (addedToCart) {
          addedToCart.quantity = 1;
          let newSum = state.sum + addedToCart.price;

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

    case "SUB_QUANTITY":
      let addedToCartTwo = state.products.find(
        (product) => product.id === action.id
      );
      let newSumZ = state.sum - addedToCartTwo.price;
      if (addedToCartTwo.quantity === 1) {
        return {
          ...state,
        };
      } else {
        addedToCartTwo.quantity -= 1;
        return {
          ...state,
          sum: newSumZ,
        };
      }

    default:
      return state;
  }
};

export default combineReducers({ preferences, cartReducer });
