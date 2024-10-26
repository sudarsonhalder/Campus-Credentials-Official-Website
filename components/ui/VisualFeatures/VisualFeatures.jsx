import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import Feature1 from "@/public/images/Feature-1.png";
import Feature2 from "@/public/images/Feature-2.png";

const VisualFeatures = () => {
    const cardsData = [
        {
            id: 1,
            title: "Free Online Books and Resources",
            features: [
                "Download 150+ books and freebies for free",
                "Download 150+ books and freebies for free",
                "Kickstart your career",
                "Kickstart your career",
                "Kickstart your career",
                "Download 150+ books and freebies for free",
            ],
            url:"https://resource.prepcrazy.com/",
            imageUrl: Feature1,
        },
        {
            id: 2,
            title: "Learning Management System by Campus Credentials",
            features: [
                "Download 150+ books and freebies for free",
                "Download 150+ books and freebies for free",
                "Kickstart your career",
                "Kickstart your career",
                "Kickstart your career",
                "Download 150+ books and freebies for free",
               
            ],
             url:"https://campuscredentials.online/",
            imageUrl: Feature2,
        },
    ];

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-800">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-800 text-2xl sm:text-4xl font-extrabold mt-20">
                        Enhance Your Learning Experience
                    </h2>
                    <p className="mt-3 text-md text-gray-700">
                        Access our Resource Portal for a wealth of free resources and books. 
                        Elevate your skills by enrolling in expertly crafted courses through 
                        our LMS Portal to boost your career prospects.
                    </p>
                </div>

                {cardsData.map((card) => (
                    <section key={card.id} className="my-12">
                        <div className="px-6 py-12 mx-auto bg-white shadow-lg rounded-xl max-w-7xl sm:px-8 lg:px-12">
                            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                                <div className="lg:order-2">
                                    <Image 
                                        className="w-full rounded-xl shadow-md" 
                                        src={card.imageUrl} 
                                        alt={`${card.title} illustration`} 
                                    />
                                </div>
                                <div className="lg:order-1">
                                    <h3 className="text-2xl font-bold text-black sm:text-3xl">
                                        {card.title}
                                    </h3>
                                    <ul className="mt-6 space-y-4">
                                        {card.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg 
                                                    className="flex-shrink-0 w-6 h-6 text-green-500" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path 
                                                        fillRule="evenodd" 
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                                        clipRule="evenodd" 
                                                    />
                                                </svg>
                                                <span className="ml-4 text-lg text-gray-700">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a 
                                            href= {card.url} 
                                            className="inline-flex items-center justify-center px-3 py-2 text-white text-lg font-medium bg-red-500 rounded-lg shadow transition"
                                        >
                                         Visit Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default VisualFeatures;
