import { footerLinks } from '../dataSource.js';

const FooterLinks = () => {
    const nextFooterLinks = [...footerLinks];

    return (
        <ul className="list-unstyled d-flex flex-column gap-3">
            {nextFooterLinks
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
