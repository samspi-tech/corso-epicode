import './bookCardButton.css';
import { useState } from 'react';
import BookModal from '../bookModal/BookModal.jsx';

const BookCardButton = ({ book }) => {
    const [modalShow, setModalShow] = useState(false);
    
    const handleToggleModalShow = () => setModalShow(!modalShow);

    return (
        <>
            <button onClick={handleToggleModalShow} className="book-btn">
                Details
            </button>

            <BookModal
                book={book}
                show={modalShow}
                onHide={handleToggleModalShow}
            />
        </>
    );
};

export default BookCardButton;
