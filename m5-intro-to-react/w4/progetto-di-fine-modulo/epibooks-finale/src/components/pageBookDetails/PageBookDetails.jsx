import './pageBookDetails.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import ErrorAlert from '../errorAlert/ErrorAlert.jsx';
import CommentArea from '../commentArea/CommentArea.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import BookLoadingSpinner from '../spinners/bookLoadingSpinner/BookLoadingSpinner.jsx';

const PageBookDetails = () => {
    const { asin } = useParams();
    const { isDarkMode } = useContext(ThemeContext);
    const { getData, isLoading, error, data: bookDetails } = useFetch(asin);

    useEffect(() => {
        getData();
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
                            const { asin, title, img, category } = book;

                            return (
                                <Col
                                    xs={12}
                                    lg={7}
                                    key={asin}
                                    className="d-flex flex-column gap-1"
                                >
                                    <h1 className="fw-bold">{title}</h1>
                                    <small className="text-capitalize fw-medium">
                                        {category}
                                    </small>
                                    <div className="details-img-container">
                                        <img alt={title} src={`${img}`} />
                                    </div>
                                    <p className="mb-0 mt-2">
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
