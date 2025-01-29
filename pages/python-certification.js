import React, { useEffect, useState, useRef } from 'react';
import CurriculumAccordion from '@/components/Curriculum/CurriculumAccordion';
import FAQAccordion from '@/components/ui/FAQs/FAQAccordion';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.visibilityState === "hidden") {
          videoRef.current.pause();
        } else if (document.visibilityState === "visible") {
          videoRef.current.play();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const loadRazorpayForm = () => {
      if (!document.getElementById("razorpay-form")) {
        const form = document.createElement("form");
        form.id = "razorpay-form";
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute("data-payment_button_id", "pl_PJdpX1IBSSjJo5");
        script.async = true;
        form.appendChild(script);
        const container = document.getElementById("razorpay-form-container");
        if (container) {
          container.appendChild(form);
        }
      }
    };

    loadRazorpayForm();

    return () => {
      const form = document.getElementById("razorpay-form");
      if (form) {
        form.remove();
      }
    };
  }, []);

  const pageName = "Core Python Certification";

  useEffect(() => {
    document.title = pageName;
  }, []);

  const handleDownloadBrochure = () => {
    setIsModalOpen(true);
  };

  const handleSubmitPhoneNumber = async () => {
    if (phoneNumber.match(/^\d{10}$/)) {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/ryw1r9l7qmpu9', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            {
              PhoneNumber: phoneNumber,
              PageName: pageName,
            },
          ]),
        });

        if (response.ok) {
          setStatus('Brochure downloaded successfully!');
          setIsModalOpen(false);
          window.open(
            'https://drive.google.com/file/d/1bbBDQrHE_BCxMo3WYG6pUtvH3lUZklcC/view',
            '_blank'
          );
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

  const courseContent = [
    {
      title: 'Introduction',
      content: [
        'History and Hierarchy of Python Languages',
        'Application of Python',
        'Advantages of Python',
        'Disadvantages of Python',
        'Program Structure',
        'User Interface IDE',
        'Features of Python',
        'Setting up Path',
        'Basic Syntax of Python',
      ],
    },
    {
      title: 'Data Types and Variables',
      content: [
        'Data Types and Variables',
        'Constant, Identifier, Keywords, Tokens',
        'Numbers',
        'Strings',
      ],
    },
    {
      title: 'Collections',
      content: [
        'Introduction of List',
        'Creating List',
        'Accessing List',
        'Joining List',
        'List Slicing',
        'Introduction of Tuple',
        'Creating Tuple',
        'Accessing Tuple',
        'Joining Tuple',
        'Tuple Slicing',
        'Introduction of Dictionary',
        'Accessing Values in Dictionaries',
        'Working with Dictionary',
        'Properties of Dictionary',
        'Introduction of Set',
        'Creating Set',
        'Accessing and Joining Set',
        'Slicing of Set',
      ],
    },
    {
      title: 'Type Casting',
      content: [
        'Implicit Typecasting',
        'Explicit Typecasting',
      ],
    },
    {
      title: 'Functions',
      content: [
        'Defining a Function',
        'Built-in Functions',
        'Introduction to Functions',
        'Function Types',
        'Structure of Function',
        'User-defined Functions',
        'Structure of User-defined Functions',
        'Types of Functions',
        'Parameterized Functions',
        'Argument & Parameterized Functions',
        'Default Argument and Named Argument Functions',
        'Lambda Functions',
        'Recursion Functions',
      ],
    },
    {
      title: 'Modules and Packages',
      content: [
        'Importing Modules in Python',
        'Predefined Packages',
        'How to Create User-defined Packages',
        'Working with Random Modules',
      ],
    },
    {
      title: 'File Handling',
      content: [
        'Binary Read & Write File',
        'Reading or Writing File',
        'Opening and Closing File',
        'CSV & Text File',
        'Read and Write Operation with Image File',
        'Working with OS Module',
        'With Statement',
      ],
    },
    {
      title: 'Control Statements',
      content: [
        'Simple if',
        'If Else',
        'Nested If Else',
        'If-Elif Statement',
        'Python Indentation',
      ],
    },
    {
      title: 'Looping Statements',
      content: [
        'For Loop',
        'While Loop',
        'Loop Else Statement',
        'Nested Loops',
        'Break and Continue',
      ],
    },
    {
      title: 'String Manipulation',
      content: [
        'Introduction to Python Strings',
        'Accessing Individual Elements',
        'String Operators',
        'String Slices',
        'String Function and Methods',
        'Basic String Handling Functions',
      ],
    },
    {
      title: 'Exception Handling',
      content: [
        'Default Exceptions and Errors',
        'Catching Exceptions',
        'Raise an Exception',
        'Try Except Exception',
        'Raise, Assert, Finally Block',
        'User-defined Exceptions',
        'Logging Module',
      ],
    },
    {
      title: 'OOPS Concepts',
      content: [
        'Classes and Objects',
        'Object-oriented Programming',
        'Data Abstraction',
        'Data Hiding',
        'Encapsulation',
        'Modularity',
        'Inheritance',
        'Single Level Inheritance',
        'Multilevel Inheritance',
        'Multiple Inheritance',
        'Polymorphism',
        'Compile-time Polymorphism',
        'Run-time Polymorphism',
      ],
    },
    {
      title: 'Regular Expressions',
      content: [
        'Match Function',
        'Search Function',
        'Grouping',
        'Matching at Beginning or End',
        'Match Objects',
        'Patterns',
      ],
    },
    {
      title: 'Multithreading',
      content: [
        'Thread and Process',
        'Starting a Thread',
        'Threading Module',
        'Synchronizing Threads',
        'Multithreaded Priority Queue',
      ],
    },
    {
      title: 'Advanced Concepts',
      content: [
        'Decorators',
        'Generators',
      ],
    },
  ];
  
  
  
  
  

  const faqs = [
    {
      question: 'Who is this course for?',
      answer: 'This course is designed for beginners, aspiring developers, and anyone looking to build a strong foundation in Python.',
    },
    {
      question: 'What kind of projects are included?',
      answer: 'Projects include real-world applications such as a file organizer, a basic calculator, and a mini web scraper.',
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes, upon successful completion of all modules and the final project.',
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

  const reviews = [
    {
      name: 'Ravi Sharma',
      review: 'This Python course was a great introduction to programming. The hands-on projects were especially helpful!',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      review: 'I loved the practical examples and step-by-step explanations. This course is perfect for beginners.',
      rating: 4,
    },
    {
      name: 'Amit Kumar',
      review: 'The Python Certification course was thorough and engaging. Highly recommend it to anyone starting with Python.',
      rating: 5,
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
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-red-600">
            Core Python Certification
          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
            Unlock the true potential of programming with this comprehensive Python certification course designed for beginners and aspiring developers.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1">
            <div id="razorpay-form-container" className="flex items-center">
              {/* Razorpay form will load here */}
            </div>
            <button
              className="border rounded border-red-500 text-red-600 px-2 mb-2 py-2 text-base md:text-sm hover:bg-red-100 transition-colors"
              onClick={handleDownloadBrochure}
            >
              Download Curriculum
            </button>
          </div>
        </article>
        <div className="relative md:w-1/2 w-full">
        <img
    src="https://ik.imagekit.io/99djpd8k3/CC/Core%20python%20certification%20course%20thumbnail.png?updatedAt=1738164570907"
   
    className="w-full h-[300px] object-contain"
  />
          {/* <video
            ref={videoRef}
            className="w-full rounded-lg"
            height="400"
            autoPlay
            playsInline
            onCanPlay={() => videoRef.current?.play()}
          >
            <source
              src="https://acecredentials.b-cdn.net/Campus%20Intro%20Videos/Aptitude%20noice%20removed.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-1 bg-black bg-opacity-50 text-white rounded-full"
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button> */}
        </div>
      </section>
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for Python certification</h2>
        <CurriculumAccordion curriculum={courseContent} />
      </section>
      {/* What You Will Learn */}
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            [
              'Python Basics: Syntax, data types, and control structures',
              'Object-Oriented Programming: Classes, objects, inheritance, and encapsulation',
              'File Handling: Reading and writing to files, JSON, and CSV',
              'Modules and Libraries: Leveraging Python extensive library support',
              'Real-World Projects: Building practical applications like a file organizer and web scraper',
            ],
            [
              'Advanced Concepts: Decorators, generators, and context managers',
              'Problem-Solving Skills: Enhance your logical and critical thinking',
              'Error Handling: Manage exceptions effectively in your code',
              'Certification: Validate your Python programming expertise',
              'Lifetime Access: Learn at your own pace with 24/7 support',
            ],
          ].map((list, idx) => (
            <ul key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              {list.map((item, i) => (
                <li key={i} className="text-lg text-gray-800 mb-2 last:mb-0">✅ {item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* What You’ll Get */}
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

      {/* Student Reviews */}
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-red-600">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
