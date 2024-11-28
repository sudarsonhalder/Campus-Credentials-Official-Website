import React, { useState, useEffect } from 'react';

const CardComponent = () => {
  const [activeSection, setActiveSection] = useState('courses');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState({});
  const itemsPerPage = 3;

  const viewAllLinks = {
    courses: {
      label: 'View All Courses',
      link: 'https://campuscredentials.online',
    },
    testSeries: {
      label: 'View All Test Series',
      link: 'https://exam.campuscredentials.com/exams/aptitude/523',
    },
    companySpecific: {
      label: 'View All Company Specific Courses',
      link: 'https://exam.campuscredentials.com/ecatalog/105/company-specific',
    },
  };

  const courses = [
    {
      title: 'Logical Reasoning Simplified: A Comprehensive Guide by Vishwajeet Sir',
      description: 'A Comprehensive Guide by Vishwajeet Sir is an extensive online course meticulously designed to help individuals master the art of logical reasoning. This course covers a wide array of logical reasoning topics, including puzzles, sequences, analogies, and critical reasoning. Ideal for those preparing for competitive exams, enhancing professional skills, or simply looking to improve their logical thinking abilities, this course offers practical insights and advanced strategies to tackle various logical reasoning challenges.',
      price: '1500',
      salePrice: '1000',
      buyLink:"https://campuscredentials.online/courses-page/logical-reasoning-simplified-a-comprehensive-guide-by-vishwajeet-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Advanced Python Programming by Prashant Jha Sir',
      description: 'This course focuses on building Advanced python programming reasoning skills, a vital asset for programmers, understanding syntax and problem solvers alike. Understanding how to break down complex tasks into manageable steps and develop efficient algorithms is essential in various fields such as software development, data analysis, and automation. Whether you’re a beginner or looking to strengthen your logical thinking, this course will guide you through the foundational concepts and practical applications.',
      price: '4000',
      salePrice: '2000',
       buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/LMS-Course-Thumbnails-Sanskruti-Rishi-1-870x440.png',
    },
    {
      title: 'Advance Java Programming By Ashish Gadpayle Sir',
      description: 'the Advance Java Programming course by Ashish Gadpayle Sir is a comprehensive course designed to establish a strong foundation in Java programming. It covers fundamental concepts such as syntax, data types, and control structures, while also delving into core object-oriented programming principles like classes, inheritance, and polymorphism. The course introduces commonly used Java libraries, exception handling techniques, and basic data structures such as arrays and lists. Additionally, it addresses file handling and provides an overview of multithreading for concurrent programming. Emphasizing practical exercises alongside theoretical knowledge, the course equips students with the skills necessary to effectively utilize Java in real-world software development scenarios.',
      price: '4000',
      salePrice: '2000',
      buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/Java-Prog-870x440.png',
    },
    {
      title: 'Advance SQL Techniques By Prashant Sir',
      description: 'the Advance SQL Techniques course by Prashant Sir is your first step into the world of database management and querying! Advanced Learning SQL Techniques in learning SQL are the target audience for this course. You will gain a solid foundation for further investigation in the field of data management by learning the principles of the SQL language through a series of structured lessons and practical activities.',
      price: '3000',
      salePrice: '1000',
      buyLink:"https://campuscredentials.online/courses-page/advance-sql-techniques-by-prashant-sir/",
      img: 'https://campuscredentials.online/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-26-at-18.29.10_9570dc46-870x440.jpg',
    },
      {
        title: 'The Verbal Edge: A Complete Verbal Reasoning Course By Prashant Shinde',
        description: 'Verbal Reasoning Mastery | The Practical Way is an immersive online course meticulously crafted to cater to individuals aspiring to excel in the realm of verbal reasoning. This specialized course is designed to bridge the gap between basic understanding and advanced proficiency, focusing on key aspects of verbal reasoning—critical for excelling in competitive exams, enhancing communication skills, and improving cognitive abilities across various disciplines.',
        price: '1500',
        salePrice: '599',
        buyLink:"https://campuscredentials.online/courses-page/the-verbal-edge-a-complete-verbal-reasoning-course/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/06/LMS-Course-Thumbnails-Sanskruti-Rishi-870x440.png',
      },
      {
        title: 'Permutation and Combination-Basics to Advanced | The Practical Way',
        description: 'Permutation and Combination-Basics to Advanced | The Practical Way is an in-depth online course meticulously designed to cater to individuals keen on mastering the nuanced aspects of combinatorial mathematics. This specialized course aims to bridge the gap between basic understanding and advanced mastery, focusing on permutations and combinations—key concepts that form the foundation of probability, optimization problems, and decision-making in various disciplines.',
        price: '800',
        salePrice: '500',
        buyLink:"https://campuscredentials.online/courses-page/permutation-and-combination-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/LMS-Course-Thumbnails-Sanskruti-Rishi-1-3-870x440.png',
      },
      {
        title: 'Python Fundamentals- Crash Course by Prashant Jha',
        description: 'Embark on a transformative journey into the world of programming with our dynamic Python Basic Crash Course guided by the esteemed Prashant Sir. Whether you’re a curious beginner or a student aiming to strengthen your coding foundation, this course is your gateway to unlocking the power of Python.',
        price: '1500',
        salePrice: '500',
        buyLink:"https://campuscredentials.online/courses-page/python-fundamentals-crash-course-by-prashant-jha/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-07-at-12.03.18_064b2f6e-870x440.jpg',
      },
      {
        title: 'Probability-Basics to Advanced | The Practical Way',
        description: 'Embark on a journey from the fundamentals of probability to advanced applications, all presented in a practical and accessible manner. This comprehensive course is designed to cater to learners at all levels, from beginners seeking a solid understanding of basic concepts to advanced practitioners looking to deepen their knowledge and skills in probability theory.',
        price: '1200',
        salePrice: '800',
        buyLink:"https://campuscredentials.online/courses-page/probability-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2024/01/LMS-Course-Thumbnails-Sanskruti-Rishi-Prob-870x440.png',
      },
      {
        title: 'Time, Speed & Distance-Basics to Advanced | The Practical Way',
        description: 'Time, Speed, and Distance Basics to Advanced | The Practical Way is a course designed to introduce learners to the fundamental concepts of time, speed, and distance in mathematics and physics. Through a series of engaging lessons, practical examples, and interactive exercises, participants will gain a solid understanding of these concepts and their applications in real-world scenarios.',
        price: '1500',
        salePrice: '1000',
        buyLink:"https://campuscredentials.online/courses-page/time-speed-and-distance-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/4-870x440.png',
      },
      {
        title: 'Percentages-Basics to Advanced | The Practical Way',
        description: 'In this course, we’ll unravel the mystery of percentages using a practical approach that makes understanding easy. Whether you’re a beginner or need a refresher, we’ll break down percentages into simple, manageable concepts. Say goodbye to confusion and hello to clarity as we delve into real-world examples and hands-on exercises.',
        price: '1500',
        salePrice: '500',
        buyLink:"https://campuscredentials.online/courses-page/percentages-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/3-870x440.png',
      },
      {
        title: 'Learn Time and Work – Basics to Advanced | The Practical Way',
        description: 'Time and work problems are a fundamental part of mathematics, particularly in fields like business, engineering, and project management. These problems involve understanding how the amount of work completed relates to the time taken to complete it. Whether it’s a single person working on a task or multiple individuals collaborating, the goal is to determine the time it will take to finish the work.',
        price: '2000',
        salePrice: '500',
        buyLink:"https://campuscredentials.online/courses-page/learn-time-and-work-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/10/time-and-work-course-thumb-870x440.png',
      },
      {
        title: 'Average Mixture Allegation- Basics to Advanced | The Practical Way',
        description: 'Average mixture allegation is a mathematical concept used to solve problems involving mixtures of different substances or materials.The basic course of average mixture allegation involves understanding the concept of mixing two or more ingredients or substances with different qualities or strengths to achieve a desired average quality or strength in the resulting mixture. This concept is commonly used in various fields such as chemistry, finance, and statistics.',
        price: '1500',
        salePrice: '800',
        buyLink:"https://campuscredentials.online/courses-page/learn-profit-and-loss-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/11/5-870x440.png',
      },
      {
        title: 'Learn Profit and Loss – Basics to Advanced | The Practical Way',
        description: 'Profit and loss are two sides of the same coin in the realm of mathematics and business. Profit is the financial gain achieved when the revenue earned from selling goods or services surpasses the total cost incurred to produce or acquire them. Students delve into the principles of financial accounting, cost analysis, revenue generation, and expense management. Emphasis is placed on understanding income statements, balance sheets, and cash flow statements to interpret the financial health of an enterprise. Through case studies and real-world examples, learners grasp the significance of profit margins, break-even analysis, and the impact of various business decisions on the bottom line. Additionally, they examine strategies for mitigating losses, maximizing profits, and fostering sustainable growth in dynamic market environments. Practical exercises equip students with critical financial management skills.',
        price: '1500',
        salePrice: '500',
        buyLink:"https://campuscredentials.online/courses-page/learn-profit-and-loss-basics-to-advanced-or-the-practical-way/",
        img: 'https://campuscredentials.online/wp-content/uploads/2023/10/Profit-and-loss-Course-thumbnail-870x440.png',
      },{
  title: 'Learn Ratio and Proportion - Basics to Advanced | The Practical Way',
  description: 'Unlock the power of ratios and proportions with our comprehensive Ratio and Proportion Course! Whether you’re a student seeking to excel in math className, a teacher looking to enhance your instructional methods, or simply someone who wants to become more mathematically literate, this course is tailor-made for you.Enroll today and take the first step toward mastering ratios and proportions! Mathematics is the language of the universe, and with our course, you can become fluent in it.',
  price: '1500',
  salePrice: '800',
  buyLink:"https://campuscredentials.online/courses-page/learn-ratio-and-proportion-basics-to-advanced-or-the-practical-way/",
  img: 'https://campuscredentials.online/wp-content/uploads/2023/10/RR-Thumb-870x440.png',
},
{
  title: 'Java Fundamentals - Crash Course By Ashish Gadpayle sir',
  description: 'Dive into the essentials of programming with our Java Fundamentals - Crash Course by Ashish Gadpayle Sir! Perfect for beginners starting their coding journey, students preparing for exams, or professionals looking for a quick refresher, this course covers all the basics you need to get started with Java.Enroll today and gain a strong foundation in Java programming! From understanding core concepts to writing your first lines of code, this crash course is your gateway to mastering one of the most popular programming languages in the world.',
  price: '6000',
  salePrice: '4000',
  buyLink:"https://campuscredentials.online/courses-page/java-fundamentals/",
  img: 'https://campuscredentials.online/wp-content/uploads/2024/11/19-870x440.png',
},{
    title: 'Logic Building using Python by Prashant Sir',
    description: 'Unlock the art of problem-solving with our Logic Building using Python Course by Prashant Sir! Whether you’re a beginner aiming to enhance your programming skills, a student seeking to develop computational thinking, or a professional wanting to sharpen your logical reasoning, this course is designed just for you.Enroll today and start building a solid foundation in logic and Python programming! With our course, youll master the essential skill of breaking down problems and solving them step by step—empowering you to tackle challenges in coding and beyond.',
    price: '4000',
    salePrice: '2000',
    buyLink:"https://campuscredentials.online/courses-page/logic-building-using-python-by-prashant-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/09/photo_2024-09-10_12-22-11-870x440.jpg',
  },{
    title: 'Data Structures and Algorithm in Java By Ashish Gadpayle sir',
    description: 'Master the fundamentals of Data Structures and Algorithms in Java with Ashish Gadpayle Sir! Whether you’re a student aiming to excel in technical interviews, a programmer looking to enhance your problem-solving skills, or a professional seeking to optimize your coding techniques, this course is crafted for you.Enroll today and build a robust foundation in data structures and algorithms! Learn to write efficient, scalable, and optimized code, preparing you for success in real-world programming challenges and career growth.',
    price: '6000',
    salePrice: '2000',
    buyLink:"https://campuscredentials.online/courses-page/data-structures-and-algorithm-in-java-by-ashish-gadpayle-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/11/DSA-in-Java-870x440.png',
  }
  ,{
    title: 'Coding Fundamentals by Dr.Amar Panchal',
    description: 'Embark on a coding journey with our Coding Fundamentals course. Whether youre a complete beginner or seeking to reinforce your coding basics, this course offers a solid foundation. Explore key programming concepts, learn essential languages, and gain problem-solving skills. From variables to debugging, we cover it all. Join us, collaborate on coding projects, and develop the confidence to write clean, efficient code. No prior experience needed; just bring your enthusiasm for learning and dive into the world of programming.',
    price: '1000',
    salePrice: 'Free',
    buyLink:"https://campuscredentials.online/courses-page/coding-fundamentals-by-dr-amar-panchal/",
    img: 'https://campuscredentials.online/wp-content/uploads/2023/10/coding-fundamentals-course-thumb-870x440.png',
  },{
    title: 'Data Structures and Algorithm in Python By Prashant Sir',
    description: 'Elevate your programming skills with our Data Structures and Algorithms in Python course by Prashant Sir! Whether youre a beginner eager to learn the building blocks of coding, a student preparing for technical interviews, or a professional aiming to optimize your problem-solving techniques, this course is tailored for you.Enroll today and unlock the power of Python to master data structures and algorithms! Learn to write efficient and scalable code while building a strong foundation for tackling real-world challenges and advancing your coding career.',
    price: '6000',
    salePrice: '4000',
    buyLink:"https://campuscredentials.online/courses-page/data-structures-and-algorithm-in-python-by-prashant-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/11/DSA-In-python-Thumbnail-870x440.png',
  },{
    title: 'Operating Systems By Amar Panchal Sir',
    description: 'Gain in-depth knowledge of the core principles behind computing with our Operating Systems course by Amar Panchal Sir! Whether youre a computer science student aiming to excel in academics, an aspiring developer preparing for interviews, or a professional looking to solidify your technical expertise, this course is designed for you.Enroll today and explore the fascinating world of operating systems! From process management to memory allocation, master the concepts that form the backbone of modern computing and propel your career in technology forward.',
    price: '1000',
    salePrice: 'Free',
    buyLink:"https://campuscredentials.online/courses-page/operating-systems-by-amar-panchal-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/07/Operating-System-Course-By-Amar-Sir-1-870x440.png',
  },{
    title: 'Numbers: Exploring Power Cycles and Beyond by Vishwajeet Sir',
    description: 'Gain in-depth knowledge of the fascinating world of Numbers: Exploring Power Cycles and Beyond with Vishwajeet Sir! Whether youre a student eager to understand the mathematical patterns behind numbers, an aspiring coder looking to enhance your problem-solving skills, or a professional wanting to deepen your understanding of number theory, this course is designed for you.Enroll today and dive into the world of numbers! From power cycles to advanced number patterns, master the essential concepts that will elevate your mathematical and programming skills, giving you the tools to tackle complex challenges and advance in your career.',
    price: '4000',
    salePrice: '2000',
    buyLink:"https://campuscredentials.online/courses-page/numbers-exploring-power-cycles-and-beyond-by-vishwajeet-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/11/Numbers-LMS-Thumbnail-870x440.png',
  },{
    title: 'Mastering Mensuration: Geometry and Measurement Simplified by Vishwajeet Sir',
    description: 'Gain a thorough understanding of geometry and measurement with Mastering Mensuration: Geometry and Measurement Simplified by Vishwajeet Sir! Whether youre a student preparing for exams, a teacher seeking to enhance your instructional methods, or someone looking to strengthen your foundation in geometry, this course is tailored to meet your needs.Enroll today and unlock the secrets of mensuration! From basic shapes to complex figures, master the principles of geometry and measurement that will empower you to solve real-world problems with ease and precision, boosting both your academic and professional journey.',
    price: '4000',
    salePrice: '2000',
    buyLink:"https://campuscredentials.online/courses-page/mastering-mensuration-geometry-and-measurement-simplified-by-vishwajeet-sir/",
    img: 'https://campuscredentials.online/wp-content/uploads/2024/11/Mensuration-Lms-Thumbnail-870x440.png',
  }                     
  ];

  const testSeries = [
    {
      title: 'Complete Aptitude Preparation Series',
      description: 'Master quantitative, logical, and verbal aptitude with comprehensive practice tests.',
      price: '49',
      salePrice: '1500',
      buyLink: "https://exam.campuscredentials.com/ecatalog/274/aptitude",
      img: 'https://ik.imagekit.io/99djpd8k3/CC/1.png?updatedAt=1729745672845',
    },
    {
      title: 'Complete General Knowledge Preparation Series',
      description: 'Stay ahead with well-rounded practice on current affairs and general knowledge topics.',
      price: '49',
      salePrice: '1500',
      buyLink: "https://exam.campuscredentials.com/ecatalog/260/general-knowledge",
      img: 'https://ik.imagekit.io/99djpd8k3/CC/2.png?updatedAt=1729746079539',
    },
    {
      title: 'Complete English Preparation Series',
      description: 'Improve grammar, vocabulary, and comprehension skills with targeted practice.',
      price: '49',
      salePrice: '1500',
      buyLink: "https://exam.campuscredentials.com/ecatalog/263/english",
      img: 'https://ik.imagekit.io/99djpd8k3/CC/3.png?updatedAt=1729746354771',
    },
    {
      title: 'Complete Psychometric Preparation Series',
      description: 'Prepare for psychometric tests with tools to assess cognitive and behavioral strengths.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/4.png?updatedAt=1729746441481',
      buyLink: "https://exam.campuscredentials.com/ecatalog/272/psychometric"
    },
    {
      title: 'Complete IQ Test Preparation Series',
      description: 'Sharpen your reasoning and problem-solving abilities with comprehensive IQ tests.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/5.png?updatedAt=1729746527323',
      buyLink: ""
    },
    {
      title: 'Complete Spoken English Preparation Series',
      description: 'Enhance fluency and confidence in spoken English with engaging practice modules.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/6.png?updatedAt=1729746653557',
      buyLink: "https://exam.campuscredentials.com/ecatalog/1625/spoken-english"
    },
    {
      title: 'Complete Company-Specific Series',
      description: 'Prepare for company-specific assessments with tailored practice tests.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/7.png?updatedAt=1729746775208',
      buyLink: "https://exam.campuscredentials.com/ecatalog/105/company-specific"
    },
    {
      title: 'Complete Technology-Specific Series',
      description: 'Master technical skills with tests aligned to specific technologies and domains.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/8.png?updatedAt=1729746870692',
      buyLink: "https://exam.campuscredentials.com/ecatalog/329/technology-specific"
    },
    {
      title: 'Complete AWS Preparation Series',
      description: 'Get AWS-certified with practice tests covering all key cloud concepts.',
      price: '49',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/9.png?updatedAt=1729746941941',
      buyLink: "https://exam.campuscredentials.com/ecatalog/1358/amazon-web-services-aws"
    }
  ];
  

  const companySpecific = [
    {
      title: 'Ace your Cognizant Interview with Campus Credentials',
      description: 'Comprehensive preparation tailored for Cognizant interviews, covering aptitude, reasoning, and technical topics.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/16.png?updatedAt=1729793736261',
      buyLink: 'https://exam.campuscredentials.com/tests/777/cognizant',
    },
    {
      title: 'Ace your Capgemini Interview with Campus Credentials',
      description: 'Focused guidance for Capgemini interviews with mock tests, aptitude, and technical round practice.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/11.png?updatedAt=1729793736306',
      buyLink: 'https://exam.campuscredentials.com/tests/116/capgemini',
    },
    {
      title: 'Ace your Larsen & Toubro Interview with Campus Credentials',
      description: 'L&T-specific preparation covering aptitude tests and technical interview strategies.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/Complete%20Aptitude%20Preparation%20Series%20(17).png?updatedAt=17298670830346',
      buyLink: 'https://exam.campuscredentials.com/tests/114/larsen-toubro',
    },
    {
      title: 'Ace your Wipro Interview with Campus Credentials',
      description: 'In-depth practice materials and mock interviews for Wipro’s selection process.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/Complete%20Aptitude%20Preparation%20Series%20(16).png?updatedAt=1729867082810',
      buyLink: 'https://exam.campuscredentials.com/tests/110/wipro',
    },
    {
      title: 'Ace your HCL Interview with Campus Credentials',
      description: 'Specialized preparation materials focusing on HCL’s aptitude and technical requirements.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/Complete%20Aptitude%20Preparation%20Series%20(11).png?updatedAt=1729793736191',
      buyLink: 'https://exam.campuscredentials.com/tests/107/hcl',
    },
    {
      title: 'Ace your Google Interview with Campus Credentials',
      description: 'Premium guidance on cracking Google’s interviews with coding challenges and aptitude tests.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/13.png?updatedAt=1729793735847',
      buyLink: 'https://exam.campuscredentials.com/tests/956/google',
    },
    {
      title: 'Ace your Accenture Interview with Campus Credentials',
      description: 'Comprehensive preparation for Accenture’s hiring process, including aptitude and case studies.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/15.png?updatedAt=1729793735855',
      buyLink: 'https://exam.campuscredentials.com/tests/113/accenture',
    },
    {
      title: 'Ace your TCS Interview with Campus Credentials',
      description: 'End-to-end preparation for TCS interviews, including Ninja and Digital hiring rounds.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/12.png?updatedAt=1729793735843',
      buyLink: 'https://exam.campuscredentials.com/tests/2180/tcs-ninja',
    },
    {
      title: 'Ace your Jio Interview with Campus Credentials',
      description: 'Preparation series for Reliance Jio’s recruitment, including aptitude and technical questions.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/14.png?updatedAt=1729793735817',
      buyLink: 'https://exam.campuscredentials.com/tests/954/reliance-jio',
    },
    {
      title: 'Ace your Hexaware Interview with Campus Credentials',
      description: 'Tailored preparation series for Hexaware’s interview process with mock tests and aptitude training.',
      price: '1800',
      salePrice: '1500',
      img: 'https://ik.imagekit.io/99djpd8k3/CC/Hexaware.png?updatedAt=1729794113249',
      buyLink: 'https://exam.campuscredentials.com/tests/1246/hexaware',
    },
  ];

  

  const preloadImage = (src, index) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoadedImages((prevState) => ({ ...prevState, [index]: true }));
    };
    img.onerror = () => console.warn(`Image at ${src} failed to load.`);
  };

  useEffect(() => {
    const data =
      activeSection === 'courses'
        ? courses
        : activeSection === 'testSeries'
        ? testSeries
        : companySpecific;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    paginatedData.forEach((item, index) => {
      const key = `${activeSection}-${startIndex + index}`;
      if (!loadedImages[key]) {
        preloadImage(item.img, key);
      }
    });
  }, [activeSection, currentPage]);

  const renderCards = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    return paginatedData.map((item, index) => {
      const cardKey = `${activeSection}-${startIndex + index}`;

      return (
        <div
          key={cardKey}
          className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col justify-between transform hover:scale-105 transition duration-300"
        >
          <img
            src={item.img}
            alt={item.title}
            className={`h-30 w-full object-cover transition-opacity duration-300 ease-in-out ${
              loadedImages[cardKey] ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />

          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h3>

            <p className="text-gray-600 flex-grow mb-4 line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <del className="text-gray-500 text-lg">₹{item.price}</del>
              <span className="text-xl font-bold text-gray-900">₹{item.salePrice}</span>
            </div>

            <button
              onClick={() => window.open(item.buyLink)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      );
    });
  };

  const getPageCount = (data) => Math.ceil(data.length / itemsPerPage);

  const renderPagination = () => {
    const totalPages = getPageCount(
      activeSection === 'courses'
        ? courses
        : activeSection === 'testSeries'
        ? testSeries
        : companySpecific
    );

    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full ${
              currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div id="Courses" className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="md:w-1/4 w-full bg-white rounded-lg shadow-md border border-gray-200 p-4 md:h-56">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Sections</h2>
        {['courses', 'testSeries', 'companySpecific'].map((section) => (
          <button
            key={section}
            onClick={() => {
              setActiveSection(section);
              setCurrentPage(1);
            }}
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

        <div className="flex justify-center mt-6">
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
