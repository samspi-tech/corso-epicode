import './bookCardImage.css';
import { Card } from 'react-bootstrap';

const BookCardImage = ({ book }) => {
    const { img, title } = book;

    return (
        <div className="book-img">
            <Card.Img src={img} alt={title} variant="top" />
        </div>
    );
};

export default BookCardImage;
