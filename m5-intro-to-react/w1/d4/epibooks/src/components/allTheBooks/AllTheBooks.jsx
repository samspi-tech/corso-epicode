import BookCardContainer from '../bookCardContainer/BookCardContainer.jsx';

const AllTheBooks = () => {
    return (
        <main className="container py-5">
            <section className="row gy-3">
                <BookCardContainer />
            </section>
        </main>
    );
};

export default AllTheBooks;
