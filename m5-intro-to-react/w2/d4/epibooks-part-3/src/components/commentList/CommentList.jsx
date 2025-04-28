import './commentList.css';
import SingleComment from './partials/SingleComment.jsx';

const CommentList = ({ comments }) => {
    const deleteComment = async id => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmYzUzNmQyZWM1YzAwMTUzOTM4MGUiLCJpYXQiOjE3NDU3NTg0NDAsImV4cCI6MTc0Njk2ODA0MH0.z0Zh_N9h6X3zYClRoooiePAy2lthEZ1jEPAH6q3Dakg',
                    },
                },
            );
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <p className="mb-1 mt-5">What people are saying about this book:</p>
            <ul className="comments-list">
                {comments.map(comment => {
                    const { _id: id } = comment;

                    return (
                        <SingleComment
                            key={id}
                            comments={comments}
                            onDelete={deleteComment}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default CommentList;
