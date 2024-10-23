// src/components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
      <img src={feature.image} alt={feature.title} className="w-20 h-20 mr-6" />
      <div>
        <h3 className="text-xl font-semibold">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
