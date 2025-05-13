import { createContext, useEffect, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getAllBooks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'https://epibooks.onrender.com/fantasy',
            );
            const json = await response.json();
            setBooks(json);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <BookContext.Provider
            value={{
                books,
                setBooks,
                error,
                getAllBooks,
                isLoading,
            }}
        >
            {children}
        </BookContext.Provider>
    );
};
