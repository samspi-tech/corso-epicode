import GoPageTopButton from '../goPageTopButton/GoPageTopButton.jsx';
import BookCardContainer from '../bookCardContainer/BookCardContainer.jsx';

const AllTheBooks = () => {
    return (
        <main className="container position-relative py-5">
            <section className="row gy-4">
                <BookCardContainer />
            </section>
            <GoPageTopButton />
        </main>
    );
};

export default AllTheBooks;
