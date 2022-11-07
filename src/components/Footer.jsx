import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterAtt = styled.footer`
	margin: 2rem 0 1rem;

	.attribution {
		font-size: 11px;
		text-align: center;
		color: hsl(219, 9%, 45%);
	}

	.attribution a {
		color: hsl(26, 100%, 55%);
	}

	@media (min-width: 1100px) {
		margin: 6rem 0 1rem;
	}
`;

export default function Footer() {
	return (
		<FooterAtt>
			<div class="attribution">
				Challenge by{" "}
				<Link
					to={{ pathname: "https://www.frontendmentor.io/profile/oonoky" }}
					target="_blank"
				>
					Frontend Mentor
				</Link>
				. Coded by{" "}
				<Link
					to={{ pathname: "https://github.com/oonoky" }}
					target="_blank"
				>
					Gulnaz Omirzakova
				</Link>
				.
			</div>
		</FooterAtt>
	);
}
