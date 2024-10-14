import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

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


const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-800">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-800">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs