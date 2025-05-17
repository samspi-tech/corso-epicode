import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleVerticalScroll = () => {
        setScrollYPosition(window.scrollY);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isButtonVisible = () => {
        if (scrollYPosition > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVerticalScroll);
        isButtonVisible();

        const hideButton = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => {
            window.removeEventListener('scroll', handleVerticalScroll);
            clearTimeout(hideButton);
        };
    }, [window.scrollY]);

    return {
        isVisible,
        handleScrollToTop,
    };
};
