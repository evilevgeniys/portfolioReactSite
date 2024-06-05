import "./Header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Header = () => {
	return (
		<header className="header">
            <Navbar expand="lg" data-bs-theme="dark" className="header__nav">
                <Container>
                       <Navbar.Brand href='#home' className="d-flex justify-content-start align-items-center header__nav-logo"> 
                            <img
                                alt="logo"
                                src={logo}
                                className="d-inline-block header__nav-img"
                            />  Evilevgeniys projects
                        </Navbar.Brand>
                       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                       <Navbar.Collapse id="basic-navbar-nav"/>
                       <Nav className="d-flex justify-content-end align-items-center">
                            <Nav.Link href="#aboutMe">About Me</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                       </Nav>
                </Container>
            </Navbar>
        </header>
	);
};

export default Header;
