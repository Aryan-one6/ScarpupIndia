"use client";
import Hero from "@/components/hero";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import WhyUs from "@/components/why-us";
import ContactUs from "@/components/contact-us";
import HowWeWork from "@/components/how-we-work";
import AppreciatedBy from "@/components/appreciated-by";
import Stats from "@/components/stats";
import AuthModal from "@/components/common/auth-modal";
import { useContext, useState } from "react";
import { SuccessfulAppointmentModal } from "@/components/common/snackbars";
import { SearchContext } from "@/context/search";
import Founder from "@/components/founder";

export default function Home() {
  // const [show, setShow] = useState(false);
  const [showSuccessAppointment, setShowSuccessAppointment] = useState(false);

  const { show, setShow } = useContext(SearchContext);

  const hideAuthModal = () => {
    setShow(false);
  };

  const showAuthModal = () => {
    setShow(true);
  };
  const hideSuccessAppointmentModal = () => {
    setShowSuccessAppointment(false);
  };

  const showSuccessAppointmentModal = () => {
    setShowSuccessAppointment(true);
  };

  return (
    <>
      <Hero showAuthModal={showAuthModal} />
      <div className="lg:h-[90px] w-[100vw] bg-[#09311A]"></div>
      <HowWeWork />
      {/* <div className="h-[90px] w-[100vw] bg-[#09311A]"></div> */}
      <AppreciatedBy />
      <Services />
      <TrustedPartner />
      <Founder />
      <LocateUs />
      <Stats />
      <WhyUs />
      <ContactUs />
      <AuthModal
        show={show}
        hideAuthModal={hideAuthModal}
        showSuccessAppointmentModal={showSuccessAppointmentModal}
      />
      <SuccessfulAppointmentModal
        show={showSuccessAppointment}
        hideModal={hideSuccessAppointmentModal}
        title={"Appointment Scheduled"}
        description={
          "Our Representative will call you before pickup on your selected date. Check your Mail for more details."
        }
      />
    </>
  );
}
