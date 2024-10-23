// src/components/FAQAccordion.js
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="divide-y divide-gray-300">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-xl focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
