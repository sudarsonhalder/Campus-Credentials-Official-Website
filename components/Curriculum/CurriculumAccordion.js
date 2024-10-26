// src/components/CurriculumAccordion.js
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';



const CurriculumAccordion = ({ curriculum = CURRICULUM_DATA }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="divide-y divide-gray-300">
      {curriculum.map((item, index) => (
        <div key={index} className="py-4">
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-xl focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {activeIndex === index && (
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {item.content.map((point, i) => (
                <li key={i} className="my-1">{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumAccordion;
