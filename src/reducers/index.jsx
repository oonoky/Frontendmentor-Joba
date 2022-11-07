import cartData from "./cartData";
import { combineReducers } from "redux";

// gather all reducers in one file
// I only have once action for this project
const allReducers = combineReducers({
	cartItems: cartData,
});

export default allReducers;
