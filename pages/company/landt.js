import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for L&T recruitment?",
    a: "Candidates should have a minimum of 65% aggregate in B.Tech/BE/BCA/M.Tech/MCA or an equivalent diploma in relevant fields, with no backlogs at the time of application.",
  },
  {
    q: "Does L&T provide training for freshers?",
    a: "Yes, L&T offers comprehensive training programs, including onboarding sessions, mentorship, and access to various learning resources.",
  },
  {
    q: "What roles are available for freshers at L&T?",
    a: "L&T offers roles such as Graduate Engineer Trainee (GET) and Graduate Commercial Trainee (GCT) for fresh graduates.",
  },
  {
    q: "What is the test pattern for L&T's recruitment process?",
    a: "The recruitment process typically includes an online assessment with aptitude and technical questions, followed by technical and HR interviews.",
  },
  {
    q: "Does L&T offer opportunities for international projects?",
    a: "Yes, L&T provides opportunities to work on global projects based on business needs and employee performance.",
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

const LTPage = () => {
  const salaryDetails = [
    {
      role: "Graduate Engineer Trainee (GET)",
      description:
        "Entry-level role focusing on engineering projects, design, and implementation across various sectors.",
      salary: "₹6 LPA",
    },
    {
      role: "Graduate Commercial Trainee (GCT)",
      description:
        "Involves handling commercial aspects, project management, and client interactions.",
      salary: "₹5.5 LPA",
    },
    {
      role: "Assistant Manager",
      description:
        "Responsible for overseeing project execution, team management, and ensuring quality delivery.",
      salary: "₹8 LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Header Section */}
      <header className="mb-10">
        <img
          src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/43f2c66fc6bbaf1d7e351d0321b07567"
          alt="L&T Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">Larsen & Toubro (L&T)</h1>
        <p className="text-gray-600 mt-2">
          A leading Indian multinational conglomerate with interests in engineering, construction, manufacturing, technology, and financial services.
        </p>
      </header>

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About L&T</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1938 by Henning Holck-Larsen and Søren Kristian Toubro, L&T
          has grown into a multinational conglomerate headquartered in Mumbai,
          Maharashtra. It offers services in engineering, construction,
          manufacturing, technology, and financial services. L&T's mission is
          to deliver high-quality projects and services in a timely manner,
          ensuring customer satisfaction.
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
        <h2 className="text-3xl font-bold text-red-600 mb-4">L&T Hiring Process</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Application Submission</h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates can apply through L&T's careers page or via campus
          recruitment drives. Ensure your resume is updated and tailored to the
          role you're applying for.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 2: Online Assessment</h3>
        <p className="text-gray-600 leading-relaxed">
          An online test evaluating aptitude, technical knowledge, and problem-solving skills.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 3: Technical Interview</h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates are assessed on their technical knowledge, domain-specific
          expertise, and ability to handle real-world challenges.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 4: HR Interview</h3>
        <p className="text-gray-600 leading-relaxed">
          The HR interview evaluates the candidate’s fit within the company culture, communication skills, and long-term goals.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default LTPage;
