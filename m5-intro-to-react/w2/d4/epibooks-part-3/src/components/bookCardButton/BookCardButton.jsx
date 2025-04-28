import './bookCardButton.css';
import { useEffect, useState } from 'react';
import CommentArea from '../commentArea/CommentArea.jsx';

const BookCardButton = ({ book }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleToggleModalShow = () => setModalShow(!modalShow);

    return (
        <>
            <button onClick={handleToggleModalShow} className="book-btn">
                Comments
            </button>

            {modalShow && (
                <CommentArea
                    book={book}
                    show={modalShow}
                    onHide={handleToggleModalShow}
                />
            )}
        </>
    );
};

export default BookCardButton;
