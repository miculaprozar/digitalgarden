import styled from "styled-components";

export const Overview = styled.div`
	display: flex;
	align-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	@media (max-width: 583px) {
		padding: 20px;
	}
`;

export const Line = styled.div`
	width: 100%;
	max-width: 872px;
	height: 8px;
	background: #51e3ab;
`;

export const Text = styled.div`
	font-weight: 800;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #000000;
`;

export const Tag = styled.div`
	display: flex;
	margin: 40px 0;
	gap: 30px;
`;

export const Content = styled.div`
	img {
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.0001);
		border-radius: 22px;
	}
	margin: 51px 0;
`;

export const Subtitles = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 56px;
`;

export const SubtitlesGroup = styled.div`
	h3,
	p {
		margin: 0;
	}
`;

export const InsideScreen = styled.div`
	width: 234.37px;
	height: 348.43px;
	background: rgba(255, 255, 255, 0.0001);
	border-radius: 22px;
`;
export const Screen = styled.div`
	width: 262.01px;
	height: 367.01px;
	background: linear-gradient(180deg, #ffffff 32.38%, #eef4fa 100%);
	box-shadow: inset -6px -4px 16px #c7c7c7, inset 15px 0px 12px 3px #f4f4f4,
		inset 0px -4px 5px #6cf48a, inset -7px -10px 34px #daffde;
	border-radius: 41px;
	float: right;
	padding: 18px 20px;
	margin-top: -36px;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const Speaker = styled.div`
	width: 67.91px;
	height: 2.48px;
	background: #e5f9e4;
	border-radius: 9px;
	margin: 0 69px 17px;
`;

export const DescriptionTitle = styled.div`
	margin-top: 48px;
	width: 205px;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 442px;
	p {
		font-weight: 600;
		font-size: 16px;
		line-height: 22px;
		color: #000000;
	}
`;
