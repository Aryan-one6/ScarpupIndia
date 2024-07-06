import ScrapRatesCards from "@/components/scrap-rates/scrap-rates-cards";
import React from "react";
import { normalRecyclableScrapData, largeAppliancesScrapData, smallAppliancesScrapData } from "@/components/scrap-rates/data";

const ScrapeRates = () => {
  return (
    <section className="bg-primary mx-auto p-10 md:py-20 py-20 px-0 md:p-20 md:px-0">
      {/* Normal Recyclables */}
      <div>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white"
            data-config-id="header"
          >
            Normal Recyclable
          </h2>
          <p className="mb-6 text-gray-50" data-config-id="desc">
            Transforming everyday waste into sustainable treasures, one
            recyclable at a time.
          </p>
        </div>
        <ScrapRatesCards itemsData={normalRecyclableScrapData} />
      </div>
      {/* Large Appliances */}
      <div>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white"
            data-config-id="header"
          >
            Large Appliances
          </h2>
          <p className="mb-6 text-gray-50" data-config-id="desc">
            Efficient recycling of large appliances for a sustainable future.
          </p>
        </div>
        <ScrapRatesCards itemsData={largeAppliancesScrapData} />
      </div>
      {/* Small Appliances */}
      <div>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white"
            data-config-id="header"
          >
            Small Appliances
          </h2>
          <p className="mb-6 text-gray-50" data-config-id="desc">
            Efficient recycling of large appliances for a sustainable future.
          </p>
        </div>
        <ScrapRatesCards itemsData={smallAppliancesScrapData} />
      </div>
    </section>
  );
};

export default ScrapeRates;
