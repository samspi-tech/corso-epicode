import './allTheBooks.css';
import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import SingleBook from './partials/SingleBook.jsx';
import ErrorAlert from '../errorAlert/ErrorAlert.jsx';
import { BookContext } from '../../contexts/BookContext.jsx';
import { SearchBookContext } from '../../contexts/SearchBookContext.jsx';
import BookLoadingSpinner from '../spinners/bookLoadingSpinner/BookLoadingSpinner.jsx';

const AllTheBooks = () => {
    const { searchQuery } = useContext(SearchBookContext);
    const { books, isLoading, error } = useContext(BookContext);

    return (
        <Row className="gy-4">
            {isLoading && <BookLoadingSpinner />}
            {!isLoading && error && (
                <ErrorAlert text="Sorry, books are not available right now. Try again later, please." />
            )}
            {books && books.length === 0 && (
                <>
                    <ErrorAlert
                        text={`Can't find "${searchQuery.toUpperCase()}" book. Try a different title.`}
                    />
                    <BookLoadingSpinner />
                </>
            )}
            {!isLoading &&
                !error &&
                books &&
                books.map(book => {
                    const { asin } = book;

                    return (
                        <SingleBook data-testid="card" key={asin} book={book} />
                    );
                })}
        </Row>
    );
};

export default AllTheBooks;
