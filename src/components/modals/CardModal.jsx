import React from "react";
import "../../styles/CardModal.style.css";
import { useSelector, useDispatch } from "react-redux";
import { remove_items } from "../../actions";

const CardModal = React.forwardRef((props, cartRef) => {
	// declare dispatch function
	const dispatch = useDispatch();
	// get cartItems array from STORE
	const cartItems = useSelector((state) => state.cartItems);
	// add the delete item function by filtering clicked item and returning new array
	const deleteItem = (item) => {
		// can't manipulate original array
		let list = cartItems;
		let newList = list.filter((x) => x.id !== item.id);
		// execute remove item action
		dispatch(remove_items(newList));
	};

	// finding the total amount from the items in cart
	let total = 0;
	// map the items in cart and add to total
	cartItems.map((item) => {
		total += Number(item.total_price);
		console.log(total);
		return total;
	});

	return (
		<div className="cart-modal" ref={cartRef}>
			<div className="top">
				<p className="cart-title">Cart</p>
				<p className="total-price">
					Total Price: ${total}
					.00
				</p>
			</div>
			<div className="bottom">
				{cartItems.length === 0 ? (
					<div className="empty-cart">
						<p>Your cart is empty</p>
					</div>
				) : (
					<div className="occupied-cart">
						<div className="item-list">
							{cartItems.map((item, index) => {
								return (
									<div className="item" id={item.id} key={index}>
										<div className="item-prev"></div>
										<div className="cart-item-info">
											<p className="item-name">Fall Limited Edition Sneakers</p>
											<p className="item-quantity">
												$125.00 x {item.added_items}{" "}
												<span>${item.total_price}.00</span>
											</p>
										</div>
										<button
											className="del"
											onClick={() => deleteItem(item)}
										></button>
									</div>
								);
							})}
						</div>
						<button className="checkout">Checkout</button>
					</div>
				)}
			</div>
		</div>
	);
});

export default CardModal;
