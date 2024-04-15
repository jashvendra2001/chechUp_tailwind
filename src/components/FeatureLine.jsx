import React, { useEffect, useState, useRef } from 'react';
import company1 from "../assest/asset 3.png";

const IntersectionObserverComponent = ({ children, isLTR, speed }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isVisible) {
                handleTranslate();
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const handleTranslate = () => {
        const element = elementRef.current;
        if (!element) return;

        const translateX = window.pageYOffset * speed * (isLTR ? 1 : -1);
        element.style.transform = `translateX(${translateX}px)`;
    };

    return <div ref={elementRef}>{children}</div>;
};

const FeatureLine = () => {
    return (
        <IntersectionObserverComponent isLTR={true} speed={0.15}>
            <div id="line1" className='container max-w-screen-xl  flex gap-4 w-full overflow-x-hidden'>
                <div className="border border-lg flex justify-center p-4">
                    <div id="line4" className='flex gap-8 p-6 -translate-x-10 sm:-translate-x-10'>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>
                        <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold'>Download</h3>

                    </div>
                </div>
            </div>
        </IntersectionObserverComponent>
    )
}

export default FeatureLine;
