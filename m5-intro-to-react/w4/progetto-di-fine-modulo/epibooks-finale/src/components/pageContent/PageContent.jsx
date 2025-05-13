import './pageContent.css';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import AllTheBooks from '../allTheBooks/AllTheBooks.jsx';
import CommentArea from '../commentArea/CommentArea.jsx';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import ScrollToTopButton from '../scrollToTopButton/ScrollToTopButton.jsx';

const PageContent = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <main
            className={`container-fluid d-flex position-relative py-5 ${
                isDarkMode ? 'dark-theme' : 'light-theme'
            }`}
        >
            <section className="container">
                <Row>
                    <Col xs={12} lg={5} xl={7}>
                        <AllTheBooks />
                    </Col>
                    <Col lg={7} xl={5} className="d-none d-lg-block">
                        <CommentArea isTitleVisible={true} />
                    </Col>
                </Row>
            </section>
            <ScrollToTopButton />
        </main>
    );
};

export default PageContent;
