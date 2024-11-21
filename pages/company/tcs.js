import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

// FAQs data
const faqsList = [
  {
    q: "What is the test pattern for the TCS National Qualifier Test (NQT)?",
    a: "The NQT consists of sections including Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Coding. It is designed to evaluate a candidate's technical and problem-solving skills over a duration of 180 minutes.",
  },
  {
    q: "Does TCS provide training for freshers after recruitment?",
    a: "Yes, TCS offers comprehensive training programs for freshers, such as the Initial Learning Program (ILP), which equips them with the necessary technical and professional skills before deployment to projects.",
  },
  {
    q: "What is the eligibility criteria to apply for TCS?",
    a: "Candidates must have at least 60% marks in 10th, 12th, and graduation with no active backlogs. A degree in relevant fields such as B.Tech, B.E., or MCA is typically required.",
  },
  {
    q: "How do I prepare for the TCS National Qualifier Test (NQT)?",
    a: "Prepare for NQT by practicing aptitude, logical reasoning, verbal ability, and coding. Focus on platforms like PrepInsta and HackerRank for mock tests and revise programming basics.",
  },
  {
    q: "What are the main roles offered by TCS for freshers?",
    a: "TCS offers roles like TCS Ninja (entry-level IT services), TCS Digital (focused on advanced technologies like AI, blockchain), and TCS Innovator (niche skills in ML, data science, etc.).",
  },
  {
    q: "Does TCS provide opportunities for international postings?",
    a: "Yes, TCS provides opportunities for international postings and global projects across over 50 countries. These are based on performance and project requirements.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
            Here are the most commonly asked questions about TCS.
          </p>
        </div>

        <div className="mt-6 py-2">
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
        </div>
      </div>
    </SectionWrapper>
  );
};

const TCSPage = () => {
  const salaryDetails = [
    {
      role: "TCS Ninja",
      description:
        "This is an entry-level role for freshers. Employees work on core IT services such as application development, maintenance, and support for clients across industries. It involves understanding client requirements and delivering effective solutions.",
      salary: "₹3.36 LPA",
    },
    {
      role: "TCS Digital",
      description:
        "This role focuses on cutting-edge digital technologies such as cloud computing, artificial intelligence, machine learning, and blockchain. Employees work on innovative projects aimed at transforming businesses digitally.",
      salary: "₹7 LPA",
    },
    {
      role: "TCS Innovator",
      description:
        "Designed for niche skills, this role involves working on high-level projects in advanced fields like data science, cybersecurity, and next-gen technology development.",
      salary: "₹9+ LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
    {/* Header Section */}
    <header className="mb-10">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
        alt="TCS Logo"
        className="w-36 mb-4"
      />
      <h1 className="text-4xl font-bold text-gray-800">
        Tata Consultancy Services (TCS)
      </h1>
      <p className="text-gray-600 mt-2">
        A global IT services and consulting leader, TCS empowers enterprises
        to embrace digital transformation and achieve business excellence.
      </p>
    </header>

    {/* About TCS */}
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">About TCS</h2>
      <p className="text-gray-600 leading-relaxed">
        Tata Consultancy Services (TCS) is a global IT services, consulting,
        and business solutions leader headquartered in Mumbai, India. Founded
        in 1968, TCS has become one of the most valuable IT services brands
        globally, with a presence in over 50 countries. Its expertise spans
        industries such as finance, healthcare, retail, manufacturing,
        telecom, and more.
      </p>
      <p className="text-gray-600 mt-4">
        TCS is known for its innovative solutions in artificial intelligence,
        machine learning, cloud computing, and blockchain. With a strong
        commitment to sustainability, employee welfare, and client success,
        TCS is a trusted partner for businesses worldwide.
      </p>
      <p className="text-gray-600 mt-4">
        As of 2023, TCS has over 600,000 employees globally, contributing to
        its annual revenue of ₹1.96 lakh crore. It is also ranked among the
        top IT service providers worldwide, recognized for its strong ethical
        values, innovation, and digital excellence.
      </p>
    </section>

    {/* Roles and Salary Table */}
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Roles and Salary Packages
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        TCS offers diverse roles for freshers and experienced professionals.
        Each role is tailored to specific skill sets and comes with
        competitive salary packages. Here is an overview:
      </p>
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

    {/* TCS Hiring Process */}
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        TCS Hiring Process
      </h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Step 1: National Qualifier Test (NQT)
      </h3>
      <p className="text-gray-600 leading-relaxed">
        The NQT is a mandatory online test conducted by TCS to evaluate
        candidates' aptitude, logical reasoning, verbal ability, and
        programming knowledge. It comprises:
        <ul className="list-disc list-inside mt-2">
          <li>Quantitative Aptitude: Covers mathematics, percentages, and logic.</li>
          <li>Verbal Ability: Tests reading comprehension and grammar.</li>
          <li>Logical Reasoning: Focuses on puzzles, seating arrangements, and patterns.</li>
          <li>Coding: Advanced coding challenges for technical roles.</li>
        </ul>
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Step 2: Technical Interview
      </h3>
      <p className="text-gray-600 leading-relaxed">
        In this round, candidates are assessed on programming languages (Java,
        Python, C++), data structures, algorithms, and database management.
        Practical problem-solving skills are tested through live coding
        challenges.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        Step 3: HR Interview
      </h3>
      <p className="text-gray-600 leading-relaxed">
        The HR interview evaluates communication skills, adaptability, and
        alignment with TCS’s core values. Common topics include long-term
        career goals, strengths, and how candidates handle challenges.
      </p>
    </section>

    {/* Preparation Tips */}
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Preparation Tips for TCS
      </h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        1. Master the Basics
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Focus on programming fundamentals in languages like Java, Python, or
        C++. Strengthen your understanding of data structures, algorithms, and
        problem-solving techniques.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        2. Practice Mock Tests
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Regularly attempt mock tests for NQT to get familiar with the format
        and improve speed. Use platforms like PrepInsta and HackerRank to
        practice.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
        3. Develop Soft Skills
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Enhance your communication and teamwork skills. Prepare for behavioral
        questions to handle the HR interview with confidence.
      </p>
    </section>
<FAQs/>
  
  </main>
  );
};

export default TCSPage;
