import { Card } from 'react-bootstrap';
import BookBadge from '../bookBadge/BookBadge.jsx';
import BookCardBody from '../bookCardBody/BookCardBody.jsx';
import BookCardImage from '../bookCardImage/BookCardImage.jsx';

const BookCard = ({ image, title, category, price }) => {
    return (
        <Card className="position-relative overflow-y-hidden">
            <BookCardImage image={image} title={title} />
            <BookCardBody
                title={title}
                category={category}
                price={price}
                image={image}
            />
            <BookBadge />
        </Card>
    );
};

export default BookCard;
