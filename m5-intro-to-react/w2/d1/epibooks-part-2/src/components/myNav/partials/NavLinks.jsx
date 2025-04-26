import { Nav } from 'react-bootstrap';
import { links } from '../dataSource.js';

const NavLinks = () => {
    return (
        <>
            {links.map(link => (
                <Nav.Link key={link.id} href={link.href}>
                    {link.text}
                </Nav.Link>
            ))}
        </>
    );
};

export default NavLinks;
