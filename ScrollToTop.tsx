import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll smoothly to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-600 text-white shadow-lg hover:bg-brand-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 border-2 border-white"
                    aria-label="العودة للأعلى"
                >
                    <ArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
