import { footerLinks } from '../dataSource.js';

const FooterLinks = () => {
    return (
        <ul className="list-unstyled d-flex flex-column gap-3">
            {footerLinks
                .sort((firstLink, secondLink) => {
                    firstLink = firstLink.text.length;
                    secondLink = secondLink.text.length;

                    return firstLink - secondLink;
                })
                .map(link => (
                    <li className="footer-links" key={link.id}>
                        <a href="#">{link.text}</a>
                    </li>
                ))}
        </ul>
    );
};

export default FooterLinks;
