import React from "react";
import { Button } from "./ServicesSection.style";
import { Container } from "../../styles/Global";
import { ContainerServices } from "./ServicesSection.style";
import { Text } from "./ServicesSection.style";

const Services = () => {
	return (
		<Container>
			<ContainerServices>
				<Button>SERVICES</Button>
				<Text>
					WE OFFER TO YOU THE POSIBILITY OF DEVELOPING WEB AND MOBILE APPS
				</Text>
			</ContainerServices>
		</Container>
	);
};

export default Services;
