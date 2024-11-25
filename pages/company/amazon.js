import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Amazon recruitment?",
    a: "Candidates should have a relevant degree in fields like Computer Science or Engineering, along with strong problem-solving and technical skills. Specific roles may have additional requirements.",
  },
  {
    q: "Does Amazon provide training for freshers?",
    a: "Yes, Amazon offers comprehensive training programs, including onboarding sessions, mentorship, and access to various learning resources.",
  },
  {
    q: "What roles are available for freshers at Amazon?",
    a: "Amazon offers roles such as Software Development Engineer (SDE), Data Analyst, and Operations Manager for fresh graduates.",
  },
  {
    q: "What is the test pattern for Amazon's recruitment process?",
    a: "The recruitment process typically includes an online assessment with coding challenges, technical interviews focusing on data structures and algorithms, and behavioral interviews.",
  },
  {
    q: "Does Amazon offer opportunities for international projects?",
    a: "Yes, Amazon provides opportunities to work on global projects based on business needs and employee performance.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="custom-screen text-gray-800 mt-16">
      <h2 className="text-gray-800 text-3xl sm:text-4xl font-extrabold py-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex items-center justify-between w-full font-semibold text-gray-800"
            >
              <span className="text-base lg:text-md text-left">{item.q}</span>
              <span className="text-xl">
                {activeIndex === idx ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            {activeIndex === idx && (
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600"
              ></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AmazonPage = () => {
  const salaryDetails = [
    {
      role: "Software Development Engineer (SDE) I",
      description: "Designs, develops, and maintains software solutions.",
      salary: "₹2.67M per year",
    },
    {
      role: "Software Development Engineer (SDE) II",
      description: "Leads development teams, architects solutions, and ensures quality delivery.",
      salary: "₹5.98M per year",
    },
    {
      role: "Senior Software Engineer",
      description: "Oversees technical aspects of projects, mentors teams, and interacts with clients.",
      salary: "₹15.87M per year",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Header Section */}

      <header className="mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
        Amazon
        </h1>
        <p className="text-gray-600 mt-2">
        A global leader in e-commerce and cloud computing, Amazon offers a wide range of products and services worldwide.
        </p>
      </header>

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Amazon</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded by Jeff Bezos in 1994, Amazon has grown into a multinational technology company headquartered in Seattle, Washington. It offers e-commerce, cloud computing, digital streaming, and artificial intelligence services. Amazon's mission is to be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.
        </p>
      </section>

      {/* Roles and Salary Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Roles and Salary Packages</h2>
        <table className="w-full border-collapse border border-gray-300 text-gray-600">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Average Salary</th>
            </tr>
          </thead>
          <tbody>
            {salaryDetails.map((role, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{role.role}</td>
                <td className="border px-4 py-2">{role.description}</td>
                <td className="border px-4 py-2">{role.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Hiring Process Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Amazon Hiring Process</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Application Submission</h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates can apply through Amazon's careers page or via campus recruitment drives. Ensure your resume is updated and tailored to the role you're applying for.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 2: Online Assessment</h3>
        <p className="text-gray-600 leading-relaxed">
          An online test evaluating coding skills, problem-solving abilities, and technical knowledge. This may include multiple-choice questions and coding challenges.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 3: Technical Interviews</h3>
        <p className="text-gray-600 leading-relaxed">
          Multiple rounds of technical interviews focusing on data structures, algorithms, system design, and coding proficiency.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 4: Behavioral Interview</h3>
        <p className="text-gray-600 leading-relaxed">
          An interview assessing cultural fit, leadership principles, and alignment with Amazon's mission and values.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default AmazonPage;
