import { describe, expect } from 'vitest';
import SingleBook from './SingleBook.jsx';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SelectedProvider } from '../../../contexts/SelectedContext.jsx';

describe('Test for SingleBook', () => {
    it('should test if component is receiving external data correctly', () => {
        const bookMockup = {
            asin: '123',
            title: 'title',
            category: 'category',
            img: 'https://img.com',
            price: 1,
        };

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <SingleBook book={bookMockup} />
                </SelectedProvider>
            </MemoryRouter>,
        );

        const asin = screen.getByRole('link');
        expect(asin).toHaveAttribute('href', '/bookDetails/123');

        const title = screen.getByText('title');
        expect(title).toBeInTheDocument();

        const category = screen.getByText('category');
        expect(category).toBeInTheDocument();

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'https://img.com');

        const price = screen.getByText('€ 1');
        expect(price).toBeInTheDocument();
    });
});
