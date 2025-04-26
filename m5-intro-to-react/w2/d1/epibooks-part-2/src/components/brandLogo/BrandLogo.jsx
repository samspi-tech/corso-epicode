import './brandLogo.css';
import { Navbar } from 'react-bootstrap';

const BrandLogo = () => {
    return (
        <>
            <Navbar.Brand href="#">
                <img
                    alt="epicode icon"
                    src="https://cdn.brandfetch.io/idTGWBysU1/w/361/h/361/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                    width="30"
                    height="30"
                    className="rounded-circle"
                />
                EpiBooks
            </Navbar.Brand>
        </>
    );
};

export default BrandLogo;
