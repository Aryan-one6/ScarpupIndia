import Image from "next/image";
import React from "react";

const Aim = () => {
  return (
    <section className="flex items-center xl:h-screen font-poppins dark:bg-white relative">
      <div
        className="absolute bg-scroll"
        style={{
          backgroundImage: `url('/images/about-us-bg.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
          height: "100vh",
          width: "30vw",
        }}
      ></div>
      <div className="justify-center flex-1 max-w-6xl z-0 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 relative">
            <div className="lg:max-w-md">
              <span className="text-xl italic font-sans font-serif font-bold text-primary uppercase">
                Our Aim
              </span>
              <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-black">
                Let{"'"} Recycle Everything
              </h2>
              <p className="mb-10 text-gray-800">
                We{"'"}re on a mission to revolutionize the way we look at waste.
                Our goal is simple but impactful: to create a cleaner,
                waste-free India by recycling every bit of dry scrap. We believe
                this shift in perspective can lead to a more sustainable,
                eco-friendly, and prosperous world. Join us in this vital
                journey to preserve our planet and transform waste into wealth.
              </p>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-primary rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="w-5 h-5 bi bi-file-earmark-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                </svg>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight text-primary md:text-2xl">
                  Vission
                </h2>
                <p className="text-base leading-loose text-gray-800">
                  Our vision is to bring a circular economy into a reality where
                  used products are the over-exploitation of natural resources
                  and maximize recycling.
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6  bg-primary rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="w-5 h-5 bi bi-file-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight text-primary md:text-2xl">
                  Mission
                </h2>
                <p className="text-base leading-loose text-gray-800">
                  Our mission is to make a world where nothing is wasted, the
                  sustainable living through doing the right waste treatment
                  that is to get it recycled.
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-primary rounded text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="w-5 h-5 bi bi-bank2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                </svg>
              </span>
              <div>
                <h2 className="mb-4 text-xl font-bold leading-tight text-primary md:text-2xl">
                  Goal
                </h2>
                <p className="text-base leading-loose text-gray-800">
                  Through continuous innovation of technology, our goal is to
                  make recycling achievable and accessible to all, from
                  institutions to individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;
