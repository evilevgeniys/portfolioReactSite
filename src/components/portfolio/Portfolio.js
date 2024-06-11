import React from "react";
import { Card, CardGroup, Container, Stack } from "react-bootstrap";

import { PROJECTS } from "../../utils/Projects";

import './Portfolio.scss';

function Portfolio() {
	return(
		<section className="projects">
			<Container>
				<CardGroup className="projects_container">
					{PROJECTS.map((projects) => (
						<Card 
							key={projects.id}
							className={`projects__card`}>
							<Card.Img 
								variant="top"
								src={projects.imageUrl}
								alt={projects.title}
								className="projects__card-img"
							/>
							<Card.Body className="projects_card-description">
								<a 
									href={projects.githubUrl}
									className="projects__card-link"
									target="_blank"
									rel="noopener noreferrer"	
								>
									<img 
										src={projects.gitHubIconUrl}
										className="projects__card-techImg gitHub__img"
										alt="GitHub"
									/>
								</a>
							<Card.Title
								className="projects__card-title"
								onClick={() => window.open(projects.websiteUrl, "_blank")}
								target="_blank"
								rel="noopener noreferrer"
							>
								{projects.title}	
							</Card.Title>
							<Card.Text className="projects__card-descriptionText">
								{projects.description}
							</Card.Text>
							<div className="projects__card-stackIcons">
								{projects.stack.map((stack) => (
									<img
										className="projects__card-stack-img"
										key={stack.name}
										src={stack.icon}
										alt={stack.name}
									/>
								))}
							</div>
							</Card.Body>
						</Card>
						)
					)}
				</CardGroup>
			</Container>
		</section>
	)
}

export default Portfolio;

