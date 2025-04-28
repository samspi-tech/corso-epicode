import {Badge} from "react-bootstrap";
import {BookmarkCheck} from "lucide-react";

const BookmarkBadge = () => {
    return (
        <Badge className="bookmark-badge">
            <BookmarkCheck size={35}/>
        </Badge>
    )
}

export default BookmarkBadge;

