import './myNav.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import ThemeToggleButton from './partials/ThemeToggleButton.jsx';
import { BookContext } from '../../contexts/BookContext.jsx';

const MyNav = () => {
    const { books } = useContext(BookContext);
    const { isDarkMode } = useContext(ThemeContext);

    const booksFilteredLength = books && books.length;
    const isPlural = booksFilteredLength !== 1 ? 'results' : 'result';

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
                        <Link to="/aboutWorkingInProgress" className="nav-link">
                            About
                        </Link>
                        <Link to="/browseWorkInProgress" className="nav-link">
                            Browse
                        </Link>
                    </Nav>
                    <div className="d-flex align-items-center gap-2">
                        {booksFilteredLength && booksFilteredLength < 150 && (
                            <small className="result-info mb-0">{`${booksFilteredLength} ${isPlural}`}</small>
                        )}
                        <SearchBar />
                        <ThemeToggleButton />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;
