import { Button, Col, Form, Row } from 'react-bootstrap';
import { Save } from 'lucide-react';

const EditForm = ({ comment, rate, onEdit, onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Row className="g-1 position-relative">
                <Form.Group as={Col} xxl="3">
                    <Form.Select
                        required
                        type="text"
                        name="rate"
                        onChange={onEdit}
                        defaultValue={rate}
                        placeholder="Add your comment"
                    >
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xxl="9">
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
            </Row>
            <Button type="submit" variant="link" className="save-btn">
                <Save />
            </Button>
        </Form>
    );
};

export default EditForm;
