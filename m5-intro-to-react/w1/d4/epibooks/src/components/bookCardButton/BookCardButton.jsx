import './bookCardButton.css';
import { useState } from 'react';
import BookModal from '../bookModal/BookModal.jsx';

const BookCardButton = ({ title, image, category, price }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button onClick={() => setModalShow(true)} className="book-btn">
                Details
            </button>

            <BookModal
                title={title}
                image={image}
                price={price}
                category={category}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default BookCardButton;
