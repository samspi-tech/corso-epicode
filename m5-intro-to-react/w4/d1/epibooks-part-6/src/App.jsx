import HomePage from './pages/HomePage.jsx';
import NotFound from './pages/NotFound.jsx';
import BookDetails from './pages/BookDetails.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/bookDetails/:asin" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
