import './bookCard.css';
import { Card } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import BookBadge from './partials/bookBadge/BookBadge.jsx';
import BookCardBody from './partials/bookCardBody/BookCardBody.jsx';
import BookCardImage from './partials/bookCardImage/BookCardImage.jsx';
import { SelectedContext } from '../../contexts/SelectedContext.jsx';

const BookCard = ({ book, bookmarked, handleBookmarkedBook }) => {
    const [isActive, setIsActive] = useState(false);
    const { setSelected, selected } = useContext(SelectedContext);

    const handleSelected = () => {
        setSelected({
            asin: book.asin,
            title: book.title,
        });
    };

    useEffect(() => {
        if (selected && selected.title === book.title) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [selected]);

    return (
        <Card
            data-testid="bookCard"
            onClick={handleSelected}
            className={`position-relative overflow-hidden book-card ${
                isActive && 'selected-card'
            }`}
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
