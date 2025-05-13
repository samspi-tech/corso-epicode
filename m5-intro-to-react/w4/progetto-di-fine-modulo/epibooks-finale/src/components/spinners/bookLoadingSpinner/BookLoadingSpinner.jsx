import './bookLoadingSpinner.css';
import { Col, Row } from 'react-bootstrap';

const BookLoadingSpinner = () => {
    return (
        <Row className="gy-4">
            <Col sm={12} lg={6}>
                <div className="loading-card one"></div>
            </Col>{' '}
            <Col sm={12} lg={6}>
                <div className="loading-card two"></div>
            </Col>{' '}
            <Col sm={12} lg={6}>
                <div className="loading-card three"></div>
            </Col>{' '}
            <Col sm={12} lg={6}>
                <div className="loading-card four"></div>
            </Col>
        </Row>
    );
};

export default BookLoadingSpinner;
