import './modalCommentsList.css';
import ModalSingleComment from './partials/ModalSingleComment.jsx';

const ModalCommentsList = ({ book, comments }) => {
    return (
        <>
            <p className="mb-1 mt-5">What people are saying about this book:</p>
            <ul className="comments-list d-flex flex-column gap-2">
                {comments &&
                    comments.map(comment => {
                        return (
                            <ModalSingleComment
                                book={book}
                                userComment={comment}
                            />
                        );
                    })}
            </ul>
        </>
    );
};

export default ModalCommentsList;
