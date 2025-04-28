import { Badge, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comments, onDelete }) => {
    const { comment, rate } = comments;

    return (
        <ListGroup>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center mb-3"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Comment</div>
                    {comment}
                </div>
                <div>
                    <Badge bg="primary">{rate}</Badge>
                    <Badge onClick={onDelete} type="button" bg="danger">
                        Delete
                    </Badge>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default SingleComment;
