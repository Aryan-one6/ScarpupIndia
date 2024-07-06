import React from "react";
import Image from "next/image";

const IndividualProspectiveClients = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-18 items-center">
            <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
              <div>
                <span
                  className="inline-block py-2 px-4 mb-5 text-xs font-semibold text-orange-900 bg-[yellow] rounded-full"
                >
                  OUR CLIENTS
                </span>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-primary">
                  <span data-config-id="auto-txt-2-2">Delivering The </span>
                  <span className="font-serif italic">Best Solutions</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full xl:w-1/2 px-4 mb-8 xl:mb-0">
              <div className="relative md:h-125 bg-[white] rounded-lg">
                <div className="relative h-[500px] w-[620px]">
                  <Image
                    className="block h-full w-full rounded-lg object-cover mt-3"
                    style={{ objectFit: "cover" }}
                    src="/images/clientss.jpg"
                    alt=""
                    fill
                    priority
                  />
                </div>
                <div className="absolute top-0 left-0 h-full w-full p-8 md:p-12">
                  <div className="flex flex-col items-start justify-between h-full max-w-sm">
                    <div>
                      <span
                        className="block mb-3 text-sm text-yellow-800 font-semibold uppercase"
                      >
                        Who work with Us?
                      </span>
                      <h3
                        className="text-3xl md:text-4imgxl text-black font-semibold"
                      >
                        Give Your Support in making Clean Country
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 px-4">
              <div className="flex flex-wrap h-full -mx-4">
                {/* firsttwo */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                  <div className="flex flex-col h-full">
                    {/* first */}
                    <a
                      className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-evenly max-w-sm pr-16">
                        <p className="text-sm text-gray-900 mb-10 md:mb-6">
                          Brand ownership is the internal and external
                          responsibility for developing, building, and
                          maintaining your brand.
                        </p>

                        <span
                          className="text-3xl font-semibold text-gray-900"
                          data-config-id="auto-txt-9-2"
                        >
                          Brand Owners
                        </span>
                      </div>
                    </a>
                    {/* second */}
                    <a
                      className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-evenly max-w-sm pr-16">
                        <p
                          className="text-sm text-gray-900 mb-10 md:mb-6"
                          data-config-id="auto-txt-10-2"
                        >
                          No matter the size or health of a higher learning
                          institution, certain strategies can make
                          collaborations and partnerships more effective.
                        </p>
                        <span
                          className="text-3xl font-semibold text-gray-900"
                          data-config-id="auto-txt-11-2"
                        >
                          Institutes
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                {/* third */}

                <div className="w-full md:w-1/2 px-4">
                  <div className="flex flex-col h-full">
                    {/* first */}
                    <a
                      className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                        <p
                          className="text-sm text-gray-900 mb-10 md:mb-6"
                          data-config-id="auto-txt-8-2"
                        >
                          To summarise, industrial collaborations aid a student
                          {"'"}s 360-degree development, networking, and
                          industry exposure.{" "}
                        </p>
                        <span
                          className="text-3xl font-semibold text-gray-900"
                          data-config-id="auto-txt-9-2"
                        >
                          Industries
                        </span>
                      </div>
                    </a>
                    {/* second */}
                    <a
                      className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                        <p
                          className="text-sm text-gray-900 mb-10 md:mb-6"
                          data-config-id="auto-txt-10-2"
                        >
                          Unique partnerships can offer guests meals while
                          keeping costs down and increasing brand awareness.
                        </p>
                        <span
                          className="text-3xl font-semibold text-gray-900"
                          data-config-id="auto-txt-11-2"
                        >
                          Hotels & Restaurants
                        </span>
                      </div>
                    </a>
                    {/* second */}
                    <a
                      className="relative block h-full mt-8 pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                        <p
                          className="text-sm text-gray-900 mb-10 md:mb-6"
                          data-config-id="auto-txt-10-2"
                        >
                          An alternative solution that might be more effective
                          is getting hospitals to collaborate.
                        </p>
                        <span
                          className="text-3xl font-semibold text-gray-900"
                          data-config-id="auto-txt-11-2"
                        >
                          Hospitals{" "}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualProspectiveClients;
