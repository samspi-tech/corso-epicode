import { BookmarkCheck, Plus } from 'lucide-react';
import { Badge } from 'react-bootstrap';
import './bookBadge.css';
import { useState } from 'react';

const BookBadge = () => {
    const [bookmarkChecked, setBookmarkChecked] = useState(false);
    const handleBookMark = () => {
        setBookmarkChecked(!bookmarkChecked);
    };

    const bookmarkBadge = (
        <Badge className="bookmark-badge">
            <BookmarkCheck size={35} />
        </Badge>
    );

    const plusBadge = (
        <Badge className="plus-badge">
            <Plus size={35} />
        </Badge>
    );

    return (
        <>
            <h1 onClick={handleBookMark} className="badge-container">
                {bookmarkChecked ? bookmarkBadge : plusBadge}
            </h1>
        </>
    );
};

export default BookBadge;
