//import projects img
import UberLanding from '../images/works/uber.jpg';


//import stack img
import HTML5 from '../images/skills/html5.png';
import CSS3 from '../images/skills/css3.png';
import JS from '../images/skills/js.png';
import SASS from '../images/skills/sass.png';
import ReactJS from '../images/skills/react.png';
import Bootstrap from '../images/skills/Bootstrap.png';
import GitHub from '../images/skills/GitHub.png';

export const PROJECTS = [
	{
		id: "0",
		title: "UBER landing page",
		description: "Лэндинг для сервиса такси Uber",
		websiteUrl: "",
		githubUrl: "https://github.com/evilevgeniys/landing_uber_site",
		gitHubIconUrl: GitHub,
		imageUrl: UberLanding,
		stack: [
			{name: "HTML5", icon: HTML5},
			{name: "CSS3", icon: CSS3},
			{name: "JS", icon: JS},
			{name: "SASS", icon: SASS},
			{name: "ReactJS", icon: ReactJS},
			{name: "Bootstrap", icon: Bootstrap},
		]
	},
]