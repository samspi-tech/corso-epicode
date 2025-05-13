import EditForm from './partials/EditForm.jsx';
import { Button, ListGroup } from 'react-bootstrap';
import UserComment from './partials/UserComment.jsx';
import { Trash2, PencilLine, PencilOff } from 'lucide-react';
import { usePutRequest } from '../../../../../../hooks/usePutRequest.jsx';
import { useDeleteRequest } from '../../../../../../hooks/useDeleteRequest.jsx';

const SingleComment = ({ data, getComments, bookId }) => {
    const {
        rate,
        author,
        comment,
        createdAt,
        updatedAt,
        _id: commentId,
    } = data;

    const { deleteComment } = useDeleteRequest(commentId, getComments, bookId);
    const { isEdit, handleEditStatus, handleEditedComment, editComment } =
        usePutRequest(bookId, getComments, data);

    const authorName = author.split('@')[0];

    const createCommentTimeOfCreation = time => {
        const commentDate = time.split('T')[0];
        const commentTime = time.split('T')[1].split('.')[0];

        return `${commentDate} — ${commentTime}`;
    };

    return (
        <ListGroup className="py-1">
            <ListGroup.Item
                as="li"
                className="single-comment m-1 d-flex justify-content-between align-items-center"
            >
                <div className="d-flex flex-column">
                    <small className="fw-bold mb-3">{authorName}</small>
                    {isEdit ? (
                        <EditForm
                            rate={rate}
                            comment={comment}
                            onSubmit={editComment}
                            onEdit={handleEditedComment}
                        />
                    ) : (
                        <UserComment rate={rate} comment={comment} />
                    )}
                    <small className="text-body-tertiary pt-3">
                        {updatedAt
                            ? createCommentTimeOfCreation(updatedAt)
                            : createCommentTimeOfCreation(createdAt)}
                    </small>
                </div>
                <div className="d-flex flex-column align-items-end gap-1 mt-auto">
                    <Button
                        variant="link"
                        onClick={deleteComment}
                        className="delete-btn mt-1 text-danger"
                    >
                        <Trash2 size={20} />
                    </Button>
                    <Button
                        variant="link"
                        className="edit-btn p-0"
                        onClick={handleEditStatus}
                    >
                        {isEdit ? (
                            <PencilOff size={20} />
                        ) : (
                            <PencilLine size={20} />
                        )}
                    </Button>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SingleComment;
