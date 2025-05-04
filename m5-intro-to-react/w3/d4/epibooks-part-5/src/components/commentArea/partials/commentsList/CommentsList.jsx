import { useContext, useEffect } from 'react';
import SingleComment from './partials/singleComment/SingleComment.jsx';
import { CommentsContext } from '../../../../contexts/CommentsContext.jsx';

const CommentsList = ({ book }) => {
    const { asin, title } = book;
    const { comments, getComments } = useContext(CommentsContext);

    useEffect(() => {
        getComments(asin);
    }, [asin]);

    return (
        <>
            <h4 className="comment-area-info mt-5 mb-3 ps-1">{title}</h4>
            <div className="d-flex flex-column border rounded p-2 shadow comments-container">
                {comments &&
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
        </>
    );
};

export default CommentsList;
