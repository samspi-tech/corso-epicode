import './goTopPageButton.css';
import { ChevronUp } from 'lucide-react';
import { useWindowScrollYPosition } from '../../hooks/useWindowScrollYPosition.jsx';

const GoTopPageButton = () => {
    const { scrollYPosition } = useWindowScrollYPosition();

    const isButtonVisible = scrollYPosition > 100;

    return (
        isButtonVisible && (
            <a href="#" className="chevron-up btn btn-primary">
                <ChevronUp size={30} />
            </a>
        )
    );
};

export default GoTopPageButton;
