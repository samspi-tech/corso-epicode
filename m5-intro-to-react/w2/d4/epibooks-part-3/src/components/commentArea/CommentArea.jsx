import './commentArea.css';
import { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import AddComment from '../addComment/AddComment.jsx';
import CommentList from '../commentList/CommentList.jsx';
import brandLogo from '../brandLogo/BrandLogo.jsx';

const CommentArea = ({ show, onHide, book }) => {
    const { asin, img, title, category } = book;

    const [comments, setComments] = useState([]);

    const getComments = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                },
            );
            const results = await response.json();
            setComments(results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="comment-area px-3 pt-3">
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="fw-bold">{title}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex gap-3">
                    <Card.Img className="book-modal-img" src={img} />
                    <Card.Body className="d-flex flex-column">
                        {/* ADD COMMENT */}
                        <AddComment bookId={asin} />
                        {/* COMMENT LIST */}
                        <CommentList comments={comments} />
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

export default CommentArea;
