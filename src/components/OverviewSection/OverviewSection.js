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
	Content,
	DescriptionTitle,
} from "./OverviewSection.style";
import rectangle from "../../svg/Rectangle 82.svg";
import screen from "../../images/MA screen image.png";
import logo from "../../svg/image 18.svg";

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
				<Content>
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
					<Description>
						<DescriptionTitle>
							<img src={logo} alt="logo" />
							<h1>Micul Aprozar</h1>
						</DescriptionTitle>
						<p>
							Este ipsum dolor sit amet, consectetur adipiscing elit. Sed a
							elementum turpis. Suspendisse commodo consectetur felis, et
							condimentum urna sagittis a. Fusce non odio non sem venenatis
							cursus. Praesent a mollis justo. Praesent et egestas libero.
							Pellentesque pulvinar porta dui ac euismod. Curabitur imperdiet
							erat ipsum, at egestas tellus tincidunt sit amet. Donec
							scelerisque arcu dapibus erat rhoncus, ut dignissim massa
							condimentum. Suspendisse velit sem, dictum non orci quis, placerat
							venenatis magna.
						</p>
					</Description>
				</Content>
			</Overview>
		</Container>
	);
};

export default OverviewSection;
