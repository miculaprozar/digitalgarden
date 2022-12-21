import React from "react";
import { Button } from "./ServicesSection.style";
import { Container } from "../../styles/Global";
import { ContainerServices } from "./ServicesSection.style";

const Services = () => {
	return (
		<Container>
			<ContainerServices>
				<Button>ABOUT US</Button>
			</ContainerServices>
		</Container>
	);
};

export default Services;
