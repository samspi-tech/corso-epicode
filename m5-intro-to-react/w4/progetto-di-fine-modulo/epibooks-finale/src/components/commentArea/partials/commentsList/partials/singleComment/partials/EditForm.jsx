import { Button, Col, Form, Row } from 'react-bootstrap';

const EditForm = ({ comment, rate, onEdit, onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Row className="gy-1">
                <Form.Group as={Col} xs="12" className="p-0">
                    <Form.Control
                        required
                        type="text"
                        as="textarea"
                        name="comment"
                        onChange={onEdit}
                        defaultValue={comment}
                        placeholder="Edit comment"
                    />
                </Form.Group>
                <Form.Group as={Col} xs="4" lg="3" className="p-0">
                    <Form.Select
                        required
                        type="text"
                        name="rate"
                        onChange={onEdit}
                        defaultValue={rate}
                        placeholder="Add your comment"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs="4" className="p-0 ms-auto">
                    <Button type="submit" className="w-100">
                        Save
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default EditForm;
