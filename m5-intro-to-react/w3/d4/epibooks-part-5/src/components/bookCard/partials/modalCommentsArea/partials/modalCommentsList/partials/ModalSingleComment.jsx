import { Badge, ListGroup } from 'react-bootstrap';
import { useDeleteRequest } from '../../../../../../../hooks/useDeleteRequest.jsx';
import { useContext } from 'react';
import { CommentsContext } from '../../../../../../../contexts/CommentsContext.jsx';
import { usePutRequest } from '../../../../../../../hooks/usePutRequest.jsx';
import UserComment from '../../../../../../commentArea/partials/commentsList/partials/singleComment/partials/UserComment.jsx';
import EditForm from '../../../../../../commentArea/partials/commentsList/partials/singleComment/partials/EditForm.jsx';

const ModalSingleComment = ({ book, userComment }) => {
    const { asin } = book;
    const { comment, rate, _id: id } = userComment;
    const { getComments } = useContext(CommentsContext);
    const { deleteComment } = useDeleteRequest(id, getComments, asin);
    const { isEdit, editComment, handleEditStatus, handleEditedComment } =
        usePutRequest(asin, getComments, userComment);

    return (
        <ListGroup>
            <ListGroup.Item as="li" className="d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-2">
                    <small className="fw-bold">Comment</small>
                    {isEdit ? (
                        <EditForm
                            rate={rate}
                            comment={comment}
                            onSubmit={editComment}
                            onEdit={handleEditedComment}
                        />
                    ) : (
                        <UserComment comment={comment} rate={rate} />
                    )}
                </div>
                <div className="d-flex ms-auto gap-1">
                    <Badge
                        bg="dark"
                        type="button"
                        className="py-2 px-3"
                        onClick={handleEditStatus}
                    >
                        {isEdit ? 'Cancel' : 'Edit'}
                    </Badge>
                    <Badge
                        bg="danger"
                        type="button"
                        className="py-2 px-3"
                        onClick={deleteComment}
                    >
                        Delete
                    </Badge>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default ModalSingleComment;
