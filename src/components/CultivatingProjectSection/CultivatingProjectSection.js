import React from "react";
import { Container } from "../../styles/Global";
import {
	Cultivating,
	Line,
	Tag,
	Title,
} from "./CultivatingProjectSection.style";
import rectangle from "../../svg/Rectangle 82.svg";
import StepsComponent from "../../general components/CultivatingComp";
import CircleContent from "../../svg/Group 47.svg";

const CultivatingProjectSection = () => {
	return (
		<Container>
			<Cultivating>
				<Line />
				<Tag>
					<img src={rectangle} alt="rectangle" />
					<Title>CULTIVATING THE PROJECT</Title>
				</Tag>
				<Line />
				<StepsComponent
					number="1"
					title="Environmental Study"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
				<StepsComponent
					number="2"
					title="Cleaning the Bugs"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
				<StepsComponent
					number="3"
					title="Environmental Study"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
				<StepsComponent
					number="4"
					title="Development Phase"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
				<StepsComponent
					number="5"
					title="Product Deployment"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
				<StepsComponent
					number="6"
					title="Further Assistance"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna quis quam auctor  iaculis non quis enim. Morbi vehicula egestas ex tristique viverra. Donec ornare volutpat  tortor, eget aliquam leo mattis id."
					img={CircleContent}
				/>
			</Cultivating>
		</Container>
	);
};

export default CultivatingProjectSection;
