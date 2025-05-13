import BookCard from './BookCard';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SelectedProvider } from '../../contexts/SelectedContext';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test for BookCard', () => {
    it('should test if the card border has been added after clicking on the card', () => {
        const bookMockup = {
            title: 'title',
        };

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <BookCard book={bookMockup} />
                </SelectedProvider>
            </MemoryRouter>,
        );

        const bookCard = screen.getByTestId('bookCard');
        expect(bookCard).toHaveClass('false');

        fireEvent.click(bookCard);

        expect(bookCard).toHaveClass('selected-card');
    });
});
