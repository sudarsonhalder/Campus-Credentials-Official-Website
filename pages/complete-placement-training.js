import React, { useEffect, useState } from 'react';
import CurriculumAccordion from '@/components/Curriculum/CurriculumAccordion';
import FAQAccordion from '@/components/ui/FAQs/FAQAccordion';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');
  useEffect(() => {
    const loadRazorpayForm = () => {
      // Check if the form already exists to prevent duplicate buttons
      if (!document.getElementById("razorpay-form")) {
        const form = document.createElement("form");
        form.id = "razorpay-form"; // Set an ID to check for duplicates
        const script = document.createElement("script");

        // Set the Razorpay script attributes
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute("data-payment_button_id", "pl_PJepqbiaLr5FZh");
        script.async = true;

        // Append the script to the form
        form.appendChild(script);

        // Append the form to the container div
        const container = document.getElementById("razorpay-form-container");
        if (container) {
          container.appendChild(form);
        }
      }
    };

    loadRazorpayForm(); // Call the function to load Razorpay form

    // Cleanup to remove form if component unmounts
    return () => {
      const form = document.getElementById("razorpay-form");
      if (form) {
        form.remove();
      }
    };
  }, []);
  const pageName = "Complete Placement Preparation"; // Page name to be sent

  // Set the browser tab title
  useEffect(() => {
    document.title = pageName;
  }, []);

  const handleDownloadBrochure = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleSubmitPhoneNumber = async () => {
    if (phoneNumber.match(/^\d{10}$/)) {
      try {
        // Log the data being sent for debugging
        console.log('Sending data:', { PhoneNumber: phoneNumber, PageName: pageName });

        const response = await fetch('https://sheetdb.io/api/v1/ryw1r9l7qmpu9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            {
              PhoneNumber: phoneNumber,
              PageName: pageName, // Send the page name
            },
          ]),
        });

        if (response.ok) {
          setStatus('Brochure downloaded successfully!');
          setIsModalOpen(false); // Close the modal

          // Open the brochure link in a new tab
          window.open(
            'https://drive.google.com/file/d/1bbBDQrHE_BCxMo3WYG6pUtvH3lUZklcC/view',
            '_blank'
          );

          // Reset the phone number field
          setPhoneNumber('');
        } else {
          setStatus('Error submitting phone number. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting phone number:', error);
        setStatus('Error submitting phone number. Please try again.');
      }
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };
  const SIX_HOURS_IN_SECONDS = 6 * 60 * 60;

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SIX_HOURS_IN_SECONDS);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const getRemainingTime = () => {
        const startTime = localStorage.getItem('startTime');
        const currentTime = Math.floor(Date.now() / 1000);

        if (!startTime) {
          localStorage.setItem('startTime', currentTime);
          return SIX_HOURS_IN_SECONDS;
        }

        const elapsedTime = currentTime - parseInt(startTime, 10);

        if (elapsedTime >= SIX_HOURS_IN_SECONDS) {
          localStorage.setItem('startTime', currentTime);
          return SIX_HOURS_IN_SECONDS;
        }

        return SIX_HOURS_IN_SECONDS - elapsedTime;
      };

      setTimeLeft(getRemainingTime());

      const interval = setInterval(() => {
        setTimeLeft(getRemainingTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const courseContent = [
    {
      title: 'Logical Reasoning (Total: 6 hrs 45 mins)',
      content: [
        'Code Decoding ',
        'Quiz 1 - 2 (5 questions each)',
        'Blood Relations (12)',
        'Blood Relations Quiz (5 questions each each)',
        'Syllogism (8)',
        'Syllogism Negative Concept (14 )',
        'Seating Arrangement (4)',
        'Seating Arrangement Quiz (5 questions each)',
        'Calendar Introduction and Type 2 Concepts',
        'Calendar (17)',
        'Calendar Quiz (5 questions each)',
        'Data Interpretation (20)',
        'Data Interpretation Quiz (5 questions each)',
      ],
    },
    {
        title: 'The Verbal Edge (Total: 6 hrs)',
        content: [
            'Types of Tenses 1 - 3',
            'Change the Voice 1 - 2',
            'Quiz (5 questions each)',
            'Para Jumbles',
            'Reading Comprehension',
            'Reading comprehension Questions',
            'Personal Interview Technique',
            'Articles 1 - 2',
            'Closet Test 1 - 3',
            'Interview Questions',
        ]
    },
    {
      title: 'Time and Work (Total: 100 min)',
      content: [
        'Introduction to Time and Work',
        'Time and Work Concept',
        'Time and Work Quiz 1 - 2 (5 questions each)',
        'Solved Question 1 - 50',
        'Additional Concepts in Time and Work',
      ],
    },
    {
      title: 'Combination and Permutation (Total: 4 hrs 18 mins)',
      content: [
        'Introduction to Combinations and Permutations',
        'Concept of Combination',
        'Concept of Permutation',
        'Calculation Shortcuts',
        'Word Based Questions (12)',
        'Quiz on Word Based Problems (5 questions each)',
        'Number Based Questions (17 )',
        'Advanced Concepts',
        'Quiz on Advanced Concepts (5 questions each)',
      ],
    },
    {
      title: 'Probability (Total: 2 hrs 30 mins)',
      content: [
        'Introduction to Probability',
        'Concept of Tossing Coin',
        'Coin Solved Questions (1 & 2)',
        'Probability Quiz 1 - 3 (5 questions each)',
        'Dice Introduction & Solved Questions (1 - 5)',
        'Playing Cards Introduction',
        'Advanced Probability Concepts (Solved Questions 1-6)',
        'Coloured Balls Introduction & Solved Questions (1-2)',
      ],
    },
    {
      title: 'Time, Speed and Distance (Total: 2 hrs 40 mins)',
      content: [
        'Introduction',
        'Basic Introduction',
        'Time, Speed Distance Quiz 1 - 4 (5 questions each)',
        'Solved Questions (1 - 15)',
        'Learning Distance Formula',
        'Learning Speed Formula',
      ],
    },
    {
      title: 'Percentages (Total: 1 hr 20 mins)',
      content: [
        'Introduction to Percentages',
        'Learning Quick Trick',
        'Percentages Quiz 1 - 4 (5 questions each)',
        'Solved Questions (1 - 14)',
      ],
    },
    {
      title: 'Averages and Mixtures (Total: 1 hr 20 mins)',
      content: [
        'Introduction to Average Mixture Allegation',
        'Quiz 1 - 4 (5 questions each)',
        'Solved Question 1 - 19',
        'Calculating Average Tricks',
      ],
    },
    {
      title: 'Profit and Loss (Total: 1 hr 30 mins)',
      content: [
        'Introduction to Profit & Loss',
        'Profit & Loss Quiz 1 - 4 (5 questions each)',
        'Solved Questions (1 - 21)',
    
      ],
    },
    {
      title: 'Ratio & Proportion (Total: 1 hr 20 mins)',
      content: [
        'Welcome to the course!',
        'Introduction to Ratio & Proportion',
        'Ratio & Proportion Quiz 1 - 4 (5 questions each)',
        'Solved Question 1-19',
      ],
    },
  ];
  const curriculum = [
    {
      title: 'Introduction to Python (Total: 30 mins)',
      content: [
        'Introduction to Python',
        'Python Installation',
        'Features of Python',
        'Flavors of Python',
      ],
    },
    {
      title: 'Module 1: Python Basics (Total: 1 hr)',
      content: [
        'Data Types in Python',
        'Identifiers in Python',
        'Typecasting',
        'String Slicing',
        'Why Datatypes are immutable?',
        'Operators in Python',
      ],
    },
    {
      title: 'Module 2: Control & Looping (Total: 1 hr)',
      content: [
        'Control & Looping Statement-1',
        'Control & Looping Statement-2',
        'Control & Looping Statement-3',
        'Control & Looping Statement-4',
        'Control & Looping Statement-5',
      ],
    },
    {
      title: 'Module 3: Conditional Statements (Total: 30 mins)',
      content: [
        'Conditional Statement',
        'Conditional Statement (If else)',
        'Conditional Statement (Nested if else)',
        'Conditional Statement (Else if ladder)',
        'Transfer Statement(Break Statement)',
        'Transfer Statement(Continue and Pass Statement)',
      ],
    },
    {
      title: 'Module 4: Functions in Python (Total: 1 hr)',
      content: [
        'Functions in Python -1',
        'Functions in Python -2',
        'Default Argument',
        'Positional Argument',
        'Keyword Argument',
        'Variable length Argument',
        'Recursion Function and Nested Function',
        'Function Practice Question',
      ],
    },
    {
      title: 'Module 5: Modules & Packages (Total: 1 hr)',
      content: [
        'Introduction to Module',
        'Module Implementation',
        'Predefined Modules',
        'Different Ways to import a module',
        'Introduction of Package in Python',
        'Package Implementation -1',
        'Package Implementation -2',
      ],
    },
    {
      title: 'Module 6: Exception & File Handling (Total: 1 hr)',
      content: [
        'Introduction to Exception Handling',
        'Try and Except Block',
        'File Handling Introduction',
        'File handling Write Operation',
        'File handling read, tell, seek operation',
        'With Statement Program',
        'Reading and Writing Binary Data',
        'Basic Operation with CSV file',
      ],
    },
    {
      title: 'Module 7: Object-Oriented Programming (OOPs) (Total: 1 hr)',
      content: [
        'Introduction of OOPS',
        'Basics of className and Objects',
        'Default Constructor',
        'Parameterised Constructor',
        'Concept of Instance Variable',
        'Basic Concept of Static Variable',
        'How to Access Delete Static Variable Value',
      ],
    },
    {
      title: 'Module 8: Inheritance & Polymorphism (Total: 1 hr 30 mins)',
      content: [
        'Introduction of Inheritance in Python',
        'Single Level Inheritance in Python',
        'Multilevel Inheritance in Python',
        'Method Overloading in Python',
        'Operator Overloading in Python',
        'Method Overriding in Python',
        'Super() Method use cases in Python',
      ],
    },
    {
      title: 'Module 9: Regular Expressions (Total: 1 hr 30 mins)',
      content: [
        'Introduction to Regular Expressions (RegEx)',
        'The match() Function in Regular Expressions',
        'The compile() and finditer() Functions',
        'Write a program to check the validity of a mobile number using Regular Expressions',
        'Write a program to match a string from a text file using Regular Expressions',
        'Write a program to check if the given email ID is valid using Regular Expressions',
        'Quantifiers in Regular Expressions',
        'findall() function in Regular Expressions',
      ],
    },
    {
        title: 'Python Problem Sets (Total: 4 hrs 30 mins)',
        content: [
          'Program to reverse the string',
          'Program to shift the zero_s at the end of list',
          'Remove the duplicates from string',
          'Remove duplicates from unsorted list using user defined logic',
          'Find the second largest element',
          'Remove duplicates from list using set type',
          'Find the maximum and minimum value using list slicing',
          'Find the Maximum and Minimum using looping',
          'Count and Display Maximum Consecutive One',
          'Find common element from two lists and print one time',
          'Find the sum of all values in dictionary',
          'Accept the paper marks and calculate total, percentage and apply condition',
          'Program to print common key and value pair',
          'Program to count frequency of element in list using dictionary',
          'Program to count number of vowels and consonants from given input string',
          'Program to count the number of non-empty values in dictionary',
          'Program to print highest salary from dictionary',
          'Program to print that given input key is present or not in dictionary',
          'Program to remove duplicates from string',
          'Program to reverse the dictionary',
          'Program to use string predefined function',
          'Program for the different use of .format()',
          'Program to compress string',
          'Program for find() and join() function',
          'Program to count even & odd',
          'Program to count number of words in sentence',
          'Program to find the repeated digits from data',
          'Program to Find the total distance between adjacent items of a list',
          'Program to place all the even numbers before odd numbers',
          'Program to find the square of areas',
          'Program to Find the largest triangle value',
          'Find the even and odd numbers from a given series and calculate the product of the even and odd numbers.',
          'Accept space-separated values and print the patterns',
          'Find the reversed number logic without using a loop',
          'Find a character representing the one that was lost in the network',
          'Program to print space-separated integers representing the distance for employees',
          'Find the maximum value row-wise from a matrix',
          'Write a program to accept values for a 3x4 matrix',
          'Input and output operations with a two-dimensional list',
        ],
    },
];
const sqlCurriculum = [
  {
      title: 'SQL Fundamentals (Total: 35 mins)',
      content: [
          'Introduction of SQL',
          'SQL Datatypes',
          'What is Data?',
          'Database in SQL',
          'SQL File System',
          'What is Database Management System?',
          'SQL RDBMS',
      ],
  },
  {
      title: 'Basics of SQL (Total: 30 mins)',
      content: [
          'What is SQL?',
          'SQL Commands in Database',
          'SQL Terminologies',
          'MySQL Installation',
      ],
  },
  {
      title: 'Database Operations (Total: 60 mins)',
      content: [
          'Create Table in Database',
          'How to Drop Table from Database',
          'Add a New Column using Alter Command',
          'Modify and Drop using the Alter commands',
          'MySQL Commands - Truncate',
      ],
  },
  {
      title: 'Data Manipulation Language (DML) (Total: 1 hr)',
      content: [
          'DML Introduction',
          'MySQL Commands - Insert',
          'MySQL Command - Update',
          'MySQL Command - Update Query Practice',
          'MySQL - Delete Command',
      ],
  },
  {
      title: 'Data Query Language (DQL) (Total: 20 mins)',
      content: [
          'Data Query Language (DQL): Select command in MySQL',
      ],
  },
  {
      title: 'Transaction Control Language (TCL) (Total: 20 mins)',
      content: [
          'Transaction Control Language (TCL): COMMIT, SAVEPOINT, ROLLBACK Command',
      ],
  },
  {
      title: 'SQL Operators (Total: 30 mins)',
      content: [
          'SQL Operators: Arithmetic and Comparison Operators',
          'SQL Operators: Logical Operators',
      ],
  },
  {
      title: 'SQL Aggregate Functions (Total: 30 mins)',
      content: [
          'SQL Aggregate Functions: COUNT() function',
          'SQL Aggregate Function: SUM() function',
          'SQL Aggregate Function: AVG() function',
          'SQL Aggregate Function: MIN() and MAX()',
      ],
  },
  {
      title: 'MySQL Functions (Total: 30 mins)',
      content: [
          'Mathematical Functions in MySQL',
          'String functions in MySQL',
      ],
  },
  {
      title: 'Sorting and Grouping Data (Total: 20 mins)',
      content: [
          'ORDER BY clause used in ascending order in SQL',
          'ORDER BY clause used in descending order in SQL',
          'ORDER BY clause using several columns in SQL',
          'GROUP BY Clause used in SQL',
      ],
  },
  {
      title: 'Filtering Data (Total: 15 mins)',
      content: [
          'HAVING Clause in SQL',
      ],
  },
  {
      title: 'SQL Predicates and Constraints (Total: 1 hr)',
      content: [
          'SQL Predicates',
          'Introduction to Integrity Constraints in SQL',
          'Application of the NOT NULL Constraint in SQL',
          'The DEFAULT Constraint in SQL',
          'Introduction to PRIMARY KEY vs FOREIGN KEY in SQL',
          'Practical Use of the PRIMARY KEY',
          'Practical Use of the FOREIGN KEY',
          'The UNIQUE Constraint',
          'The CHECK Constraint',
          'The INDEX Constraint',
      ],
  },
  {
      title: 'MySQL Command Practice (Total: 1 hr)',
      content: [
          'Practice the command in MySQL - Part 1',
          'Practice the command in MySQL - Part 2',
          'Practice the command in MySQL - Part 3',
          'Practice the command in MySQL - Part 4',
      ],
  },
  {
      title: 'Working with JOINS (Total: 30 mins)',
      content: [
          'Introduction to MySQL JOINS',
          'INNER JOIN in MySQL',
          'LEFT JOIN in MySQL',
          'RIGHT JOIN in MySQL',
      ],
  },
];
const javaCurriculum = [
    {
        title: 'Introduction to Java (Total:  2 hours 16 mins)',
        content: [
            'Introduction to Java',
            'Java Editions',
            'Features of Java',
            'Features of Object Oriented Programming',
            'Java Identifiers',
            'Java Naming Conventions',
            'Java Datatypes and Operators',
            'Java Installation',
            'JDK - JRE - JVM',
            'Code in Java',
            'Logic Building Questions',
            'Beginner Practices on Java',
            'Java Typecasting',
            'Basic Practice on Java Data Types',
            'Java Scanner className',
        ],
    },    
    {
        title: 'Control Statements (Total: 1 hr 30 mins)',
        content: [
            'Control Statement',
            'If -Else Statement',
            'Nested -If Else Statement',
            'If Ladder Statement',
            'Switch Case Statement',
            'Transfer Statement',
        ],
    },
    {
        title: 'Loop Statement (Total: 2 hr)',
        content: [
            'Looping Statement',
            'While Loop',
            'Do While Loop',
            'For Loop Statement',
            'For Each Loop Statement',
            'Nested For Loop Statement',
        ],
    },
    {
        title: 'Arrays in Java (Total: 1 hr',
        content: [
            'Introduction',
            'One Dimensional Array',
            'Two Dimensional Array',
            'Practice Questions',
        ],
    },
    {
        title: 'Object Oriented Programming (Total: 1 hr)',
        content: [
            'Introduction to className and Objects',
            'Practice Questions',
            'Introduction to Constructors',
            'Constructor Overloading',
        ],
    },
    {
        title: 'Keywords (Total: 30 mins)',
        content: [
            'Static Keyword',
            'Practice Question',
            'This Keyword',
        ],
    },
    {
        title: 'Modifiers and Arguments (Total: 30 mins)',
        content: [
            'Access Modifiers in Java',
            'Variable Argument Method',
        ],
    },
        {
            title: 'Strings (Total: 1 hr 20 mins)',
            content: [
                'String functions',
                'String manipulations',
                'String className',
                'Strings and Operators',
                'Immutability and mutability in string',
            ],
        },
        {
            title: 'Exceptions (Total: 1 hr 20 mins)',
            content: [
                'Wrapper classes in java',
                'Exception handling',
                'Types of exceptions',
                'Exception vs Error',
                'Exception handling keywords',
                'finally block and multiple catch block',
                'Throw keyword',
                'User define exception',
            ],
        },
        {
            title: 'Inheritance (Total: 1 hr 30 mins)',
            content: [
                'Inheritance in java',
                'Types of inheritance',
                'Single inheritance',
                'Multilevel inheritance and hierarchical inheritance',
                'Multiple inheritance',
                'Implementation of inheritance',
            ],
        },
        {
            title: 'Polymorphism (Total: 2 hr)',
            content: [
                'Polymorphism in java',
                'Constructor calling hierarchy',
                'Super keyword in java',
                'Final keywords in java',
            ],
        },
        {
            title: 'Syntax of Java Programming (Total: 1 hr 30 mins)',
            content: [
                'Public static void main',
                'Command line arguments',
            ],
        },
        {
            title: 'Interface in Java (Total: 1 hr 30 mins)',
            content: [
                'Interface in java',
                'Interface implementations',
                'Declaring interface inside another interface',
                'Overloading interface methods',
                'Achieving multiple inheritance',
                'Marker interface',
                'Java 8 interface enhancement',
            ],
        },
        {
            title: 'Abstraction in Java (Total: 1 hr 30 mins)',
            content: [
                'Abstraction in java',
                'Abstract className in java',
                'Non implementation of abstract className',
                'Difference between abstract className and interface',
                'Encapsulation in java',
                'Implementation of abstract className',
            ],
        },
        {
            title: 'Packages in Java (Total: 1 hr)',
            content: [
                'Package practice in Java',
                'Packages in java',
                'Types of import in java',
                'Garbage collector in java',
                'Deserialization in java',
                'Serialization in java',
            ],
        },
        {
            title: 'Multi-Threading in Java (Total: 1 hr 30 mins)',
            content: [
                'Introduction to Multithreading',
                'Multitasking in Java',
                'Application areas of Multitasking in Java',
                'Creating a custom thread in Java',
                'Thread schedular in Java',
                'Thread life cycle in Java',
                'Setting and Getting Name of Threads in Java',
                'Thread Priorities in Java',
                'Thread prevention and yield method in Java',
            ],
        },
    ];
  const features = [
    { title: 'Lifetime Access', description: 'Access the course material anytime, anywhere.', image: 'https://cdn-icons-png.flaticon.com/512/10765/10765372.png' },
    { title: 'Certification', description: 'Receive a certificate upon successful completion.', image: 'https://cdn-icons-png.flaticon.com/512/2617/2617793.png' },
    { title: 'Self-Paced Learning', description: 'Learn at your own pace with flexible schedules.', image: 'https://cdn-icons-png.flaticon.com/512/10765/10765372.png' },
    { title: '24/7 Support', description: 'Get help from instructors anytime.', image: 'https://cdn-icons-png.flaticon.com/512/13636/13636397.png' },
    { title: 'Community Access', description: 'Join our learner community for support and networking.', image: 'https://cdn-icons-png.flaticon.com/512/7829/7829198.png' },
    { title: 'Expert Instructors', description: 'Learn from industry experts and thought leaders.', image: 'https://cdn-icons-png.flaticon.com/512/9746/9746379.png' },
  ];

  const faqs = [
    { 
      question: 'Who is this course for?', 
      answer: 'This course is designed for beginners with no prior programming experience, developers who want to learn Python from scratch, and intermediate programmers looking to master Python best practices.' 
    },
    { 
      question: 'What payment methods are accepted?', 
      answer: 'We accept payments via credit cards, PayPal, Google Pay (GPay), and other standard online payment methods.' 
    },
    { 
      question: 'Are there real-world projects included?', 
      answer: 'Yes, the course includes hands-on projects like building automation scripts, web scraping tools, and data analysis applications with Python.' 
    },
    { 
      question: 'What kind of support will I get during the course?', 
      answer: 'You will have access to a community forum where you can ask Python-related questions, share insights, and receive feedback. Technical support is also provided for course-related queries.' 
    },
    { 
      question: 'Do I receive a certificate upon completion?', 
      answer: 'Yes, upon completing all modules, quizzes, and the final project, you will receive a certificate of completion in Python Programming Mastery.' 
    },
  ];
  
  

  return (
    <main className="min-h-screen bg-white px-8 md:px-24 py-6">
    {/* Hero Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-8 md:py-8">
  <article className="md:w-1/2 w-full text-center md:text-left">
  <p className="mt-4 text-gray-600">
      Trusted by over <strong>5000 learners</strong> worldwide
    </p>
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-red-600">
     Complete placement training Consisting of Aptitude and Technical
    </h1>
    <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
      Join thousands of learners who have gained hands-on experience with our expert-led courses for placement training.
    </p>

  {/* Course Duration, Mode, and Level Section */}
  <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
      <div className="flex items-center gap-2">
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/clock-solid%20(1).svg?updatedAt=1731241927965"
          alt="Time Icon"
          className="w-6 h-6"
        />
        <span>40+ Hours</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/building-columns-solid.svg?updatedAt=1731241943946"
          alt="Self-Paced Icon"
          className="w-6 h-6"
        />
        <span>Self-Paced</span>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/chart-simple-solid%20(2).svg?updatedAt=1731241983259"
          alt="Level Icon"
          className="w-6 h-6"
        />
        <span>Intermediate</span>
      </div>
    </div>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1">
      {/* Razorpay Form Container */}
      <div id="razorpay-form-container" className="flex items-center">
        {/* Razorpay form and button will load here */}
      </div>

      <button
        className="border rounded border-red-500 text-red-600 px-2 mb-2 py-2 text-base md:text-sm hover:bg-red-100 transition-colors"
        onClick={handleDownloadBrochure}
      >
        Download Curriculum
      </button>

      {/* Modal for Phone Number Input */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Enter Your Phone Number</h2>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg mb-4"
              placeholder="Enter your 10-digit phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSubmitPhoneNumber}
              >
                Submit & Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>



    {isMounted && (
      <div className="mt-6">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <del className="text-3xl text-gray-500">₹3999</del>
          <h2 className="text-5xl font-bold text-red-500">₹1599</h2>
        </div>
        <p className="text-gray-600"></p>
        

        <p className="mt-2 text-lg font-semibold text-red-600">
          Offer ends in: <span className="font-bold">{formatTime(timeLeft)}</span>
        </p>
      </div>
    )}
  </article>

  <div className="md:w-1/2 w-full">
    <iframe
      className="w-full rounded-lg"
      height="400"
      src="https://www.youtube.com/embed/YkvtJi5oWpA?si=Oe6xBW2A8Z9QMhyk"
      title="Course Introduction"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  
</section>

  {/* Course Curriculum for Aptitude */}
  <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for Aptitude</h2>
        <CurriculumAccordion curriculum={courseContent} />
      </section>
       {/* Course Curriculum for Python */}
  <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for Python</h2>
        <CurriculumAccordion curriculum={curriculum} />
      </section>
      <h1 className="text-3xl md:text-3xl text-center font-extrabold leading-tight text-red-600">
    OR
    </h1>
      {/* Course Curriculum for Java */}
  <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for Java (20 Hours)</h2>
        <CurriculumAccordion curriculum={javaCurriculum} />
      </section>
        {/* Course Curriculum for SQL */}
  <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for SQL</h2>
        <CurriculumAccordion curriculum={sqlCurriculum} />
      </section>
   


<section className="w-full py-8">
  <div className="max-w-7xl mx-auto px-6">
    {/* Data for Sections */}
    {[
      {
        title: 'What You Will Learn',
        items: [
            
                [
                  'Quantitative Aptitude: Profit/loss, percentages, number systems',
                  'Logical Reasoning: Puzzles, seating arrangements, blood relations',
                  'Data Interpretation: Analyze charts, graphs, and tables',
                  'Combinatorics & Probability: Permutations and combinations',
                  'Mock Exams: Full-length practice tests for placement readiness'
                ],
                [
                  'Programming Skills: Core Python and Java development concepts',
                  'SQL Mastery: Write and optimize database queries effectively',
                  'Algorithms: Sorting, searching, and problem-solving techniques',
                  'System Design: Learn basics of APIs, REST, and scalability',
                  'Certification: Validate technical expertise with Python and SQL'
                ]
                            
          ]
                  
      },
    ].map((section, index) => (
      <div key={index} className="mb-12">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">
          {section.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.items.map((list, idx) => (
            <ul
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              {list.map((item, i) => (
                <li
                  key={i}
                  className="text-lg text-gray-800 mb-2 last:mb-0"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
 {/* Features Section */}
 <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600 text-center">What You’ll Get</h2>
        <div className="grid grid-cols-2 gap-6 px-4 sm:px-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center md:flex-row gap-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="hidden md:block w-24 h-24 object-cover rounded-md"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    
      {/* Certification Section */}
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-4 text-red-600">Certification</h2>
        <p className="text-lg text-gray-600 mb-4">
          Showcase your achievements with our industry-recognized certificate.
        </p>
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/campus%20credentials%20certificate.png?updatedAt=1729665346965"
          alt="Certificate Preview"
          className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg"
        />
      </section>
      <section className="w-full py-8">
  <h2 className="text-4xl font-bold mb-8 text-center text-red-600">
    Our learners are placed in
  </h2>

  {/* Grid Layout for Company Logos */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-8">
    {[
      { name: 'Infosys', logo: 'https://companieslogo.com/img/orig/INFY_BIG-9635f314.png?t=1720244492' },
      { name: 'Cognizant', logo: 'https://companieslogo.com/img/orig/CTSH_BIG-953fa309.png?t=1720244491' },
      { name: 'Mphasis', logo: 'https://companieslogo.com/img/orig/MPHASIS.NS_BIG-96e12b36.png?t=1720244492' },
      { name: 'Capgemini', logo: 'https://companieslogo.com/img/orig/CAP.PA_BIG-cbc06f01.png?t=1720244491' },
      { name: 'L&T', logo: 'https://companieslogo.com/img/orig/LTTS.NS_BIG-e48bc9b1.png?t=1720244492' },
      { name: 'TCS', logo: 'https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1720244494' },
      { name: 'HCL', logo: 'https://companieslogo.com/img/orig/HCLTECH.NS_BIG-eadcb2fa.png?t=1723784865' },
      { name: 'Tech Mahindra', logo: 'https://companieslogo.com/img/orig/TECHM.NS_BIG-281ab5b9.png?t=1721262930' },
      { name: 'Wipro', logo: 'https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1720244494' },
      { name: 'Deloitte', logo: 'https://companieslogo.com/img/orig/deloitte_BIG-86032e42.png?t=1720244494' },
      { name: 'Persistent', logo: 'https://companieslogo.com/img/orig/PERSISTENT.NS_BIG-8fb78ddd.png?t=1720244493' },
      { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      { name: 'Hexaware', logo: 'https://companieslogo.com/img/orig/HEXAWARE.NS_BIG-3c8842d4.png?t=1720244492' },
      { name: 'Zscaler', logo: 'https://companieslogo.com/img/orig/ZS_BIG-b13451c0.png?t=1720244494' },
      { name: 'Goldman Sachs', logo: 'https://companieslogo.com/img/orig/GS-71003e9a.png?t=1720244492' },
    ].map((company, index) => (
      <div
        key={index}
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center h-28"
      >
        <img
          src={company.logo}
          alt={company.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>

  <p className="text-xl text-center mt-8 font-semibold text-red-600">
    +300 more companies
  </p>
</section>
      <section className="w-full py-8">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
      What Our Students Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
     {
        name: 'Sita Rao',
        review: 'A complete program! The technical modules were well-structured, and the practice tests helped me strengthen both my coding and problem-solving abilities.',
        rating: 5,
    },
    {
        name: 'Pooja Mehta',
        review: 'This course gave me a solid foundation in Python and SQL. The coding challenges were challenging but rewarding, and the mock exams really simulated real placement tests.',
        rating: 4,
    },
    {
        name: 'Vikram Patel',
        review: 'The mix of technical training and aptitude preparation is great! I was able to improve my coding speed and problem-solving skills. Highly recommended for anyone preparing for placements.',
        rating: 5,
    }

      ].map((review, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
              {review.name[0]}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
              <div className="flex">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600">{review.review}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </main>
  );
};

export default App;
