import tokenReducers from './token';
import { combineReducers } from "redux";
import { useReducer } from "react";

const rootReducer = combineReducers({
    token: tokenReducers,
});
export default rootReducer;