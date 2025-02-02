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
        script.setAttribute("data-payment_button_id", "pl_PpaWcc0qBMLR38");
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

  const pageName = "Java Mastery Certification: From Fundamentals to Advanced Concepts";

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
        'About Java',
        'History of Java',
        'Java Releases',
        'Real World Java Applications',
        'Types of Java Applications',
      ],
    },
    {
      title: 'Features of Java',
      content: [
        'Simple',
        'Object oriented',
        'Platform independent',
        'Secured',
        'Robust',
        'Architectural neutral',
        'Portable',
        'Dynamic',
        'Interpreted',
        'High performance',
        'Multithreaded',
        'Distributed',
        'Networked',
      ],
    },
    {
      title: 'OOP’s Principles',
      content: [
        'Class',
        'Object',
        'Abstraction',
        'Encapsulation',
        'Inheritance',
        'Polymorphism',
        'Dynamic Binding',
        'Message Passing',
      ],
    },
    {
      title: 'Identifiers and Variables',
      content: [
        'Rules for Identifiers',
        'Reserved Words',
        'Local Variable',
        'Instance Variable',
        'Static Variable',
        'Scope and Lifetime of Variables',
        'Constants in Java',
        'How Java Differs from C and C++',
        'Java Naming Conventions',
      ],
    },
    {
      title: 'Data Types and Type Casting',
      content: [
        'Primitive Data Types',
        'Non-Primitive Data Types',
        'Implicit Type Casting',
        'Explicit Type Casting',
      ],
    },
    {
      title: 'Operators',
      content: [
        'Arithmetic Operator',
        'Assignment Operator',
        'Increment/Decrement Operator',
        'Relation Operator',
        'Condition Operator',
        'Logical Operator',
        'Bitwise Operator',
        'Instance of Operator',
        'Operator Precedence',
      ],
    },
    {
      title: 'Control and Looping Statements',
      content: [
        'Simple if',
        'If Else',
        'Nested If Else',
        'Ladder Else If',
        'Switch',
        'For Loop',
        'While Loop',
        'Do While Loop',
        'For Each Loop',
      ],
    },
    {
      title: 'Access Modifiers and Scanner Class',
      content: [
        'Public',
        'Private',
        'Protected',
        'Default (No Keyword Required)',
        'Reading Data Using Scanner Class',
        'Meaning of System.out.println',
      ],
    },
    {
      title: 'Arrays',
      content: [
        'Need for Arrays',
        'Limitations of Arrays',
        'Types of Arrays',
        'One-Dimensional Arrays',
        'Multi-Dimensional Arrays',
        'Jagged Arrays',
        'Array as Final',
      ],
    },
    {
      title: 'Classes and Objects',
      content: [
        'Type of Objects',
        'Declared Object',
        'Allocated Object',
        'Reference Object',
        'Methods in Java',
        'How to Define Methods',
        'Calling a Method',
        'Constructors',
        'Rules for Writing Constructors',
        'No-Argument Constructor',
        'Parameterized Constructor',
        'Constructor Overloading',
        'Super Keyword',
        'Super at Variable Level',
        'Super at Method Level',
        'Super at Constructor Level',
        'Final Keyword',
        'Final Variable',
        'Blank Final Variable',
        'Final Method',
        'Final Class',
        'Static Keyword',
        'Static Variables',
        'Static Block',
        'Static Method',
        'Static Main Method',
        'This Keyword',
        'This Variable',
        'This Constructor',
        'This Method',
        'Command Line Argument',
        'Accepting Arguments from Command Line',
      ],
    },
    {
      title: 'String Handling',
      content: [
        'String',
        'StringBuffer',
        'StringBuilder',
        'Why String is Immutable',
        'Difference Between StringBuffer and StringBuilder',
      ],
    },
    {
      title: 'Exception Handling',
      content: [
        'Types of Errors',
        'Compile-Time Error',
        'Run-Time Error',
        'Need for Exception Handling',
        'Try/Catch/Finally',
        'Throw/Throws',
        'Need of Finally in Real-Time Projects',
        'Object Cloning or clone() in Java',
        'Java Serialization',
      ],
    },
    {
      title: 'Inheritance and Interfaces',
      content: [
        'Types of Inheritance',
        'Single Level Inheritance',
        'Multi-Level Inheritance',
        'Hierarchical Inheritance',
        'Why Multiple Inheritance is Not Supported in Java',
        'Diamond Ring Problem',
        'Interfaces',
        'Why Use Interfaces',
        'Achieving Multiple Inheritance',
        'Abstract Classes',
        'Abstract Classes Versus Interfaces',
      ],
    },
    {
      title: 'Packages and Method Overriding',
      content: [
        'Steps for Developing a Package',
        'Predefined Package',
        'User-Defined Package',
        'Defining a Package',
        'Method Overriding',
        'Rules for Method Overriding',
        'IS-A Relationship',
        'Method Overloading',
      ],
    },
    {
      title: 'Polymorphism and Multithreading',
      content: [
        'Runtime Polymorphism',
        'Upcasting',
        'Downcasting',
        'Multithreading',
        'Multitasking',
        'Process-Based Multitasking',
        'Thread-Based Multitasking',
        'Thread Life Cycle',
        'Creating Threads',
        'Extending Thread Class',
        'Implementing Runnable Interface',
        'Synchronization',
        'Thread Scheduler',
        'Thread Priorities',
        'Preventing Thread Execution',
      ],
    },
    {
      title: 'Garbage Collection and IO Streams',
      content: [
        'Garbage Collector',
        'Destroying Unreferenced Objects',
        'Requesting JVM for Garbage Collection',
        'IO Streams',
        'Input Streams',
        'Output Streams',
        'File',
        'FileWriter and FileReader',
        'BufferedReader and BufferedWriter',
        'PrintWriter',
      ],
    },
    {
      title: 'Class Loader and JDBC',
      content: [
        'Bootstrap Class Loader',
        'Extensions Class Loader',
        'System Class Loader',
        'JDBC Drivers',
        'Steps for Database Connectivity',
        'executeQuery()',
        'executeUpdate(sqlQuery)',
        'execute()',
      ],
    },
    {
      title: 'Collection Framework',
      content: [
        'Arrays',
        'Disadvantages of Arrays',
        'Difference Between Arrays and Collections',
        'Collection Framework Hierarchy',
        'Collection Interfaces and Classes',
        'Sorting: Comparator and Comparable',
        'Cursors: Enumeration, Iterator, ListIterator',
        'Utility Classes: Collections and Arrays',
      ],
    },
    {
      title: 'Java 8 Features',
      content: [
        'Lambda Expressions',
        'Functional Interfaces',
        'Default Methods',
        'Predicates',
        'Functions',
        'Double Colon Operator (::)',
        'Stream API',
        'Date and Time API',
      ],
    },
  ];
  

  const faqs = [
    {
      question: 'Who is this course for?',
      answer: 'This course is designed for beginners, intermediate learners, and anyone looking to master Java programming.',
    },
    {
      question: 'What kind of projects are included?',
      answer: 'Projects include building a banking system using OOP concepts, implementing data structures, and database integration.',
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
      name: 'Anjali Verma',
      review: 'This Java course was extremely helpful! The projects and exercises helped me build my confidence in programming.',
      rating: 5,
    },
    {
      name: 'Rahul Sinha',
      review: 'Great course with practical examples. The instructors explain concepts clearly.',
      rating: 4,
    },
    {
      name: 'Sita Rao',
      review: 'The Java course provided in-depth coverage of both basic and advanced topics. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white px-8 md:px-24 py-6">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-8 md:py-8">
        <article className="md:w-1/2 w-full text-center md:text-left">
          <p className="mt-4 text-gray-600">
            Trusted by over <strong>10000 learners</strong> worldwide
          </p>
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-red-600">
            Java Mastery Certification: From Fundamentals to Advanced Concepts
          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
          Unlock Java’s full potential with our comprehensive Java Mastery Certification course. Perfect for beginners and intermediates, it covers robust applications, object-oriented programming, and scalable solutions, equipping you with skills to excel.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1">
            <div id="razorpay-form-container" className="flex items-center">
              {/* Razorpay form will load here */}
            </div>
            {/* <button
              className="border rounded border-red-500 text-red-600 px-2 mb-2 py-2 text-base md:text-sm hover:bg-red-100 transition-colors"
              onClick={handleDownloadBrochure}
            >
              Download Curriculum
            </button> */}
          </div>
        </article>
        <div className="relative md:w-1/2 w-full">
        <img
    src="https://ik.imagekit.io/99djpd8k3/CC/java%20mastery%20certification.png?updatedAt=1738162412621"
   
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
        <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum for Java Certification</h2>
        <CurriculumAccordion curriculum={courseContent} />
      </section>

      {/* What You Will Learn */}
      <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            [
              'Java Basics: Syntax, variables, and data types',
              'Object-Oriented Programming: Classes, objects, inheritance, and polymorphism',
              'Advanced Topics: Generics, multithreading, and exception handling',
              'Data Structures: Arrays, linked lists, stacks, and queues in Java',
              'Web Development: Servlets, JSP, and Spring Framework basics',
            ],
            [
              'Real-World Projects: Hands-on projects like a banking system',
              'Database Integration: JDBC and SQL commands',
              'Functional Programming: Lambda expressions and stream API',
              'Testing and Debugging: Best practices for debugging Java applications',
              'Certification: Showcase your Java programming expertise',
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
