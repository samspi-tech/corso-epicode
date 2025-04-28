import './socialIcons.css';
import { icons } from './dataSource.js';

const SocialIcons = () => {
    return (
        <>
            <p className="mb-2 ms-2">Social</p>

            {icons.map(icon => {
                const Icon = icon.name;

                return (
                    <a key={icon.id} href="#" className="social-icons">
                        <Icon size={30} className="mx-2" />
                    </a>
                );
            })}
        </>
    );
};

export default SocialIcons;
