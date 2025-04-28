import { Search, RefreshCcw } from 'lucide-react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const SearchBar = ({ searchRef, onSearch, onReset }) => {
    return (
        <Row>
            <Col xs={12} md={6}>
                <InputGroup className="mb-5">
                    <Button onClick={onReset}>
                        <RefreshCcw size={20} />
                    </Button>
                    <Form.Control
                        type="search"
                        ref={searchRef}
                        placeholder="Search book by title"
                    />
                    <Button onClick={onSearch}>
                        <Search />
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    );
};

export default SearchBar;
