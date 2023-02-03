import React from "react";
import { Container } from "../../styles/Global";
import upload from "../../svg/Vector_2.svg";
import background from "../../images/Contact Us - BG Image.png";
import leaf from "../../svg/S1 Leaf.svg";
import {
	Card,
	Text,
	Button,
	Buttons,
	Input,
	BottomLine,
	Textarea,
	UploadText,
	ContactUsButton,
	Upload,
	ContactUs,
	Title,
	SubTitle,
	Line,
	Headliner,
} from "../ContactUsSection/ContactUsSection.style";

const ContactUsSection = () => {
	return (
		<Container>
			<ContactUs>
				<Headliner>
					<img className="background" src={background} alt="background" />
					<Title>
						Do you have a <img src={leaf} alt="leaf" />
						<br /> project to grow?
					</Title>
					<SubTitle>Use our garden</SubTitle>
					<Line />
				</Headliner>
				<Card>
					<Text>I'm interested in...</Text>
					<Buttons>
						<Button>Front End</Button>
						<Button>Back End</Button>
						<Button>Mobile</Button>
					</Buttons>
					<form>
						<div className="inputs">
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
						</div>
						<Upload>
							<img src={upload} alt="upload" />
							<UploadText>Upload your ideas</UploadText>
							<ContactUsButton>Contact us</ContactUsButton>
						</Upload>
					</form>
				</Card>
			</ContactUs>
		</Container>
	);
};

export default ContactUsSection;
