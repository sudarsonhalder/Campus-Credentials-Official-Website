import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Google recruitment?",
    a: "Candidates must have a degree in a relevant field such as Computer Science or Engineering, strong problem-solving skills, and experience in coding. Some roles may require prior work experience.",
  },
  {
    q: "Does Google provide training for freshers?",
    a: "Yes, Google offers comprehensive training programs, including onboarding, mentorship, and access to its vast learning resources.",
  },
  {
    q: "What roles are offered to freshers at Google?",
    a: "Google offers roles such as Software Engineer (L3), Data Scientist, and Product Manager.",
  },
  {
    q: "What is the test pattern for Google's recruitment process?",
    a: "The recruitment process includes an online assessment, technical interviews, and a final HR round focusing on problem-solving, system design, and coding skills.",
  },
  {
    q: "Does Google offer opportunities for international projects?",
    a: "Yes, Google provides opportunities to work on global projects based on business needs and individual performance.",
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

const GooglePage = () => {
  const salaryDetails = [
    {
      role: "Software Engineer (L3)",
      description: "Entry-level role focusing on software development, testing, and maintenance across various projects.",
      salary: "₹3.65M per year",
    },
    {
      role: "Software Engineer (L4)",
      description: "Involves leading development teams, designing solutions, and ensuring quality delivery.",
      salary: "₹7.04M per year",
    },
    {
      role: "Senior Software Engineer (L5)",
      description: "Responsible for overseeing technical aspects of projects, mentoring teams, and client interactions.",
      salary: "₹10.65M per year",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">


<header className="mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Hexaware Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
        Google LLC
        </h1>
        <p className="text-gray-600 mt-2">
        A global leader in technology, Google specializes in Internet-related
          services and products, including online advertising technologies,
          search engine, cloud computing, software, and hardware.        </p>
      </header>
      {/* About Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Google</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1998 by Larry Page and Sergey Brin, Google has grown to
          become one of the most influential technology companies globally.
          Headquartered in Mountain View, California, Google offers a wide
          range of products and services, including Search, YouTube, Gmail,
          Android, and the Google Cloud Platform. The company's mission is to
          organize the world's information and make it universally accessible
          and useful.
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
          Google Hiring Process
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Application Submission
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates can apply through Google's careers page or via campus
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
          Step 3: Technical Interviews
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Multiple rounds of technical interviews focusing on data structures,
          algorithms, system design, and coding proficiency.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 4: HR Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          An interview assessing cultural fit, communication skills, and
          alignment with Google's values and mission.
        </p>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </main>
  );
};

export default GooglePage;
