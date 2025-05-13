import { createContext, useState } from 'react';

export const SearchBookContext = createContext();

export const SearchBookProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onInputChange = e => {
        setSearchQuery(e.target.value);
    };

    const onInputFocus = () => {
        setSearchQuery('');
    };

    return (
        <SearchBookContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                onInputFocus,
                onInputChange,
            }}
        >
            {children}
        </SearchBookContext.Provider>
    );
};
