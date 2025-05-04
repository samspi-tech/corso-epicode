import './myNav.css';
import NavLinks from './partials/NavLinks.jsx';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ThemeToggleButton from './partials/ThemeToggleButton.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

const MyNav = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <Navbar
            expand="lg"
            className={isDarkMode ? 'dark-theme' : 'light-theme'}
        >
            <Container className="d-flex">
                <BrandLogo />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5 me-auto">
                        <NavLinks />
                    </Nav>
                    <SearchBar />
                    <ThemeToggleButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
