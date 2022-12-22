import React from "react";
import {
	ContainerServices,
	Button,
	Text,
	CardWrappper,
	Card,
	Circle,
} from "./ServicesSection.style";
import { Container } from "../../styles/Global";
import ellipse from "../../svg/Ellipse 1.svg";
import img from "../../images//image 14.png";
import rectangle from "../../svg/Rectangle 25.svg";

const Services = () => {
	return (
		<Container>
			<ContainerServices>
				<Button>SERVICES</Button>
				<Text>
					WE OFFER TO YOU THE POSIBILITY OF DEVELOPING WEB AND MOBILE APPS
				</Text>
				<CardWrappper>
					<img class="rectangle" src={rectangle} alt="rectangle" />
					<Card>
						<Circle>
							<img src={ellipse} alt="ellipse" />
							<img class="service" src={img} alt="img" />
						</Circle>
						<p>FRONT END DEVELOPMENT</p>
					</Card>
					<Card>
						<Circle>
							<img src={ellipse} alt="ellipse" />
							<img class="service" src={img} alt="img" />
						</Circle>
						<p>BACK END DEVELOPMENT</p>
					</Card>
					<Card>
						<Circle>
							<img src={ellipse} alt="ellipse" />
							<img class="service" src={img} alt="img" />
						</Circle>
						<p>APP DEVELOPMENT</p>
					</Card>
				</CardWrappper>
			</ContainerServices>
		</Container>
	);
};

export default Services;
