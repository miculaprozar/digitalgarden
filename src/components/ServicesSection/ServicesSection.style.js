import styled from "styled-components";

export const Button = styled.button`
	margin-top: 80px;
	width: 200px;
	height: 49px;
	background: rgba(217, 255, 237, 0.41);
	border: 1px solid #d9ffed;
	border-radius: 24px;
	font-weight: 900;
	font-size: 18px;
	line-height: 25px;
	text-align: center;
	color: #4d4d4d;
`;

export const Text = styled.p`
	margin-top: 48px;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: #7b7b7b;
	@media (max-width: 768px) {
		padding-inline: 30px;
		text-align: center;
	}
`;

export const Circle = styled.div`
	position: relative;

	.service {
		position: absolute;
		top: 21%;
		left: 23%;
	}
`;

export const Card = styled.li`
	padding: 30px 75px;
	width: 249.51px;
	height: 218px;
	background: #ffffff;
	border: 1px solid #f3f3f3;
	box-shadow: 0px 0px 10px rgba(81, 227, 171, 0.3);
	border-radius: 24px;

	p {
		text-align: center;
		color: #484848;
		font-weight: 700;
		font-size: 16px;
		line-height: 22px;
	}
`;

export const CardWrappper = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 56px;
	padding: 0;
	@media (max-width: 991px) {
		.rectangle {
			display: none;
		}
		justify-content: center;
		padding-inline: 40px;
	}
`;

export const ContainerServices = styled.div`
	.rectangle {
		align-self: center;
		position: absolute;
		z-index: -1;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 20%;
`;
