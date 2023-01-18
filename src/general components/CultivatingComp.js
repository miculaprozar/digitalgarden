import React from "react";
import {
	Text,
	Pill,
	Content,
	Card,
} from "../general components/CultivatingComp.style";
import elipse from "../../src/svg/Ellipse 11.svg";

const StepsComponent = (props) => {
	if (props.number % 2 === 1) {
		return (
			<Content>
				<Text>
					<Pill>{props.number}</Pill>
					<h1>{props.title}</h1>
					<p>{props.text}</p>
				</Text>
				<Card>
					<img class="elipse" src={elipse} alt="elipse" />
					<img class="content" src={props.img} alt="content" />
				</Card>
			</Content>
		);
	} else {
		return (
			<Content>
				<Card>
					<img class="elipse" src={elipse} alt="elipse" />
					<img class="content" src={props.img} alt="content" />
				</Card>
				<Text>
					<Pill>{props.number}</Pill>
					<h1>{props.title}</h1>
					<p>{props.text}</p>
				</Text>
			</Content>
		);
	}
};

export default StepsComponent;
