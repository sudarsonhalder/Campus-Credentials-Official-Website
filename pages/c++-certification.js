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

  const pageName = "Mastering C++: Comprehensive Certification for Modern Programming";

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
      title: 'History and Hierarchy of Languages',
      content: [
        'Difference Between C and C++',
        'C++ Characteristics',
      ],
    },
    {
      title: 'OOP’s Features',
      content: [
        'Class',
        'Object',
        'Abstraction',
        'Encapsulation',
        'Inheritance',
        'Overloading (Polymorphism)',
        'Exception Handling',
        'Message Passing',
        'Dynamic Binding',
      ],
    },
    {
      title: 'Input/Output in C++',
      content: [
        'Insertion Operator',
        'Extraction Operator',
        'Scope Resolution Operator',
        'New Operator',
        'Delete Operator',
        'Dynamic Binding in C++',
      ],
    },
    {
      title: 'Manipulators',
      content: [
        'Endl',
        'Dec, Hex, Oct',
        'Setbase()',
        'Setw()',
        'Setfill()',
        'Setprecision()',
      ],
    },
    {
      title: 'Variables and Datatypes',
      content: [
        'Dynamic Initialization of Variables',
        'Reference Variables',
        'Global & Local Variables',
        'Constants',
        'Datatypes in C++',
      ],
    },
    {
      title: 'Operators',
      content: [
        'Conditional Operator',
        'Looping as Similar to C',
      ],
    },
    {
      title: 'Functions',
      content: [
        'Call by Value',
        'Call by Reference',
        'Call by Address',
        'Inline Functions',
        'Function Overloading',
        'Recursion Functions',
      ],
    },
    {
      title: 'Arrays',
      content: [
        'One-Dimensional Array',
        'Two-Dimensional Array',
      ],
    },
    {
      title: 'Pointers',
      content: [
        'Nested Pointers',
        'Scalar Factor',
        'Pointer and Function',
        'Null Pointer',
        'Generic Pointer or Void Pointer',
        'Dangling Pointer',
      ],
    },
    {
      title: 'OOP’s Concepts',
      content: [
        'Static Object',
        'Dynamic Object',
        'Array of Object',
        'Object Assignment',
        'Object as Function Argument',
      ],
    },
    {
      title: 'C++ Constructors and Destructors',
      content: [
        'Default Constructor',
        'Parameterized Constructor',
        'Copy Constructor',
        'C++ Destructor',
      ],
    },
    {
      title: 'Friend Functions and Classes',
      content: [
        'Friend Function',
        'Friend Class',
      ],
    },
    {
      title: 'Operator Overloading',
      content: [
        'Unary Operator',
        'Binary Operator',
      ],
    },
    {
      title: 'Data Abstraction',
      content: [
        'Abstraction Using Class',
        'Abstraction Using Header Files',
      ],
    },
    {
      title: 'Inheritance',
      content: [
        'Single Inheritance',
        'Multilevel Inheritance',
        'Multiple Inheritance',
        'Hierarchical Inheritance',
        'Hybrid Inheritance',
      ],
    },
    {
      title: 'Polymorphism',
      content: [
        'Virtual Function',
        'Abstract Class and Pure Virtual Function',
      ],
    },
    {
      title: 'Exception Handling',
      content: [
        'Compile-Time Error',
        'Run-Time Error',
        'Throw Statement',
        'Multiple Catch Block',
        'Generalized Catch Block',
        'Standard Exception',
      ],
    },
    {
      title: 'Templates',
      content: [
        'Function Template',
        'Class Template',
      ],
    },
    {
      title: 'Namespaces',
      content: [
        'Using Namespaces in C++',
      ],
    },
    {
      title: 'File Handling',
      content: [
        'File Handling in C++',
      ],
    },
  ];
  

  const faqs = [
    {
      question: 'Who is this course for?',
      answer: 'This course is designed for beginners, experienced developers, and anyone looking to master modern C++ programming.',
    },
    {
      question: 'What kind of projects are included?',
      answer: 'Projects include game development basics, system-level applications, and advanced algorithms.',
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
      name: 'Arjun Verma',
      review: 'This C++ programming course was fantastic! The projects helped me solidify concepts and apply them in real-world scenarios.',
      rating: 5,
    },
    {
      name: 'Riya Sharma',
      review: 'I learned so much about C++ and its advanced features. The STL section was especially insightful.',
      rating: 4,
    },
    {
      name: 'Kunal Singh',
      review: 'The certification added great value to my resume and helped me secure a role in game development.',
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
            Mastering C++: Comprehensive Certification for Modern Programming
          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
            Dive into the world of C++ programming with this comprehensive certification course designed for learners at all levels.
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
          <video
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
          </button>
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
              'C++ Basics: Syntax, data types, and control structures',
              'Object-Oriented Programming: Encapsulation, inheritance, and polymorphism',
              'Pointers and Memory Management: Dynamic memory allocation',
              'Standard Template Library (STL): Containers, iterators, and algorithms',
              'Advanced Features: Templates, exception handling, and file handling',
            ],
            [
              'Problem-Solving Skills: Enhance your logical and critical thinking',
              'Real-World Projects: Implement algorithms and game design basics',
              'Certification: Validate your expertise in modern C++ programming',
              'Hands-On Practice: Engage with coding challenges and practical projects',
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
