import './bookCardImage.css';
import { Card } from 'react-bootstrap';

const BookCardImage = ({ image, title }) => {
    return (
        <div className="book-img">
            <Card.Img src={image} alt={title} variant="top" />
        </div>
    );
};

export default BookCardImage;
