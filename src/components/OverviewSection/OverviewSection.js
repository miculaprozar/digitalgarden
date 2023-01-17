import React from "react";
import { Container } from "../../styles/Global";
import { Overview, Line, Text, Tag } from "./OverviewSection.style";
import rectangle from "../../svg/Rectangle 82.svg";

const OverviewSection = () => {
	return (
		<Container>
			<Overview>
				<Line />
				<Tag>
					<img src={rectangle} alt="rectangle" />
					<Text>OVERVIEW</Text>
				</Tag>
				<Line />
			</Overview>
		</Container>
	);
};

export default OverviewSection;
