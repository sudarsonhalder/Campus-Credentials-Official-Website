import { useState } from 'react';
import { useRouter } from 'next/router'; 
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";

const Pricing = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    const plans = [
        {
            name: "Complete Aptitude Preparation",
            desc: "Begin your placement journey with complete aptitude prep!",
            price: 1599,
            isMostPop: false,
            features: [
              "Access to foundational study materials",
        "Practice tests for aptitude topics",
        "Webinars on career guidance",
        "Basic resume templates and tools",
        "Email support for query resolution",
        "Regular course updates with quizzes"
            ],
        },
        {
            name: "Complete Aptitude + Technical Preparation",
            desc: "Begin your journey with the Complete Placement Masterclass!",
            price: 2500,
            isMostPop: true, // This is the most popular card
            features: [
                "Complete access to all aptitude materials",
                "Choose between Java and Python courses",
                "SQL and logic-building exercises and lectures",
                "Regular quizzes and lecture updates",
                "Comprehensive career development resources",
                "24/7 query resolution support"
            ],
        },
        {
            name: "Complete Technical Preparation",
            desc: "Begin your placement journey with complete technical preparation!",
            price: 1599,
            isMostPop: false,
            features: [
                "Access to technical lectures and materials",
        "Choose between Python or Java courses",
        "Includes SQL as part of the curriculum",
        "Focus on logic-building exercises",
        "Course updates with quizzes and lectures",
        "Support through email and chat"
            ],
        }
    ];

    const handleAptitudeClick = () => {
        router.push("/aptitude-full-course");
    };

    const handlePlacementTrainingClick = () => {
        router.push("/complete-placement-training");
    };

    const handleTechnicalClick = (e) => {
        e.stopPropagation();
        setShowDropdown((prev) => !prev);
    };

    const handleLanguageSelect = (language) => {
        const route = language === 'Java' 
            ? '/technical-course-java' 
            : '/technical-course-python';
        router.push(`/${route}`);
    };

    return (
        <SectionWrapper id="pricing" className="custom-screen">
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-gray-900 text-4xl mt-10 font-bold sm:text-5xl">
                    Choose the <span className="text-red-500">Perfect Plan</span> for Your Career Growth
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                    Programs crafted to help you excel—whether you're beginning your journey or advancing your skills, Campus Credentials has the right fit for you!
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
                            className={`relative flex flex-col justify-between h-full p-8 transition-all duration-500 
                                        transform ${idx === 1 || hoveredCard === idx ? 'scale-105 shadow-2xl bg-white' : 'scale-100'} group rounded-lg border text-red border-gray-300`}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Header */}
                            <div className="text-center space-y-4">
                                <span className={`text-black font-bold ${item.isMostPop ? "text-xl font-bold" : ""}`}>
                                    {item.name}
                                </span>
                                <div className="text-gray-800 text-3xl font-semibold">₹ <span className="text-4xl font-bold">{item.price}</span></div>
                                <p className="text-red-500 font-bold">{item.desc}</p>
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

                            {/* Footer with Button or Dropdown */}
                            <div className="pt-8 relative">
                                <Button
                                    className={`rounded-md w-full text-lg font-bold transition duration-100 
                                        ${
                                            item.isMostPop || hoveredCard === idx
                                                ? "bg-red-500  text-white hover:bg-red-500 ring-orange-600" // Orange for center or hovered card
                                                : "text-black ring-gray-300 hover:bg-red-600 hover:text-white" // Neutral until hovered
                                        } shadow-md`}
                                    onClick={
                                        item.name === "Complete Aptitude Preparation"
                                            ? handleAptitudeClick
                                            : item.name === "Complete Technical Preparation"
                                            ? handleTechnicalClick
                                            : handlePlacementTrainingClick
                                    }
                                >
                                    Enroll Now
                                </Button>

                                {item.name === "Complete Technical Preparation" && showDropdown && (
                                    <div
                                        className="absolute z-10 left-0 right-0 mx-auto mt-2 w-64 bg-white rounded-lg shadow-lg p-5"
                                        style={{ top: "100%" }}
                                    >
                                        <p className="text-gray-700 font-semibold mb-2">
                                            Select a Language:
                                        </p>
                                        <div className="space-y-2">
                                            <button
                                                className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition"
                                                onClick={() => handleLanguageSelect('Java')}
                                            >
                                                Java
                                            </button>
                                            <button
                                                className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition"
                                                onClick={() => handleLanguageSelect('Python')}
                                            >
                                                Python
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
};

export default Pricing;
