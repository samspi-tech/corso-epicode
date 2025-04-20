import { Container, Nav, Navbar } from 'react-bootstrap';
import NavLinks from './partials/NavLinks.jsx';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import './myNav.css';

const MyNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* LOGO */}
                <BrandLogo />
                {/* NAV-LINKS */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLinks />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
