import './pageNotFound.css';
import { useContext } from 'react';
import { House } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pageNotFound from '../../assets/images/pageNotFound.jpg';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

const PageNotFound = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <Container
            fluid={true}
            className={`not-found-page-container d-flex justify-content-center py-5 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <Row>
                <Col>
                    <div className="not-found-img-container position-relative py-5">
                        <img
                            src={pageNotFound}
                            className="rounded-3"
                            alt="404 Page Not Found"
                        />
                        <h1 className="display-1 text-white">
                            404 Page Not Found
                        </h1>
                        <Link to="/">
                            <Button className="take-me-back-btn rounded-circle p-3 text-uppercase fs-5">
                                <House size={40} />
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PageNotFound;
