import BaseLayout from './BaseLayout';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { BookProvider } from '../contexts/BookContext';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SearchBookProvider } from '../contexts/SearchBookContext';

describe('Test for BaseLayout', () => {
    it('should test if Welcome is mounted correctly', () => {
        render(
            <MemoryRouter>
                <SearchBookProvider>
                    <ThemeProvider>
                        <BookProvider>
                            <BaseLayout />
                        </BookProvider>
                    </ThemeProvider>
                </SearchBookProvider>
            </MemoryRouter>,
        );

        const welcome = screen.getByText('one more page');
        expect(welcome).toBeInTheDocument();
    });
});
