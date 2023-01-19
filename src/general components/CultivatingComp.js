import React from "react";
import {
	Text,
	Pill,
	Content,
	Card,
} from "../general components/CultivatingComp.style";
import elipse from "../../src/svg/Ellipse 11.svg";

const StepsComponent = (props) => {
	const isReverted = props.number % 2 === 1;
	const { number, title, text, img } = props;
	return (
		<Content isReverted={isReverted}>
			<Text>
				<Pill>{number}</Pill>
				<h1>{title}</h1>
				<p>{text}</p>
			</Text>
			<Card>
				<img class="elipse" src={elipse} alt="elipse" />
				<img class="content" src={img} alt="content" />
			</Card>
		</Content>
	);
};

export default StepsComponent;
