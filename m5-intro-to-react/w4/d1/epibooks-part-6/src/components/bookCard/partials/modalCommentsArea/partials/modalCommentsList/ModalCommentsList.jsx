import './modalCommentsList.css';
import { useContext } from 'react';
import ErrorAlert from '../../../../../errorAlert/ErrorAlert.jsx';
import ModalSingleComment from './partials/ModalSingleComment.jsx';
import { CommentsContext } from '../../../../../../contexts/CommentsContext.jsx';
import CommentsLoadingSpinner from '../../../../../spinners/commentsLoadingSpinner/CommentsLoadingSpinner.jsx';

const ModalCommentsList = ({ book, comments }) => {
    const { isLoading, error } = useContext(CommentsContext);

    return (
        <>
            <p className="mb-1 mt-5">What people are saying about this book:</p>
            <ul className="comments-list d-flex flex-column gap-3">
                {isLoading && <CommentsLoadingSpinner />}
                {!isLoading && error && (
                    <ErrorAlert text="Sorry, comments are not available right now. Please, try again later." />
                )}
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
