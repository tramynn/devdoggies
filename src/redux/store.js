import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

const rootReducer = combineReducers({});

export default createStore(rootReducer, applyMiddleware(promise));
