import React from "react";
import { 
    Container,
    HomeTitle,
    LeafAndLine
} from "./HomeSection.style";
import leaf from "../../svg/S1 Leaf.svg";
import line from "../../svg/Line 3.svg";


const HomeSection = () => {
    return (
        <Container>
            <LeafAndLine>
            <img class = "leaf" src={leaf} alt = "leaf"/>
            <img class = "line" src={line} alt = "line"/>
            </LeafAndLine>
            <HomeTitle>
                <p class = "firstTitle">WELCOME <span>IN THE</span></p>
                <p class = "thirdTitle">DIGITAL GARDEN</p>
            </HomeTitle>
        </Container>
    )   
}

export default HomeSection;