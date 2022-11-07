// these are the action called to add or delete items in cart
export const add_items = (arr) => {
	return {
		type: "ADD_TO_CART",
		payload: arr,
	};
};
export const remove_items = (arr) => {
	console.log(arr);
	return {
		type: "REMOVE_ITEM",
		payload: arr,
	};
};
