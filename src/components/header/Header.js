import React, { useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import resume from "../../images/Evgenij_ignatyuk_junior_frontend_cv.pdf";
import logo from "../../images/logo.svg"

function Header() {
  const isHeaderVisible = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavToggle = () => setIsNavExpanded(!isNavExpanded);

  const handleavClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <header className={`header ${isHeaderVisible ? "" : "hidden"}`}>
      <Navbar
        expand="lg"
        bg="transparent"
        variant="light"
        expanded={isNavExpanded}
        onToggle={handleNavToggle}
        data-bs-theme="dark"
      >
        <Container>
        <Navbar.Brand href='/' className="d-flex justify-content-start align-items-center header__nav-logo"> 
                            <img
                                alt="logo"
                                src={logo}
                                className="d-inline-block header__nav-img"
                            />  Evilevgeniys projects
                        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="me-5 justify-content-end"
          >
            <Nav className="ml-auto gap-4">
              <Nav.Link
                as={NavLink}
                to="/"
                className="header__nav-item"
                onClick={handleavClick}
              >
                <span className="highlighted-text-nav"> 00. </span>Главная
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/portfolio"
                className="header__nav-item"
                onClick={handleavClick}
              >
                <span className="highlighted-text-nav"> 01. </span>Мои проекты
              </Nav.Link>
              <a
                className="header__nav-button nav-link header__nav-item"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="highlighted-text-nav resume"> 02. </span>Резюме
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
