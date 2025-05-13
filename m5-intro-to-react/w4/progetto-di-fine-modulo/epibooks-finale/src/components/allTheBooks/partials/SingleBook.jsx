import { useState } from 'react';
import { Col } from 'react-bootstrap';
import BookCard from '../../bookCard/BookCard.jsx';

const SingleBook = ({ book }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmarkedBook = e => {
        e.stopPropagation();
        setBookmarked(prev => !prev);
    };

    return (
        <Col sm={12} md={6} lg={12} xl={6} className="book-card-container">
            <BookCard
                book={book}
                bookmarked={bookmarked}
                handleBookmarkedBook={handleBookmarkedBook}
            />
        </Col>
    );
};

export default SingleBook;
