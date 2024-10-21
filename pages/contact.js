import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Autoplay } from 'swiper/modules'; // Only import Autoplay

function Contact() {
  const reviews = [
    {
      name: 'Jenny Wilson',
      role: 'Product Designer',
      text: 'You made it so simple. My new site is so much faster and easier to work with than my old site.',
      avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg',
    },
    {
      name: 'John Doe',
      role: 'Software Engineer',
      text: 'This is hands down the best experience I have had. Quick and efficient service with amazing design.',
      avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg',
    },
    {
      name: 'Anna Smith',
      role: 'Marketing Manager',
      text: 'I am beyond happy with the results. This team has surpassed my expectations!',
      avatar: 'https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg',
    },
  ];

  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          {/* Left Section */}
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
              Contact us to Campus Credentials
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
lorem ipsum dummy text
              </p>
              <img
                className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                alt=""
              />
              <img
                className="hidden w-full translate-x-24 translate-y-8 md:block"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt=""
              />
            </div>

            {/* Swiper Slider for Reviews */}
            <div className="hidden md:mt-auto md:block">
              <Swiper
                modules={[Autoplay]} // Use only Autoplay
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Enable autoplay
                spaceBetween={30}
                slidesPerView={1}
                loop={true} // Enable continuous loop
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-6">
                      <p className="text-lg leading-relaxed text-white">{review.text}</p>
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                        src={review.avatar}
                        alt={review.name}
                      />
                      <div className="ml-4">
                        <p className="text-base font-semibold text-white">{review.name}</p>
                        <p className="mt-px text-sm text-gray-400">{review.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:pl-12">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-6 sm:p-10">
                <h3 className="text-3xl font-semibold text-black">Contact Us</h3>
                <p className="mt-4 text-base text-gray-600">
                Contact Us form 
                </p>
                <form action="#" method="POST" className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label className="text-base font-medium text-gray-900">Your name</label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="block w-full px-3 py-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">Email address</label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="block w-full px-3 py-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">Phone Number</label>
                      <div className="mt-1.2">
                        <input
                          type="email"
                          placeholder="Enter your Phone Number"
                          className="block w-full px-3 py-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      {/* <label className="text-base font-medium text-gray-900">Project brief</label>
                      <div className="mt-2.5">
                        <textarea
                          placeholder="Enter your project brief"
                        //   rows="4"
                          className="block w-full px-3 py-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        ></textarea>
                      </div> */}
                    </div>
                    <button
                      type="submit"
                      className="w-full px-4 py-4 text-base font-bold text-white bg-red-500 rounded-lg hover:bg-orange-600 focus:outline-none"
                    >
                    Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
