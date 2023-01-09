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
	AboutUsProcess,
	RightContent,
	LeftContent,
} from "./AboutUsSection.style";
import image_3 from "../../images/image 3.png";
import leaf from "../../svg/Layezr 11 12.svg";
import StepCard from "../../general components/StepCard";
import PlantCard from "../../general components/PlantCard";
import CircleContent from "../../svg/Group 47.svg";

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
			<AboutUsProcess>
				<LeftContent>
					<StepCard
						number={1}
						title="Environmental Study"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
					<PlantCard img={CircleContent}></PlantCard>
				</LeftContent>
				<RightContent>
					<PlantCard img={CircleContent}></PlantCard>
					<StepCard
						number={2}
						title="Cultivating the Plan"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
				</RightContent>
				<LeftContent>
					<StepCard
						number={3}
						title="Development Phase"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
					<PlantCard img={CircleContent}></PlantCard>
				</LeftContent>
				<RightContent>
					<PlantCard img={CircleContent}></PlantCard>
					<StepCard
						number={4}
						title="Cleaning the Bugs"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
				</RightContent>
				<LeftContent>
					<StepCard
						number={5}
						title="Product Deployment"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
					<PlantCard img={CircleContent}></PlantCard>
				</LeftContent>
				<RightContent>
					<PlantCard img={CircleContent}></PlantCard>
					<StepCard
						number={6}
						title="Further Assitance"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					/>
				</RightContent>
			</AboutUsProcess>
		</Container>
	);
};

export default AboutUsSection;
