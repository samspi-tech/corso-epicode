import MyNav from './components/myNav/MyNav.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import MyFooter from './components/myFooter/MyFooter.jsx';
import PageContent from './components/pageContent/PageContent.jsx';

const App = () => {
    return (
        <>
            <MyNav />
            <Welcome />
            <PageContent />
            <MyFooter />
        </>
    );
};

export default App;
