import React, { useState } from "react";
import { Container } from "../../styles/Global";
import {
  MenuLink,
  Nav,
  Logo,
  Menu,
  Hamburger,
  NavbarItems
} from "./Navbar.style";
import logo from "../../images/Logomark@1x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <NavbarItems>
          <Logo href="">
            <img src={logo} alt = "" width={200} height={27} />
          </Logo>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Menu isOpen={isOpen}>
            <MenuLink href="">HOME</MenuLink>
            <MenuLink href="">SERVICES</MenuLink>
            <MenuLink href="">ABOUT US</MenuLink>
            <MenuLink href="">WORK</MenuLink>
            <MenuLink href="">CONTACT US</MenuLink>
          </Menu>
        </NavbarItems>
      </Container>
    </Nav>
  );
};

export default Navbar;