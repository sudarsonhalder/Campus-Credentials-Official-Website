import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "@/public/images/bg-pattern.webp"
import LayoutEffect from "@/components/LayoutEffect"

const CTA = () => (
    <section>
        <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
            <div className="custom-screen py-28 relative">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="relative z-10">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Unleash the Power of Campus Credentials
                            </h2>
                            <p className="mt-5 text-gray-800">
                            At Campus Credentials, we are your perfect partner for career success! Our comprehensive platform offers test series and courses designed specifically to prepare you for placements, ensuring you have the knowledge and skills to excel in your job search.
                            </p>
                        </div>
                        <div className="mt-5 flex justify-center font-medium text-sm">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-blackbg-red-600 hover:bg-red-500 active:bg-red-700 "
                            >
                                Start now
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </LayoutEffect>
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    alt="Background pattern"
                />
            </div>
        </GradientWrapper>



        {/* <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Real humans are here to help you building your brand</h2>
            <p className="mt-6 text-lg text-gray-900">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <a href="#" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact our support
            </a>
        </div>
    </div>

    <div className="container mx-auto 2xl:px-12">
        <img className="w-full mt-6" src="https://ik.imagekit.io/99djpd8k3/CC/group-of-people.png?updatedAt=1728896105052" alt="" />
    </div>
</section> */}
    </section>
)

export default CTA