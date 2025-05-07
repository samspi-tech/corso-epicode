import './pageBookDetails.css';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import CommentArea from '../commentArea/CommentArea.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

const PageBookDetails = () => {
    const { asin } = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    const { isDarkMode } = useContext(ThemeContext);

    const getBookDetails = async () => {
        try {
            const response = await fetch(
                `https://epibooks.onrender.com/fantasy/${asin}`,
            );
            const singleBook = await response.json();
            setBookDetails(singleBook);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBookDetails();
    }, [asin]);

    return (
        <Container
            fluid
            className={`d-flex justify-content-center details-page py-5 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <Container>
                <Row className="gy-5 py-5">
                    {bookDetails &&
                        bookDetails.map(book => (
                            <Col
                                xs={12}
                                lg={7}
                                className="d-flex flex-column gap-3"
                            >
                                <h1 className="fw-bold text-center">
                                    {book.title}
                                </h1>
                                <div className="details-img-container">
                                    <img alt={book.title} src={`${book.img}`} />
                                </div>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum."
                                </p>
                            </Col>
                        ))}
                    <Col xs={12} lg={5}>
                        <CommentArea isTitleVisible={false} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default PageBookDetails;
