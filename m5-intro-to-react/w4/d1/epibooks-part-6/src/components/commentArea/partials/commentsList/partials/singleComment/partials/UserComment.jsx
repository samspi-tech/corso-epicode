import { Badge } from 'react-bootstrap';
import { Star } from 'lucide-react';

const UserComment = ({ rate, comment }) => {
    const fixedComment = comment.slice(0, 1).toUpperCase() + comment.slice(1);

    return (
        <div className="d-flex align-items-center gap-3">
            <Badge bg="primary" className="d-flex align-items-center gap-1 p-1">
                <span className="fs-6">{rate}</span>
                <span>
                    <Star className="rating-icon" size={14} />
                </span>
            </Badge>
            <span className="fst-italic">"{fixedComment}"</span>
        </div>
    );
};

export default UserComment;
