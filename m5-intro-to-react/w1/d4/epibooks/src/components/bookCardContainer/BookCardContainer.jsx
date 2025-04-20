import Fantasy from '../../assets/books/fantasy.json';
import BookCard from '../bookCard/BookCard.jsx';
import { Col } from 'react-bootstrap';
import './bookCardContainer.css';

const BookCardContainer = () => {
    return (
        <>
            {Fantasy.map(book => (
                <Col
                    key={book.asin}
                    sm={12}
                    md={6}
                    lg={4}
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
