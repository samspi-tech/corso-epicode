import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../../contexts/ThemeContext.jsx';

const ThemeToggleButton = () => {
    const { isDarkMode, handleToggleTheme } = useContext(ThemeContext);

    return (
        <Button
            variant={isDarkMode ? 'outline-light' : 'outline-dark'}
            onClick={handleToggleTheme}
            className="rounded-circle px-2 py-1 border-0"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
    );
};

export default ThemeToggleButton;
