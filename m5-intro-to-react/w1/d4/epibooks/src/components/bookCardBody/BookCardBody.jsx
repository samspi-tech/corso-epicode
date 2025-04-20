import './bookCardBody.css';
import { Card } from 'react-bootstrap';
import BookCardButton from '../bookCardButton/BookCardButton.jsx';

const BookCardBody = ({ title, category, price, image }) => {
    return (
        <Card.Body className="book-card-body h-100">
            <Card.Title className="book-title fs-1">{title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="book-category fs-5">{category}</Card.Text>
                <Card.Text className="see-more">Hover to see more</Card.Text>
            </div>
            <Card.Text className="book-price fs-4">{`€ ${price}`}</Card.Text>
            <BookCardButton
                title={title}
                image={image}
                price={price}
                category={category}
            />
        </Card.Body>
    );
};

export default BookCardBody;
