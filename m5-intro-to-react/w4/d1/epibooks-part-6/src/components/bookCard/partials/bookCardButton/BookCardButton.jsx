import './bookCardButton.css';
import { useState } from 'react';
import ModalCommentsArea from '../modalCommentsArea/ModalCommentsArea.jsx';

const BookCardButton = ({ book }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleToggleModalShow = () => setModalShow(!modalShow);

    return (
        <>
            <button
                onClick={handleToggleModalShow}
                className="book-btn d-md-none"
            >
                Comments
            </button>

            {modalShow && (
                <ModalCommentsArea
                    book={book}
                    show={modalShow}
                    onHide={handleToggleModalShow}
                />
            )}
        </>
    );
};

export default BookCardButton;
