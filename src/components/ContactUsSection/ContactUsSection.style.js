import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 1014px;
	height: 638px;
	background: #000f03;
	border-radius: 6px;
	padding: 40px 72px 64px 346px;
`;

export const Text = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	color: #a3a3a3;
`;

export const Buttons = styled.div`
	display: flex;
	gap: 19.54px;
`;
export const Button = styled.div`
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

export const Form = styled.form``;

export const ContactFields = styled.div``;

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
	width: 595px;
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
	margin-right: 132px;
	cursor: pointer;
`;

export const ContactUsButton = styled.button`
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
	margin-top: 48px;
	img {
		margin-left: 10px;
	}
`;
