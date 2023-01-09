import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 108px;
`;

export const DescriptionCard = styled.div`
	width: 648px;
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(4, 41, 5, 0.23);
	border-radius: 24px;
	.image_3 {
		float: right;
	}
	@media (max-width: 760px) {
		width: initial;
		margin: 0 50px;
		.image_3 {
			display: none;
		}
	}
`;

export const Card = styled.div`
	.rectangle {
		position: absolute;
		z-index: -1;
		padding-top: 57px;
	}
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-top: 48px;
	@media (max-width: 760px) {
		.rectangle {
			display: none;
		}
	}
`;

export const CardDetails = styled.div`
	padding: 20px;
`;

export const Title = styled.div`
	display: flex;
	gap: 3.5px;
	p {
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
		color: #7b7b7b;
	}
`;

export const Description = styled.div`
	span {
		font-weight: 700;
		background: -webkit-linear-gradient(#00d770, #279847, #279847);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	p {
		margin: 0;
		font-weight: 700;
	}
	margin: 0;
	font-weight: 400;
	font-size: 32px;
	line-height: 44px;
	color: #2d5337;
`;

export const AboutUsProcess = styled.div`
	position: relative;
	max-width: 1096px;
	margin: 108px auto;
	&:after {
		content: "";
		position: absolute;
		background: #51e3ab;
		width: 1646px;
		height: 24px;
		border-radius: 24px;
		transform: rotate(90deg);
		top: 48%;
		bottom: 0;
		left: -84%;
		z-index: -1;
		left: -25%;
		@media (max-width: 1096px) {
			left: -143%;
		}
	}
	@media (max-width: 1096px) {
		margin: 108px;
		display: flex;
		flex-direction: column;
	}
`;

export const RightContent = styled.div`
	float: right;
	display: flex;
	gap: 25px;
	@media (max-width: 1096px) {
		float: left;
	}
`;

export const LeftContent = styled.div`
	float: left;
	display: flex;
	gap: 25px;
`;
