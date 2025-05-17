import BookCard from './BookCard';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SelectedProvider } from '../../contexts/SelectedContext';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test for BookCard', () => {
    it('should test if the card border has been added after clicking on the card', () => {
        const mockBook = {
            price: 2,
            asin: '456',
            title: 'title 2',
            category: 'cat 2',
            img: 'https://img-2.com',
        };

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <BookCard book={mockBook} />
                </SelectedProvider>
            </MemoryRouter>,
        );

        const bookCard = screen.getByTestId('bookCard');
        expect(bookCard).toHaveClass('false');

        fireEvent.click(bookCard);
        expect(bookCard).toHaveClass('selected-card');
    });
});
