import SectionWrapper from "@/components/SectionWrapper"
import Image from "next/image"
import Feature1 from "@/public/images/Feature-1.png"
import Feature2 from "@/public/images/Feature-2.png"
const VisualFeatures = () => {
    const cardsData = [
        {
            id: 1,
            title: "Free Online Books and Resources",
            features: [
                "Download 150+ books and freebies for free",
                "Kickstart your career",
            ],
            imageUrl: Feature1, 
        },
        {
            id: 2,
            title: "Unlock your Career Potential",
            features: [
                "We coach and mentor students",
                "Master the Campus Recruitment Process",
                "Aptitude training and GDPI preparation",
            ],
            imageUrl: Feature2, // Replace with the actual URL or variable
        },
    ];

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-800 ">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Enhance Your Learning Experience with Campus Credentials
                    </h2>
                    <p className="mt-3">
                        Access our Resource Portal for a wealth of free resources and books, and elevate your skills by enrolling in expertly crafted courses through our LMS Portal to boost your career prospects.
                    </p>
                </div>

                {cardsData.map((card, index) => (
                    <section key={card.id} className="bg-black rounded-full my-8 ">
                        <div className="px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8 rounded-xl">
                            <div className="py-10 sm:py-16 lg:py-24">
                                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
                                    <div className="lg:order-2">
                                        <Image className="w-full shadow-xl rounded-xl" src={card.imageUrl} alt="" />
                                    </div>
                                    <div className="lg:order-1">
                                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">{card.title}</h2>
                                        <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                                            {card.features.map((feature, featureIndex) => (
                                                <li className="flex items-center" key={featureIndex}>
                                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="ml-3 font-medium text-white">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                                            <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                                                Download Now
                                            </a>
                                            <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black" role="button">
                                                Explore UI Blocks
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default VisualFeatures;
