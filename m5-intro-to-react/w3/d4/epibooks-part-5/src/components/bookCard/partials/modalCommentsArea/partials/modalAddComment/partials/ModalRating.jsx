import { Form } from 'react-bootstrap';

const ModalRating = ({ rate, onTyping }) => {
    return (
        <Form.Select
            required
            name="rate"
            onChange={onTyping}
            defaultValue={rate}
            className="rating-container"
        >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </Form.Select>
    );
};

export default ModalRating;
