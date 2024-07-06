import React from "react";
import Image from "next/image";

const GovernmentWhatWeDo = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-primary">
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <h1 className="font-heading text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-6">
            <span>What We do - </span>
            <span className="font-serif italic">Government</span>
          </h1>
          <p className="max-w-md mx-auto text-lg text-[yellow]">
            We are a team of 20+ who are passionate about making the world a
            better place.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-18 xs:px-12 sm:p-24 bg-orange-50 rounded-4xl">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
              <div className="lg:max-w-sm">
                {/* first */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-blue-100 rounded-full relative">
                    <Image
                      src="/images/electric.png"
                      alt=""
                      style={{ objectFit: "contain" }}
                      fill
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Inspection: </h3>
                    <span className="text-sm text-gray-400">
                      The premises and scrapyard space are inspected to check
                      for their collection and segregation compatibility.
                    </span>
                  </div>
                </div>
                {/* Second */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Participation &amp; Planning:
                    </h3>
                    <span className="text-sm text-gray-400">
                      The Kabadiwala engages in the Online Bidding/Tender. The
                      plan is designed and strategies are laid out for effective
                      scrap disposal.
                    </span>
                  </div>
                </div>
                {/* Third */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Scrapyard Set-up:</h3>
                    <span className="text-sm text-gray-400">
                      The scrapyard is made compatible to deal with the amount
                      of waste generated, for its source segregation & storage.
                    </span>
                  </div>
                </div>

                {/* Fourth */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Transportation:</h3>
                    <span className="text-sm text-gray-400">
                      The segregated waste is sent to The Kabadiwala facility
                      for the second & final round of segregation.
                    </span>
                  </div>
                </div>
                {/* Fifth */}
                <div className="flex items-center ">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Maintenance::</h3>
                    <span className="text-sm text-gray-400">
                      Ensuring the proper management and Maintenance of the
                      scrapyard.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
              <div className="flex flex-col h-full justify-between lg:max-w-md ml-auto">
                <div className="mb-12">
                  <h3 className="text-3xl md:text-5xl font-bold mb-5">
                    <span>What we</span>
                    <span className="block">do!</span>
                  </h3>
                  <p className="text-gray-900">
                    Nunc et tellus non erat accumsan aliquam eget non mi.
                    Integer fringilla pellentesque finibus.
                  </p>
                </div>
                {/* Sixth */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-blue-100 rounded-full relative">
                    <Image
                      src="/images/electric.png"
                      alt=""
                      style={{ objectFit: "contain" }}
                      fill
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Capacity Building:{" "}
                    </h3>
                    <span className="text-sm text-gray-400">
                      Engaging employees by imparting proper knowledge &
                      training to ensure correct waste disposal practices are
                      followed.
                    </span>
                  </div>
                </div>
                {/* Seventh */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Assigning:</h3>
                    <span className="text-sm text-gray-400">
                      A dedicated scrap executive is assigned to supervise the
                      scrap segregation and its storage within the premises.
                    </span>
                  </div>
                </div>
                {/* Eight */}
                <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Collection:</h3>
                    <span className="text-sm text-gray-400">
                      As per the frequency of waste generation, pick-up routines
                      are planned for the scrap collection.
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                    <Image src="/images/electric.png" alt="" fill priority />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Reporting:</h3>
                    <span className="text-sm text-gray-400">
                      Based on the day-to-day record-keeping, a report is
                      submitted monthly to track quantity and categories of
                      material collected and recycled.
                    </span>
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

export default GovernmentWhatWeDo;
