import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="flex items-center py-32 font-poppins bg-[#1A403E]">
      <div className=" max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-col md:flex-row flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 md:flex-1  ">
            <div className="relative">
              <h1 className="absolute -top-20 pl-8 left-0 text-[20px] lg:text-[100px] text-[#F5D856] font-bold  dark:text-[#F5D856] opacity-5 md:block hidden">
                About Us
              </h1>
              <h1 className="pl-8 text-3xl font-bold border-l-8 border-[#F5D856] md:text-5xl dark:text-[#F5D856]">
                Welcome to our site
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-white">
              Scrap Up, an initiative by W2W, is a pioneering technology-driven
              venture recognized under Start-up India. Our innovative approach
              leverages a SaaS (Software as a Service) model to revolutionize
              the waste management sector. We{"'"}re dedicated to transforming
              waste into valuable opportunities, contributing to a sustainable
              and prosperous future. Join us on this journey from waste to
              wealth.
            </p>
            <span
              className="font-serif italic text-4xl text-[#F5D856]"
              data-config-id="auto-txt-3-5"
            >
              “Waste is never a waste, it’s rather an opportunity to something
              new”
            </span>
            <h1 className="pr-4 text-right text-lg font-serif italic dark:text-[white] mb-8">
              - Founders Message
            </h1>
          </div>

          <div className="w-full px-4 h-[350px] w-[300px] mb-10 lg:w-1/2 lg:mb-0 md:flex-[0.75]">
            <div className="relative  h-[350px]">
              <Image
                style={{ objectFit: "contain" }}
                src="/images/about-home.jpeg"
                alt=""
                className="relative z-0 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <p className="mt-6 mb-10 text-base leading-7 text-white p-8">
          Scrap Up, building upon the success of The Kabadiwala, began as a
          service for households and expanded to serve businesses, corporates,
          and institutions, addressing their Extended Producer Responsibility
          (EPR) requirements. Collaborating with the state government, we{"'"}ve
          managed and transformed the city{"'"}s waste landscape, establishing
          Material Recovery Facility (MRF) Centers. We{"'"}re proud to empower
          waste workers from the informal sector, ensuring fair wages. Today,
          Scrap Up stands as the ultimate solution for all your waste management
          needs, turning chaos into opportunity.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
