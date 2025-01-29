import React, { useState } from 'react';

const Cardcertificate = () => {
  const [activeCategory, setActiveCategory] = useState('java');

  const courses = {
    python: [
      {
        title: 'Core Python Certification',
        price: '₹1999',
        description: 'Gain fundamental and advanced Python skills with certification.',
        features: ['Live and Recorded Sessions', 'Industry Projects', 'Hands-on Learning'],
        link: '/python-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/Core%20python%20certification%20course%20thumbnail.png?updatedAt=1738164570907',
      },
      {
        title: 'Mastering Python Through Project-Based Learning',
        price: '₹2999',
        description: 'Master Python by building real-world projects.',
        features: ['Live and Recorded Sessions', 'Hands-on Projects', 'Industry-Oriented Curriculum'],
        link: '/python-project-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/Python%20with%20Projects.png?updatedAt=1738162412627',
      },
      // {
      //   title: 'Mastering Django Framework: From Basics to Advanced with Projects',
      //   price: '₹3499',
      //   description: 'Learn Django from scratch and build scalable web applications.',
      //   features: ['Live and Recorded Sessions', 'Project-Based Learning', 'Advanced Web Development'],
      //   link: '',
      //   img: 'https://ik.imagekit.io/99djpd8k3/CC/Django%20Framework%20Certification.png?updatedAt=1738162412196',
      // },
    ],
    java: [
      {
        title: 'Java Mastery Certification: From Fundamentals to Advanced Concepts',
        price: '₹2499',
        description: 'Become proficient in Java with a structured certification program.',
        features: ['Live and Recorded Sessions', 'Comprehensive Java Training', 'Industry Projects'],
        link: '/java-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/java%20mastery%20certification.png?updatedAt=1738162412621',
      },
      {
        title: 'Mastering Java Through Project-Based Learning',
        price: '₹2999',
        description: 'Learn Java by working on real-world projects.',
        features: ['Live and Recorded Sessions', 'Hands-on Learning', 'Industry Relevant Projects'],
        link: '/java-project-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/java%20with%20Projects.png?updatedAt=1738162411765',
      },
    ],
    sql: [
      {
        title: 'Mastering SQL: From Fundamentals to Advanced with Projects',
        price: '₹1999',
        description: 'Master SQL with hands-on projects and real-world applications.',
        features: ['Live and Recorded Sessions', 'Practical Database Training', 'Advanced SQL Techniques'],
        link: '/sql-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/SQL%20Advanced.png?updatedAt=1738162411690',
      },
    ],
    c: [
      {
        title: 'Mastering C Programming: From Fundamentals to Core Concepts',
        price: '₹1799',
        description: 'Learn C programming from scratch to advanced applications.',
        features: ['Live and Recorded Sessions', 'Comprehensive Curriculum', 'Hands-on Projects'],
        link: '/c-programming-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/C%20programming%20certification.png?updatedAt=1738162411931',
      },
    ],
    cpp: [
      {
        title: 'Mastering C++: Comprehensive Certification for Modern Programming',
        price: '₹1999',
        description: 'Learn modern C++ programming techniques and best practices.',
        features: ['Live and Recorded Sessions', 'Project-Based Learning', 'Industry-Oriented Curriculum'],
        link: '/cpp-certification',
        img: 'https://ik.imagekit.io/99djpd8k3/CC/C%20++%20Programming%20Certification.png?updatedAt=1738162412041',
      },
    ],
  };
  

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Explore Our Certification Programs
        </h2>

        <div className="flex justify-center space-x-6 mb-10">
          {['java', 'python', 'sql',"cpp"].map((category) => (
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
<div className="w-full rounded-lg overflow-hidden flex justify-center items-center p-4">
  <img
    src={course.img}
    alt={course.title}
    className="w-full h-[250px] object-contain"
  />
</div>









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