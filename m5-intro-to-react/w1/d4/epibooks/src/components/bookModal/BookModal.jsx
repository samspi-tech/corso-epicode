import './bookModal.css';
import { Button, Card, Modal } from 'react-bootstrap';

const BookModal = ({ show, onHide, title, image, category, price }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="fw-bold">{title}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-start gap-5">
                <Card.Img className="book-modal-img" src={image} />
                <Card.Text className="d-flex flex-column justify-content-evenly">
                    <h4 className="text-capitalize fw-bold">{category}</h4>
                    <h4 className="fw-bold">{`€ ${price}`}</h4>
                </Card.Text>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BookModal;
