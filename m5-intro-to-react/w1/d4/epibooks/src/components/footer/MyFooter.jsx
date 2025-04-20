import './myFooter.css';
import { Col, Row } from 'react-bootstrap';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import FooterLinks from './partials/FooterLinks.jsx';
import SocialIcons from '../socialIcons/SocialIcons.jsx';

const MyFooter = () => {
    return (
        <>
            <footer className="container py-5 mt-auto">
                <Row className="gy-5">
                    <Col sm={12} xl={5}>
                        <BrandLogo />
                    </Col>
                    <Col sm={12} xl={3}>
                        <FooterLinks />
                    </Col>
                    <Col sm={12} xl={4}>
                        <SocialIcons />
                    </Col>
                </Row>
            </footer>
        </>
    );
};

export default MyFooter;
