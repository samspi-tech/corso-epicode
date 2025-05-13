import { TriangleAlert } from 'lucide-react';
import { Alert, Col } from 'react-bootstrap';

const ErrorAlert = ({ text }) => {
    return (
        <Col sm={12}>
            <Alert className="d-flex flex-column align-items-center gap-4 text-center border-2 border-danger bg-dark text-white mb-0 py-4 fw-medium fs-5 shadow">
                <span className="me-2">
                    <TriangleAlert size={34} />
                </span>
                <span className="error-message">{text}</span>
            </Alert>
        </Col>
    );
};

export default ErrorAlert;
