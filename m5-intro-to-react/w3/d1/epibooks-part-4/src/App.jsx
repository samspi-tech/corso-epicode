import MyNav from './components/myNav/MyNav.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import MyFooter from './components/myFooter/MyFooter.jsx';
import { BookProvider } from './contexts/BookContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import PageContent from './components/pageContent/PageContent.jsx';

const App = () => {
    return (
        <ThemeProvider>
            <BookProvider>
                <MyNav />
                <Welcome />
                <PageContent />
                <MyFooter />
            </BookProvider>
        </ThemeProvider>
    );
};

export default App;
