import { Badge } from 'react-bootstrap';

const EditButton = ({ onEdit }) => {
    return (
        <Badge type="button" bg="dark" onClick={onEdit}>
            Edit
        </Badge>
    );
};

export default EditButton;
