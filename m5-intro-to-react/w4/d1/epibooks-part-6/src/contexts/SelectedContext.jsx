import { createContext, useState } from 'react';

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
    const [selected, setSelected] = useState(null);

    const handleSelected = book => {
        setSelected({
            asin: book.asin,
            title: book.title,
        });
    };

    return (
        <SelectedContext.Provider value={{ selected, handleSelected }}>
            {children}
        </SelectedContext.Provider>
    );
};
