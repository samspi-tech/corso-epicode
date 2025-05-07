import './pageContent.css';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import AllTheBooks from '../allTheBooks/AllTheBooks.jsx';
import CommentArea from '../commentArea/CommentArea.jsx';
import { BookContext } from '../../contexts/BookContext.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import GoTopPageButton from '../goTopPageButton/GoTopPageButton.jsx';
import BookLoadingSpinner from '../spinners/bookLoadingSpinner/BookLoadingSpinner.jsx';

const PageContent = () => {
    const { isLoading, error } = useContext(BookContext);
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <main
            className={`container-fluid d-flex position-relative py-5 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <section className="container">
                <Row>
                    <Col xs={12} md={6} lg={7}>
                        {isLoading && !error && <BookLoadingSpinner />}
                        <AllTheBooks />
                    </Col>
                    <Col md={6} lg={5} className="d-none d-md-block">
                        <CommentArea isTitleVisible={true} />
                    </Col>
                </Row>
            </section>
            <GoTopPageButton />
        </main>
    );
};

export default PageContent;
