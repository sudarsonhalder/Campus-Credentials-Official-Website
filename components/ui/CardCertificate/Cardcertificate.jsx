import React, { useState } from 'react';

const Cardcertificate = () => {
  const [activeCategory, setActiveCategory] = useState('java');

  const courses = {
    java: [
      {
        title: 'Java Fundamentals - Crash Course',
        price: '₹1599',
        description: 'Begin your placement journey with Java fundamentals.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/java-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'Advanced Java Programming',
        price: '₹2500',
        description: 'Master advanced Java concepts for real-world applications.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/advanced-java-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'Data Structures and Algorithms in Java',
        price: '₹1599',
        description: 'Learn DSA with Java for technical interviews and projects.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/dsa-java-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
    ],
    python: [
      {
        title: 'Python Basics - Crash Course',
        price: '₹1599',
        description: 'Start your coding journey with Python fundamentals.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/python-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'Advanced Python Programming',
        price: '₹2500',
        description: 'Deep dive into Python for data science and automation.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/advanced-python-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'Data Structures and Algorithms in Python',
        price: '₹1599',
        description: 'Master DSA with Python for technical excellence.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/dsa-python-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
    ],
    sql: [
      {
        title: 'SQL Basics - Crash Course',
        price: '₹1599',
        description: 'Learn SQL fundamentals for database management.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/sql-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'Advanced SQL Techniques',
        price: '₹2500',
        description: 'Master advanced SQL for complex database queries.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/advanced-sql-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
      {
        title: 'SQL for Data Analysis',
        price: '₹1599',
        description: 'Use SQL to extract insights from data effectively.',
        features: [
          'Live and Recorded Sessions',
          '4 Months Program',
          '75+ Projects',
          'Live and Recorded Sessions',
          '4 Months Program',
        ],
        link: 'https://example.com/sql-analysis-course',
        img: 'https://imgproxy.learnyst.com/learnyst-user-assets/school-assets/schools/177741/courses/214672/LMS_Course_Thumbnails_Sanskruti_Rishi_1_870x440_lyst1733154252102.png',
      },
    ],
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Explore Our Placement-Assured Courses
        </h2>

        <div className="flex justify-center space-x-6 mb-10">
          {['java', 'python', 'sql'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-medium text-lg transition focus:outline-none ${
                activeCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses[activeCategory].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between group hover:shadow-lg"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-40 w-full object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-base">
                {course.description}
              </p>
              <ul className="space-y-3 mb-4">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-800 text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <div>
                  <del className="text-gray-400 text-lg">
                    ₹{parseInt(course.price.replace('₹', '')) + 500}
                  </del>
                  <span className="text-orange-600 text-2xl font-bold ml-2">
                    {course.price}
                  </span>
                </div>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardcertificate;