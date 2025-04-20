import './bookCardContainer.css';
import { Col } from 'react-bootstrap';
import BookCard from '../bookCard/BookCard.jsx';
import Fantasy from '../../assets/books/fantasy.json';

const BookCardContainer = () => {
    return (
        <>
            {Fantasy.map(book => (
                <Col
                    key={book.asin}
                    sm={12}
                    md={6}
                    lg={4}
                    xxl={3}
                    className="book-card-container"
                >
                    <BookCard
                        image={book.img}
                        title={book.title}
                        category={book.category}
                        price={book.price}
                    />
                </Col>
            ))}
        </>
    );
};

export default BookCardContainer;
