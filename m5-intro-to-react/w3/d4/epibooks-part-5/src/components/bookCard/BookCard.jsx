import './bookCard.css';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import BookBadge from './partials/bookBadge/BookBadge.jsx';
import BookCardBody from './partials/bookCardBody/BookCardBody.jsx';
import { SelectedContext } from '../../contexts/SelectedContext.jsx';
import BookCardImage from './partials/bookCardImage/BookCardImage.jsx';

const BookCard = ({ book, bookmarked, handleBookmarkedBook }) => {
    const { handleSelected } = useContext(SelectedContext);

    return (
        <Card
            onClick={() => handleSelected(book)}
            className="position-relative overflow-hidden book-card"
        >
            <BookCardImage book={book} />
            <BookCardBody book={book} />
            <BookBadge
                bookmarked={bookmarked}
                onBookmarked={handleBookmarkedBook}
            />
        </Card>
    );
};

export default BookCard;
