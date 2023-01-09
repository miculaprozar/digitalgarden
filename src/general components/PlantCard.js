import React from "react";
import circle from "../svg/Ellipse 11.svg";
import { Card } from "./PlantCard.style";

const PlantCard = (props) => {
	return (
		<Card>
			<img class="circle" src={circle} alt="circle"></img>
			<img class="content" src={props.img} alt="content" />
		</Card>
	);
};

export default PlantCard;
