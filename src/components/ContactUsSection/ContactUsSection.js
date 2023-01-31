import React from "react";
import { Container } from "../../styles/Global";
import background from "../../images/Contact Us - BG Image.png";
import upload from "../../svg/Vector_2.svg";
import {
	Card,
	Text,
	Button,
	Buttons,
	Form,
	ContactFields,
	Input,
	BottomLine,
	Textarea,
	UploadText,
	ContactUsButton,
	Upload,
} from "../ContactUsSection/ContactUsSection.style";

const ContactUsSection = () => {
	return (
		<Container>
			<img src={background} alt="background" />
			<Card>
				<Text>I'm interested in...</Text>
				<Buttons>
					<Button>Front End</Button>
					<Button>Back End</Button>
					<Button>Mobile</Button>
				</Buttons>
				<Form>
					<ContactFields>
						<Input
							type="text"
							required
							name="name"
							placeholder="Your Full Name"
						/>
						<BottomLine />
						<Input type="text" required name="adress" placeholder="Adress" />
						<BottomLine />
						<Input type="text" required name="email" placeholder="Email" />
						<BottomLine />
						<Textarea
							required
							placeholder="Tell us about your project"></Textarea>
						<BottomLine />
					</ContactFields>
					<Upload>
						<img src={upload} alt="upload" />
						<UploadText>Upload your ideas</UploadText>
						<ContactUsButton>Contact us</ContactUsButton>
					</Upload>
				</Form>
			</Card>
		</Container>
	);
};

export default ContactUsSection;
