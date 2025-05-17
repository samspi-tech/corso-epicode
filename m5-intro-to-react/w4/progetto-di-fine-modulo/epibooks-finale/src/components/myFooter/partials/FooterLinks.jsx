import { footerLinks } from '../dataSource.js';

const FooterLinks = () => {
    return (
        <ul className="list-unstyled d-flex flex-column gap-3">
            {footerLinks
                .slice()
                .sort((a, b) => a.text.localeCompare(b.text))
                .map(link => {
                    const { id, text } = link;

                    return (
                        <li className="footer-links" key={id}>
                            <a href="#">{text}</a>
                        </li>
                    );
                })}
        </ul>
    );
};

export default FooterLinks;
