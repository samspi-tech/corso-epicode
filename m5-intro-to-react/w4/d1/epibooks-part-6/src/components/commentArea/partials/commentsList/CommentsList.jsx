import { useContext, useEffect } from 'react';
import ErrorAlert from '../../../errorAlert/ErrorAlert.jsx';
import SingleComment from './partials/singleComment/SingleComment.jsx';
import { CommentsContext } from '../../../../contexts/CommentsContext.jsx';
import CommentsLoadingSpinner from '../../../spinners/commentsLoadingSpinner/CommentsLoadingSpinner.jsx';

const CommentsList = ({ book }) => {
    const { asin, title } = book;
    const { isLoading, error, comments, getComments } =
        useContext(CommentsContext);

    useEffect(() => {
        getComments(asin);
    }, [asin]);

    return (
        <div>
            <h4 className="comment-area-info mt-5 mb-3 ps-1">{title}</h4>
            <div className="d-flex flex-column comments-container">
                {isLoading && <CommentsLoadingSpinner />}
                {!isLoading && error && (
                    <ErrorAlert text="Sorry, comments are not available right now. Please, try again later." />
                )}
                {!isLoading &&
                    !error &&
                    comments &&
                    comments.map(comment => {
                        const { _id: commentId } = comment;
                        return (
                            <SingleComment
                                bookId={asin}
                                data={comment}
                                key={commentId}
                                getComments={getComments}
                            />
                        );
                    })}
                {!comments ||
                    (comments.length === 0 && (
                        <h5 className="comment-area-info text-center mb-0 py-3">
                            No comments yet, be the first one!
                        </h5>
                    ))}
            </div>
        </div>
    );
};

export default CommentsList;
