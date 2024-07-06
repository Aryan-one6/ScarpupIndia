"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { ErrorSnackbar, SuccessSnackbar } from "../common/snackbars";
import { apiConfig } from "@/api/api-config";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [contactFormSuccess, setContactFormSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContactForm = async (e) => {
    e.preventDefault();
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
        name: `${firstName} ${lastName}`,
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
    <>
      {/* Second Contact */}
      <div className="" id="content">
        <section className="relative overflow-hidden">
          <div className="pt-24 pb-80 md:pb-52 lg:pb-24 bg-gradient-to-b from-black to-emerald-700">
            <div className="container px-4 mx-auto">
              <div className="max-w-sm">
                {/* tooltip of contact */}
                <div className="inline-flex items-center px-5 py-2 bg-white rounded-full mb-6">
                  <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
                  <span className="uppercase text-sm font-medium tracking-tight">
                    CONTACT
                  </span>
                </div>

                <h1 className="font-heading tracking-tight text-4xl xs:text-5xl font-bold text-white mb-4">
                  Get in touch{" "}
                </h1>
                <p className="max-w-xs text-lg text-gray-200">
                  {" "}
                  Any question or remarks? Just write us a message!
                </p>
              </div>
              {/* toolp */}
            </div>
          </div>

          <div className="py-12 md:py-24 lg:pb-24 bg-gray-900">
            <div className="relative container px-4 mx-auto">
              {/* IMGAE */}
              <div className="-mt-60 relative z-10 lg:ml-auto max-w-xl p-8 bg-gray-900 border border-gray-800 rounded-xl">
                <form action="" onSubmit={handleContactForm}>
                  <div className="flex flex-wrap -mx-4 mb-8 items-center">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="first_name"
                      >
                        First name
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="text"
                        id="first_name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="last_name"
                      >
                        Last name
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="last_name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Naresh@HeyAryan.com"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="phone_number"
                      >
                        Phone number
                      </label>
                      <div className="flex h-11 bg-gray-800 border border-gray-700 rounded-md">
                        <input
                          className="py-2 pl-2 pr-4 h-full text-gray-500 placeholder-gray-500 border-0 bg-transparent focus:outline-none"
                          type="text"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          id="phone_number"
                          placeholder="(+91) 9354249191"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="block py-2 px-4 w-full h-44 text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800 resize-none"
                        placeholder="Enter your message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className=" bg-emerald-700 xs:flex-shrink-0 group relative w-full mb-8 h-12 flex xs:inline-flex items-center justify-center px-4 p-px font-bold text-gray-900 bg-[#A3E33A] rounded-lg transition-all duration-300 focus:outline-none"
                    type="submit"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-transparent group-hover:ring-[white] animate-pulse group-hover:ring-1 transition duration-300"></div>
                    <span className="text-white">Submit</span>
                  </button>
                  {contactFormSuccess && (
                    <div className="flex justify-center items-center text-white">
                      <FaCheck />
                      <span className="pl-4">We will contact you soon..</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
        {errorMessage === "" ? <></> : <ErrorSnackbar message={errorMessage} />}
        {contactFormSuccess ? (
          <SuccessSnackbar message={"Message reached us..!!"} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Contact;
