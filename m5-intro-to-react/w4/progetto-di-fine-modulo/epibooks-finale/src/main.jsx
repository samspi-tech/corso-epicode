import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { BookProvider } from './contexts/BookContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { SelectedProvider } from './contexts/SelectedContext.jsx';
import { CommentsProvider } from './contexts/CommentsContext.jsx';
import { SearchBookProvider } from './contexts/SearchBookContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SearchBookProvider>
            <CommentsProvider>
                <SelectedProvider>
                    <ThemeProvider>
                        <BookProvider>
                            <App />
                        </BookProvider>
                    </ThemeProvider>
                </SelectedProvider>
            </CommentsProvider>
        </SearchBookProvider>
    </StrictMode>
);
