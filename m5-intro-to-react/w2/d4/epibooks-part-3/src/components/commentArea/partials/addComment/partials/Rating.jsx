import { Form } from 'react-bootstrap';

const Rating = ({ rate, onTyping }) => {
    return (
        <Form.Select
            name="rate"
            value={rate}
            onChange={onTyping}
            className="rating-container"
        >
            <option>--Rate this book--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </Form.Select>
    );
};

export default Rating;
