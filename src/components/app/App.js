import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import SocialLinks from "../SocialLInks/SocialLinks";
import AboutMe from "../aboutMe/AboutMe";
import { Container } from "react-bootstrap";

const App = () => {
	return (
		<div className="app">
			<Container>
				<Header/>
				<MainPage/>
				<AboutMe/>
			</Container>
			<SocialLinks/> 
		</div>
	);
};

export default App;
