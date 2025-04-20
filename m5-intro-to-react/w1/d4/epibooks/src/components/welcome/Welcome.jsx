import { Container, Row, Col, Alert } from 'react-bootstrap';
import './welcome.css';

const Welcome = () => {
    return (
        <header className="container-fluid hero">
            <Container className="py-5">
                <Row>
                    <Col sm={12} lg={5} className="my-auto">
                        <h1 className="display-1 hero-title pb-5 pb-lg-0">
                            One More Page
                        </h1>
                    </Col>
                    <Col sm={12} lg={7} className="h-100 my-auto ms-auto">
                        <Alert className="hero-alert">
                            <blockquote>
                                <p className="fs-5">
                                    I wish it need not have happened in my
                                    time," said Frodo. "So do I," said Gandalf,
                                    "and so do all who live to see such times.
                                    But that is not for them to decide. All we
                                    have to decide is what to do with the time
                                    that is given us.
                                </p>
                            </blockquote>
                            <hr />
                            <p className="mb-0">
                                — J.R.R. Tolkien, The Fellow Ship of the Ring
                            </p>
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Welcome;
