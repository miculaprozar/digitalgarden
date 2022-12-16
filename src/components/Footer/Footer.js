import React from "react";
import { 
    Copyright,
    Heading,
    Text,
    CopyrightText,
    UpFooter,
    Col,
    Row
} from "./Footer.style";
import { Container } from "../../styles/Global";
import logo from "../../images/Logomark FWhite@1x.png";
import icon1 from "../../svg/icons8-facebook.svg";
import icon2 from "../../svg/icons8-instagram.svg";
import icon3 from "../../svg/icons8-linkedin-circled.svg";

const Footer = () => {
    return (
    <Container>
        <UpFooter>
            <Row>
                <Col>
                <img src={logo} alt = "" width={308} height={44} />
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elementum turpis.</Text>
                </Col>
                <Col>
                    <Heading>SITE NAVIGATION</Heading>
                    <Text>HOME</Text>
                    <Text>SERVICES</Text>
                    <Text>ABOUT US</Text>
                    <Text>WORK</Text>
                    <Text>CONTACT US</Text>
                </Col>
                <Col>
                    <Heading>LOCATION</Heading>
                    <Text>TIMISOARA, ROMANIA</Text>
                    <Heading>EMAIL</Heading>
                    <Text>digitalgarden@gmail.com</Text>
                </Col>
                <Col>
                    <Heading>SOCIAL MEDIA</Heading>
                    <img src={icon1} alt = ""/>
                    <img src={icon2} alt = ""/>
                    <img src={icon3} alt = ""/>
                </Col>
            </Row>
        </UpFooter>
        <Copyright>
            <CopyrightText>Copyright © 2020-2022 Digital Garden</CopyrightText>
        </Copyright>
    </Container>
    )
}

export default Footer;