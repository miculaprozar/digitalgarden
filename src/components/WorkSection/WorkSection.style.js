import styled from "styled-components";

export const UpPart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		margin-top: 48px;
	}
`;

export const Work = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 80px 0;
	img {
		width: 817.68px;
		height: 401px;
		margin: 0;
		position: relative;
	}

	@media (max-width: 907px) {
		padding-inline: 30px;
		img {
			width: 500px;
			height: 248px;
		}
	}

	@media (max-width: 600px) {
		img {
			width: 343px;
			height: 170px;
		}
	}
`;

export const LaptopLine = styled.div`
	width: 872px;
	height: 13px;
	background: #303030;
	box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
	margin-bottom: 37px;
	margin-top: 384px;
	@media (max-width: 907px) {
		width: 534px;
		margin-top: 237px;
	}
	@media (max-width: 600px) {
		width: 366px;
		margin-top: 162px;
	}
	position: absolute;
`;

export const WorkTitle = styled.p`
	font-weight: 900;
	font-size: 96px;
	line-height: 131px;
	text-align: center;
	color: #3ca459;
	margin: 0;
	@media (max-width: 700px) {
		font-size: 50px;
	}
`;

export const SubTitle = styled.p`
	font-weight: 400;
	font-size: 32px;
	line-height: 44px;
	text-align: center;
	color: #5e5e5e;
	margin: 0;
	@media (max-width: 700px) {
		font-size: 20px;
	}
`;

export const Tags = styled.div`
	display: flex;
	gap: 32px;
`;
