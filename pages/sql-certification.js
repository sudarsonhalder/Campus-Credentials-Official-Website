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
        script.setAttribute("data-payment_button_id", "pl_PpaPTpeVCBFllE");
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

  const pageName = "Mastering SQL: From Fundamentals to Advanced with Projects";

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
  const reviews = [
    {
      name: 'Ananya Roy',
      review: 'The SQL course gave me hands-on experience with real-world database projects. The examples were practical, and the instructor explained everything clearly.',
      rating: 5,
    },
    {
      name: 'Rohan Sharma',
      review: 'I loved the projects like the Employee Management System. They helped me apply SQL concepts to real-life scenarios. Highly recommend this course!',
      rating: 4,
    },
    {
      name: 'Meera Kapoor',
      review: 'The SQL certification boosted my confidence and helped me land a data analyst role. The course covered everything from basics to advanced concepts in detail.',
      rating: 5,
    },
  ];
  
  const courseContent = [
    {
      title: 'Introduction to Databases',
      content: [
        'What is a Database?',
        'Types of Databases: Hierarchical, Network, Relational, and Object-Oriented',
        'DBMS vs. RDBMS',
        'Key Terminology: Tables, Fields, Records, and Keys',
      ],
    },
    {
      title: 'Database Management Systems (DBMS)',
      content: [
        'Components of DBMS',
        'Functions and Features of DBMS',
        'Database Models',
        'ER Diagrams: Concepts and Examples',
      ],
    },
    {
      title: 'Relational Database Management Systems (RDBMS)',
      content: [
        'Concepts of Relations, Tuples, and Attributes',
        'Primary Key, Foreign Key, Composite Key',
        'Data Normalization: 1NF, 2NF, 3NF, BCNF',
        'Relationships: One-to-One, One-to-Many, Many-to-Many',
      ],
    },
    {
      title: 'Introduction to SQL',
      content: [
        'Overview of SQL: Importance and Use Cases',
        'SQL Syntax and Commands',
        'Data Definition Language (DDL): CREATE, ALTER, DROP',
        'Data Manipulation Language (DML): INSERT, UPDATE, DELETE',
      ],
    },
    {
      title: 'Querying Data with SQL',
      content: [
        'SELECT Statements and WHERE Clause',
        'Filtering Data: BETWEEN, IN, LIKE, AND, OR',
        'Sorting and Limiting Data: ORDER BY and LIMIT',
        'Aggregate Functions: COUNT, AVG, MAX, MIN, SUM',
      ],
    },
    {
      title: 'Advanced SQL Concepts',
      content: [
        'Joins: INNER, OUTER, LEFT, RIGHT, FULL',
        'Subqueries and Nested Queries',
        'Indexes: Creating and Optimizing Queries',
        'Transactions: COMMIT, ROLLBACK, SAVEPOINT',
      ],
    },
    {
      title: 'Database Security and Administration',
      content: [
        'User Roles and Permissions',
        'Backups and Recovery Plans',
        'Database Performance Tuning',
        'Security Best Practices',
      ],
    },
    {
      title: 'SQL Projects (Hands-On)',
      content: [
        'Project 1: Employee Management System',
        'Project 2: Hospital Management System',
        'Project 3: Analytics Dashboard',
      ],
    },
    {
      title: 'Case Study of Real-World Database System',
      content: ['Case Study 1: Learning Management System (LMS)'],
    },
  ];

  const faqs = [
    {
      question: 'Who is this course for?',
      answer: 'This course is ideal for beginners, professionals, and anyone looking to master database management and SQL.',
    },
    {
      question: 'What kind of projects are included?',
      answer: 'Projects include building an employee management system, hospital management system, and an analytics dashboard.',
    },
    {
      question: 'Will I receive a certificate?',
      answer: 'Yes, upon successful completion of all modules and projects.',
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

  return (
    <main className="min-h-screen bg-white px-8 md:px-24 py-6">
    {/* Hero Section */}
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-8 md:py-8">
      <article className="md:w-1/2 w-full text-center md:text-left">
        <p className="mt-4 text-gray-600">
          Trusted by over <strong>5000 learners</strong> worldwide
        </p>
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-red-600">
        Mastering SQL: From Fundamentals to Advance with Projects
        </h1>
        <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
        Unlock the power of database management with this comprehensive SQL certification course. Ideal for beginners and professionals, it covers DBMS, RDBMS, and SQL fundamentals, progressing to advanced queries and real-world projects. Equip yourself with skills for roles like Data Analyst or Database Administrator and thrive in today’s data-driven world.        </p>
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
    src="https://ik.imagekit.io/99djpd8k3/CC/SQL%20Advanced.png?updatedAt=1738162411690"
   
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
    {/* Course Curriculum */}
    <section className="w-full py-8">
      <h2 className="text-4xl font-bold mb-8 text-red-600">Course Curriculum</h2>
      <CurriculumAccordion curriculum={courseContent} />
    </section>
         {/* What You Will Learn */}
         <section className="w-full py-8">
        <h2 className="text-4xl font-bold mb-8 text-red-600">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            [
              'Introduction to Databases: Understand DBMS and RDBMS basics',
              'SQL Fundamentals: Master DDL, DML, and querying data effectively',
              'Data Filtering and Sorting: Learn advanced WHERE clauses, ORDER BY, and LIMIT',
              'Relationships and Keys: Understand primary, foreign, and composite keys',
              'Normalization: Learn 1NF, 2NF, 3NF, and BCNF with examples',
            ],
            [
              'Joins and Subqueries: Master INNER, OUTER, and complex SQL queries',
              'Database Administration: Learn performance tuning and backup strategies',
              'Real-World Projects: Build Employee Management and Analytics Dashboards',
              'Certification: Validate your SQL expertise with hands-on projects',
              'Career Growth: Gain skills for roles like Data Analyst and SQL Developer',
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
