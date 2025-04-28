import { Card } from 'react-bootstrap';
import BookBadge from './partials/bookBadge/BookBadge.jsx';
import BookCardBody from './partials/bookCardBody/BookCardBody.jsx';
import BookCardImage from './partials/bookCardImage/BookCardImage.jsx';

const BookCard = ({ book, selected, handleSelectedBook }) => {
    return (
        <Card className="position-relative overflow-hidden">
            <BookCardImage book={book} />
            <BookCardBody book={book} />
            <BookBadge selected={selected} onSelected={handleSelectedBook} />
        </Card>
    );
};

export default BookCard;
