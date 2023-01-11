import React from "react";
import SectionPillButton from "../../general components/SectionPillButton";
import line from "../../svg/Work - Bar Top.svg";
import { Container } from "../../styles/Global";
import {
	LaptopLine,
	SubTitle,
	Tags,
	UpPart,
	Work,
	WorkTitle,
} from "./WorkSection.style";
import screen from "../../images/Laptop-like screen placeholder.png";

const WorkSection = () => {
	return (
		<>
			<UpPart>
				<SectionPillButton title={"WORK"} />
				<img src={line} alt="line" />
			</UpPart>

			<Container>
				<Work>
					<img src={screen} alt="screen" />
					<LaptopLine />
					<WorkTitle>Micul Aprozar</WorkTitle>
					<SubTitle>Mai aproape de producatorii locali</SubTitle>
					<Tags>
						<SectionPillButton title={"Overview"} />
						<SectionPillButton title={"Cultivating the Product"} />
					</Tags>
				</Work>
			</Container>
		</>
	);
};

export default WorkSection;
