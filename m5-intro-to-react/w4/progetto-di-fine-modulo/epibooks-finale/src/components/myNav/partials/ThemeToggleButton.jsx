import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../../contexts/ThemeContext.jsx';

const ThemeToggleButton = () => {
    const { isDarkMode, handleToggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={handleToggleTheme} className="toggle-theme-btn">
            {isDarkMode ? (
                <Sun size={40} className="dark-theme-btn" />
            ) : (
                <Moon size={40} className="light-theme-btn" />
            )}
        </button>
    );
};

export default ThemeToggleButton;
