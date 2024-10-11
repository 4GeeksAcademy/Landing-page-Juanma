import React from "react";

//include images into your bundle
import { Footer } from "./Footer4Geeks";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam id quae adipisci. Ullam quam quibusdam delectus? Necessitatibus dignissimos obcaecati quod cum, repellendus'/>
			<Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
			<Footer/>
		</>
	);
};

export default Home;