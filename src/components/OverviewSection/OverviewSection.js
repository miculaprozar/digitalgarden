import React from "react";
import { Container } from "../../styles/Global";
import {
	Overview,
	Line,
	Text,
	Tag,
	Description,
	Subtitles,
	SubtitlesGroup,
	Screen,
	InsideScreen,
	Speaker,
} from "./OverviewSection.style";
import rectangle from "../../svg/Rectangle 82.svg";
import screen from "../../images/MA screen image.png";

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
				<Description>
					<Subtitles>
						<SubtitlesGroup>
							<p>Place</p>
							<h3>Romania</h3>
						</SubtitlesGroup>
						<SubtitlesGroup>
							<p>Category</p>
							<h3>E-commerce</h3>
						</SubtitlesGroup>
						<SubtitlesGroup>
							<p>System</p>
							<h3>Android, Web</h3>
						</SubtitlesGroup>
					</Subtitles>
					<Screen>
						<Speaker />
						<InsideScreen>
							<img src={screen} alt="screen" />
						</InsideScreen>
					</Screen>
				</Description>
			</Overview>
		</Container>
	);
};

export default OverviewSection;
