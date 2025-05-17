import HomePage from './HomePage.jsx';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext.jsx';
import { ThemeProvider } from '../contexts/ThemeContext.jsx';
import { SelectedProvider } from '../contexts/SelectedContext.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import CommentArea from '../components/commentArea/CommentArea.jsx';
import { SearchBookProvider } from '../contexts/SearchBookContext.jsx';

describe('Tests for Homepage components', () => {
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
            title: 'title-1',
            category: 'cat 1',
            img: 'https://img-1.com',
        },
        {
            price: 2,
            asin: '456',
            title: 'title-2',
            category: 'cat 2',
            img: 'https://img-2.com',
        },
        {
            price: 3,
            asin: '789',
            title: 'title-3',
            category: 'cat 3',
            img: 'https://img-3.com',
        },
    ];

    it('should test if all the books are being returned if the Searchbar has an empty value', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks,
        });

        const mockGetAllBooksFn = vi.fn();

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <ThemeProvider>
                        <SearchBookProvider>
                            <BookContext.Provider
                                value={{
                                    books: mockBooks,
                                    setBooks: vi.fn(),
                                    getAllBooks: mockGetAllBooksFn,
                                }}
                            >
                                <HomePage />
                            </BookContext.Provider>
                        </SearchBookProvider>
                    </ThemeProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );

        vi.spyOn(console, 'warn');

        const searchInput = screen.getByPlaceholderText('Search book by title');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveValue('');

        expect(mockGetAllBooksFn).toHaveBeenCalledTimes(1);
        expect(mockGetAllBooksFn).toHaveReturnedTimes(1);
    });

    it('should test if the Searchbar is filtering the second book', async () => {
        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks,
        });

        const mockSetBooksFn = vi.fn();

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <ThemeProvider>
                        <SearchBookProvider>
                            <BookContext.Provider
                                value={{
                                    books: mockBooks,
                                    setBooks: mockSetBooksFn,
                                    getAllBooks: vi.fn(),
                                }}
                            >
                                <HomePage />
                            </BookContext.Provider>
                        </SearchBookProvider>
                    </ThemeProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );

        vi.spyOn(console, 'warn');

        const searchInput = screen.getByPlaceholderText('Search book by title');
        fireEvent.change(searchInput, { target: { value: 'title-2' } });
        expect(searchInput).toHaveValue('title-2');

        const searchFormButton = screen.getByTestId('searchFormButton');
        expect(searchFormButton).toBeInTheDocument();

        expect(mockSetBooksFn).toHaveBeenCalledTimes(0);

        fireEvent.click(searchFormButton);

        expect(mockSetBooksFn).toHaveBeenCalledTimes(1);
        expect(mockSetBooksFn).toHaveBeenCalledWith([
            {
                price: 2,
                asin: '456',
                title: 'title-2',
                category: 'cat 2',
                img: 'https://img-2.com',
            },
        ]);
    });

    it('should test if the Homepage is loading without comments before clicking any book', () => {
        const mockFn = vi.fn();

        render(
            <MemoryRouter>
                <SelectedProvider>
                    <CommentArea isTitleVisible={mockFn} />
                </SelectedProvider>
            </MemoryRouter>,
        );

        const commentsList = screen.queryByTestId('commentsList');
        expect(commentsList).toBe(null);
    });
});
