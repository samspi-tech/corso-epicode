import MyNav from './components/navigation/MyNav.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import MyFooter from './components/footer/MyFooter.jsx';
import AllTheBooks from './components/allTheBooks/AllTheBooks.jsx';

const App = () => {
    return (
        <>
            <MyNav />
            <Welcome />
            <AllTheBooks />
            <MyFooter />
        </>
    );
};

export default App;
