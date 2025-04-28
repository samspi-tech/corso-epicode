import { FloatingLabel, Form } from 'react-bootstrap';

const Comment = ({ comment, onTyping }) => {
    return (
        <FloatingLabel
            label="Leave a comment"
            className="comment-container mb-1"
        >
            <Form.Control
                as="textarea"
                name="comment"
                value={comment}
                onChange={onTyping}
            />
        </FloatingLabel>
    );
};

export default Comment;
