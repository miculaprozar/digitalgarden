import styled from "styled-components";

export const Cultivating = styled.div`
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

export const Tag = styled.div`
	display: flex;
	margin: 40px 0;
	gap: 30px;
`;

export const Title = styled.div`
	font-weight: 800;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #000000;
`;
