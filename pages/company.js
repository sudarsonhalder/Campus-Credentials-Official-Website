import React from "react";
import Link from "next/link";
const App = () => {
  const companies = [
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
      description:
        "Leading IT services and consulting company, delivering global innovation.",
        link:"/company/tcs"
    },
    {
      name: "Capgemini",
      logo: "https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png",
      description:
        "Global leader in consulting, digital transformation, and technology services.",
         link:"/company/capgemini"
    },
    {
      name: "Hexaware",
      logo: "https://download.logo.wine/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.png",
      description:
        "Innovating automation-driven IT and BPO services for modern businesses.",
         link:"/company/hexaware"
    },
    {
      name: "HCL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOu4Xvibd52_afiGcXIeX6X1YW14bc8SR8PQ&s",
      description:
        "Pioneering digital transformation and IT services worldwide.",
         link:"/company/hcl"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      description:
        "Empowering the world through cutting-edge software and technology solutions.",
         link:"/company/microsoft"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      description:
        "Driving innovation through technology and making information accessible globally.",
         link:"/company/google"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      description:
        "Revolutionizing e-commerce and cloud computing for the modern age.",
         link:"/company/amazon"
    },
    {
      name: "Cognizant",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE0GgxQbFi1chj5IfW9bPKDh6FMF7sbXfLA&s",
      description:
        "Helping clients modernize technology and rethink business operations.",
         link:"/company/cognizant"
    },
    {
      name: "L&T",
      logo: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/43f2c66fc6bbaf1d7e351d0321b07567",
      description:
        "Engineering and IT services powerhouse with global reach and expertise.",
       link:"/company/landt"
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
      description:
        "Transforming businesses with technology and sustainable innovation.",
         link:"/company/wipro"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-8 md:px-24 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Our Partner Companies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 min-h-[300px]"
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="w-28 h-28 mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {company.name}
            </h2>
            <p className="text-gray-600 text-base flex-grow mb-4">
              {company.description}
            </p>
            <Link href={company.link}> <button  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Know More
            </button></Link>
           
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
