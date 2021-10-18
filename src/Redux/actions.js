export const LIGHTMODE_TOGGLE = "LIGHTMODE_TOGGLE";
export const SET_STEPS = "SET_STEPS";
export const INCREMENT_CURRENT_STEP = "INCREMENT_CURRENT_STEP";
export const DECREMENT_CURRENT_STEP = "DECREMENT_CURRENT_STEP";
export const ISLOGGED_IN = 'ISLOGGED_IN';

export const toggleDarkTheme = () => ({
  type: LIGHTMODE_TOGGLE,
});

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SUB_QUANTITY = "SUB_QUANTITY";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};

export const subQty = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const setLogin = (isLoggedin) => {
  return { 
    type: ISLOGGED_IN,
    isLoggedin
  }
}
