//import projects img
import UberLanding from '../images/works/uber.png';
import PulseLanding from '../images/works/pulse.png';
import FoodSite from '../images/works/food.png';
import CrudSite from '../images/works/Crud.png';


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
		techIcons: [
			{name: "HTML5", icon: HTML5},
			{name: "CSS3", icon: CSS3},
			{name: "Bootstrap", icon: Bootstrap}
		]
	},
	{
		id: "1",
		title: "Магазин фитнес-браслетов 'Pulse'",
		description: "Одностраничный сайт магазина",
		websiteUrl: "",
		githubUrl: "https://github.com/evilevgeniys/pulse_landing_site",
		gitHubIconUrl: GitHub,
		imageUrl: PulseLanding,
		techIcons: [
			{name: "HTML5", icon: HTML5},
			{name: "CSS3", icon: CSS3},
			{name: "JS", icon: JS},
			{name: "SASS", icon: SASS},
			{name: "Bootstrap", icon: Bootstrap},
		]
	},
	{
		id: "2",
		title: "Сайт здорового питания",
		description: "Информационный портал по теме здорового питания",
		websiteUrl: "",
		githubUrl: "https://github.com/evilevgeniys/food_site",
		gitHubIconUrl: GitHub,
		imageUrl: FoodSite,
		techIcons: [
			{name: "HTML5", icon: HTML5},
			{name: "CSS3", icon: CSS3},
			{name: "JS", icon: JS},
			{name: "SASS", icon: SASS},
			{name: "Bootstrap", icon: Bootstrap},
		]
	},
	{
		id: "3",
		title: "'CRUD' Web-application",
		description: "Простое одностраничное Веб-приложение",
		websiteUrl: "",
		githubUrl: "https://github.com/evilevgeniys/employees_crud_project",
		gitHubIconUrl: GitHub,
		imageUrl: CrudSite,
		techIcons: [
			{name: "HTML5", icon: HTML5},
			{name: "CSS3", icon: CSS3},
			{name: "JS", icon: JS},
			{name: "SASS", icon: SASS},
			{name: "Bootstrap", icon: Bootstrap},
			{name: "ReactJS", icon: ReactJS},
		]
	},
]