import React, { useState, useEffect, useRef } from "react";
import Cart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import CardModal from "../components/modals/CardModal";
import ProfileModal from "../components/modals/ProfileModal";
import { useSelector } from "react-redux";

export default function RightNav() {
	const cartItems = useSelector((state) => state.cartItems);

	// open cart model
	const [openCart, setOpenCart] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);

	// close cart/profile modal on outside click.
	const cartRef = useRef();
	const profileRef = useRef();
	const cartBtnRef = useRef();
	const profileBtnRef = useRef();
	useEffect(() => {
		const checkIfClickedOutsideCart = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (
				openCart &&
				cartRef.current &&
				!cartRef.current.contains(e.target) &&
				!cartBtnRef.current.contains(e.target)
			) {
				setOpenCart(!openCart);
			}
		};

		const checkIfClickedOutsideProfile = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (
				openProfile &&
				profileRef.current &&
				!profileRef.current.contains(e.target) &&
				!profileBtnRef.current.contains(e.target)
			) {
				setOpenProfile(!openProfile);
			}
		};

		document.addEventListener("click", checkIfClickedOutsideCart);

		document.addEventListener("click", checkIfClickedOutsideProfile);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("click", checkIfClickedOutsideCart);

			document.removeEventListener("click", checkIfClickedOutsideProfile);
		};
	}, [openCart, openProfile]);

	const resetModals = (modal) => {
		if (modal === "cart") {
			setOpenCart(!openCart);
			setOpenProfile(false);
		} else if (modal === "profile") {
			setOpenCart(false);
			setOpenProfile(!openProfile);
		}
	};

	return (
		<div className="rightSide">
			<div className="cart-wrapper">
				<button
					className="cart"
					ref={cartBtnRef}
					onClick={() => resetModals("cart")}
					aria-expanded={openCart ? "true" : "false"}
				>
					<img src={Cart} alt="cart" />
				</button>
				{cartItems.length === 0 ? (
					""
				) : (
					<span id="cart-count">{String(cartItems.length)}</span>
				)}
			</div>
			<button
				className="avatar"
				ref={profileBtnRef}
				onClick={() => resetModals("profile")}
				aria-expanded={openProfile ? "true" : "false"}
			>
				<img src={Avatar} alt="profile" />
			</button>
			{openCart && <CardModal ref={cartRef} />}
			{openProfile && <ProfileModal ref={profileRef} />}
		</div>
	);
}
