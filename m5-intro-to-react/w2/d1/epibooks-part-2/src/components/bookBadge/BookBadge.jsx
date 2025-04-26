import './bookBadge.css';
import PlusBadge from './partials/PlusBadge.jsx';
import BookmarkBadge from './partials/BookmarkBadge.jsx';

const BookBadge = ({ selected, onSelected }) => {
    return (
        <>
            <h1 onClick={onSelected} className="badge-container">
                {selected ? <BookmarkBadge /> : <PlusBadge />}
            </h1>
        </>
    );
};

export default BookBadge;
