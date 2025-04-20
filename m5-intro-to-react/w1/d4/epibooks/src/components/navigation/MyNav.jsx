import './myNav.css';
import NavLinks from './partials/NavLinks.jsx';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
