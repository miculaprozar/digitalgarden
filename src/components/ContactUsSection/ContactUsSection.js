import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
	const form = useRef();
	const selectedButtonRef = useRef();
	const [selectedButton, setSelectedButton] = useState(null);

	const handleClick = (button) => {
		setSelectedButton((prevButton) => (prevButton === button ? null : button));
		selectedButtonRef.current.value = button;
	};

	// const toBase64 = (file) =>
	// 	new Promise((resolve, reject) => {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(file);
	// 		reader.onload = () => resolve(reader.result);
	// 		reader.onerror = (error) => reject(error);
	// 	});

	const sendEmail = async (e) => {
		e.preventDefault();
		// const file = e.target.elements.my_file.files[0];
		// const fileBase64 = await toBase64(file);

		emailjs
			.sendForm(
				"service_zvbedu5",
				"template_aczmmrp",
				form.current,
				"7zYEBdDkl93W2z1hj"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

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
						<Button
							selected={selectedButton === "front_end"}
							onClick={() => handleClick("front_end")}>
							Front End
						</Button>
						<Button
							selected={selectedButton === "back_end"}
							onClick={() => handleClick("back_end")}>
							Back End
						</Button>
						<Button
							selected={selectedButton === "mobile"}
							onClick={() => handleClick("mobile")}>
							Mobile
						</Button>
					</Buttons>
					<form
						enctype="multipart/form-data"
						method="post"
						ref={form}
						onSubmit={sendEmail}>
						<div className="inputs">
							<input
								type="hidden"
								name="selected_button"
								ref={selectedButtonRef}
							/>
							<Input
								type="text"
								required
								name="user_name"
								placeholder="Your Full Name"
							/>
							<BottomLine />
							<Input
								type="text"
								required
								name="user_adress"
								placeholder="Adress"
							/>
							<BottomLine />
							<Input
								type="text"
								required
								name="user_email"
								placeholder="Email"
							/>
							<BottomLine />
							<Textarea
								name="user_message"
								required
								placeholder="Tell us about your project"></Textarea>
							<BottomLine />
						</div>
						<Upload hidden>
							<img src={upload} alt="upload" />
							<UploadText>Upload your ideas</UploadText>
						</Upload>
						<ContactUsButton>Contact us</ContactUsButton>
					</form>
				</Card>
			</ContactUs>
		</Container>
	);
};

export default ContactUsSection;
