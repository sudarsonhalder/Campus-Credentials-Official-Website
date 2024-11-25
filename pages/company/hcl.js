import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

// FAQs data
const faqsList = [
  {
    q: "What is the eligibility criteria for HCL recruitment?",
    a: "Candidates must have a minimum of 60% marks in 10th, 12th, and graduation with no active backlogs. Relevant degrees like B.E., B.Tech, or MCA are typically required.",
  },
  {
    q: "Does HCL provide training for freshers?",
    a: "Yes, HCL provides training programs focused on technical and soft skills development for freshers.",
  },
  {
    q: "What are the roles offered for freshers at HCL?",
    a: "HCL offers roles such as Graduate Engineer Trainee, Software Engineer, and Senior Software Engineer.",
  },
  {
    q: "What is the test pattern for HCL's recruitment process?",
    a: "The recruitment process includes an online assessment with sections on aptitude, logical reasoning, verbal ability, and technical knowledge.",
  },
  {
    q: "Does HCL offer opportunities for international projects?",
    a: "Yes, HCL offers opportunities to work on global projects based on performance and business requirements.",
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
            Here are the most commonly asked questions about HCL.
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

const HCLPage = () => {
  const salaryDetails = [
    {
      role: "Graduate Engineer Trainee (GET)",
      description:
        "Entry-level role focusing on software development, testing, and maintenance across various projects.",
      salary: "₹3.5 LPA",
    },
    {
      role: "Senior Software Engineer",
      description:
        "Involves leading development teams, designing solutions, and ensuring quality delivery.",
      salary: "₹6.5 LPA",
    },
    {
      role: "Technical Lead",
      description:
        "Responsible for overseeing technical aspects of projects, mentoring teams, and client interactions.",
      salary: "₹9 LPA",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      {/* Header Section */}
      <header className="mb-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/2560px-HCL_Technologies_logo.svg.png"
          alt="HCL Logo"
          className="w-36 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800">
          HCL Technologies
        </h1>
        <p className="text-gray-600 mt-2">
          A global leader in IT services and consulting, HCL leverages technology to drive innovation and deliver transformative solutions to clients worldwide.
        </p>
      </header>

      {/* About HCL */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-red-600 mb-4">About HCL Technologies</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 1976, HCL Technologies is a global IT services company headquartered in Noida, India. With a presence in over 60 countries, HCL offers services in IT and business services, engineering and R&D, and products and platforms.
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
          HCL Hiring Process
        </h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Step 1: Online Assessment
        </h3>
        <p className="text-gray-600 leading-relaxed">
          The initial step involves an online assessment that evaluates candidates on various parameters:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Quantitative Aptitude: Tests mathematical and analytical skills.</li>
          <li>Logical Reasoning: Assesses problem-solving and reasoning abilities.</li>
          <li>Verbal Ability: Evaluates English language proficiency.</li>
          <li>Technical Knowledge: Questions related to programming and domain-specific topics.</li>
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
          The HR interview focuses on assessing the candidate's fit within the company culture, communication skills, and alignment with HCL's values.
        </p>
      </section>

      {/* FAQs */}
      <FAQs />
    </main>
  );
};

export default HCLPage;
