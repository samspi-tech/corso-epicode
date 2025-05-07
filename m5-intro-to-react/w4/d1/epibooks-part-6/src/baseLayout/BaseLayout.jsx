import MyNav from '../components/myNav/MyNav.jsx';
import MyFooter from '../components/myFooter/MyFooter.jsx';
import Welcome from '../components/welcome/Welcome.jsx';

const BaseLayout = ({ children }) => {
    return (
        <>
            <MyNav />
            <Welcome />
            {children}
            <MyFooter />
        </>
    );
};

export default BaseLayout;
