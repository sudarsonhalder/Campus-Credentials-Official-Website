import { useState } from 'react';
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";

const Pricing = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const plans = [
        {
            name: "Basic Course",
            desc: "For students beginning their placement journey",
            price: 0,
            isMostPop: false,
            features: [
                "Access to foundational study materials",
                "Mock interview practice sessions",
                "Webinars on career guidance",
                "Basic resume templates and tools",
                "Email support for query resolution",
                "Free coding challenges access",
            ],
        },
        {
            name: "Advanced Training",
            desc: "For students seeking detailed interview preparation",
            price: 2999,
            isMostPop: false,
            features: [
                "Everything in Basic Course included",
                "Advanced interview prep sessions",
                "Professional resume optimization",
                "Career mentorship with industry experts",
                "Priority support via email and phone",
                "Job fairs and placement opportunities",
            ],
        },
        {
            name: "Corporate Training",
            desc: "For professionals seeking career transitions",
            price: 7999,
            isMostPop: false,
            features: [
                "Everything in Professional Program included",
                "Executive coaching for leadership roles",
                "Industry-specific career development",
                "Company placements with partners",
                "Exclusive professional network access",
                "Interview calls guaranteed by partners",
            ],
        }
    ];

    const gradientStyle = "linear-gradient(90deg, rgba(214,214,214,1) 0%, rgba(255,255,255,1) 97%)";

    return (
        <SectionWrapper id="pricing" className="custom-screen">
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
                    Choose the <span className="text-red-600">Perfect Plan</span> for Your Career Growth
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    Tailored programs designed to help you succeed. Whether you're just getting started or looking to level up your career, we’ve got you covered!
                </p>
            </div>

            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative flex flex-col justify-between h-full rounded-xl border border-gray-800 p-8 transition-all duration-500 group`}
                            style={{
                                background: hoveredCard === idx ? gradientStyle : "",
                                backgroundColor: item.isMostPop ? "white" : "white",
                                boxShadow:
                                    hoveredCard === idx || item.isMostPop
                                        ? "0px 10px 15px rgba(0, 0, 0, 0.2)"
                                        : ""
                            }}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Header */}
                            <div className="text-center space-y-4">
                                <span className={`text-black font-medium ${item.isMostPop ? "text-xl" : ""}`}>
                                    {item.name}
                                </span>
                                <div className="text-gray-800 text-3xl font-semibold">₹ {item.price}</div>
                                <p className="text-gray-800">{item.desc}</p>
                            </div>

                            {/* Features List */}
                            <div className="mt-4 flex-grow">
                                <ul className="space-y-3">
                                    {item.features.map((featureItem, featureIdx) => (
                                        <li key={featureIdx} className="flex items-center gap-5 text-gray-800">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-red-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {featureItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer with Button */}
                            <div className="pt-8">
                                <Button
                                    className={`w-full rounded-full text-white ring-offset-2 focus:ring transition-all duration-300 
                                        ${item.isMostPop 
                                            ? "bg-red-500 ring-gray-800" 
                                            : "bg-gray-800 ring-gray-800"}
                                        group-hover:bg-red-600`}
                                >
                                    {item.price === 0 ? "Get Started" : "Enroll Now"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
};

export default Pricing;
