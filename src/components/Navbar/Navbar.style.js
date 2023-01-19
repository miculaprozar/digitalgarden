import styled from "styled-components";

export const MenuLink = styled.a`
	font-size: 12px;
	line-height: 16.37px;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	color: #0b0b0c;
	text-decoration: none;
	margin: 10px;
	position: relative;

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		top: 25px;
		width: 100%;
		height: 4px;
		border-radius: 6px;
		background-color: #39a36f;
		opacity: 0;
	}
	&:hover:after {
		opacity: 1;
		transform: translate3d(0, 0.2em, 0);
	}
	&:hover {
		color: #39a36f;
	}
`;

export const Nav = styled.div`
	box-shadow: 0px 2px 2px rgba(192, 192, 192, 0.25);
`;

export const NavbarItems = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.div`
	cursor: pointer;
`;

export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 770px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`;

export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	margin-top: 8px;
	position: relative;
	span {
		height: 2px;
		width: 25px;
		background: #0b0b0c;
		margin-bottom: 3px;
		border-radius: 5px;
	}
	@media (max-width: 770px) {
		position: absolute;
		display: flex;
		left: 82%;
	}
`;
