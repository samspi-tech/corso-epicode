import { Card } from 'react-bootstrap';
import './bookCardImage.css';

const BookCardImage = ({ image, title }) => {
    return (
        <div className="book-img">
            <Card.Img src={image} alt={title} variant="top" />
        </div>
    );
};

export default BookCardImage;
