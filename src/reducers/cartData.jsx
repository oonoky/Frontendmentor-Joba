const cartData = (state = [], action) => {
	// for my cart I can either add and item or remove an item and then update the array in my STORE
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.payload];
		case "REMOVE_ITEM":
			return [...action.payload];
		default:
			return state;
	}
};

export default cartData;
