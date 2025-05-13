import AllTheBooks from './AllTheBooks';
import { render, waitFor, screen } from '@testing-library/react';
import { BookProvider } from '../../contexts/BookContext.jsx';
import { SearchBookProvider } from '../../contexts/SearchBookContext.jsx';
import { MemoryRouter } from 'react-router-dom';
import { SelectedProvider } from '../../contexts/SelectedContext.jsx';

describe('Test for AllTheBooks', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should test if card is receiving data', async () => {
        const booksMockup = [
            {
                price: 1,
                asin: '123',
                title: 'title 1',
                category: 'cat 1',
                img: 'https://img-1.com',
            },
            {
                price: 2,
                asin: '456',
                title: 'title 2',
                category: 'cat 2',
                img: 'https://img-2.com',
            },
        ];

        fetch.mockResolvedValue({
            ok: true,
            json: async () => booksMockup,
        });

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <SearchBookProvider>
                        <BookProvider>
                            <AllTheBooks />
                        </BookProvider>
                    </SearchBookProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );

        await waitFor(() => {
            const bookCard = screen.queryAllByTestId('cardssss');
            expect(bookCard.length).toBe(2);
        });
    });
});
