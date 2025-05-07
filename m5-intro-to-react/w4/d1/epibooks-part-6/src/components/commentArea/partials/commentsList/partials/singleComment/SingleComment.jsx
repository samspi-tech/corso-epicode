import { Trash2 } from 'lucide-react';
import EditForm from './partials/EditForm.jsx';
import { Button, ListGroup } from 'react-bootstrap';
import UserComment from './partials/UserComment.jsx';
import { usePutRequest } from '../../../../../../hooks/usePutRequest.jsx';
import { useDeleteRequest } from '../../../../../../hooks/useDeleteRequest.jsx';

const SingleComment = ({ data, getComments, bookId }) => {
    const { comment, rate, _id: commentId } = data;
    const { deleteComment } = useDeleteRequest(commentId, getComments, bookId);
    const { isEdit, handleEditStatus, handleEditedComment, editComment } =
        usePutRequest(bookId, getComments, data);

    return (
        <ListGroup className="py-1">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="me-5 d-flex flex-column">
                    <small className="fw-bold mb-3">Comment</small>
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
                </div>
                <div className="d-flex flex-column align-items-end gap-1 mt-auto">
                    <Button
                        variant="link"
                        onClick={deleteComment}
                        className="delete-btn text-dark"
                    >
                        <Trash2 size={18} />
                    </Button>
                    <Button
                        variant="link"
                        className="edit-btn p-0"
                        onClick={handleEditStatus}
                    >
                        {isEdit ? 'Cancel' : 'Edit'}
                    </Button>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SingleComment;
