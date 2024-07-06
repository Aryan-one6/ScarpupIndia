import React from "react";
import IndividualWhatWeDo from "@/components/services/Individual/individual-what-we-do";
import IndividualProspectiveClients from "@/components/services/Individual/individual-prospective-clients";
import IndividualKeyFeature from "@/components/services/Individual/individual-key-feature";

const Services = () => {
  return (
    <>
      {/* <ServicesHero /> */}
      {/* Individual */}
      <IndividualWhatWeDo />
      <IndividualProspectiveClients />

      <IndividualKeyFeature />
      {/* Businesses */}
      {/* <BusinessWhatWeDo /> */}
      {/* <BusinessProspectiveClients /> */}
      {/* Government */}
      {/* <GovernmentWhatWeDo />
      <GovernmentProspectiveClients /> */}
    </>
  );
};

export default Services;
