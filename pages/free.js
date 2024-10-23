import React, { useEffect, useState } from 'react';
import CurriculumAccordion from '@/components/Curriculum/CurriculumAccordion';
import FAQAccordion from '@/components/ui/FAQs/FAQAccordion';

const App = () => {
  
  const SIX_HOURS_IN_SECONDS = 6 * 60 * 60;

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SIX_HOURS_IN_SECONDS);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const getRemainingTime = () => {
        const startTime = localStorage.getItem('startTime');
        const currentTime = Math.floor(Date.now() / 1000);

        if (!startTime) {
          localStorage.setItem('startTime', currentTime);
          return SIX_HOURS_IN_SECONDS;
        }

        const elapsedTime = currentTime - parseInt(startTime, 10);

        if (elapsedTime >= SIX_HOURS_IN_SECONDS) {
          localStorage.setItem('startTime', currentTime);
          return SIX_HOURS_IN_SECONDS;
        }

        return SIX_HOURS_IN_SECONDS - elapsedTime;
      };

      setTimeLeft(getRemainingTime());

      const interval = setInterval(() => {
        setTimeLeft(getRemainingTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const curriculum = [
    { title: 'Introduction to Course', content: 'A quick overview of what this course covers.' },
    { title: 'Module 1: Basics', content: 'Learn the fundamentals and get started.' },
    { title: 'Module 2: Advanced Topics', content: 'In-depth exploration of advanced concepts.' },
    { title: 'Module 3: Practical Applications', content: 'Hands-on projects and real-world examples.' },
  ];

  const features = [
    { title: 'Lifetime Access', description: 'Access the course material anytime, anywhere.', image: 'https://cdn-icons-png.flaticon.com/512/10765/10765372.png' },
    { title: 'Certification', description: 'Receive a certificate upon successful completion.', image: 'https://cdn-icons-png.flaticon.com/512/2617/2617793.png' },
    { title: 'Self-Paced Learning', description: 'Learn at your own pace with flexible schedules.', image: 'https://cdn-icons-png.flaticon.com/512/10765/10765372.png' },
    { title: '24/7 Support', description: 'Get help from instructors anytime.', image: 'https://cdn-icons-png.flaticon.com/512/13636/13636397.png' },
    { title: 'Community Access', description: 'Join our learner community for support and networking.', image: 'https://cdn-icons-png.flaticon.com/512/7829/7829198.png' },
    { title: 'Expert Instructors', description: 'Learn from industry experts and thought leaders.', image: 'https://cdn-icons-png.flaticon.com/512/9746/9746379.png' },
  ];

  const faqs = [
    { question: 'What is the duration of the course?', answer: 'The course is self-paced.' },
    { question: 'Do I get lifetime access?', answer: 'Yes, lifetime access is included.' },
    { question: 'Is there a refund policy?', answer: 'Yes, a 30-day refund policy applies.' },
    { question: 'Do I get lifetime access?', answer: 'Yes, lifetime access is included.' },
    { question: 'What is the duration of the course?', answer: 'The course is self-paced.' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 to-white px-8 md:px-24 py-6">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-16">
        <article className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-red-600">
            Full Aptitude Course for Placement Training
          </h1>
          <p className="text-base md:text-xl mt-4 mb-6 text-gray-700">
            Join thousands of learners who have gained hands-on experience with our expert-led courses for placement training.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm md:text-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              Enroll Now
            </button>
            <a href="/contact">
              <button className="border border-orange-500 text-red-600 px-6 py-3 text-sm md:text-lg rounded-lg hover:bg-orange-50 transition-colors">
                Contact Us
              </button>
            </a>
          </div>

          <p className="mt-4 text-gray-600">
            Trusted by over <strong>5000 learners</strong> worldwide.
          </p>

          {isMounted && (
            <div className="mt-6">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <del className="text-3xl text-gray-500">₹1500</del>
                <h2 className="text-5xl font-bold text-orange-500">₹800</h2>
              </div>
              <p className="text-gray-600">One-time payment for lifetime access</p>
              <p className="text-red-600 mt-1 font-semibold">Limited Time Offer!</p>

              <p className="mt-2 text-lg font-semibold text-red-600">
                Offer ends in: <span className="font-bold">{formatTime(timeLeft)}</span>
              </p>
            </div>
          )}
        </article>

        <div className="md:w-1/2 w-full">
          <iframe
            className="w-full rounded-lg"
            height="400"
            src="https://www.youtube.com/embed/YkvtJi5oWpA?si=Gb64C9zt23HDWR5R"
            title="Course Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold mb-8 text-red-600 text-center">What You’ll Get</h2>
        <div className="grid grid-cols-2 gap-6 px-4 sm:px-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center md:flex-row gap-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="hidden md:block w-24 h-24 object-cover rounded-md"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-12">
  <h2 className="text-4xl font-bold mb-8 text-center text-red-600">
    You will get Placed in
  </h2>

  {/* Grid Layout for Company Logos */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 sm:px-8">
    {[
      { name: 'Infosys', logo: 'https://companieslogo.com/img/orig/INFY_BIG-9635f314.png?t=1720244492' },
      { name: 'Cognizant', logo: 'https://companieslogo.com/img/orig/CTSH_BIG-953fa309.png?t=1720244491' },
      { name: 'Mphasis', logo: 'https://companieslogo.com/img/orig/MPHASIS.NS_BIG-96e12b36.png?t=1720244492' },
      { name: 'Capgemini', logo: 'https://companieslogo.com/img/orig/CAP.PA_BIG-cbc06f01.png?t=1720244491' },
      { name: 'L&T', logo: 'https://companieslogo.com/img/orig/LTTS.NS_BIG-e48bc9b1.png?t=1720244492' },
      { name: 'TCS', logo: 'https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1720244494' },
      { name: 'HCL', logo: 'https://companieslogo.com/img/orig/HCLTECH.NS_BIG-eadcb2fa.png?t=1723784865' },
      { name: 'Tech Mahindra', logo: 'https://companieslogo.com/img/orig/TECHM.NS_BIG-281ab5b9.png?t=1721262930' },
      { name: 'Wipro', logo: 'https://companieslogo.com/img/orig/WIT_BIG-0de2dc21.png?t=1720244494' },
      { name: 'Deloitte', logo: 'https://companieslogo.com/img/orig/deloitte_BIG-86032e42.png?t=1720244494' },
      { name: 'Persistent', logo: 'https://companieslogo.com/img/orig/PERSISTENT.NS_BIG-8fb78ddd.png?t=1720244493' },
      { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
      { name: 'Hexaware', logo: 'https://companieslogo.com/img/orig/HEXAWARE.NS_BIG-3c8842d4.png?t=1720244492' },
      { name: 'Zscaler', logo: 'https://companieslogo.com/img/orig/ZS_BIG-b13451c0.png?t=1720244494' },
      { name: 'Goldman Sachs', logo: 'https://companieslogo.com/img/orig/GS-71003e9a.png?t=1720244492' },
    ].map((company, index) => (
      <div
        key={index}
        className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center h-28"
      >
        <img
          src={company.logo}
          alt={company.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>

  <p className="text-xl text-center mt-8 font-semibold text-red-600">
    +300 more companies
  </p>
</section>
<section className="w-full py-12">
  <div className="max-w-7xl mx-auto px-6">
    {/* Data for Sections */}
    {[
      {
        title: 'What You Will Learn',
        items: [
          [
            'Quantitative Aptitude, Logical Reasoning, and Verbal Ability',
            'Data Structures & Algorithms',
            'Technical & HR Interview with Mock Interviews',
            '50+ Projects',
            '25+ Company-Specific Courses',
          ],
          [
            'C, C++, Java, Python',
            'Full-Stack Development',
            'Aptitude and Coding Mock Tests',
            'AI-ML, IoT, Robotics',
            'Competitive Coding',
          ],
        ],
      },
      {
        title: 'Courses and Features',
        items: [
          [
            '2000+ Hours of Learning Content',
            'Certificate for Every Course',
            'Trusted by 70,000+ Students in the Past 10 Years',
          ],
          [
            'Doubt Clearing Support',
            'One-to-One Mock Interviews',
            'All Courses from Basic to Advanced Level',
          ],
        ],
      },
    ].map((section, index) => (
      <div key={index} className="mb-12">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">
          {section.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.items.map((list, idx) => (
            <ul
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              {list.map((item, i) => (
                <li
                  key={i}
                  className="text-lg text-gray-800 mb-2 last:mb-0"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Certification Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold mb-4 text-red-600">Certification</h2>
        <p className="text-lg text-gray-600 mb-4">
          Showcase your achievements with our industry-recognized certificate.
        </p>
        <img
          src="https://ik.imagekit.io/99djpd8k3/CC/campus%20credentials%20certificate.png?updatedAt=1729665346965"
          alt="Certificate Preview"
          className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg"
        />
      </section>

      <section className="w-full py-12">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
      What Our Students Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: 'John Doe',
          review:
            'This course has been transformative! The projects and coding challenges helped me land my first tech job!',
          rating: 5,
        },
        {
          name: 'Jane Smith',
          review:
            'The support and mock interviews were a game-changer. I felt well-prepared for every interview!',
          rating: 4,
        },
        {
          name: 'Robert Brown',
          review:
            'The content is excellent, and the community access makes it even more engaging. Highly recommend it!',
          rating: 5,
        },
      ].map((review, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
              {review.name[0]}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
              <div className="flex">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600">{review.review}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>
    </main>
  );
};

export default App;
