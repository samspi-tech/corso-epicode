import './goPageTopButton.css';
import { ChevronUp } from 'lucide-react';

const GoPageTopButton = () => {
    return (
        <a href="#" className="chevron-up btn btn-primary">
            <ChevronUp size={30} />
        </a>
    );
};

export default GoPageTopButton;
