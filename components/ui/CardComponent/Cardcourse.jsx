import React, { useState } from 'react';
const CardComponent = () => {
  const [activeSection, setActiveSection] = useState('courses');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const viewAllLinks = {
    courses: {
      label: 'View All Courses',
      link: 'https://campuscredentials.online',
    },
    testSeries: {
      label: 'View All Test Series',
      link: 'https://test.campuscredentials.com',
    },
    companySpecific: {
      label: 'View All Company Specific Courses',
      link: 'https://campuscredentials.online',
    },
  };

  const courses = [
    {
      title: 'Logical Reasoning Simplified: A Comprehensive Guide by Vishwajeet Sir',
      description: 'A brief description of Course 1.',
      price: '₹ 999',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Logical Reasoning Simplified: A Comprehensive Guide by Vishwajeet Sir',
      description: 'A brief description of Course 1.',
      price: '₹ 999',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Logical Reasoning Simplified: A Comprehensive Guide by Vishwajeet Sir',
      description: 'A brief description of Course 1.',
      price: '₹ 999',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Logical Reasoning Simplified: A Comprehensive Guide by Vishwajeet Sir',
      description: 'A brief description of Course 1.',
      price: '₹ 999',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
  ];

  const testSeries = [
    {
      title: 'Test Series 1',
      description: 'A brief description of Test Series 1.',
      price: '₹ 49',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Test Series 2',
      description: 'A brief description of Test Series 2.',
      price: '₹ 89',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Test Series 3',
      description: 'A brief description of Test Series 3.',
      price: '₹ 69',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
  ];

  const companySpecific = [
    {
      title: 'Microsoft',
      description: 'A brief description of Microsoft-specific preparation.',
      price: '₹ 129',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'TCS',
      description: 'A brief description of TCS-specific preparation.',
      price: '₹ 99',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Infosys',
      description: 'A brief description of Infosys-specific preparation.',
      price: '₹ 109',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
  ];

  const renderCards = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    return paginatedData.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transform hover:scale-105 transition duration-300">
        <img src={item.img} alt={item.title} className="h-40 w-full object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-gray-900">{item.price}</span>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const getPageCount = (data) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPages = getPageCount(
      activeSection === 'courses' ? courses :
      activeSection === 'testSeries' ? testSeries :
      companySpecific
    );

    // Only render pagination if there is more than 1 page.
    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`w-8 h-8 rounded-full ${
              currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
            } focus:outline-none`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4 min-h-screen">
      {/* Left Sidebar */}
      <div className="md:w-1/4 w-full bg-white rounded-lg shadow-md border border-gray-200 p-4 md:h-56">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Sections</h2>
        <button
          onClick={() => { setActiveSection('courses'); setCurrentPage(1); }}
          className={`w-full text-left p-2 mb-2 rounded-lg ${activeSection === 'courses' ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-200'}`}
        >
          Courses
        </button>
        <button
          onClick={() => { setActiveSection('testSeries'); setCurrentPage(1); }}
          className={`w-full text-left p-2 mb-2 rounded-lg ${activeSection === 'testSeries' ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-200'}`}
        >
          Test Series
        </button>
        <button
          onClick={() => { setActiveSection('companySpecific'); setCurrentPage(1); }}
          className={`w-full text-left p-2 rounded-lg ${activeSection === 'companySpecific' ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-200'}`}
        >
          Company Specific
        </button>
      </div>

      {/* Right Content */}
      <div className="md:w-3/4 w-full">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeSection === 'courses' && 'Courses'}
            {activeSection === 'testSeries' && 'Test Series'}
            {activeSection === 'companySpecific' && 'Company Specific'}
          </h2>
          <p className="text-gray-600 mt-1">
            {activeSection === 'courses' && 'Explore our range of comprehensive courses designed to boost your skills.'}
            {activeSection === 'testSeries' && 'Practice with our well-curated test series for various subjects.'}
            {activeSection === 'companySpecific' && 'Prepare specifically for top companies with targeted content.'}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSection === 'courses' && renderCards(courses)}
          {activeSection === 'testSeries' && renderCards(testSeries)}
          {activeSection === 'companySpecific' && renderCards(companySpecific)}
        </div>

        {/* Pagination */}
        {renderPagination()}

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <a 
            href={viewAllLinks[activeSection].link}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            {viewAllLinks[activeSection].label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
