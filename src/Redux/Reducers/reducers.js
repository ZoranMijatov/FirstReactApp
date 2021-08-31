import * as actions from '../actions';
import { combineReducers } from "redux";

const preferences = (state = { lightModeEnabled: false }, action) => {
  switch (action.type) {
    case actions.LIGHTMODE_TOGGLE:
      return { ...state, lightModeEnabled: !state.lightModeEnabled };

    default:
      return state;
  }
};

export default combineReducers({ preferences });