import {
    SelectedContext,
    SelectedProvider,
} from '../../contexts/SelectedContext';
import CommentArea from './CommentArea';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PageContent from '../pageContent/PageContent.jsx';
import { BookContext, BookProvider } from '../../contexts/BookContext.jsx';
import { ThemeProvider } from '../../contexts/ThemeContext.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import { CommentsContext } from '../../contexts/CommentsContext.jsx';
import { SearchBookProvider } from '../../contexts/SearchBookContext.jsx';

describe('Test for CommentArea', () => {
    it('should test if CommentArea is rendered correctly', () => {
        render(
            <MemoryRouter>
                <SelectedProvider>
                    <BookProvider>
                        <CommentArea />
                    </BookProvider>
                </SelectedProvider>
            </MemoryRouter>,
        );
    });

    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should test if commentsList is showing after clicking on a book', async () => {
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

        const mockComments = [
            {
                rate: '1',
                elementId: 'c123',
                comment: 'comment 1',
            },
            {
                rate: '2',
                elementId: 'c456',
                comment: 'comment 2',
            },
        ];

        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockBooks,
        });

        fetch.mockResolvedValue({
            ok: true,
            json: async () => mockComments,
        });

        const mockSetSelected = vi.fn();

        render(
            <MemoryRouter>
                <ThemeProvider>
                    <SearchBookProvider>
                        <SelectedContext.Provider
                            value={{ setSelected: mockSetSelected }}
                        >
                            <BookContext.Provider
                                value={{
                                    books: mockBooks,
                                    getAllBooks: vi.fn(),
                                }}
                            >
                                <CommentsContext.Provider
                                    value={{ comments: mockComments }}
                                >
                                    <PageContent />
                                </CommentsContext.Provider>
                            </BookContext.Provider>
                        </SelectedContext.Provider>
                    </SearchBookProvider>
                </ThemeProvider>
            </MemoryRouter>,
        );

        const commentsSection = screen.getByTestId('commentsSection');
        expect(commentsSection).toBeInTheDocument();

        const books = screen.getAllByTestId('bookCard');
        const [firstBook] = books;
        expect(firstBook).toBeInTheDocument();

        fireEvent.click(firstBook);

        expect(mockSetSelected).toHaveBeenCalledWith({
            asin: '123',
            title: 'title 1',
        });
    });
});
