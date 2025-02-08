// pages/crt.js

import Head from 'next/head'
import React from 'react'

export default function Crt() {
  return (
    <>
      <Head>
        <title>Campus Credentials</title>
        <meta name="description" content="Unlock your Career Potential" />
      </Head>

      {/* Page Wrapper (no background color) */}
      <div className="min-h-screen relative">

{/* HERO SECTION */}
<section className="bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT SIDE: Image + Gradient + Headline + Bullet Points */}
    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="object-cover object-top w-full h-full"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg"
          alt="Hero background"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative">
        <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
          <h3 className="text-4xl font-bold text-white">
            Supercharge Your Career Potential
          </h3>
          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1
                       0 01-1.414 0l-4-4a1 1 0
                       011.414-1.414L8 12.586l7.293-7.293a1
                       1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Hands-on Learning
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010
                       1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
                       1 0 011.414-1.414L8 12.586l7.293-7.293a1
                       1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Real-world Projects
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010
                       1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
                       1 0 011.414-1.414L8 12.586l7.293-7.293a1
                       1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Industry Experts
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010
                       1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
                       1 0 011.414-1.414L8 12.586l7.293-7.293a1
                       1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium text-white">
                Career Support
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE: Your Existing Form */}
    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
      <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-black">
          Be a part of Campus Credentials
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Accelerate your career with hands-on education.
        </p>

        {/* Adapt your form fields here */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="text-base font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                placeholder="Enter your name"
                className="block w-full py-3 px-4 text-black placeholder-gray-500
                           border border-gray-200 rounded-md bg-gray-50
                           focus:outline-none focus:border-blue-600 focus:bg-white
                           caret-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-full py-3 px-4 text-black placeholder-gray-500
                           border border-gray-200 rounded-md bg-gray-50
                           focus:outline-none focus:border-blue-600 focus:bg-white
                           caret-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="block w-full py-3 px-4 text-black placeholder-gray-500
                           border border-gray-200 rounded-md bg-gray-50
                           focus:outline-none focus:border-blue-600 focus:bg-white
                           caret-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Select Plan
            </label>
            <div className="mt-2.5">
              <select
                className="block w-full py-3 px-4 text-black bg-gray-50 border
                           border-gray-200 rounded-md focus:outline-none
                           focus:border-blue-600 focus:bg-white"
              >
                <option>Plan A</option>
                <option>Plan B</option>
                <option>Plan C</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full
                       px-4 py-4 text-base font-semibold text-white
                       transition-all duration-200 bg-[#ef4444]
                       border border-transparent rounded-md
                       hover:opacity-90 focus:opacity-90
                       focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


{/* REPLACE the old "THREE CARDS SECTION" with this: */}
<section className="relative z-10 mt-[-60px] bg-white py-10 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
      <div>
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
          <svg
            className="text-blue-600 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
          <svg
            className="text-orange-600 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
          <svg
            className="text-green-600 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20.354 15.354A9 9 0 018.646 3.646
                 9.003 9.003 0 0012 21a9.003 9.003
                 0 008.354-5.646z"
            />
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
          <svg
            className="text-red-600 w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 4a1 1 0 011-1h16a1 1 0 011
                 1v2.586a1 1 0 01-.293.707l-6.414
                 6.414a1 1 0 00-.293.707V17l-4
                 4v-6.586a1 1 0 00-.293-.707L3.293
                 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* Pre-Requisite Courses */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Pre-Requisite Courses</h2>
            {/* Course Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="p-6 rounded shadow-sm flex border">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded mr-4 border">
                  <span>▶</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Course Title One</h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eu erat lacus, vitae venenatis sapien.
                  </p>
                  <button className="underline">View Curriculum</button>
                </div>
              </div>
              <div className="p-6 rounded shadow-sm flex border">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded mr-4 border">
                  <span>▶</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Course Title One</h3>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eu erat lacus, vitae venenatis sapien.
                  </p>
                  <button className="underline">View Curriculum</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hands-On Learning */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Hands-On Learning</h2>
            <div className="p-6 rounded shadow-sm flex flex-col md:flex-row border">
              {/* Left: List of Problems */}
              <div className="mb-4 md:mb-0 md:w-1/4 space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Problem 1</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Problem 2</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Problem 3</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Problem 4</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Problem 5</label>
                </div>
              </div>
              {/* Right: Editor & Output */}
              <div className="md:w-3/4 md:flex md:space-x-4">
                <div className="p-4 rounded mb-4 md:mb-0 flex-1 border h-32">
                  {/* Code Editor Placeholder */}
                  <p>Code Editor</p>
                </div>
                <div className="p-4 rounded flex-1 border h-32">
                  {/* Output Placeholder */}
                  <p>Output</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="bg-[#ef4444] text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </section>

 {/* PRICING SECTION (Replace your old Plans section) */}
<section className="py-10 bg-white sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Simple Pricing
      </h2>
      <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
        Try free for 30 Days
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
      {/* 1 Week Plan */}
      <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
        <div className="absolute hidden top-3 right-3">
          <svg
            className="w-6 h-6 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1
                 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1
                 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="px-4 py-5 lg:p-8">
          <p className="text-lg font-medium text-gray-500">1 Week</p>
          <p className="mt-4 text-6xl font-bold text-black">$4</p>
          <ul className="flex flex-col mt-8 space-y-1">
            <li className="text-base font-medium text-gray-900 lg:text-xl">
              Less than $1 a day
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Billed every week
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Cancel anytime
            </li>
          </ul>
        </div>
      </div>

      {/* 1 Month Plan */}
      <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md">
        <div className="absolute hidden top-3 right-3">
          <svg
            className="w-6 h-6 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293
                 a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1
                 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="px-4 py-5 lg:p-8">
          <p className="text-lg font-medium text-gray-500">1 Month</p>
          <p className="mt-4 text-6xl font-bold text-black">$19</p>
          <ul className="flex flex-col mt-8 space-y-1">
            <li className="text-base font-medium text-gray-900 lg:text-xl">
              Less than $5 a week
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Billed every month
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Cancel anytime
            </li>
          </ul>
        </div>
      </div>

      {/* 1 Year Plan (Highlighted) */}
      <div className="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow">
        <div className="absolute top-3 right-3">
          <svg
            className="w-6 h-6 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8
                 0 000 16zm3.707-9.293a1 1
                 0 00-1.414-1.414L9 10.586 7.707
                 9.293a1 1 0 00-1.414 1.414l2
                 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="px-4 py-5 lg:p-8">
          <p className="text-lg font-medium text-gray-500">1 Year</p>
          <p className="mt-4 text-6xl font-bold text-black">$99</p>
          <ul className="flex flex-col mt-8 space-y-1">
            <li className="text-base font-medium text-gray-900 lg:text-xl">
              Less than $2 a week
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Billed every year
            </li>
            <li className="text-base font-medium text-gray-600 lg:text-xl">
              Cancel anytime
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-8 text-center md:mt-16">
      <a
        href="#"
        title=""
        className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white
                   transition-all duration-200 rounded-md
                   bg-gradient-to-r from-fuchsia-600 to-blue-600
                   hover:opacity-80 focus:opacity-80"
        role="button"
      >
        Create your account
      </a>
      <p className="mt-4 text-sm text-gray-700">No Credit Card Required</p>
    </div>
  </div>
</section>


        {/* Gallery */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="w-full h-32 border flex items-center justify-center rounded">
                <span>Image</span>
              </div>
              <div className="w-full h-32 border flex items-center justify-center rounded">
                <span>Image</span>
              </div>
              <div className="w-full h-32 border flex items-center justify-center rounded">
                <span>Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Check out PPT for Details */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                Check out PPT for Details
              </h2>
              <button className="bg-[#ef4444] text-white px-6 py-2 rounded">
                Enroll Now
              </button>
            </div>
            <div className="w-full h-64 border flex items-center justify-center rounded">
              <span>PPT Image/Preview</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
