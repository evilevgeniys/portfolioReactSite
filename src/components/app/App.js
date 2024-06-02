import Header from "../header/Header";
import MainPage from "../mainPage/MainPage";
import SocialLinks from "../SocialLInks/SocialLinks";

const App = () => {
	return (
		<div className="app">
			<Header/>
			<MainPage/>
			<SocialLinks/> // added random comment
		</div>
	);
};

export default App;
