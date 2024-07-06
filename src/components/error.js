import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <div className="" id="content">
      <section
        className="pt-20 pb-64 bg-black overflow-hidden h-screen"
        style={{
          backgroundImage:
            "url('https://shuffle.dev/gradia-assets/images/http-codes/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        data-config-id="auto-img-2"
      >
        <div className="container mx-auto px-4">
          <div className="relative w-[150px] h-[70px]">
            <Image
              className="mb-44"
              src="/icons/logo-white.svg"
              fill
              priority
              alt=""
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:ml-auto">
              <div className="md:max-w-lg">
                <h2
                  className="mb-8 max-w-max font-heading font-bold text-9xl sm:text-11xl xl:text-13xl text-white"
                  data-config-id="auto-txt-1-2"
                >
                  404 Error
                </h2>
                <p
                  className="mb-11 text-gray-200 text-xl"
                  data-config-id="auto-txt-2-2"
                >
                  The page you are looking for is not found! Try something else
                  or go back to homepage.
                </p>
                <div className="flex flex-wrap -m-2.5">
                  <div className="w-full lg:w-auto p-2">
                    <div className="p-px bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 rounded-lg">
                      <button className="group relative font-heading py-5 px-6 block w-full text-xs text-white font-semibold uppercase tracking-px bg-gray-900 overflow-hidden rounded-lg">
                        <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300"></div>
                        <p
                          className="relative z-10 text-white group-hover:text-black"
                          data-config-id="auto-txt-3-2"
                        >
                          Go back to Homepage
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-auto p-2">
                    <button
                      className="font-heading py-5 px-6 block w-full text-xs text-white font-semibold uppercase tracking-px border border-gray-700 hover:border-gray-800 rounded-lg"
                      data-config-id="auto-txt-4-2"
                    >
                      Try searching
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
