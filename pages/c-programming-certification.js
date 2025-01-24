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

  const pageName = "Mastering C Programming: From Fundamentals to Advanced Core Concepts";

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
        'Translators (Compiler & Interpreter)',
      ],
    },
    {
      title: 'Fundamentals of C',
      content: [
        'Introduction of C',
        'Character Set',
        {
          title: 'Variables (Storage Classes)',
          content: [
            'Local Variable',
            'Global Variable',
            'Static Variable',
            'Automatic Variable',
            'External Variable',
          ],
        },
        'Constants, Identifiers, Keywords, Tokens',
        {
          title: 'Datatypes',
          content: [
            'Primary Datatype',
            'User-defined Datatype',
            'Derived Datatype',
          ],
        },
        'Why Byte in C',
        'Range in C',
        {
          title: 'Operators',
          content: [
            'Arithmetic Operator',
            'Assignment Operator',
            'Relational Operator',
            'Conditional Operator',
            'Logical Operator',
            'Increment/Decrement Operator (Prefix and Postfix)',
            'Bitwise Operator',
            'Special Operator',
          ],
        },
      ],
    },
    {
      title: 'Structure of C',
      content: [
        '#define Preprocessor',
        'Basic Program Execution of C',
      ],
    },
    {
      title: 'Typecasting and I/O Operations',
      content: [
        {
          title: 'Type Casting in C',
          content: [
            'Implicit Typecasting',
            'Explicit Typecasting',
          ],
        },
        'ASCII in C',
        {
          title: 'Input/Output Operations',
          content: [
            'Formative: getchar(), putchar(), getcs(), puts()',
            'Unformative: printf(), scanf()',
          ],
        },
      ],
    },
    {
      title: 'Control Statements',
      content: [
        'Simple If',
        'If Else',
        'Nested If Else',
        'Else If Ladder',
        'Switch',
        'Looping (For Loop, While Loop, Do While Loop)',
        'Nested For Loop',
        'Pattern Examples',
        'Jump Statements (Break, Continue)',
      ],
    },
    {
      title: 'Arrays',
      content: [
        'One-Dimensional Array',
        'Two-Dimensional Array',
        'Operations on Matrix',
      ],
    },
    {
      title: 'Pointers',
      content: [
        'Declaration of Pointer',
        'Nested Pointer or Pointer to Pointer',
        'Array Subscripts',
      ],
    },
    {
      title: 'Functions',
      content: [
        'Standard Library Function',
        'User-defined Function',
        'Call by Value',
        'Call by Reference',
        'Recursion Function',
      ],
    },
    {
      title: 'Storage Classes',
      content: [
        'Auto',
        'Extern',
        'Static',
        'Register',
      ],
    },
    {
      title: 'Dynamic Memory Allocation',
      content: [
        'malloc()',
        'calloc()',
        'realloc()',
        'free()',
        'DMA with Array and String',
      ],
    },
    {
      title: 'String Handling',
      content: [
        'String Handling Functions',
        'String Handling Using User-defined Functions and Pointers',
      ],
    },
    {
      title: 'Structures and Unions',
      content: [
        'Creating Structure Variable',
        'Accessing Structure Members',
        'Array of Structures',
        'Structure within Array',
        'Difference Between Structure and Union',
      ],
    },
    {
      title: 'Enumeration and Typedef',
      content: [
        'Enumeration',
        'Typedef',
      ],
    },
    {
      title: 'Header Files and Preprocessors',
      content: [
        'Creating Header Files in C',
        'Preprocessor',
        'Macros',
      ],
    },
    {
      title: 'File Handling',
      content: [
        'File Handling Operations',
        'I/O Operations in File Handling',
        'Copy File into Another File',
        {
          title: 'File Handling Functions',
          content: [
            'fputc()',
            'fgetc()',
            'fputs()',
            'fgets()',
            'fprintf()',
            'fscanf()',
            'fwrite()',
            'fread()',
            'fseek()',
            'ftell()',
          ],
        },
      ],
    },
    {
      title: 'Command Line Arguments',
      content: [
        'Using Command Line Arguments in C',
      ],
    },
    {
      title: 'Q/A Session',
      content: [
        'Discussion and Problem Solving',
      ],
    },
  ];
  

  const faqs = [
    {
      question: 'Who is this course for?',
      answer: 'This course is designed for beginners, software developers, and anyone looking to strengthen their programming fundamentals with C.',
    },
    {
      question: 'What kind of projects are included?',
      answer: 'Projects include creating a student management system, file handling applications, and implementing data structures.',
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
      review: 'This C programming course was excellent! The practical examples and clear explanations helped me understand complex topics easily.',
      rating: 5,
    },
    {
      name: 'Riya Sharma',
      review: 'I enjoyed the hands-on projects and detailed coverage of advanced concepts like pointers and memory management.',
      rating: 4,
    },
    {
      name: 'Kunal Singh',
      review: 'The certification gave me confidence and helped me secure a role as a software developer. Highly recommend this course!',
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
            Mastering C Programming: From Fundamentals to Advanced Core Concepts
          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
            Unlock the power of C programming with this comprehensive course designed for beginners and experienced developers alike.
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
              'C Basics: Syntax, data types, and control structures',
              'Functions: Recursion and storage classes',
              'Pointers and Memory Management: malloc, calloc, realloc, free',
              'File Handling: Working with files and error handling',
              'Dynamic Data Structures: Linked lists, stacks, and queues',
            ],
            [
              'Advanced Concepts: Preprocessor directives and bit manipulation',
              'Problem-Solving Skills: Enhance your logic and critical thinking',
              'Projects: Build real-world applications like a student management system',
              'Certification: Validate your C programming expertise',
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
