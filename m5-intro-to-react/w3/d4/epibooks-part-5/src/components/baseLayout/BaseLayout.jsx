import MyNav from '../myNav/MyNav.jsx';
import MyFooter from '../myFooter/MyFooter.jsx';

const PageLayout = ({ children }) => {
    return (
        <>
            <MyNav />
            {children}
            <MyFooter />
        </>
    );
};

export default PageLayout;
