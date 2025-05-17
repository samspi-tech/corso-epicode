import { createContext, useState } from 'react';

export const SearchBookContext = createContext();

export const SearchBookProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = e => {
        setSearchQuery(e.target.value);
    };

    const handleClearInput = () => {
        setSearchQuery('');
    };

    return (
        <SearchBookContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                handleClearInput,
                handleInputChange,
            }}
        >
            {children}
        </SearchBookContext.Provider>
    );
};
