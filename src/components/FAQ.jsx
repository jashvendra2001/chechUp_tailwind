import React, { useState } from 'react';

const FAQ = () => {
    const [faqStates, setFaqStates] = useState([false, false, false, false]);

    const handleFAQ = (index) => {
        const newFaqStates = [...faqStates];
        newFaqStates[index] = !newFaqStates[index];

        console.log(newFaqStates)
        setFaqStates(newFaqStates);
    };

    return (
        <div id="FAQ" className='container'>
            <h3>FAQ</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="faqs border gradient-hover-inner rounded-sm p-3">
                        <dt className='flex justify-between cursor-pointer' aria-controls={`faq-${index}`} onClick={() => handleFAQ(index - 1)}>
                            <h2 className='font-semibold'>My name is jashvendra</h2>
                            <i className={`ri-arrow-drop-${faqStates[index - 1] ? 'up' : 'down'}-line -rotate-180`}></i>
                        </dt>
                        {faqStates[index - 1] && (
                            <dd id={`faq-${index}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ea.</p>
                            </dd>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
