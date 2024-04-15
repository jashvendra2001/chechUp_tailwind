import React, { useEffect, useState, useRef } from 'react';
import company1 from "../assest/asset 3.png";
import icon1 from "../assest/asset 2.svg"


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

    const scrollHandler = () => {
        handleTranslate();
    };

    const touchMoveHandler = () => {
        handleTranslate();
    };

    const handleTranslate = () => {
        if (!isVisible) return;

        const element = elementRef.current;
        if (!element) return;

        const translateX = window.pageYOffset * speed * (isLTR ? 1 : -1);
        element.style.transform = `translateX(${translateX}px)`;
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        document.addEventListener('touchmove', touchMoveHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
            document.removeEventListener('touchmove', touchMoveHandler);
        };
    }, [isVisible]);

    return <div ref={elementRef}>{children}</div>;
};

const CardSection = () => {
    return (
        <div className="company-lines-group -mt-[20px] mx-auto overflow-x-hidden">
          <div className="company-title flex justify-center gap-6">
     <img className='translate-y-2 ' src={icon1}  alt="" />
     <span className='font-medium'>APP POWERED BY TO DESKTOP</span>
    <img className='-scale-x-100 translate-y-2 '  src={icon1} alt="" />
   </div>
            <IntersectionObserverComponent isLTR={true} speed={0.05} >
                <div id="line1" className='flex gap-4 w-screen  -translate-x-5 sm:-translate-x-10 mt-3 overflow-x-hidden'>
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 ">
                            <img className='w-12 h-12 md:w-20 md:h-20' src={company1} alt="" />
                            <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                        </div>
                    ))}
                </div>
            </IntersectionObserverComponent>
            <IntersectionObserverComponent isLTR={false} speed={0.05}>
                <div id="line2" className='flex gap-4 w-screen mt-2 translate-x-10 sm:-translate-x-1 overflow-x-hidden'>
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 ">
                            <img className='w-12 h-12 md:w-20 md:h-20' src={company1} alt="" />
                            <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                        </div>
                    ))}
                </div>
            </IntersectionObserverComponent>
            <IntersectionObserverComponent isLTR={true} speed={0.05}>
                <div id="line3" className='flex gap-4 w-screen mt-2 -translate-x-5 sm:-translate-x-10 overflow-x-hidden sm:hidden'>
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 ">
                            <img className='w-12 h-12 md:w-20 md:h-20' src={company1} alt="" />
                            <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                        </div>
                    ))}
                </div>
            </IntersectionObserverComponent>
            {/* <div className="height h-[1234px]"></div> */}
        </div>
    );
};

export default CardSection;
