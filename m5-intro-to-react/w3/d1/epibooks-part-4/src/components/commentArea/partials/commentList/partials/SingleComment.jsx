import { useState } from 'react';
import { Star } from 'lucide-react';
import { Badge, Button, Form, ListGroup } from 'react-bootstrap';
import Rating from '../../addComment/partials/Rating.jsx';

const SingleComment = ({ comments, onDelete, getComments, book }) => {
    const { asin: bookId } = book;
    const { _id: id, comment, rate } = comments;
    const [isEdit, setIsEdit] = useState(false);
    const [editedComment, setEditedComment] = useState({
        rate: '',
        comment: '',
        elementId: '',
    });

    const handleCommentEdit = e => {
        const { name, value } = e.target;

        setEditedComment({
            ...editedComment,
            elementId: bookId,
            [name]: String(value),
        });
    };

    console.log(editedComment);

    const handleDelete = () => {
        onDelete(id);
    };

    const handleEditStatus = e => {
        setIsEdit(!isEdit);

        setEditedComment({
            rate: rate,
            comment: comment,
            elementId: bookId,
        });
    };

    const editComment = async e => {
        e.preventDefault();

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(editedComment),
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                },
            );
            return await response.json();
        } catch (error) {
            console.log(error);
        } finally {
            getComments();
        }
    };

    return (
        <ListGroup>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center mb-3"
            >
                <div className="me-5">
                    <small className="fw-bold d-block">Comment</small>
                    {isEdit ? (
                        <Form onSubmit={editComment}>
                            <input
                                name="comment"
                                defaultValue={comment}
                                onChange={handleCommentEdit}
                            />
                            <div className="d-flex mt-2">
                                <Rating
                                    name="rate"
                                    rate={rate}
                                    onTyping={handleCommentEdit}
                                />
                                <Button type="submit" className="save-button ">
                                    Save
                                </Button>
                            </div>
                        </Form>
                    ) : (
                        <span className="comment">{comment}</span>
                    )}
                </div>
                <div className="d-flex flex-column align-items-end gap-1">
                    <Badge bg="primary">
                        {rate}{' '}
                        <span>
                            <Star className="rating-icon" size={12} />
                        </span>
                    </Badge>
                    <Badge type="button" bg="dark" onClick={handleEditStatus}>
                        {isEdit ? 'Back' : 'Edit'}
                    </Badge>
                    <Badge onClick={handleDelete} type="button" bg="danger">
                        Delete
                    </Badge>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SingleComment;
