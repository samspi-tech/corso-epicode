import { FloatingLabel, Form } from 'react-bootstrap';

const ModalComment = ({ comment, onTyping }) => {
    return (
        <FloatingLabel
            label="Leave a comment"
            className="comment-container mb-1"
        >
            <Form.Control
                required
                as="textarea"
                name="comment"
                value={comment}
                onChange={onTyping}
            />
        </FloatingLabel>
    );
};

export default ModalComment;
