import React from "react";
import Image from "next/image";

const IndividualKeyFeature = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full"
            data-config-id="auto-txt-1-1"
          >
            FEATURES
          </span>
          <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-24">
            <span>Key </span>
            <span className="font-serif italic"> Benefits</span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10 mb-16 lg:mb-0">
              <div className="mx-auto max-w-sm">
                <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                  <div className="flex flex-shrink-0 mr-6 items-center justify-center p-4 bg-primary rounded-full">
                    <div className="relative h-[50px] w-[50px]">
                      <Image
                        src="/images/best-price.png"
                        style={{ objectFit: "contain" }}
                        alt=""
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      data-config-id="auto-txt-4-1"
                    >
                      Price
                    </h3>
                    <span
                      className="text-sm text-gray-400"
                      data-config-id="auto-txt-5-1"
                    >
                      Best Scrap Rates.
                    </span>
                  </div>
                </div>
                <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                  <div className="flex flex-shrink-0 p-4 mr-6 items-center justify-center bg-primary rounded-full">
                    <div className="relative h-[50px] w-[50px]">
                      <Image
                        src="/images/digital.png"
                        style={{ objectFit: "contain" }}
                        alt=""
                        fill
                        priority
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      data-config-id="auto-txt-6-1"
                    >
                      Digitization
                    </h3>
                    <span
                      className="text-sm text-gray-400"
                      data-config-id="auto-txt-7-1"
                    >
                      Digitalised record keeping and reporting.
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-shrink-0 p-4 bg-[#66B070]  mr-6 items-center  justify-center  rounded-full">
                    <div className="relative h-[50px] w-[50px]">
                      <Image
                        src="/images/specialization.png"
                        style={{ objectFit: "contain" }}
                        alt=""
                        fill
                        priority
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      data-config-id="auto-txt-8-1"
                    >
                      Specialization{" "}
                    </h3>
                    <span
                      className="text-sm text-gray-400"
                      data-config-id="auto-txt-9-1"
                    >
                      Professionally managed system.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/6 xl:w-auto mx-auto px-4 lg:mr-30 mb-16 lg:mb-0">
              <div className="relative h-[500px] w-[20vw]">
                <Image
                  className=""
                  src="/images/benefit2.jpg"
                  alt=""
                  fill
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-2/5 xl:w-auto px-4 lg:pb-10">
              <div className="mx-auto max-w-sm">
                <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                  <div className="flex flex-shrink-0 p-4  mr-6 items-center justify-center bg-primary rounded-full">
                    <div className="relative h-[50px] w-[50px]">
                      <Image
                        src="/images/recog2.png"
                        style={{ objectFit: "contain" }}
                        alt=""
                        fill
                        priority
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      data-config-id="auto-txt-10-1"
                    >
                      Recognition
                    </h3>
                    <span
                      className="text-sm text-gray-400"
                      data-config-id="auto-txt-11-1"
                    >
                      Brand recognition by adopting sustainability goals.
                    </span>
                  </div>
                </div>
                <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                  <div className="flex flex-shrink-0 p-4  mr-6 items-center justify-center bg-primary rounded-full">
                    <div className="relative h-[50px] w-[50px]">
                      <Image
                        src="/images/compliance.png"
                        style={{ objectFit: "contain" }}
                        alt=""
                        fill
                        priority
                      />
                    </div>{" "}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Compliance</h3>
                    <span className="text-sm text-gray-400">
                      Fulfilling regulatory compliance requirements.
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

export default IndividualKeyFeature;
