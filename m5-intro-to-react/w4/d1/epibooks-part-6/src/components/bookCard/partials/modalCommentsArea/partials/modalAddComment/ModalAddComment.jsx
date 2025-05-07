import './modalAddComment.css';
import ModalRating from './partials/ModalRating.jsx';
import ModalComment from './partials/ModalComment.jsx';
import { Button, Form } from 'react-bootstrap';
import { usePostRequest } from '../../../../../../hooks/usePostRequest.jsx';
import { useContext } from 'react';
import { CommentsContext } from '../../../../../../contexts/CommentsContext.jsx';

const ModalAddComment = ({ bookId }) => {
    const { getComments } = useContext(CommentsContext);
    const { payload, postComment, handleReview } = usePostRequest(
        bookId,
        getComments,
    );

    const { comment, rate } = payload;

    return (
        <Form onSubmit={postComment} className="d-flex flex-column">
            <ModalComment comment={comment} onTyping={handleReview} />
            <div className="d-flex">
                <ModalRating rate={rate} onTyping={handleReview} />
                <Button type="submit" variant="danger" className="ms-auto">
                    Post
                </Button>
            </div>
        </Form>
    );
};

export default ModalAddComment;
