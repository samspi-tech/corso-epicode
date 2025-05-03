import { useFetch } from '../hooks/useFetch.jsx';
import { createContext, useState } from 'react';
import SingleBook from '../components/allTheBooks/partials/singleBook/SingleBook.jsx';
import ErrorAlert from '../components/errorAlert/ErrorAlert.jsx';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const { data, error, isLoading } = useFetch(
        'https://epibooks.onrender.com/fantasy',
    );

    const [search, setSearch] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        const query = e.target.value;
        setInputValue(query);
    };

    const handleSearch = e => {
        e.preventDefault();
        setSearch(inputValue);
    };

    const handleReset = () => {
        setSearch('');
        setInputValue('');
    };

    const showBooks = () => {
        const filteredBooks = data.filter(book => {
            const { title } = book;
            const bookTitle = title.trim().toLowerCase();

            return bookTitle.includes(search);
        });

        const books = filteredBooks.map(filteredBook => {
            const { asin: bookId } = filteredBook;
            return <SingleBook key={bookId} book={filteredBook} />;
        });

        return filteredBooks.length > 0 ? (
            books
        ) : (
            <ErrorAlert text={`Sorry, could not find "${search}".`} />
        );
    };

    return (
        <BookContext.Provider
            value={{
                data,
                error,
                isLoading,
                inputValue,
                showBooks,
                handleReset,
                handleSearch,
                handleChange,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};
