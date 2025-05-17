import './scrollToTopButton.css';
import { ChevronUp } from 'lucide-react';
import { useScrollToTop } from '../../hooks/useScrollToTop.jsx';

const ScrollToTopButton = () => {
    const { isVisible, handleScrollToTop } = useScrollToTop();

    return (
        isVisible && (
            <button
                onClick={handleScrollToTop}
                className="chevron-up btn btn-primary"
            >
                <ChevronUp size={30} />
            </button>
        )
    );
};

export default ScrollToTopButton;
