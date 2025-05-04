import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggleTheme = () => {
        setIsDarkMode(previousState => !previousState);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
