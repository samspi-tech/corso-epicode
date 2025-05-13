import { useEffect, useState } from 'react';

export const useWindowScrollYPosition = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleVerticalScroll = () => {
        setScrollYPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVerticalScroll);

        return () => {
            window.removeEventListener('scroll', handleVerticalScroll);
        };
    }, []);

    return {
        scrollYPosition,
    };
};
