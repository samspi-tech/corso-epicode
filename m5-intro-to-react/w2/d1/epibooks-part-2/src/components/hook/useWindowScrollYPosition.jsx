import { useEffect, useState } from 'react';

export const useWindowScrollYPosition = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleScrollYPosition = () => {
        setScrollYPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollYPosition);

        return () => {
            window.removeEventListener('scroll', handleScrollYPosition);
        };
    }, []);

    return {
        scrollYPosition,
    };
};
