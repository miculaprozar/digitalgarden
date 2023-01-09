import React from "react";
import { Card, CardPill } from "./StepCard.style";

const StepCard = (props) => {
	return (
		<Card>
			<CardPill>{props.number}</CardPill>
			<h1>{props.title}</h1>
			<p>{props.text}</p>
		</Card>
	);
};

export default StepCard;
