import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="py-6 bg-gray-50 sm:py-8 lg:pt-10 lg:pb-5">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between gap-y-10">
                    {/* Left Section: Logo, Description, and Social Icons */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <img
                            className="w-auto h-24 mx-auto lg:mx-0"
                            src="https://campuscredentials.online/wp-content/uploads/2022/08/CC-Logo-Dark.png"
                            alt="Campus Credentials Logo"
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-4 lg:mt-0">
                            We provide Comprehensive Campus Recruitment Training to allow students to crack any Placement Interview and get their Dream Job.
                        </p>
                        <ul className="flex justify-center lg:justify-start items-center space-x-4 mt-4">
                            <li>
                                <Link href="https://www.linkedin.com/company/campus-credentials/">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-800 w-5 h-5 hover:text-red-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@campuscredentials">
                                    <FontAwesomeIcon icon={faYoutube} className="text-gray-800 w-5 h-5 hover:text-red-500" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/campus_credentials">
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-800 w-5 h-5 hover:text-red-500" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section: Links */}
                    <div className="lg:w-2/3 flex justify-center lg:justify-end">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12 text-center md:text-right">
                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Offerings</p>
                                <ul className="mt-5 space-y-2">
                                    <li>
                                        <Link href="https://learn.campuscredentials.com" className="text-base text-black hover:text-red-500">
                                            LMS Portal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://exam.campuscredentials.com" className="text-base text-black hover:text-red-500">
                                            Exam Portal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://code.campuscredentials.com" className="text-base text-black hover:text-red-500">
                                            Code Portal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://certificate.campuscredentials.com" className="text-base text-black hover:text-red-500">
                                            Certificate Checker
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Pages</p>
                                <ul className="mt-5 space-y-2">
                                    <li>
                                        <Link href="/about-us" className="text-base text-black hover:text-red-500">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-base text-black hover:text-red-500">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sitemap" className="text-base text-black hover:text-red-500">
                                            Sitemap
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Legals</p>
                                <ul className="mt-5 space-y-2">
                                    <li>
                                        <Link href="/terms-of-service" className="text-base text-black hover:text-red-500">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy" className="text-base text-black hover:text-red-500">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/refund-policy" className="text-base text-black hover:text-red-500">
                                            Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-8 mb-4 border-gray-200" />

                <p className="text-sm text-center text-gray-600">
                    © Copyright 2024, All Rights Reserved by Campus Credentials
                </p>
            </div>
        </section>
    );
};

export default Footer;
