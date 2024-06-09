import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import SocialLinks from "../SocialLInks/SocialLinks";
import { Container } from "react-bootstrap";	

const App = () => {
	return (
		<div className="app">
			<Container>
				<Header/>
				<MainPage/>
			</Container>
			<SocialLinks/> 
		</div>
	);
};

export default App;
