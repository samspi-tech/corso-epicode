import { Spinner, Col } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <Col xs={12} className="d-flex justify-content-center gap-4 py-5">
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
        </Col>
    );
};

export default LoadingSpinner;
