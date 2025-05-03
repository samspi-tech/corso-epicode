import './searchBar.css';
import { useContext } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { BookContext } from '../../contexts/BookContext.jsx';

const SearchBar = () => {
    const { handleSearch, handleReset, inputValue, handleChange } =
        useContext(BookContext);

    return (
        <Form
            onSubmit={handleSearch}
            className="searchbar-container mx-lg-3 my-3 my-lg-0"
        >
            <InputGroup>
                <Button onClick={handleReset} className="searchbar-btn">
                    <RotateCcw size={18} />
                </Button>
                <Form.Control
                    type="search"
                    value={inputValue}
                    className="searchbar"
                    onChange={handleChange}
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
