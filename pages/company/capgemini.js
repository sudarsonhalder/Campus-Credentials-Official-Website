import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for Capgemini recruitment?",
    a: "Candidates must have a minimum of 60% marks in 10th, 12th, and graduation with no active backlogs. Degrees like B.E, B.Tech, MCA, or equivalent are typically required.",
  },
  {
    q: "Does Capgemini provide training for freshers?",
    a: "Yes, Capgemini offers extensive training programs for freshers, focusing on technical, professional, and soft skills development.",
  },
  {
    q: "How do I prepare for the Capgemini recruitment process?",
    a: "Focus on technical skills, problem-solving, and communication. Practice coding and aptitude tests on platforms like HackerRank and PrepInsta.",
  },
  {
    q: "What are the primary roles offered by Capgemini?",
    a: "Capgemini offers roles such as Software Engineer, Consultant, Senior Consultant, and Manager, with opportunities for advancement.",
  },
  {
    q: "Does Capgemini offer international projects?",
    a: "Yes, Capgemini provides opportunities to work on international projects based on business requirements and performance.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures client-specific logic runs after mounting
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faqs">
      <div className="custom-screen text-gray-800">
        <div className="max-w-xl text-left mx-auto">
          <h2 className="text-gray-800 text-3xl sm:text-4xl font-extrabold py-8">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            Here are the most commonly asked questions about Capgemini.
          </p>
        </div>

        <div className="mt-6 py-2">
          {isClient && (
            <LayoutEffect
              className="duration-1000 delay-300"
              isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0 translate-y-12",
              }}
            >
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                {faqsList.map((item, idx) => (
                  <li key={idx} className="space-y-3">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="flex items-center justify-between w-full font-semibold text-gray-800"
                    >
                      <span className="text-base lg:text-md text-left">
                        {item.q}
                      </span>
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
                  </li>
                ))}
              </ul>
            </LayoutEffect>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

const CapgeminiPage = () => {
  const salaryDetails = [
    {
      role: "Software Engineer",
      description:
        "Involved in designing, developing, and maintaining software applications for clients across various industries.",
      salary: "₹4.8 LPA",
    },
    {
      role: "Senior Consultant",
      description:
        "Provides expert advice and solutions in specific domains, leading project teams to deliver client objectives.",
      salary: "₹13.2 LPA",
    },
    {
      role: "Manager",
      description:
        "Oversees project delivery, manages client relationships, and ensures the achievement of business goals.",
      salary: "₹16.5 LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Header Section */}
      <header className="mb-10">
        <img
          src="https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png"
          alt="Capgemini Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
          Capgemini
        </h1>
        <p className="text-gray-600 mt-2">
          A global leader in consulting, technology services, and digital transformation, Capgemini empowers businesses to unlock innovation and achieve excellence in an ever-evolving technological landscape.
        </p>
      </header>

      {/* About Capgemini */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About Capgemini</h2>
        <p className="text-gray-600 leading-relaxed">
          Capgemini, founded in 1967, is a global leader in consulting, technology services, and digital transformation. With a presence in over 50 countries, Capgemini offers a wide range of services, including strategy and transformation consulting, application development, and managed services.
        </p>
      </section>

      {/* Roles and Salary Table */}
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

      {/* Hiring Process */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Capgemini Hiring Process
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Online Assessment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The initial step involves an online assessment that evaluates candidates on various parameters:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Technical Test: Assesses knowledge in programming and technical concepts.</li>
          <li>Essay Writing: Evaluates written communication skills.</li>
          <li>Game-Based Aptitude Test: Measures cognitive abilities through interactive games.</li>
          <li>Spoken English Test: Assesses verbal communication proficiency.</li>
          <li>Coding Test: Tests problem-solving and coding skills.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 2: Technical Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Candidates are evaluated on their technical knowledge, problem-solving abilities, and understanding of programming languages, data structures, and algorithms.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Step 3: HR Interview
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The HR interview focuses on assessing the candidate's fit within the company culture, communication skills, and alignment with Capgemini's values.
        </p>
      </section>

      {/* FAQs */}
      <FAQs />
    </main>
  );
};

export default CapgeminiPage;
