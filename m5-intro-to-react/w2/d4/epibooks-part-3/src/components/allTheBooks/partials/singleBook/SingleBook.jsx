import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import BookCard from '../../../bookCard/BookCard.jsx';

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false);

    const handleSelectedBook = () => setSelected(!selected);

    return (
        <Col sm={12} md={6} lg={4} xxl={3} className="book-card-container">
            <BookCard
                book={book}
                selected={selected}
                handleSelectedBook={handleSelectedBook}
            />
        </Col>
    );
};

export default SingleBook;
