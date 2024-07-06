import React from "react";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="about"
      data-component-id="d8076420_03_awz"
      className="py-20 overflow-hidden bg-black"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-md">
              <span
                className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter"
                data-config-id="auto-txt-1-3"
              >
                Check our stats
              </span>
              <h2
                className="mb-8 text-6xl md:text-7xl text-white tracking-tighter-xl"
                data-config-id="auto-txt-2-3"
              >
                Making credit history with nightcard
              </h2>
              <p
                className="mb-8 text-lg text-gray-300"
                data-config-id="auto-txt-3-3"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text.
              </p>
              <a
                className="inline-block text-white hover:text-opacity-80 font-medium underline transition duration-500"
                href="#"
                data-config-id="auto-txt-4-3"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="mx-auto max-w-lg md:mr-0">
              <div className="flex flex-wrap -m-4">
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap">
                    <div className="mb-8 w-full relative h-[200px] ">
                      <Image
                        className="w-full"
                        style={{ objectFit: "contain" }}
                        src="/images/eco.png"
                        alt=""
                        data-config-id="auto-img-1-3"
                        fill
                        priority
                      />
                    </div>
                    <div className="w-full">
                      3
                      {/* <img className="w-full" src="nightsable-assets/images/abouts/img4.png" alt="" data-config-id="auto-img-2-3"> */}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-4">
                  <div className="flex flex-wrap mt-24">
                    <div className="mb-8 w-full">
                      1
                      {/* <img className="w-full" src="nightsable-assets/images/abouts/img3.png" alt="" data-config-id="auto-img-3-3"> */}
                    </div>
                    <div className="w-full">
                      4
                      {/* <img className="w-full" src="nightsable-assets/images/abouts/img.png" alt="" data-config-id="auto-img-4-3"> */}
                    </div>
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

export default AboutTeam;
