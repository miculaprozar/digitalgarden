import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	width: 198px;
	height: 164px;
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(4, 41, 5, 0.23);
	border-radius: 24px;
	.circle {
		padding: 22px 39px;
	}
	.content {
		position: absolute;
		top: 37%;
		left: 37%;
	}
	@media (max-width: 1096px) {
		display: none;
	}
`;
