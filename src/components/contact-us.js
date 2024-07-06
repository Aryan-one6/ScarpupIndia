"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { FaCheck } from "react-icons/fa6";
import { apiConfig } from "@/api/api-config";
import { ErrorSnackbar, SuccessSnackbar } from "./common/snackbars";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [contactFormSuccess, setContactFormSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactForm = async () => {
    try {
      const emailRegex = /\S+@\S+\.\S+/;

      if (email === "" || !emailRegex.test(email)) {
        setErrorMessage("Invalid Email");

        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        return;
      } else if (message.length <= 10) {
        setErrorMessage("Message Length should be a least 10..!");

        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        return;
      } else if (mobile.length != 10) {
        setErrorMessage("Mobile Number should be of 10 Length..!");

        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        return;
      }
      const body = {
        email: email,
        phone: mobile,
        name: fullName,
        message: message,
      };
      const response = await apiConfig.post(`user/contactUs/${email}`, body);

      if (response.status === 201) {
        setContactFormSuccess(true);
        setTimeout(() => {
          setContactFormSuccess(false);
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("Error Submitting Data..!!");
      console.log(error);
    }
  };
  
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="bg-primary flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Talk to us <br />
              to discuss
            </h1>

            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Wont worry, we are
              <br />
              ready to help you. You can fill in the column on the
              <br />
              right to book a meeting with us. Totally free.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="hidden xl:block xl:absolute right-0 w-full h-full"
          >
            <Image src="/images/book.png" alt="Image" fill priority />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className=" md:block bg-white xl:relative px-6 py-3 bg-[red] box-border rounded-3xl lg:w-[30vw] w-[80vw]"
          >
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Contact Us
              </h3>
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="px-4 py-4 md:w-90 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-4 md:w-90 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3 relative">
              <input
                type="number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="px-4 py-4 md:w-90 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <div className="py-3 relative">
              <textarea
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-4 md:w-90 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <button
                className="w-full py-4 font-semibold text-lg text-white bg-primary rounded-xl hover:bg-[#F5D856] hover:text-black transition ease-in-out duration-500"
                onClick={handleContactForm}
              >
                Send
              </button>
            </div>
            {contactFormSuccess && (
              <div className="flex justify-center items-center">
                <FaCheck />
                <span className="pl-4">We will contact you soon..</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      {errorMessage === "" ? <></> : <ErrorSnackbar message={errorMessage} />}
      {contactFormSuccess ? (
        <SuccessSnackbar message={"Message reached us..!!"} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default ContactUs;
