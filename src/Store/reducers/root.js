//const { combineReducers } = require("redux");
import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductReducer from "./cartProduct";

// Combine all the reducers into a single one
// and register that one with the store in index.js

const rootReducer = combineReducers({
    count: cartCounterReducer, // additional slice of reducer
    cart: cartProductReducer,
});

export default rootReducer;