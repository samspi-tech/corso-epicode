import { Badge, Form } from 'react-bootstrap';

const SaveButton = ({ onSave, handleEditStatus }) => {
    return (
        <Form onSubmit={onSave}>
            <Badge type="submit" bg="dark" onClick={handleEditStatus}>
                Save
            </Badge>
        </Form>
    );
};

export default SaveButton;
