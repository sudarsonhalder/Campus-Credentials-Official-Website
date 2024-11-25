import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Wipro recruitment?",
    a: "Candidates should have a minimum of 60% aggregate in 10th, 12th, and graduation. No active backlogs are allowed at the time of application.",
  },
  {
    q: "Does Wipro provide training for freshers?",
    a: "Yes, Wipro offers comprehensive training programs, including onboarding sessions, mentorship, and access to various learning resources.",
  },
  {
    q: "What roles are available for freshers at Wipro?",
    a: "Wipro offers roles such as Project Engineer and Wipro Turbo Engineer for fresh graduates.",
  },
  {
    q: "What is the test pattern for Wipro's recruitment process?",
    a: "The recruitment process typically includes an online assessment with aptitude and technical questions, followed by technical and HR interviews.",
  },
  {
    q: "Does Wipro offer opportunities for international projects?",
    a: "Yes, Wipro provides opportunities to work on global projects based on business needs and employee performance.",
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

const WiproPage = () => {
  const salaryDetails = [
    {
      role: "Project Engineer",
      description:
        "Entry-level role focusing on software development, testing, and maintenance across various projects.",
      salary: "₹3.5 LPA",
    },
    {
      role: "Wipro Turbo Engineer",
      description:
        "Involves leading development teams, designing solutions, and ensuring quality delivery.",
      salary: "₹7 LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Header Section */}
      <header className="mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png"
          alt="Wipro Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">Wipro</h1>
        <p className="text-gray-600 mt-2">
          A leading global information technology, consulting, and business
          process services company.
        </p>
      </header>

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Wipro</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1945, Wipro has grown into a multinational corporation
          headquartered in Bangalore, India. It offers services in information
          technology, consulting, and business process services. Wipro's
          mission is to help customers adapt to the digital world and make them
          successful.
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
        <h2 className="text-3xl font-bold text-red-600 mb-4">Wipro Hiring Process</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Application Submission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates can apply through Wipro's careers page or via campus
          recruitment drives. Ensure your resume is updated and tailored to the
          role you're applying for.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 2: Online Assessment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An online test evaluating aptitude, technical knowledge, and
          problem-solving skills.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 3: Technical Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates are assessed on their technical knowledge, domain-specific
          expertise, and ability to handle real-world challenges.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 4: HR Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The HR interview evaluates the candidate’s fit within the company
          culture, communication skills, and long-term goals.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default WiproPage;
