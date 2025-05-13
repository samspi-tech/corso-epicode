import './searchBar.css';
import { Search } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BookContext } from '../../contexts/BookContext.jsx';
import { SearchBookContext } from '../../contexts/SearchBookContext.jsx';

const SearchBar = () => {
    const { books, setBooks, getAllBooks } = useContext(BookContext);
    const { searchQuery, onInputChange, onInputFocus } =
        useContext(SearchBookContext);

    const handleSubmit = e => {
        e.preventDefault();

        const filteredBooks = books.filter(book => {
            return book.title
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase());
        });
        setBooks(filteredBooks);
    };

    useEffect(() => {
        searchQuery === '' && getAllBooks();
    }, [searchQuery]);

    return (
        <Form
            onSubmit={handleSubmit}
            className="searchbar-container mx-lg-3 my-3 my-lg-0"
        >
            <InputGroup>
                <Form.Control
                    type="search"
                    value={searchQuery}
                    className="searchbar"
                    onFocus={onInputFocus}
                    onChange={onInputChange}
                    placeholder="Search book by title"
                />
                <Button type="submit" className="searchbar-btn">
                    <Search />
                </Button>
            </InputGroup>
        </Form>
    );
};

export default SearchBar;
