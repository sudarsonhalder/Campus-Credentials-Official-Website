import { useState } from "react";
import CTA from "@/components/ui/CTA";
import Detailedpricing from "@/components/ui/Detailedpricing";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import CardComponent from "@/components/ui/CardComponent";

export default function Home() {
  const [isDetailedPricingOpen, setIsDetailedPricingOpen] = useState(false);

  const toggleDetailedPricing = () => {
    setIsDetailedPricingOpen(!isDetailedPricingOpen);
  };

  return (
    <>
      <Pricing />

      <div className="flex flex-col items-center mt-6">
        <button
          onClick={toggleDetailedPricing}
          className="text-2xl font-semibold flex-col items-center space-y-2 focus:outline-none hidden md:flex"
          style={{ fontFamily: "'YourFontFamily', sans-serif" }} // Replace 'YourFontFamily' with the specific font if necessary
        >
          <span className="text-black">
            See all features and compare our Offerings
          </span>
          <svg
            className={`w-8 h-8 text-black transform transition-transform duration-300 ${
              isDetailedPricingOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isDetailedPricingOpen && (
        <div className="mt-2">
          <Detailedpricing />
        </div>
      )}
      <div className="mt-14">
        <CardComponent />
      </div>

      {/* Other Components */}
      {/* <Hero /> */}
      {/* <Features /> */}
      <VisualFeatures />
 

 {/* <Testimonial /> */}
 <FAQs />
 {/* <CTA /> */}
     {/* 
      <FAQs />
      <CTA /> */}
    </>
  );
}
