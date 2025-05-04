import MyNav from './components/myNav/MyNav.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import MyFooter from './components/myFooter/MyFooter.jsx';
import { BookContext } from './contexts/BookContext.jsx';
import PageContent from './components/pageContent/PageContent.jsx';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner.jsx';
import { useContext } from 'react';

const App = () => {
    const { isLoading, error } = useContext(BookContext);

    return (
        <>
            {isLoading && !error && <LoadingSpinner />}
            <MyNav />
            <Welcome />
            <PageContent />
            <MyFooter />
        </>
    );
};

export default App;
