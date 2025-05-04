import './modalCommentsArea.css';
import { useContext, useEffect } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx';
import ModalAddComment from './partials/modalAddComment/ModalAddComment.jsx';
import ModalCommentsList from './partials/modalCommentsList/ModalCommentsList.jsx';
import { CommentsContext } from '../../../../contexts/CommentsContext.jsx';

const ModalCommentsArea = ({ show, onHide, book }) => {
    const { title, img, asin, category } = book;
    const { isDarkMode } = useContext(ThemeContext);
    const { comments, getComments } = useContext(CommentsContext);

    useEffect(() => {
        getComments(asin);
    }, [asin]);

    return (
        <Modal
            centered
            size="lg"
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            className={`modal-comments-area ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <div className="comment-area px-3 pt-3">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="fw-bold">{title}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column gap-3">
                    <Card.Img className="book-modal-img" src={img} />
                    <Card.Body className="d-flex flex-column">
                        {/* ADD COMMENT */}
                        <ModalAddComment bookId={asin} />
                        {/* COMMENT LIST */}
                        <ModalCommentsList book={book} comments={comments} />
                    </Card.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Card.Text className="me-auto category-text">
                        {category}
                    </Card.Text>
                    <Button variant="danger" onClick={onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
};

export default ModalCommentsArea;
