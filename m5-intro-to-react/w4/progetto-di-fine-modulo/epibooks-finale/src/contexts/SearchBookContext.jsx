import { createContext, useState } from 'react';

export const SearchBookContext = createContext();

export const SearchBookProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = e => {
        setSearchQuery(e.target.value);
    };

    const handleInputFocus = () => {
        setSearchQuery('');
    };

    return (
        <SearchBookContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                handleInputFocus,
                handleInputChange,
            }}
        >
            {children}
        </SearchBookContext.Provider>
    );
};
