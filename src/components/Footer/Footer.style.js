import styled from "styled-components";

export const UpFooter = styled.div`
	background: #191d1b;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Row = styled.div`
	display: inline-flex;
	@media (max-width: 1200px) {
		display: flex;
		flex-wrap: wrap;
	}
`;

export const Col = styled.ul`
	margin-bottom: auto;
	padding: 0px 47px 11px;
	@media (max-width: 1200px) {
		margin-left: 30px;
	}
`;

export const Heading = styled.h4`
	font-weight: 900;
	font-size: 16px;
	color: #f2f2f2;
`;

export const Text = styled.p`
	max-width: 340px;
	font-weight: 400;
	font-size: 14px;
	color: #cacaca;
`;

export const Copyright = styled.div`
	height: 80px;
	background: #040404;
	padding: 20px;
`;

export const CopyrightText = styled.p`
	text-align: center;
	font-weight: 700;
	font-size: 16px;
	color: #848484;
`;
