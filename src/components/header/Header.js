import './Header.scss';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../../images/logo.svg'

const Header = () => {
    
    return(
        <header className='header'>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                variant="light"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    EvilevgeniysProjects
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav" className='me-5 justify-content-end'></Navbar.Collapse>
                <Nav className='ml-auto' activeKey={'/home'}>
                    <Nav.Link 
                        href="#home"
                        className="header__nav-item">
                            Обо мне
                    </Nav.Link>
                    <Nav.Link href="#projects">Мои проекты</Nav.Link>
                    <Nav.Link href="#CV">Резюме</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
        </header>
    )
}

export default Header;