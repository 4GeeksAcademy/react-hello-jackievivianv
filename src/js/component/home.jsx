import React from "react";
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Cards from "./Cards.js";
import Footer from "./Footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="container">
				<Header/>

			<div className="d-flex gap-2 pt-3 pb-3">
				<Cards/>
				<Cards/>
				<Cards/>
				<Cards/>
			</div>
			</div>

			<Footer/>
		</div>
	);
};

export default Home;
