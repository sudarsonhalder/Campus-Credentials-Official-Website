"use client";
import { useState, useEffect } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import GradientWrapper from "@/components/GradientWrapper";
import user1 from "/public/testimonial/user1.webp";
import user2 from "/public/testimonial/user2.webp";
import user3 from "/public/testimonial/user3.webp";
import user4 from "/public/testimonial/user4.webp";
import user5 from "/public/testimonial/user5.webp";
import user6 from "/public/testimonial/user6.webp";
import Image from "next/image";
import LayoutEffect from "@/components/LayoutEffect";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure autoplay styles are included

const Testimonial = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Ensure the component is mounted before rendering
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        handleResize(); // Run on initial render
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null; // Prevent rendering during SSR

    const testimonials = [
        { avatar: user1, name: "Dr. Anil Desai", title: "TPO – IIT Bombay", quote: "Campus Credentials has been transformative for our students, boosting placements with industry-relevant skills in full-stack development and data science." },
        { avatar: user2, name: "Ms. Shweta Patil", title: "TPO – VJTI Mumbai", quote: "Our students' technical skills have improved significantly with Campus Credentials' courses, especially in Python and ReactJS." },
        { avatar: user3, name: "Mr. Rahul Mehta", title: "TPO – SPIT", quote: "Campus Credentials has enhanced employability, focusing on practical learning in cloud computing and AI/ML, making our graduates stand out." },
        { avatar: user4, name: "Prof. Priya Menon", title: "TPO – NMIMS Mumbai", quote: "Campus Credentials bridges the gap between academia and industry with hands-on projects and job readiness workshops, improving placement numbers." },
        { avatar: user5, name: "Dr. Vijay Kulkarni", title: "TPO – DJ Sanghvi College", quote: "Campus Credentials excels in cybersecurity and full-stack development training, preparing students for dynamic roles with structured learning." },
        { avatar: user6, name: "Mr. Amit Joshi", title: "TPO – KJ Somaiya Institute", quote: "Our students' coding skills have improved greatly with Campus Credentials' Python and Java courses, leading to strong career growth." }
    ];

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen text-gray-800">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-800 text-2xl sm:text-4xl font-extrabold mt-20">
                        Campus Credentials is loved by the best colleges around the world
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect className="duration-1000 delay-300" isInviewState={{ trueState: "opacity-1", falseState: "opacity-0 translate-y-12" }}>
                        {isMobile ? (
                            <Swiper modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} spaceBetween={16} slidesPerView={1} loop={true} className="w-full">
                                {testimonials.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="flex justify-center p-4">
                                            <TestimonialCard item={item} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                                {testimonials.map((item, idx) => (
                                    <li key={idx} className="flex">
                                        <TestimonialCard item={item} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    );
};

const TestimonialCard = ({ item }) => (
    <figure className="flex flex-col justify-between gap-y-6 h-full w-full p-4 rounded-xl border border-gray-800">
        <blockquote>
            <p className="text-gray-800">{item.quote}</p>
        </blockquote>
        <div className="flex items-center gap-x-4">
            <Image src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
                <span className="block text-gray-800 font-semibold">{item.name}</span>
                <span className="block text-sm mt-0.5 text-gray-600">{item.title}</span>
            </div>
        </div>
    </figure>
);

export default Testimonial;
