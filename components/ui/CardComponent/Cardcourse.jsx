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
      description: 'A Comprehensive Guide by Vishwajeet Sir is an extensive online course meticulously designed to help individuals master the art of logical reasoning. This course covers a wide array of logical reasoning topics, including puzzles, sequences, analogies, and critical reasoning. Ideal for those preparing for competitive exams, enhancing professional skills, or simply looking to improve their logical thinking abilities, this course offers practical insights and advanced strategies to tackle various logical reasoning challenges.',
      price: '999',
      buyLink:"https://campuscredentials.online/courses-page/logical-reasoning-simplified-a-comprehensive-guide-by-vishwajeet-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Advanced Python Programming by Prashant Jha Sir',
      description: 'This course focuses on building Advanced python programming reasoning skills, a vital asset for programmers, understanding syntax and problem solvers alike. Understanding how to break down complex tasks into manageable steps and develop efficient algorithms is essential in various fields such as software development, data analysis, and automation. Whether you’re a beginner or looking to strengthen your logical thinking, this course will guide you through the foundational concepts and practical applications.',
      price: '2000',
       buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Advance Java Programming By Ashish Gadpayle Sir',
      description: 'Welcome to the Advance Java Programming by Ashish Gadpayle Sir, is a comprehensive course designed to establish a strong foundation in Java programming. It covers fundamental concepts such as syntax, data types, and control structures, while also delving into core object-oriented programming principles like classes, inheritance, and polymorphism. The course introduces commonly used Java libraries, exception handling techniques, and basic data structures such as arrays and lists. Additionally, it addresses file handling and provides an overview of multithreading for concurrent programming. Emphasizing practical exercises alongside theoretical knowledge, the course equips students with the skills necessary to effectively utilize Java in real-world software development scenarios.',
      price: '999',
      buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/Java-Prog-870x440.png',
    },
    {
      title: 'Advance SQL Techniques By Prashant Sir',
      description: 'Welcome to the Advance SQL Techniques by Prashant Sir, your first step into the world of database management and querying! Advanced Learning SQL Techniques in learning SQL are the target audience for this course. You will gain a solid foundation for further investigation in the field of data management by learning the principles of the SQL language through a series of structured lessons and practical activities.',
      price: '999',
      buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-26-at-18.29.10_9570dc46-870x440.jpg',
    },
      {
        title: 'The Verbal Edge: A Complete Verbal Reasoning Course By Prashant Shinde',
        description: 'Verbal Reasoning Mastery | The Practical Way is an immersive online course meticulously crafted to cater to individuals aspiring to excel in the realm of verbal reasoning. This specialized course is designed to bridge the gap between basic understanding and advanced proficiency, focusing on key aspects of verbal reasoning—critical for excelling in competitive exams, enhancing communication skills, and improving cognitive abilities across various disciplines.',
        price: '599',
        buyLink:"https://campuscredentials.online/courses-page/the-verbal-edge-a-complete-verbal-reasoning-course/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-870x440.png',
      },
      {
        title: 'Permutation and Combination-Basics to Advanced | The Practical Way',
        description: 'Permutation and Combination-Basics to Advanced | The Practical Way is an in-depth online course meticulously designed to cater to individuals keen on mastering the nuanced aspects of combinatorial mathematics. This specialized course aims to bridge the gap between basic understanding and advanced mastery, focusing on permutations and combinations—key concepts that form the foundation of probability, optimization problems, and decision-making in various disciplines.',
        price: '200',
        buyLink:"https://campuscredentials.online/courses-page/permutation-and-combination-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/LMS-Course-Thumbnails-Sanskruti-Rishi-1-3-870x440.png',
      },
      {
        title: 'Python Fundamentals- Crash Course by Prashant Jha',
        description: 'Embark on a transformative journey into the world of programming with our dynamic Python Basic Crash Course guided by the esteemed Prashant Sir. Whether you’re a curious beginner or a student aiming to strengthen your coding foundation, this course is your gateway to unlocking the power of Python.',
        price: '500',
        buyLink:"https://campuscredentials.online/courses-page/python-fundamentals-crash-course-by-prashant-jha/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-07-at-12.03.18_064b2f6e-870x440.jpg',
      },
      {
        title: 'Probability-Basics to Advanced | The Practical Way',
        description: 'Embark on a journey from the fundamentals of probability to advanced applications, all presented in a practical and accessible manner. This comprehensive course is designed to cater to learners at all levels, from beginners seeking a solid understanding of basic concepts to advanced practitioners looking to deepen their knowledge and skills in probability theory.',
        price: '750',
        buyLink:"https://campuscredentials.online/courses-page/probability-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/LMS-Course-Thumbnails-Sanskruti-Rishi-Prob-870x440.png',
      },
      {
        title: 'Time, Speed & Distance-Basics to Advanced | The Practical Way',
        description: 'Time, Speed, and Distance Basics to Advanced | The Practical Way is a course designed to introduce learners to the fundamental concepts of time, speed, and distance in mathematics and physics. Through a series of engaging lessons, practical examples, and interactive exercises, participants will gain a solid understanding of these concepts and their applications in real-world scenarios.',
        price: '1000',
        buyLink:"https://campuscredentials.online/courses-page/time-speed-and-distance-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/4-870x440.png',
      },
      {
        title: 'Percentages-Basics to Advanced | The Practical Way',
        description: 'In this course, we’ll unravel the mystery of percentages using a practical approach that makes understanding easy. Whether you’re a beginner or need a refresher, we’ll break down percentages into simple, manageable concepts. Say goodbye to confusion and hello to clarity as we delve into real-world examples and hands-on exercises.',
        price: '450',
        buyLink:"https://campuscredentials.online/courses-page/percentages-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/3-870x440.png',
      },
      {
        title: 'Learn Time and Work – Basics to Advanced | The Practical Way',
        description: 'Time and work problems are a fundamental part of mathematics, particularly in fields like business, engineering, and project management. These problems involve understanding how the amount of work completed relates to the time taken to complete it. Whether it’s a single person working on a task or multiple individuals collaborating, the goal is to determine the time it will take to finish the work.',
        price: '500',
        buyLink:"https://campuscredentials.online/courses-page/learn-time-and-work-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/10/time-and-work-course-thumb-870x440.png',
      },
      {
        title: 'Average Mixture Allegation- Basics to Advanced | The Practical Way',
        description: 'Average mixture allegation is a mathematical concept used to solve problems involving mixtures of different substances or materials.The basic course of average mixture allegation involves understanding the concept of mixing two or more ingredients or substances with different qualities or strengths to achieve a desired average quality or strength in the resulting mixture. This concept is commonly used in various fields such as chemistry, finance, and statistics.',
        price: '800',
        buyLink:"https://campuscredentials.online/courses-page/learn-profit-and-loss-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/5-870x440.png',
      },
      {
        title: 'Learn Profit and Loss – Basics to Advanced | The Practical Way',
        description: 'Profit and loss are two sides of the same coin in the realm of mathematics and business. Profit is the financial gain achieved when the revenue earned from selling goods or services surpasses the total cost incurred to produce or acquire them. Students delve into the principles of financial accounting, cost analysis, revenue generation, and expense management. Emphasis is placed on understanding income statements, balance sheets, and cash flow statements to interpret the financial health of an enterprise. Through case studies and real-world examples, learners grasp the significance of profit margins, break-even analysis, and the impact of various business decisions on the bottom line. Additionally, they examine strategies for mitigating losses, maximizing profits, and fostering sustainable growth in dynamic market environments. Practical exercises equip students with critical financial management skills.',
        price: '500',
        buyLink:"https://campuscredentials.online/courses-page/learn-profit-and-loss-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/10/Profit-and-loss-Course-thumbnail-870x440.png',
      },{
  title: 'Learn Ratio and Proportion - Basics to Advanced | The Practical Way',
  description: 'Unlock the power of ratios and proportions with our comprehensive Ratio and Proportion Course! Whether you’re a student seeking to excel in math class, a teacher looking to enhance your instructional methods, or simply someone who wants to become more mathematically literate, this course is tailor-made for you.Enroll today and take the first step toward mastering ratios and proportions! Mathematics is the language of the universe, and with our course, you can become fluent in it.',
  price: '800',
  buyLink:"https://campuscredentials.online/courses-page/learn-ratio-and-proportion-basics-to-advanced-or-the-practical-way/",
  img: 'https://campuscredentials.online/wp-content/uploads/2023/10/RR-Thumb-870x440.png',
}
      
                                    
  ];

  const testSeries = [
    {
      title: 'Test Series 1',
      description: 'A brief description of Test Series 1. Test Series 1.Test Series 1.Test Series 1.Test Series 1.Test Series 1.Test Series 1.',
      price: '49',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
  ];

  const companySpecific = [
    {
      title: 'Microsoft',
      description: 'A brief description of Microsoft-specific preparation.',
      price: '129',
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
  ];

  const renderCards = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    return paginatedData.map((item, index) => (
      <div
        key={`${activeSection}-${currentPage}-${index}`}
        className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col justify-between transform hover:scale-105 transition duration-300"
      >
        <img
          src={item.img}
          alt={item.title}
          className="h-40 w-full object-cover transition-opacity duration-300 ease-in-out opacity-0"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
          }}
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        <div className="p-4 flex-grow flex flex-col">
          <h3
            className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2"
            style={{ minHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {item.title}
          </h3>

          <p
            className="text-gray-600 flex-grow mb-4 line-clamp-2"
            style={{ minHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {item.description}
          </p>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">₹ {item.price}</span>
          <button
            onClick={() => window.open(item.buyLink)}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    ));
  };

  const getPageCount = (data) => Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const totalPages = getPageCount(
      activeSection === 'courses' ? courses :
      activeSection === 'testSeries' ? testSeries :
      companySpecific
    );

    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(index + 1);
            }}
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
      <div className="md:w-1/4 w-full bg-white rounded-lg shadow-md border border-gray-200 p-4 md:h-56">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Sections</h2>
        {['courses', 'testSeries', 'companySpecific'].map((section) => (
          <button
            key={section}
            onClick={() => { setActiveSection(section); setCurrentPage(1); }}
            className={`w-full text-left p-2 mb-2 rounded-lg ${
              activeSection === section ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>

      <div className="md:w-3/4 w-full">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/([A-Z])/g, ' $1')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSection === 'courses' && renderCards(courses)}
          {activeSection === 'testSeries' && renderCards(testSeries)}
          {activeSection === 'companySpecific' && renderCards(companySpecific)}
        </div>

        {renderPagination()}

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
