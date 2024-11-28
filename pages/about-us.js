import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css'; // Import basic Swiper styles
import { Autoplay } from 'swiper/modules'; // Correctly import the Autoplay module
import TeamSection from '@/components/TeamComponent/TeamSection';
import CompanyLogos from '@/components/ComponyLogo/ComponyLogo';
import Testimonial from '@/components/ui/Testimonial';
import FAQs from '@/components/ui/FAQs';

// About Us Component
const AboutUs = ({ aboutData }) => {
  return (<>
  <div className="bg-white">

    <section className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="mt-4 text-3xl font-bold text-red-500 lg:mt-8 sm:text-5xl xl:text-5xl">About Us</h1>
                    <h1 className="mt-4 text-base text-black lg:mt-8 sm:text-lg">Campus Credentials is your ultimate partner in securing top placements, empowering students to excel in their academic and professional journeys. We understand the challenges of navigating a competitive landscape and provide personalized guidance to help you stand out. With extensive industry knowledge and a strong professional network, we connect you with opportunities that align with your skills, aspirations, and career goals. Our mentors and career advisors offer tailored strategies, from resume building to interview preparation, and our comprehensive training programs enhance your technical, soft, and industry-specific skills. Through exclusive recruitment drives, internships, and networking events, we prepare you to impress employers and thrive in your chosen field. At Campus Credentials, your success is our mission, and we take pride in helping you unlock your potential and secure placements that launch fulfilling careers. Join us today and start your journey towards a successful future!
                    </h1>
                    {/* <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p> */}
                    <div className="flex items-center gap-4">
      {/* Heading */}
      <span className="font-bold text-gray-800 whitespace-nowrap text-sm md:text-base">
        In association with:
      </span>

      {/* NSDC Logo */}
      <img
        src="https://presentations.gov.in/wp-content/uploads/2020/06/NSDC-Preview.png"
        alt="NSDC Logo"
        className="w-12 h-12 md:w-20 md:h-20 object-contain"
      />

      {/* NASSCOM Logo */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguMXb1gKBpts708zzm3PsEUoISjmceEZzvw&s"
        alt="NASSCOM Logo"
        className="w-12 h-12 md:w-20 md:h-20 object-contain"
      />

      {/* Skill India Logo */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MS_jQ9Z9i3eTzikHM43K3mxGne85p0w4LA&s"
        alt="Skill India Logo"
        className="w-12 h-12 md:w-20 md:h-20 object-contain"
      />
    </div>
    <div className="flex items-center space-x-2 flex-wrap">
      {/* Google Logo */}
      <img
        src="https://p7.hiclipart.com/preview/543/934/536/google-logo-g-suite-google-thumbnail.jpg" // Replace with the actual path to your uploaded Google logo image
        alt="Google Logo"
        className="w-8 h-8"
      />
      {/* Rating Stars */}
      <div className="flex items-center">
        {[...Array(4)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-400"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
        {/* Half Star */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-400"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01L12 2z" />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77V2z"
            fill="#e2e8f0"
          />
        </svg>
      </div>
      {/* Rating Text */}
      <p className="text-gray-800 font-medium">1000+ Google ratings</p>
    </div>
                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-6 font-semibold text-white transition-all duration-200 bg-red-500 rounded-full lg:mt-8" role="button">
                     Contact Us
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div>
                    <img className="w-full" src="https://ik.imagekit.io/99djpd8k3/CC/About%20us%20Page.png?updatedAt=1729168785596" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

  
    
    {/* <CompanyLogos/> */}

    {/* <TeamSection/> */}
    {/* <Testimonial/> */}
   
    <FAQs/>
  
    </>
  );
};

// About Data
const aboutData = {
  title: 'Featured in the News',
  description:
    ' Campus Credentials has been recognized for its innovative approach to placement training and featured in leading media outlets.',
  team: [
    {
      name: 'Campus Credentials',
      role: 'Aaj Tak',
      image: 'https://via.placeholder.com/300',
      description: 'Leading the team with vision and passion.',
    },
    {
      name: 'Campus Credentials',
      role: 'Times of India',
      image: 'https://via.placeholder.com/300',
      description: 'Innovating and pushing boundaries in technology.',
    },
    {
      name: 'Campus Credentials',
      role: 'Bharat Samachar',
      image: 'https://via.placeholder.com/300',
      description: 'Ensuring our brand reaches the right audience.',
    },
  ],
};

export default function AboutUsSection() {
  return <AboutUs aboutData={aboutData} />;
}
