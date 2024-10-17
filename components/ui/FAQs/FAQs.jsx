import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const faqsList = [
    {
        q: "What is Campus Credentials?",
        a: "Campus Credentials is an educational platform that provides students with access to various resources, courses, and test series designed to enhance their learning and prepare them for placements."
    },
    {
        q: "What are the benefits of using Campus Credentials?",
        a: "Campus Credentials offers a range of benefits, including access to expert-led courses, comprehensive study materials, and targeted test series to help students excel in their job search."
    },
    {
        q: "How do I get started with Campus Credentials?",
        a: "To get started with Campus Credentials, simply sign up for an account on our website. Once registered, you can explore our courses and resources tailored to your learning needs."
    },
    {
        q: "What types of courses are offered?",
        a: "Campus Credentials offers a variety of courses, including full-stack development, data science, Python, and placement preparation, ensuring students gain the skills required for today’s job market."
    },
    {
        q: "Can I access free resources through Campus Credentials?",
        a: "Yes, Campus Credentials provides a comprehensive resource library where you can find free materials and books to support your learning journey."
    },
    {
        q: "Can I sell my digital products using Campus Credentials?",
        a: "Of course you can market and sell your digital products and subscriptions with Campus Credentials to drive higher conversions and save big on fees."
    }
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <SectionWrapper id="faqs">
            <div className="custom-screen text-gray-800">
                <div className="max-w-xl text-center mx-auto">
                    <h2 className="text-gray-800 text-2xl sm:text-4xl font-extrabold">
                        Everything you need to know
                    </h2>
                    <p className="mt-2 text-base sm:text-lg text-gray-600">
                        Here are the most questions people always ask about.
                    </p>
                </div>

                <div className="mt-10">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {faqsList.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="flex items-center justify-between w-full font-semibold text-gray-800"
                                    >
                                        {/* Adjusted the font size for desktop */}
                                        <span className="text-base lg:text-md text-left">
                                            {item.q}
                                        </span>
                                        <span className="text-xl">
                                            {activeIndex === idx ? (
                                                <FiChevronUp />
                                            ) : (
                                                <FiChevronDown />
                                            )}
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

export default FAQs;
