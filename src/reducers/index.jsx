import cartData from "./cartData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	cartItems: cartData,
});

export default allReducers;
