import AllTheBooks from './AllTheBooks';
import { expect, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { BookContext } from '../../contexts/BookContext.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import { SelectedProvider } from '../../contexts/SelectedContext.jsx';
import { SearchBookProvider } from '../../contexts/SearchBookContext.jsx';

describe('Test for AllTheBooks', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    const mockBooks = [
        {
            price: 1,
            asin: '123',
            title: 'title 1',
            category: 'category',
            img: 'https://img-1.com',
        },
        {
            price: 2,
            asin: '456',
            title: 'title 2',
            category: 'category',
            img: 'https://img-2.com',
        },
    ];

    it('should test if the number of displayed cards is equal to the books array length', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks,
        });

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <SearchBookProvider>
                        <BookContext.Provider value={{ books: mockBooks }}>
                            <AllTheBooks />
                        </BookContext.Provider>
                    </SearchBookProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );

        const card = screen.getAllByText('category');
        expect(card).toHaveLength(2);
    });

    it('should test if the border is removed from the first card after clicking on the second one', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks,
        });

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <SearchBookProvider>
                        <BookContext.Provider value={{ books: mockBooks }}>
                            <AllTheBooks />
                        </BookContext.Provider>
                    </SearchBookProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );

        const books = screen.getAllByTestId('bookCard');
        const [firstBook, secondBook] = books;

        expect(firstBook).toBeInTheDocument();
        expect(firstBook).toHaveClass('false');

        expect(secondBook).toBeInTheDocument();
        expect(secondBook).toHaveClass('false');

        fireEvent.click(firstBook);
        expect(secondBook).toHaveClass('false');
        expect(firstBook).toHaveClass('selected-card');

        fireEvent.click(secondBook);
        expect(firstBook).toHaveClass('false');
        expect(secondBook).toHaveClass('selected-card');
    });
});
