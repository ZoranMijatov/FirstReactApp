export const LIGHTMODE_TOGGLE = "LIGHTMODE_TOGGLE"

export const toggleDarkTheme = () => ({
  type: LIGHTMODE_TOGGLE
});

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  };
};

export const increment = () => {
  return {
      type: "INCREMENT"
  }
}

export const decrement = () => {
  return {
      type: "DECREMENT"
  }
}


