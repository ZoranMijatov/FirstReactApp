import { createStore } from "redux";
import rootReducer from "./Reducers/reducers";

let initialState = {};

const store = createStore(rootReducer, initialState);
export default store;