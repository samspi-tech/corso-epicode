import './myFooter.css';
import { Col, Container, Row } from 'react-bootstrap';
import BrandLogo from '../brandLogo/BrandLogo.jsx';
import FooterLinks from './partials/FooterLinks.jsx';
import SocialIcons from '../socialIcons/SocialIcons.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

const MyFooter = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <footer
            className={`container-fluid py-5 mt-auto ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <Container>
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
            </Container>
        </footer>
    );
};

export default MyFooter;
