import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/reducers";
import {createLogger} from 'redux-logger';

const logger = createLogger({collapsed: true});
const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;