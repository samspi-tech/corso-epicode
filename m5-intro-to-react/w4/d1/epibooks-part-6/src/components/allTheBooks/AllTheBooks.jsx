import './allTheBooks.css';
import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import ErrorAlert from '../errorAlert/ErrorAlert.jsx';
import { BookContext } from '../../contexts/BookContext.jsx';

const AllTheBooks = () => {
    const { data, isLoading, error, showBooks } = useContext(BookContext);

    return (
        <>
            <Row className="gy-4">
                {!isLoading && error && (
                    <ErrorAlert text="Sorry, books are not available right now. Try again later, please." />
                )}
                {data && showBooks()}
            </Row>
        </>
    );
};

export default AllTheBooks;
