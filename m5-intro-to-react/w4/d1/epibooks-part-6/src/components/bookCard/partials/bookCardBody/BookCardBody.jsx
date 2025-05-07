import './bookCardBody.css';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import BookCardButton from '../bookCardButton/BookCardButton.jsx';

const BookCardBody = ({ book }) => {
    const { title, category, price, asin } = book;

    return (
        <Card.Body className="book-card-body h-100">
            <Card.Title className="book-title fs-1">{title}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
                <Card.Text className="book-category fs-5">{category}</Card.Text>

                <Card.Text className="see-more">Hover to see more</Card.Text>
            </div>
            <Card.Text className="book-price fs-4">{`€ ${price}`}</Card.Text>
            <div className="d-flex gap-2">
                <BookCardButton book={book} />
                <Link
                    to={`/bookDetails/${asin}`}
                    className="ms-auto text-decoration-none"
                >
                    <Button className="book-btn">Details</Button>
                </Link>
            </div>
        </Card.Body>
    );
};

export default BookCardBody;
