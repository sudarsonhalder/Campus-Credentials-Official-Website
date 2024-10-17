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
  <div class="bg-white">

    <section class="bg-[#FCF8F1] bg-opacity-30">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="mt-4 text-3xl font-bold text-red-500 lg:mt-8 sm:text-5xl xl:text-5xl">About Us</h1>
                    <h1 class="mt-4 text-base text-black lg:mt-8 sm:text-lg">Campus Credentials is your ultimate partner in securing top placements, empowering students to excel in their academic and professional journeys. We understand the challenges of navigating a competitive landscape and provide personalized guidance to help you stand out. With extensive industry knowledge and a strong professional network, we connect you with opportunities that align with your skills, aspirations, and career goals. Our mentors and career advisors offer tailored strategies, from resume building to interview preparation, and our comprehensive training programs enhance your technical, soft, and industry-specific skills. Through exclusive recruitment drives, internships, and networking events, we prepare you to impress employers and thrive in your chosen field. At Campus Credentials, your success is our mission, and we take pride in helping you unlock your potential and secure placements that launch fulfilling careers. Join us today and start your journey towards a successful future!</h1>
                    {/* <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p> */}

                    <a href="#" title="" class="inline-flex items-center px-6 py-4 mb-8 font-semibold text-white transition-all duration-200 bg-red-500 rounded-full lg:mt-16" role="button">
                     Contact Us
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

                <div>
                    <img class="w-full" src="https://ik.imagekit.io/99djpd8k3/CC/About%20us%20Page.png?updatedAt=1729168785596" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

  
    
    <CompanyLogos/>

    <TeamSection/>
    <Testimonial/>
    <FAQs/>
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {aboutData.title}
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            {aboutData.description}
          </p>
          
        </div>

        {/* Slider for mobile view */}
        <div className="lg:hidden mt-8">
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    autoplay={{ delay: 3000 }} // Enable autoplay with a 3-second delay
    modules={[Autoplay]} // Initialize Swiper with Autoplay
  >
    {aboutData.team.map((member, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl h-96">
          {/* Fixed height */}
          <img
            className="object-cover w-full h-48"
            src={member.image}
            alt={member.name}
          />
          <div className="flex flex-col justify-between flex-1 px-5 py-6">
            <div className="flex-shrink-0">
              <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                {member.role}
              </span>
            </div>

            <div className="flex-1 mt-4">
              <p className="text-2xl font-semibold text-black">
                {member.name}
              </p>
              <p className="mt-2 text-base text-gray-600 truncate">
                {/* Truncate long text */}
                {member.description}
              </p>
            </div>

            {/* Minimal Button */}
            <button className="mt-4 py-2 px-4 text-white bg-red-500 rounded-md self-start">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Grid layout for larger screens */}
<div className="hidden lg:grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
  {aboutData.team.map((member, index) => (
    <div
      key={index}
      className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl h-96"
      // Fixed height for all cards
    >
      <img
        className="object-cover w-full h-48"
        src={member.image}
        alt={member.name}
      />
      <div className="flex flex-col justify-between flex-1 px-5 py-6">
        <div className="flex-shrink-0">
          <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
            {member.role}
          </span>
        </div>

        <div className="flex-1 mt-4">
          <p className="text-2xl font-semibold text-black">
            {member.name}
          </p>
          <p className="mt-2 text-base text-gray-600 truncate">
            {/* Truncate long text */}
            {member.description}
          </p>
        </div>

        {/* Minimal Button */}
        <button className="mt-4 py-2 px-4 text-white bg-red-500 rounded-md self-start">
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
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
      name: 'John Doe',
      role: 'CEO',
      image: 'https://via.placeholder.com/300',
      description: 'Leading the team with vision and passion.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/300',
      description: 'Innovating and pushing boundaries in technology.',
    },
    {
      name: 'Sarah Lee',
      role: 'Marketing Head',
      image: 'https://via.placeholder.com/300',
      description: 'Ensuring our brand reaches the right audience.',
    },
  ],
};

export default function AboutUsSection() {
  return <AboutUs aboutData={aboutData} />;
}
