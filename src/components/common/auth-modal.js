"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { ErrorSnackbar, SuccessSnackbar } from "./snackbars";
import { SearchContext } from "@/context/search";
import { apiConfig } from "@/api/api-config";
import { FaX } from "react-icons/fa6";

const AuthModal = ({ show, hideAuthModal, showSuccessAppointmentModal }) => {
  const { location, date, hour } = useContext(SearchContext);

  const [otpField, setOtpField] = useState({
    btnText: "Send OTP",
    fieldVisible: false,
  });

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [sentOtp, setSentOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await apiConfig.post(
        `user/otp/${email}`,
        {
          otp: otp,
          booking_id: sentOtp,
        },
        headers
      );

      if (response.status === 201) {
        showSuccessAppointmentModal(true);

        setOtp("");
        setEmail("");
        setOtpField({
          btnText: "Send OTP",
          fieldVisible: false,
        });

        hideAuthModal();
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleSendOTP = async () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setSnackbar(true);

      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
      return;
    }

    try {
      const response = await apiConfig.post(`user/${email}`, {
        id: email,
        phone: mobile,
        landmark: address,
        name: name,
        location: location,
        date: date[0].startDate,
        hour: hour,
      });

      if (response.status === 201) {
        setSentOtp(response?.data?.booking_id);

        setSuccessSnackbar(true);
        setTimeout(() => {
          setSuccessSnackbar(false);
        }, 2000);

        setOtpField({
          btnText: "Verify OTP",
          fieldVisible: true,
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <section
      className={`z-50 fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-5 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="p-4 max-w-xl w-full">
        <div className="relative p-6 py-11 bg-black rounded-5xl">
          <div className="flex justify-between">
            <div className="relative h-[60px] w-[125px]">
              <Image
                fill
                priority
                className=""
                src="icons/logo-white.svg"
                alt=""
              />
            </div>
            <div
              onClick={hideAuthModal}
              className="relative h-[30px] flex items-center text-gray-400 font-bold justify-center text-lg cursor-pointer"
            >
              <span className="pr-2">Close</span>{" "}
              <FaX className="text-[15px] font-bold" />
            </div>
          </div>
          <h3 className="mb-4 text-3xl font-medium text-white text-center tracking-3xl">
            Authenticate
          </h3>
          <p className="mb-10 text-white text-center max-w-sm mx-auto">
            Nightsable is a strategic branding agency focused on brand creation,
            rebrands, and brand
          </p>
          <form>
            <div className="flex flex-wrap -m-2">
              <div className="w-full p-2">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                  <span className="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                    Enter your e-mail
                  </span>
                  <input
                    className="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                  <span className="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                    Enter your Name
                  </span>
                  <input
                    className="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                  <span className="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                    Enter your Mobile Number
                  </span>
                  <input
                    className="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                  <span className="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                    Enter your Pickup Address
                  </span>
                  <input
                    className="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Door Address"
                  />
                </div>
              </div>
              {otpField.fieldVisible && (
                <div className="w-full p-2">
                  <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                    <span className="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                      OTP
                    </span>
                    <input
                      className="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="OTP"
                    />
                  </div>
                  <div className="w-full text-center text-[red]">
                    * Please Check Your Spam Folder Also.
                  </div>
                </div>
              )}
              <div className="w-full p-2">
                <div className="flex flex-wrap pt-2 -m-3">
                  <div className="w-full p-3">
                    <div
                      className="block px-14 py-4 text-center font-medium tracking-2xl bg-primary hover:bg-green-500 text-white focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300 cursor-pointer"
                      href="#"
                      onClick={() => {
                        otpField.fieldVisible
                          ? handleVerifyOtp()
                          : handleSendOTP();
                      }}
                    >
                      {otpField.btnText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {snackbar ? <ErrorSnackbar message={"Invalid Email Address."} /> : <></>}
      {successSnackbar ? (
        <SuccessSnackbar message={"OTP Sent Successfully...!!"} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default AuthModal;
