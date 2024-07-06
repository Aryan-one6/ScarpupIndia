import React from "react";
import Image from "next/image";
import { FaComputer, FaDollarSign, FaTruck } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-gray-50"
    >
    
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto mb-20 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-primary text-white rounded-full uppercase">
            Our Competitive Edge
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-6">
            <span>Why</span> <span className="font-serif italic">Choose</span>{" "}
            Us
          </h1>
        
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-md md:max-w-none mx-auto p-12 mb-6 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Best Rates</h5>
                <p className="text-gray-500">
                Discover unbeatable rates for your scrap through our extensive network of trusted recyclers.
                </p>
              </div>
              <div className="text-center relative flex justify-center items-center">
              <FaDollarSign className="text-8xl"/>
              </div>
            </div>
          </div>
          <div className="max-w-md md:max-w-none mx-auto px-12 py-8 mb-6 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Convenience at Doorstep </h5>
                <p className="text-gray-500">
                Your Scrap, Your Schedule. Enjoy the convenience of doorstep pickup at a time and date that suits you best.
                </p>
              </div>
              <div className="text-center relative flex justify-center items-center">
              <FaTruck className="text-8xl"/>
              </div>
            </div>
          </div>
          <div className="max-w-md md:max-w-none mx-auto px-12 py-8 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Trusted Team & Technology</h5>
                <p className="text-gray-500">
                Rest easy with our trained and verified pickup staff equipped with Swapeco Smart Weighing Scale for accurate measurements.
                </p>
              </div>
              <div className="text-center relative flex justify-center items-center">
                <FaComputer className="text-8xl" />
                {/* <Image src="/images/delivery-van.png" alt="" fill priority style={{objectFit: "contain"}}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
