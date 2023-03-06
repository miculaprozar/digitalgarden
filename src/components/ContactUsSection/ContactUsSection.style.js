import styled, { css } from "styled-components";

export const ContactUs = styled.div`
	margin-top: 144px;
	margin-bottom: 144px;
	display: flex;
	position: relative;
	justify-content: center;
	.background {
		width: 100%;
	}
	@media (max-width: 1199px) {
		.background {
			display: none;
		}
	}
`;

export const Title = styled.p`
	font-weight: 800;
	font-size: 48px;
	line-height: 65px;
	color: #ffffff;
	position: absolute;
	z-index: 2;
	top: 108px;
	left: 40px;
	img {
		padding: 0 28px;
		transform: scaleX(-1);
	}
`;

export const SubTitle = styled.p`
	font-weight: 600;
	font-size: 40px;
	line-height: 55px;
	color: #8eff9a;
	position: absolute;
	z-index: 2;
	top: 262px;
	left: 40px;
`;

export const Line = styled.div`
	width: 400px;
	height: 2px;
	background: #ffffff;
	box-shadow: inset 0px 0px 4px rgba(4, 41, 5, 0.23);
	border-radius: 6px;
	position: absolute;
	z-index: 2;
	top: 370px;
	left: 40px;
`;
export const Card = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-flow: column;
	position: absolute;
	display: flex;
	flex-direction: column;
	background: #000f03;
	border-radius: 6px;
	padding: 25px 46px 20px 311px;
	top: 52px;
	left: 15%;
	@media (max-width: 1199px) {
		position: initial;
		padding: 49px 174px;
		width: 100%;
		.inputs {
			display: flex;
			flex-wrap: wrap;
		}
	}
	@media (max-width: 990px) {
		padding: 74px;
	}
`;

export const Text = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #a3a3a3;
`;

export const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 19.54px;
`;
export const Button = styled.div`
	${({ selected }) =>
		selected &&
		css`
			background-color: #10c38d;
		`}
	width: 177.09px;
	height: 54px;
	border: 1px solid #61e5c5;
	border-radius: 24px;
	font-weight: 900;
	font-size: 20px;
	line-height: 27px;
	text-align: center;
	color: #ffffff;
	padding: 12.12px 0;
	cursor: pointer;
`;

export const Input = styled.input`
	width: 100%;
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #a3a3a3;
	margin-top: 34px;
	padding: 0;
	background: none;
	border: none;
	border-radius: 0;
	outline: none;
	appearance: none;
`;

export const Textarea = styled.textarea`
	scroll-behavior: none;
	width: 595px;
	height: 25px;
	font-weight: 700;
	font-size: 20px;
	line-height: 25px;
	color: #a3a3a3;
	margin-top: 34px;
	padding: 0;
	background: none;
	border: none;
	border-radius: 0;
	outline: none;
	appearance: none;
	resize: none;
`;

export const BottomLine = styled.div`
	width: 565px;
	height: 2px;
	background: #a3a3a3;
	box-shadow: inset 0px 0px 4px rgba(4, 41, 5, 0.23);
	border-radius: 6px;
	margin-top: 8px;
`;

export const UploadText = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	text-align: center;
	color: #ffffff;
	margin-left: 15px;
	margin-right: 106px;
	cursor: pointer;
	@media (max-width: 507px) {
		margin-right: 0;
	}
`;

export const ContactUsButton = styled.button`
	margin-top: 33px;
	margin-bottom: 15px;
	width: 234px;
	height: 54px;
	background: #10c38d;
	border-radius: 24px;
	font-weight: 900;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #ffffff;
	padding: 8px 0;
	border: #10c38d;
	filter: drop-shadow(0px 4px 12px rgba(93, 225, 169, 0.58));
	cursor: pointer;
`;

export const Upload = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 48px;
	img {
		margin-left: 10px;
	}
`;

export const Headliner = styled.div`
	display: flex;
	justify-content: center;
	@media (max-width: 1199px) {
		display: none;
	}
`;
