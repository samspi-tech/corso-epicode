import { Alert, Col } from 'react-bootstrap';

const ErrorAlert = ({ text }) => {
    return (
        <Col sm={12}>
            <Alert
                variant="light"
                className="text-center fs-4 fw-bold py-5 border-5 border-danger text-danger"
            >
                {text}
            </Alert>
        </Col>
    );
};

export default ErrorAlert;
