import './bookBadge.css';
import PlusBadge from './partials/PlusBadge.jsx';
import BookmarkBadge from './partials/BookmarkBadge.jsx';

const BookBadge = ({ bookmarked, onBookmarked }) => {
    return (
        <>
            <h1 onClick={onBookmarked} className="badge-container">
                {bookmarked ? <BookmarkBadge /> : <PlusBadge />}
            </h1>
        </>
    );
};

export default BookBadge;
