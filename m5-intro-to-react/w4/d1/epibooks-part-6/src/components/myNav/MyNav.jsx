import './myNav.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import ThemeToggleButton from './partials/ThemeToggleButton.jsx';

const MyNav = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <Navbar
            expand="lg"
            className={isDarkMode ? 'dark-theme' : 'light-theme'}
        >
            <Container className="d-flex">
                <Link to="/" className="text-decoration-none">
                    <BrandLogo />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5 me-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/" className="nav-link">
                            About
                        </Link>
                        <Link to="/" className="nav-link">
                            Browse
                        </Link>
                    </Nav>
                    <SearchBar />
                    <ThemeToggleButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
