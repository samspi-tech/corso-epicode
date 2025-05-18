import './myNav.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCcw } from 'lucide-react';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import SearchBar from './partials/searchBar/SearchBar.jsx';
import { BookContext } from '../../contexts/BookContext.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import ThemeToggleButton from './partials/ThemeToggleButton.jsx';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { SearchBookContext } from '../../contexts/SearchBookContext.jsx';

const MyNav = () => {
    const { books } = useContext(BookContext);
    const { isDarkMode } = useContext(ThemeContext);
    const { handleClearInput } = useContext(SearchBookContext);

    const isPlural = books && books.length !== 1 ? 'results' : 'result';

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
                    <Nav className="ms-lg-5 me-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/aboutWorkInProgress" className="nav-link">
                            About
                        </Link>
                        <Link to="/browseWorkInProgress" className="nav-link">
                            Browse
                        </Link>
                    </Nav>
                    <div className="d-flex align-items-center gap-2">
                        {books && books.length < 150 && (
                            <div className="d-flex align-items-center gap-2">
                                <small className="result-info mb-0">{`${books.length} ${isPlural}`}</small>
                                <Button
                                    variant="link"
                                    onClick={handleClearInput}
                                    className="reset-search-btn p-0"
                                >
                                    <RefreshCcw size={20} />
                                </Button>
                            </div>
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
