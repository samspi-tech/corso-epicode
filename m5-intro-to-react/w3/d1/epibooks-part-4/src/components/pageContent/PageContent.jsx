import './pageContent.css';
import AllTheBooks from '../allTheBooks/AllTheBooks.jsx';
import GoTopPageButton from '../goTopPageButton/GoTopPageButton.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

const PageContent = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <main
            className={`container-fluid position-relative py-5 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}
        >
            <section className="container">
                <AllTheBooks />
            </section>
            <GoTopPageButton />
        </main>
    );
};

export default PageContent;
