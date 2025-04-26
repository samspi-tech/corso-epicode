import GoTopPageButton from '../goTopPageButton/GoTopPageButton.jsx';
import AllTheBooks from '../allTheBooks/AllTheBooks.jsx';

const PageContent = () => {
    return (
        <main className="container position-relative py-5">
            <section className="container">
                <AllTheBooks />
            </section>
            <GoTopPageButton />
        </main>
    );
};

export default PageContent;
