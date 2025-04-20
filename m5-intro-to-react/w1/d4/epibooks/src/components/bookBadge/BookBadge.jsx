import './bookBadge.css';
import { useState } from 'react';
import PlusBadge from "./partials/PlusBadge.jsx";
import BookmarkBadge from "./partials/BookmarkBadge.jsx";

const BookBadge = () => {
    const [bookmarkChecked, setBookmarkChecked] = useState(false);
    const handleBookMark = () => {
        setBookmarkChecked(!bookmarkChecked);
    };

    return (
        <>
            <h1 onClick={handleBookMark} className="badge-container">
                {bookmarkChecked ? <BookmarkBadge/> : <PlusBadge/>}
            </h1>
        </>
    );
};

export default BookBadge;
