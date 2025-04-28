import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import BookBadge from '../bookBadge/BookBadge.jsx';
import BookCardBody from '../bookCardBody/BookCardBody.jsx';
import BookCardImage from '../bookCardImage/BookCardImage.jsx';

const SingleBook = ({ book }) => {
    const [selected, setSelected] = useState(false);

    const handleSelectedBook = () => setSelected(!selected);

    return (
        <Col sm={12} md={6} lg={4} xxl={3} className="book-card-container">
            <Card className="position-relative overflow-hidden">
                <BookCardImage book={book} />
                <BookCardBody book={book} />
                <BookBadge
                    selected={selected}
                    onSelected={handleSelectedBook}
                />
            </Card>
        </Col>
    );
};

export default SingleBook;
