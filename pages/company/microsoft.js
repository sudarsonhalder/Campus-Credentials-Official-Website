import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Microsoft recruitment?",
    a: "Candidates must have a degree in a relevant field (e.g., Computer Science, Engineering) and strong problem-solving and technical skills. Some roles may require prior experience.",
  },
  {
    q: "Does Microsoft provide training for freshers?",
    a: "Yes, Microsoft provides extensive training programs, including hands-on projects, mentoring, and access to learning resources.",
  },
  {
    q: "What are the roles offered for freshers at Microsoft?",
    a: "Microsoft offers roles such as Software Development Engineer (SDE), Program Manager, and Data Scientist.",
  },
  {
    q: "What is the test pattern for Microsoft's recruitment process?",
    a: "The recruitment process includes an online assessment with coding challenges, multiple-choice questions on technical concepts, and behavioral questions.",
  },
  {
    q: "Does Microsoft offer opportunities for international projects?",
    a: "Yes, Microsoft provides opportunities to work on global projects based on business needs and employee performance.",
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

const MicrosoftPage = () => {
  const salaryDetails = [
    {
      role: "Software Development Engineer (SDE)",
      description: "Designs, develops, and maintains software solutions.",
      salary: "₹14,80,368 per year",
    },
    {
      role: "Senior Software Engineer",
      description:
        "Leads development teams, architects solutions, and ensures quality software delivery.",
      salary: "₹21,95,691 per year",
    },
    {
      role: "Technical Program Manager",
      description:
        "Oversees project timelines, coordinates between teams, and ensures successful project execution.",
      salary: "₹30,00,000 per year",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">


<header className="mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
          alt="Hexaware Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
        Microsoft Corporation
        </h1>
        <p className="text-gray-600 mt-2">
        A global leader in technology, Microsoft develops software, services,
          devices, and solutions that help people and businesses realize their
          full potential.        </p>
      </header>
     

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Microsoft</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1975 by Bill Gates and Paul Allen, Microsoft is a
          multinational technology company headquartered in Redmond,
          Washington. With operations in over 190 countries, Microsoft offers a
          wide range of products and services, including the Windows operating
          system, Office suite, Azure cloud computing services, and Surface
          devices. The company is committed to empowering every person and
          organization on the planet to achieve more.
        </p>
      </section>

      {/* Roles and Salary Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Roles and Salary Packages
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-gray-600">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Salary</th>
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
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Microsoft Hiring Process
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Application Submission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Apply through Microsoft's careers page or via campus recruitment
          drives. Tailor your resume to highlight your skills and achievements.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 2: Online Assessment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An online test evaluating coding skills, problem-solving abilities,
          and technical knowledge.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 3: Technical Interviews
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Multiple rounds of interviews focusing on data structures,
          algorithms, system design, and coding proficiency.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 4: HR Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An interview assessing cultural fit, communication skills, and
          alignment with Microsoft's mission.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default MicrosoftPage;
