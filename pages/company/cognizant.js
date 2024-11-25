import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Cognizant recruitment?",
    a: "Candidates should have a relevant degree in fields like Computer Science or Engineering, along with strong problem-solving and technical skills. Specific roles may have additional requirements.",
  },
  {
    q: "Does Cognizant provide training for freshers?",
    a: "Yes, Cognizant offers comprehensive training programs, including onboarding sessions, mentorship, and access to various learning resources.",
  },
  {
    q: "What roles are available for freshers at Cognizant?",
    a: "Cognizant offers roles such as Programmer Analyst Trainee (PAT), Graduate Engineer Trainee (GET), and Associate for fresh graduates.",
  },
  {
    q: "What is the test pattern for Cognizant's recruitment process?",
    a: "The recruitment process typically includes an online assessment with aptitude and technical questions, followed by technical and HR interviews.",
  },
  {
    q: "Does Cognizant offer opportunities for international projects?",
    a: "Yes, Cognizant provides opportunities to work on global projects based on business needs and employee performance.",
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

const CognizantPage = () => {
  const salaryDetails = [
    {
      role: "Programmer Analyst Trainee (PAT)",
      description:
        "Entry-level role focusing on software development, testing, and maintenance across various projects.",
      salary: "₹4 LPA",
    },
    {
      role: "Graduate Engineer Trainee (GET)",
      description:
        "Involves leading development teams, designing solutions, and ensuring quality delivery.",
      salary: "₹4.5 LPA",
    },
    {
      role: "Associate",
      description:
        "Responsible for overseeing technical aspects of projects, mentoring teams, and client interactions.",
      salary: "₹6 LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">




<header className="mb-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE0GgxQbFi1chj5IfW9bPKDh6FMF7sbXfLA&s"
          alt="Cognizant Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
        Cognizant        </h1>
        <p className="text-gray-600 mt-2">
        A global leader in technology and consulting services, Cognizant
        specializes in IT services and solutions worldwide.        </p>
      </header>

      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Cognizant</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1994, Cognizant has grown into a multinational technology
          company headquartered in Teaneck, New Jersey. It offers IT services,
          including digital, technology, consulting, and operations services.
          Cognizant's mission is to engineer modern businesses to improve
          everyday life.
        </p>
      </section>

      {/* Roles and Salary Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
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
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Cognizant Hiring Process
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Application Submission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates can apply through Cognizant's careers page or via campus
          recruitment drives. Ensure your resume is updated and tailored to the
          role you're applying for.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 2: Online Assessment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An online test evaluating coding skills, problem-solving abilities,
          and technical knowledge. This may include multiple-choice questions
          and coding challenges.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 3: Technical Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates are assessed on their technical knowledge, problem-solving
          skills, and coding proficiency.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 4: HR Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The HR interview evaluates cultural fit, communication skills, and
          alignment with Cognizant's values.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default CognizantPage;
