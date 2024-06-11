import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import Portfolio from "../portfolio/Portfolio";
import SocialLinks from "../SocialLInks/SocialLinks";
import Cv from "../Cv/Cv";
import { Container } from "react-bootstrap";	
import  { Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";

const App = () => {
	return (
		<div className="app">
				<Container>
					<Header/>
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/portfolio" element={<Portfolio/>}/>
					</Routes>
					<Footer/>
				</Container>
				<SocialLinks/> 
		</div>
	);
};

export default App;
