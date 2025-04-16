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
        script.setAttribute("data-payment_button_id", "pl_QJduEJIsxd0xOM");
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
      title: 'Introduction to Programming',
      content: [
        'History and importance of C',
        'Structure of a C program',
        'Compilation and Execution Process',
        'Setting up environment (Code::Blocks)',
      ],
    },
    {
      title: 'Basics of C Language',
      content: [
        'Keywords, Identifiers',
        'Variables and Constants',
        'Data types',
        'Input/Output functions: printf(), scanf()',
        {
          title: 'Basic Operators',
          content: [
            'Arithmetic',
            'Relational',
            'Logical',
            'Assignment',
            'Bitwise',
          ],
        },
      ],
    },
    {
      title: 'Control Structures',
      content: [
        'Decision making: if, if-else, nested if, else-if ladder',
        'Switch-case',
        'Loops: for, while, do-while',
        'Jump Statements: break, continue, goto',
      ],
    },
    {
      title: 'Functions in C',
      content: [
        'Function declaration and definition',
      ],
    },
    {
      title: 'Arrays',
      content: [
        'One-dimensional arrays',
        'Two-dimensional arrays',
      ],
    },
    {
      title: 'Strings',
      content: [
        'Declaration and initialization',
        'String handling functions (strlen(), strcpy(), strcat(), strcmp(), etc.)',
      ],
    },
    {
      title: 'Pointers',
      content: [
        'Pointer basics',
        'Pointer arithmetic',
        'Pointers with arrays',
        'Pointers with functions',
        'Pointers and strings',
      ],
    },
    {
      title: 'Structures',
      content: [
        'Defining and using structures',
        'Nested structures',
        'Array of structures',
      ],
    },
    {
      title: 'Dynamic Memory Allocation',
      content: [
        'malloc()',
        'calloc()',
        'realloc()',
        'free()',
      ],
    },
    {
      title: 'Header Files',
      content: [
        'Creating user-defined header files',
      ],
    },
    {
      title: 'C++ - Introduction',
      content: [
        'History of C++',
        'Features of C++',
        'Structure of a C++ Program',
        'Writing, compiling, and executing a C++ program',
        'cout, cin, and basic I/O',
      ],
    },
    {
      title: 'C++ - Variables and Data Types',
      content: [],
    },
    {
      title: 'Functions',
      content: [
        'Function declaration and definition',
        'Function call and return',
        'Function overloading',
        'Recursion',
        'Inline functions',
        'Default arguments',
      ],
    },
    {
      title: 'Object-Oriented Programming Concepts',
      content: [
        'Classes and objects',
        'Constructors and Destructors',
        'this pointer',
        'Static members',
        'Friend function and friend class',
      ],
    },
    {
      title: 'Inheritance and Polymorphism',
      content: [
        'Types of inheritance (Single, Multiple, Multilevel, Hierarchical, Hybrid)',
        'Virtual base classes',
        'Function Overriding',
        'Virtual functions and runtime polymorphism',
        'Abstract classes and pure virtual functions',
      ],
    },
    {
      title: 'Encapsulation and Abstraction',
      content: [
        'Access specifiers (public, private, protected)',
        'Data hiding and encapsulation',
        'Interfaces and abstract classes',
      ],
    },
    {
      title: 'Operator Overloading and Templates',
      content: [
        'Operator Overloading',
        'Function Templates',
        'Class Templates',
        'Template Specialization',
      ],
    },
    {
      title: 'Standard Template Library (STL)',
      content: [
        'Introduction to STL',
        'Vectors, Lists, Stacks, Queues, Maps, Sets',
        'Iterators',
        'Algorithms (sort, search, etc.)',
      ],
    },
    {
      title: 'Data Structures - Introduction',
      content: [
        'What are Data Structures?',
        'Types: Linear vs Non-Linear',
        'Static vs Dynamic Data Structures',
        'Time & Space Complexity Basics (Big-O Notation)',
        'Memory Representation of Data Structures',
      ],
    },
    {
      title: 'Linked Lists',
      content: [
        'Singly Linked List: Creation, Insertion, Deletion, Traversal',
        'Doubly Linked List',
        'Circular Linked List',
        'Operations: Search, Reverse, Sort, Merge',
        'Applications of Linked Lists',
        'Comparison with Arrays',
        'Code Projects',
      ],
    },
    {
      title: 'Stacks',
      content: [
        'Introduction using Arrays and Linked List',
        'Push, Pop, Peek operations',
        'Stack implementation using STL',
        'Applications: Expression Evaluation, Balanced Parentheses, Recursion Simulation',
      ],
    },
    {
      title: 'Queues',
      content: [
        'Introduction to Queues',
        {
          title: 'Types of Queues',
          content: [
            'Linear Queue',
            'Circular Queue',
            'Deque (Double-ended Queue)',
            'Priority Queue',
          ],
        },
        'Implementation using Array, Linked List, and STL',
        'Applications',
      ],
    },
    {
      title: 'Trees (Theory)',
      content: [
        'Basic Terminology (Node, Edge, Level, Leaf, Height, etc.)',
        'Binary Tree (BT)',
        'Binary Search Tree (BST): Insertion, Deletion, Traversal',
        'AVL Tree (Self-balancing BST)',
        'Heap (Min Heap / Max Heap)',
        'Tree Traversals using recursion and non-recursive',
        'Applications of Trees',
      ],
    },
    {
      title: 'Graphs (Theory)',
      content: [
        'Graph Terminology (Vertex, Edge, Adjacency)',
        'Representation: Adjacency Matrix & List',
        'Graph Traversals: DFS, BFS',
        'Shortest Path Algorithms: Dijkstra’s, Bellman-Ford',
        'Minimum Spanning Tree: Prim’s, Kruskal’s',
        'Applications in real life',
      ],
    },
    {
      title: 'Searching and Sorting',
      content: [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort',
        'Time Complexity Analysis',
      ],
    },
  ];
  
  
  

  const faqs = [
    {
      question: 'Is this course suitable for absolute beginners?',
      answer: 'Yes, this course starts from the basics of C and gradually moves to advanced concepts in C++, data structures, and problem-solving.',
    },
    {
      question: 'Does the course cover both C and C++ in detail?',
      answer: 'Absolutely! It covers foundational and advanced topics in both C and C++, including pointers, OOP, STL, and more.',
    },
    {
      question: 'Are there practical projects included?',
      answer: 'Yes, you’ll work on hands-on projects like a student management system, file-based operations, and data structure implementations.',
    },
    {
      question: 'Do I need any prior programming experience?',
      answer: 'No prior experience is required. All concepts are explained from scratch with clear examples and real-time practice.',
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, a certificate will be awarded after completing all modules and the final project, which you can showcase on your resume.',
    },
    {
      question: 'What support will I receive during the course?',
      answer: 'You’ll have lifetime access to course materials and 24/7 doubt resolution support to help you every step of the way.',
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
      name: 'Rahul Mehta',
      review: 'This course gave me a strong base in C and C++. The explanations and real-world examples made learning smooth and effective.',
      rating: 5,
    },
    {
      name: 'Sneha Patil',
      review: 'From basic syntax to advanced concepts like STL and memory allocation, this course covered everything in a very structured way.',
      rating: 4,
    },
    {
      name: 'Ankit Joshi',
      review: 'The Data Structures section helped me crack coding rounds in interviews. I highly recommend it to anyone preparing for tech roles.',
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
          Master C, C++, and Data Structures
          (With ISO-Certified Certification)          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
            Unlock the power of C, C++ and Data Structure with this comprehensive course designed for beginners and experienced developers alike.
          </p>
              {/* Course Duration, Mode, and Level Section */}
    <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
      <div className="flex items-center gap-2">
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/clock-solid%20(1).svg?updatedAt=1731241927965"
          alt="Time Icon"
          className="w-6 h-6"
        />
        <span>1 Month</span>
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
        {/* <div className="relative md:w-1/2 w-full">
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
        </div> */}
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
      'Learn C fundamentals: syntax, data types, and control flow',
      'Understand functions: declaration, recursion, and scope',
      'Master pointers and memory: malloc, calloc, realloc, free',
      'File handling essentials: open, read, write, and manage files',
      'Explore data structures: linked lists, stacks, and queues',
    ],
    [
      'Dive into C advanced topics: macros and bitwise operations',
      'Strengthen your logic: build critical thinking for C problems',
      'Hands-on projects: student system, file-based programs, etc.',
      'Earn certification: prove your knowledge and boost your resume',
      'Unlimited access: study anytime with expert support included',
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
