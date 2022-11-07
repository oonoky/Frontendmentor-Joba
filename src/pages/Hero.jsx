import React, { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import ClosePrev from "../assets/images/icon-close.svg";
import PrevBtn from "../assets/images/icon-previous.svg";
import NextBtn from "../assets/images/icon-next.svg";
import "../styles/Hero.css";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { add_items } from "../actions";

const Hero = () => {
	const dispatch = useDispatch();

	const [itemQuantity, setItemQuantity] = useState(0);
	const incNum = () => {
		setItemQuantity(itemQuantity + 1);
		setItems({
			...items,
			added_items: itemQuantity + 1,
			total_price: 125 * (itemQuantity + 1),
		});
	};
	const decNum = () => {
		if (itemQuantity > 0) {
			setItemQuantity(itemQuantity - 1);
			setItems({
				...items,
				added_items: itemQuantity - 1,
				total_price: 125 * (itemQuantity - 1),
			});
		} else {
			setItemQuantity(0);
		}
	};

	const addItem = () => {
		if (itemQuantity === 0) {
			alert("Please select a quantity");
			return;
		}
		setItems({ ...items, id: shortid.generate() });
		setItemQuantity(0);
		dispatch(add_items(items));
	};

	const [items, setItems] = useState({
		id: shortid.generate(),
		added_items: 0,
		total_price: 0,
	});

	const [photoModal, setPhotoModal] = useState(false);
	const togglePhotoModal = () => {
		setPhotoModal(!photoModal);
		setActiveModalImage(activeImage);
	};

	const galleryArray = [Image1, Image2, Image3, Image4];

	const [activeImage, setActiveImage] = useState(galleryArray[0]);
	const adjustActiveImage = (index) => {
		setActiveImage(index);
		setActiveModalImage(index);
	};

	const [activeModalImage, setActiveModalImage] = useState(activeImage);
	const adjustActiveModalImage = (index) => {
		setActiveModalImage(index);
	};


	const [mobileImgNav, setMobileImgNav] = useState(0);
	const mobileNextImg = (n) => {
		let mapImg = galleryArray.map((img) => {
			return activeImage === img ? (img = true) : null;
		});
		let mobileImgNav = mapImg.indexOf(true);
		let show = mobileImgNav + n;
		if (show < 0) {
			show = 3;
		} else if (show > 3) {
			show = 0;
		}
		setMobileImgNav(show);
		setActiveImage(galleryArray[show]);
	};

	const [imageNav, setImgNav] = useState(0);
	const nextImg = (n) => {
		let mapImg = galleryArray.map((img) => {
			return activeModalImage === img ? (img = true) : null;
		});
		let imageNav = mapImg.indexOf(true);
		let show = imageNav + n;
		if (show < 0) {
			show = 3;
		} else if (show > 3) {
			show = 0;
		}
		setImgNav(show);
		setActiveModalImage(galleryArray[show]);
	};

	return (
		<main>
			<div className="gallery">
				<div className="main-image">
					<button onClick={togglePhotoModal}>
						<img className="previewed-img" src={activeImage} alt="item image" />
					</button>
					<div className="navigation-btns">
						<button className="prev" onClick={() => mobileNextImg(-1)}>
							<img src={PrevBtn} alt="previous button" />
						</button>
						<button className="next" onClick={() => mobileNextImg(1)}>
							<img src={NextBtn} alt="next button" />
						</button>
					</div>
				</div>
				<div className="photo-options">
					<button
						className={`img img-1 ${activeImage === Image1 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[0])}
					></button>
					<button
						className={`img img-2 ${activeImage === Image2 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[1])}
					></button>
					<button
						className={`img img-3 ${activeImage === Image3 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[2])}
					></button>
					<button
						className={`img img-4 ${activeImage === Image4 ? "selected" : ""}`}
						onClick={() => adjustActiveImage(galleryArray[3])}
					></button>
				</div>
			</div>
			<div className="description">
				<div className="info">
					<p className="company">Sneaker Company</p>
					<h1>Fall Limited Edition Sneakers</h1>
					<p className="item-info">
						{" "}
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
					<div className="price-tag">
						<p className="price">$125.00</p>
						<p className="retail-price">$250.00</p>
					</div>
					<div className="description-btn">
						<div className="quantity-wrapper">
							<button className="min" onClick={decNum}></button>
							<p className="quantity">{itemQuantity}</p>
							<button className="add" onClick={incNum}></button>
						</div>
						{/* cart button */}
						<button className="add-to-cart" onClick={() => addItem()}>
							<span>Add to cart</span>
						</button>
					</div>
				</div>
			</div>
			{/* ===========================modal=========================== */}
			<div
				className="images-modal"
				style={photoModal ? null : { display: `none` }}
			>
				<div className="modal-bg" onClick={togglePhotoModal}></div>
				<div className="wrapper">
					<div className="modal-gallery">
						<button className="close-btn" onClick={togglePhotoModal}>
							<img src={ClosePrev} alt="close" />
						</button>
						<div className="modal-preview">
							<img
								className="previewed-img"
								src={activeModalImage}
								alt="item image"
							/>
							<div className="navigation-btns">
								<button className="prev" onClick={() => nextImg(-1)}>
									<img src={PrevBtn} alt="previous button" />
								</button>
								<button className="next" onClick={() => nextImg(1)}>
									<img src={NextBtn} alt="next button" />
								</button>
							</div>
						</div>
						<div className="photo-options">
							<button
								className={`img img-1 ${
									activeModalImage === Image1 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image1)}
							></button>
							<button
								className={`img img-2 ${
									activeModalImage === Image2 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image2)}
							></button>
							<button
								className={`img img-3 ${
									activeModalImage === Image3 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image3)}
							></button>
							<button
								className={`img img-4 ${
									activeModalImage === Image4 ? "selected" : ""
								}`}
								onClick={() => adjustActiveModalImage(Image4)}
							></button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
