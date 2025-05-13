import { createContext, useState } from 'react';

export const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
    const [selected, setSelected] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(prev => !prev);
    };

    return (
        <SelectedContext.Provider
            value={{
                selected,
                setSelected,
                isActive,
                setIsActive,
                handleIsActive,
            }}
        >
            {children}
        </SelectedContext.Provider>
    );
};
