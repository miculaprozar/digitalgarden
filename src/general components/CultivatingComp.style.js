import styled from "styled-components";

export const Content = styled.div`
	margin-top: 72px;
	gap: 170px;
	display: flex;
`;
export const Text = styled.div`
	width: 322px;
	height: 380px;
	font-weight: 700;
	color: #184b23;
	p {
		font-size: 14px;
		line-height: 19px;
	}
	h1 {
		font-size: 32px;
		line-height: 44px;
	}
`;

export const Pill = styled.div`
	width: 72px;
	height: 28.67px;
	background: #51e3ab;
	border-radius: 40px;
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: #ffffff;
	text-align: center;
`;

export const Card = styled.div`
	position: relative;
	width: 380px;
	height: 380px;
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(4, 41, 5, 0.23);
	border-radius: 24px;
	.elipse {
		margin: 62px 65px;
		width: 250px;
	}
	.content {
		position: absolute;
		top: 32%;
		left: 30%;
		width: 176px;
		height: 144px;
	}
`;
