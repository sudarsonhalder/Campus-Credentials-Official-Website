import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const logos = [
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png',
  'https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png',
];

const CompanyLogos = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-800 sm:text-4xl sm:leading-tight">
          Trusted by Colleges and Students Worldwide
          </h2>
        </div>

        {/* Desktop Grid (6 Columns) */}
        <div className="hidden md:grid items-center max-w-4xl grid-cols-2 md:grid-cols-6 gap-x-10 gap-y-16 mx-auto mt-12 md:mt-20">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                className="object-contain w-full h-8 mx-auto"
                src={logo}
                alt={`logo-${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-12">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    className="object-contain w-full h-8"
                    src={logo}
                    alt={`logo-${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>

        <p className="mt-10 text-base text-center text-gray-500 md:mt-20">
          and, 200+ more Colleges
        </p>
      </div>
    </section>
  );
};

export default CompanyLogos;
