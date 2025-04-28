import { useState } from 'react';
import { Star } from 'lucide-react';
import { Badge, ListGroup, Form } from 'react-bootstrap';
import SaveButton from './partials/SaveButton.jsx';
import EditButton from './partials/EditButton.jsx';

const SingleComment = ({ comments, onDelete, getComments }) => {
    const { _id: id, comment, rate } = comments;
    const [isEdit, setIsEdit] = useState(false);
    const [editedComment, setEditedComment] = useState({
        rate: '',
        comment: '',
        elementId: '',
    });

    const handleCommentEdit = e => {
        setEditedComment({
            rate: rate,
            elementId: id,
            comment: e.target.value,
        });
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleEditStatus = () => {
        setIsEdit(!isEdit);
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
            const editedComment = await response.json();
            setEditedComment(editedComment);
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
                        <input
                            name="comment"
                            placeholder={comment}
                            value={editedComment.comment}
                            onChange={handleCommentEdit}
                        />
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
                    <Badge onClick={handleDelete} type="button" bg="danger">
                        Delete
                    </Badge>
                    {isEdit ? (
                        <SaveButton
                            onSave={editComment}
                            handleEditStatus={handleEditStatus}
                        />
                    ) : (
                        <EditButton onEdit={handleEditStatus} />
                    )}
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SingleComment;
