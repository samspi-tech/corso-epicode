import { TriangleAlert } from 'lucide-react';
import { Alert, Col } from 'react-bootstrap';

const ErrorAlert = ({ text }) => {
    return (
        <Col sm={12}>
            <Alert className="d-flex flex-column align-items-center gap-2 text-center border-2 border-danger bg-dark text-white mb-0 py-5">
                <span className="me-2">
                    <TriangleAlert size={28} />
                </span>
                {text}
            </Alert>
        </Col>
    );
};

export default ErrorAlert;
