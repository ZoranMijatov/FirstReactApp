import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/reducers";
import { createLogger } from "redux-logger";

const logger = createLogger({ collapsed: true });
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;

// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./Reducers/reducers";
// import {createLogger} from 'redux-logger';
// import { configureStore } from '@reduxjs/toolkit'

// const logger = createLogger({collapsed: true});
// const middlewares = [logger]

// const store = configureStore({ reducer: rootReducer })
// const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export default store;
