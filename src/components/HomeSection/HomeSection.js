import React from "react";
import { Container } from "../../styles/Global";
import { 
    ContainerHome,
    HomeTitle,
    LeafAndLine,
    Description,
    Button
} from "./HomeSection.style";
import leaf from "../../svg/S1 Leaf.svg";
import line from "../../svg/Line 3.svg";
import illustration from "../../svg/Hero Section Illustration.svg";
import arrow from "../../svg/Vector.svg";
import bgShape from "../../svg/S1 South BG Shape.svg"

const HomeSection = () => {
    return (
        <Container>
            <ContainerHome>
                <LeafAndLine>
                <img class = "leaf" src={leaf} alt = "leaf"/>
                <img class = "line" src={line} alt = "line"/>
                </LeafAndLine>
                <HomeTitle>
                    <p class = "firstTitle">WELCOME <span>IN THE</span></p>
                    <p class = "thirdTitle">DIGITAL GARDEN</p>
                    <Description>
                        Right here, our mission is to help you cultivate performance and
                        <br></br>asure the growth of your desired digital product. 
                    </Description>
                    <Button>
                        Our Work
                        <img class = "arrow" src={arrow} alt = "arrow"/>
                    </Button>
                </HomeTitle>
                <img class = "illustration" src={illustration} alt="illustration"/>
            </ContainerHome>
            <img alt="bgShape" src={bgShape}/>
        </Container>

    )   
}

export default HomeSection;