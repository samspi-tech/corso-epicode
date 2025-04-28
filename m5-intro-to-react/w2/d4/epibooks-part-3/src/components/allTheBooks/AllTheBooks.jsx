import './allTheBooks.css';
import { useRef, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import SingleBook from './partials/singleBook/SingleBook.jsx';
import ErrorAlert from '../errorAlert/ErrorAlert.jsx';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner.jsx';

const AllTheBooks = () => {
    const { data, error, isLoading } = useFetch(
        'https://epibooks.onrender.com/fantasy',
    );

    const searchValue = useRef('');
    const [value, setValue] = useState('');

    const handleSearch = () => {
        const userValue = searchValue.current.value.trim().toLowerCase();
        setValue(userValue);
    };

    const handleReset = () => {
        setValue('');
        searchValue.current.value = '';
    };

    const showBooks = () => {
        const filteredBooks = data.filter(book => {
            const { title } = book;
            const bookTitle = title.trim().toLowerCase();

            return bookTitle.includes(value);
        });

        const books = filteredBooks.map(filteredBook => {
            const { asin: bookId } = filteredBook;
            return <SingleBook key={bookId} book={filteredBook} />;
        });

        return filteredBooks.length > 0 ? (
            books
        ) : (
            <ErrorAlert text={`Sorry, could not find "${value}".`} />
        );
    };

    return (
        <>
            <SearchBar
                searchRef={searchValue}
                onSearch={handleSearch}
                onReset={handleReset}
            />
            <Row className="gy-4">
                {isLoading && !error && <LoadingSpinner />}
                {!isLoading && error && (
                    <ErrorAlert text="Error, something went wrong! Try again later, please." />
                )}
                {data && showBooks()}
            </Row>
        </>
    );
};

export default AllTheBooks;
