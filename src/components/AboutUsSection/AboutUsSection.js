import React from "react";
import SectionPillButton from "../../general components/SectionPillButton";
import rectangle from "../../svg/Rectangle 25 2.svg";
import {
	Container,
	Card,
	DescriptionCard,
	Description,
	Title,
	CardDetails,
} from "./AboutUsSection.style";
import image_3 from "../../images/image 3.png";
import leaf from "../../svg/Layezr 11 12.svg";

const AboutUsSection = () => {
	return (
		<Container>
			<SectionPillButton title={"ABOUT US"} />
			<Card>
				<DescriptionCard>
					<img class="image_3" src={image_3} alt="image_3" />
					<CardDetails>
						<Title>
							<img class="leaf" src={leaf} alt="leaf" />
							<p>WHO WE ARE</p>
						</Title>
						<Description>
							A <span>SPROUTING</span> GROUP OF <p>SOFTWARE DEVELOPERS</p>
						</Description>
					</CardDetails>
				</DescriptionCard>
				<img class="rectangle" src={rectangle} alt="rectangle" />
			</Card>
		</Container>
	);
};

export default AboutUsSection;
