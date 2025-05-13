import './pageBookDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ErrorAlert from '../errorAlert/ErrorAlert.jsx';
import { useContext, useEffect, useState } from 'react';
import CommentArea from '../commentArea/CommentArea.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import BookLoadingSpinner from '../spinners/bookLoadingSpinner/BookLoadingSpinner.jsx';

const PageBookDetails = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const { asin } = useParams();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [bookDetails, setBookDetails] = useState(null);

    const getBookDetails = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://epibooks.onrender.com/fantasy/${asin}`
            );
            const singleBook = await response.json();
            setBookDetails(singleBook);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBookDetails();
    }, [asin]);

    return (
        <Container
            fluid
            className={`d-flex justify-content-center details-page py-5 ${
                isDarkMode ? 'dark-theme' : 'light-theme'
            }`}
        >
            <Container>
                <Row className="gy-5 py-5">
                    {isLoading && <BookLoadingSpinner />}
                    {!isLoading && error && (
                        <ErrorAlert text="Sorry, book details are not available right now. Please, try again later." />
                    )}
                    {bookDetails &&
                        bookDetails.map(book => {
                            const { asin, title, img } = book;

                            return (
                                <Col
                                    xs={12}
                                    lg={7}
                                    key={asin}
                                    className="d-flex flex-column gap-3"
                                >
                                    <h1 className="fw-bold">{title}</h1>
                                    <div className="details-img-container">
                                        <img alt={title} src={`${img}`} />
                                    </div>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum."
                                    </p>
                                </Col>
                            );
                        })}
                    <Col xs={12} lg={5}>
                        <CommentArea isTitleVisible={false} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default PageBookDetails;
