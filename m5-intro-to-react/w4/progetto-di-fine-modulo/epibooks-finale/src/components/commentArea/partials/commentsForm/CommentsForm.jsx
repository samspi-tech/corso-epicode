import { Button, Col, Form, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CommentsContext } from '../../../../contexts/CommentsContext.jsx';
import { usePostRequest } from '../../../../hooks/usePostRequest.jsx';

const CommentsForm = ({ book }) => {
    const { asin: bookId } = book;
    const { isLoading, error, getComments } = useContext(CommentsContext);
    const { handleReview, postComment, payload } = usePostRequest(
        bookId,
        getComments
    );

    return (
        <Form onSubmit={postComment} className="border rounded p-2 shadow">
            <Row className="mb-3 gy-3">
                <Form.Group as={Col} xs="12">
                    <Form.Label className="form-label">Comment</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea"
                        name="comment"
                        value={payload.comment}
                        onChange={handleReview}
                        placeholder="Add your comment"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                    as={Col}
                    xs="4"
                    lg="3"
                    controlId="validationCustom02"
                >
                    <Form.Label className="form-label">Rating</Form.Label>
                    <Form.Select
                        required
                        type="text"
                        name="rate"
                        value={payload.rate}
                        onChange={handleReview}
                        placeholder="Add your comment"
                    >
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs="4" className="m-0 mt-auto ms-auto">
                    <Button
                        type="submit"
                        variant="danger"
                        className="w-100"
                        disabled={(isLoading && true) || (error && true)}
                    >
                        Post
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default CommentsForm;
