import { useContext, useEffect } from 'react';
import { MessageSquareWarning } from 'lucide-react';
import ErrorAlert from '../../../errorAlert/ErrorAlert.jsx';
import { ThemeContext } from '../../../../contexts/ThemeContext.jsx';
import SingleComment from './partials/singleComment/SingleComment.jsx';
import { CommentsContext } from '../../../../contexts/CommentsContext.jsx';
import CommentsLoadingSpinner from '../../../spinners/commentsLoadingSpinner/CommentsLoadingSpinner.jsx';

const CommentsList = ({ book, isTitleVisible }) => {
    const { asin, title } = book;
    const { isDarkMode } = useContext(ThemeContext);
    const {
        isLoading,
        setIsLoading,
        error,
        comments,
        getComments,
        setComments,
    } = useContext(CommentsContext);

    useEffect(() => {
        const delayCommentsResponse = setTimeout(() => {
            getComments(asin);
        }, 1500);

        return () => {
            setComments(null);
            setIsLoading(true);
            clearTimeout(delayCommentsResponse);
        };
    }, [asin]);

    return (
        <div>
            {isTitleVisible && (
                <h4 className="comment-area-info mt-5 mb-0 ps-1">{title}</h4>
            )}
            <div className="comments-container d-flex flex-column mt-3">
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
                        <h5
                            className={`comment-area-info ps-1 mb-0 py-3 d-flex align-items-center justify-content-center gap-2 border rounded ${
                                isDarkMode
                                    ? 'border-warning'
                                    : 'border-2 border-white'
                            }`}
                        >
                            <span>
                                <MessageSquareWarning size={30} />
                            </span>
                            No comments yet, be the first one!
                        </h5>
                    ))}
            </div>
        </div>
    );
};

export default CommentsList;
