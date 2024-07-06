import React from "react";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="box-border bg-gray-100 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap xl:items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="md:max-w-md relative h-full w-full">
              <Image
                className="mb-6"
                src="/images/clients.jpg"
                style={{ objectFit: "contain" }}
                alt="sdfsd"
                data-config-id="auto-Image-1-3"
                fill
                priority
              />
              <h2
                className="mb-6 text-3xl font-semibold"
                data-config-id="auto-txt-1-3"
              >
                Scrap Collection
              </h2>
              <h3
                className="mb-1 text-xl font-semibold tracking-tight"
                data-config-id="auto-txt-2-3"
              >
                Joanne Francis
              </h3>
              <span
                className="text-gray-600 tracking-tight"
                data-config-id="auto-txt-3-3"
              >
                Business Operations, Figtree
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap justify-center -m-5 mb-12">
              <div className="w-auto p-5 relative h-full w-full">
                <Image
                  src="/images/clients.jpg"
                  alt=""
                  data-config-id="auto-Image-2-3"
                  fill
                  priority
                />
              </div>
              <div className="w-auto p-5">
                <Image
                  src="/images/brands/logo-dark5.svg"
                  alt=""
                  data-config-id="auto-Image-3-3"
                  fill
                  priority
                />
              </div>
              <div className="w-auto p-5">
                <Image
                  src="/images/brands/logo-dark4.svg"
                  alt=""
                  data-config-id="auto-Image-4-3"
                  fill
                  priority
                />
              </div>
              <div className="w-auto p-5">
                <Image
                  src="/images/brands/logo-dark3.svg"
                  alt=""
                  data-config-id="auto-Image-5-3"
                  fill
                  priority
                />
              </div>
              <div className="w-auto p-5">
                <Image
                  src="/images/brands/logo-dark2.svg"
                  alt=""
                  data-config-id="auto-Image-6-3"
                  fill
                  priority
                />
              </div>
              <div className="w-auto p-5">
                <Image
                  src="/images/brands/logo-dark.svg"
                  alt=""
                  data-config-id="auto-Image-7-3"
                  fill
                  priority
                />
              </div>
            </div>
            <p
              className="text-gray-600 text-center tracking-tight"
              data-config-id="auto-txt-4-3"
            >
              Join a growing group of satisfied customers who have made the
              switch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
