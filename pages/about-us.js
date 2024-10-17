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
                <div className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl h-96"> {/* Fixed height */}
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
                      <p className="mt-2 text-base text-gray-600 truncate"> {/* Truncate long text */}
                        {member.description}
                      </p>
                    </div>
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
              className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl h-96" // Fixed height for all cards
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
                  <p className="mt-2 text-base text-gray-600 truncate"> {/* Truncate long text */}
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <CompanyLogos/>
    <Testimonial/>
    <TeamSection/>
    <FAQs/>
    </>
  );
};

// About Data
const aboutData = {
  title: 'Meet Our Team',
  description:
    'We are a passionate group of professionals dedicated to delivering the best services.',
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
