import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HomeSection from "../components/HomeSection/HomeSection";
import Services from "../components/ServicesSection/ServicesSection";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import WorkSection from "../components/WorkSection/WorkSection";
import "../styles/Index.css";

const App = () => {
	return (
		<div class="page-content">
			<div class="content">
				<Navbar />
				<HomeSection />
				<Services />
				<AboutUsSection />
				<WorkSection />
			</div>
			<Footer />
		</div>
	);
};

export default App;
