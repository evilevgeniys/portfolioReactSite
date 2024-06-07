import './Skills.scss';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { skills } from "../../utils/SkillsData.js";

function Skills() {
	const renderTooltip = (props, skill) => (
	  <Tooltip id={`tooltip-${skill}`} className="custom-tooltip" {...props}>
		{skills[skill].name}
	  </Tooltip>
	);
	return (
	  <section className="skills">
		<h3 className="skills__title">
		  const <span className="highlighted-text-shadow">myStack</span> =
		</h3>
		<div className="skills__wrapper">
		  {Object.keys(skills).map((skill) => (
			<OverlayTrigger
			  key={skill}
			  placement="top"
			  delay={{ show: 0, hide: 0 }}
			  overlay={(props) => renderTooltip(props, skill)}
			>
			  <img
				src={skills[skill].image}
				alt={skills[skill].name}
				className="col-4 skills__img"
			  />
			</OverlayTrigger>
		  ))}
		</div>
	  </section>
	);
  }  
export default Skills;