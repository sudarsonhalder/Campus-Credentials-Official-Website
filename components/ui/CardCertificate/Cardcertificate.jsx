import React, { useState } from 'react';

const Cardcertificate = () => {
  // Default to "all" so that all cards are visible initially.
  const [activeCategory, setActiveCategory] = useState('all');

  const courses = {
    python: [
      {
        title: 'Core Python Certification',
        price: '₹6000',
        delprice: '₹8000',
        description: 'Gain fundamental and advanced Python skills with certification.',
        features: ['Live and Recorded Sessions', 'Industry Projects', 'Hands-on Learning'],
        link: '/python-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/Core%20python%20certification%20course%20thumbnail.png?updatedAt=1738164570907',
      },
      {
        title: 'Mastering Python Through Project-Based Learning',
        price: '₹8000',
        delprice: '₹12000',
        description: 'Master Python by building real-world projects.',
        features: ['Live and Recorded Sessions', 'Hands-on Projects', 'Industry-Oriented Curriculum'],
        link: '/python-project-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/Python%20with%20Projects.png?updatedAt=1738162412627',
      },
    ],
    java: [
      {
        title: 'Java Mastery Certification: From Fundamentals to Advanced Concepts',
        price: '₹12000',
        delprice: '₹15000',
        description: 'Become proficient in Java with a structured certification program.',
        features: ['Live and Recorded Sessions', 'Comprehensive Java Training', 'Industry Projects'],
        link: '/java-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/java%20mastery%20certification.png?updatedAt=1738162412621',
      },
      {
        title: 'Mastering Java Through Project-Based Learning',
        price: '₹8000',
        delprice: '₹12000',
        description: 'Learn Java by working on real-world projects.',
        features: ['Live and Recorded Sessions', 'Hands-on Learning', 'Industry Relevant Projects'],
        link: '/java-project-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/java%20with%20Projects.png?updatedAt=1738162411765',
      },
    ],
    sql: [
      {
        title: 'Mastering SQL: From Fundamentals to Advanced with Projects',
        price: '₹8000',
        delprice: '₹10000',
        description: 'Master SQL with hands-on projects and real-world applications.',
        features: ['Live and Recorded Sessions', 'Practical Database Training', 'Advanced SQL Techniques'],
        link: '/sql-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/SQL%20Advanced.png?updatedAt=1738162411690',
      },
    ],
    c: [
      {
        title: 'Mastering C Programming: From Fundamentals to Core Concepts',
        price: '₹8000',
        delprice: '₹10000',
        description: 'Learn C programming from scratch to advanced applications.',
        features: ['Live and Recorded Sessions', 'Comprehensive Curriculum', 'Hands-on Projects'],
        link: '/c-programming-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/C%20programming%20certification.png?updatedAt=1738162411931',
      },
    ],
    cpp: [
      {
        title: 'Mastering C++: Comprehensive Certification for Modern Programming',
        price: '₹8000',
        delprice: '₹10000',
        description: 'Learn modern C++ programming techniques and best practices.',
        features: ['Live and Recorded Sessions', 'Project-Based Learning', 'Industry-Oriented Curriculum'],
        link: '/cpp-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/C%20++%20Programming%20Certification.png?updatedAt=1738162412041',
      },
    ],
  };

  // Define the tab options.
  const tabs = ['all', 'java', 'python', 'sql', 'c', 'cpp'];

  // Determine which courses to display based on the active category.
  const displayedCourses =
    activeCategory === 'all'
      ? Object.values(courses).flat()
      : courses[activeCategory] || [];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for Heading and Tabs */}
        <div className="bg-white rounded-lg shadow p-4 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-4xl font-bold text-orange-600 mb-4 md:mb-0">
              Get Certified with Campus Credentials
            </h2>
            <div className="flex space-x-2">
              {tabs.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-1 px-2 sm:py-2 sm:px-3 rounded-md font-medium text-sm transition transform duration-200 focus:outline-none ${
                    activeCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-[#f9fafb] text-gray-800 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {displayedCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col h-full transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Banner */}
              <div className="w-full">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-55 object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-base mt-1">
                  {course.description}
                </p>
                <ul className="space-y-1 mt-2 mb-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-800 text-base font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-between items-center">
                  <div>
                    <del className="text-gray-400 text-lg">{course.delprice}</del>
                    <span className="text-orange-600 text-2xl font-bold ml-2">
                      {course.price}
                    </span>
                  </div>
                  <a
                    href={course.link}
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardcertificate;
