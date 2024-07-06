"use client";
import { apiConfig } from "@/api/api-config";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { ErrorSnackbar } from "../common/snackbars";

const ScheduledPickupModal = ({
  setCheckScheduledPickup,
  verified,
  setVerified,
}) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpField, setOtpField] = useState({
    btnText: "Send OTP",
    fieldVisible: false,
  });
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleReset = () => {
    setVerified(false);
    setOtp("");
    setEmail("");
    setTableData([]);
    setOtpField({
      btnText: "Send OTP",
      fieldVisible: false,
    });
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await apiConfig.post(`user/orders/${email}`, {
        otp: parseInt(otp),
      });

      if (response.status === 200) {
        console.log(response.data.data);
        setTableData(response.data.data);
        setOtp("");
        setOtpField({
          btnText: "Send OTP",
          fieldVisible: false,
        });
        setVerified(true);
      }
    } catch (error) {
      console.error("Invalid OTP", error);
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
      const response = await apiConfig.post(`user/order/otp/${email}`);

      if (response.status === 200) {
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
      setErrorMessage("Error Sending Otp..!!");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      console.error("Error sending OTP:", error);
    }
  };

  const handleBookingDelete = async (booking_id) => {
    try {
      const response = await apiConfig.delete(
        `user/delete/${email}/${booking_id}`
      );
      if (response.status === 200) {
        const response = await apiConfig.post(`user/orders/${email}`, {
          otp: parseInt(otp),
        });

        if (response.status === 200) {
          console.log(response.data.data);
          setTableData(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-section-id="1"
      data-share=""
      data-category="modals"
      data-component-id="f420b824_02_awz"
      class="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-black bg-opacity-50 overflow-y-auto"
    >
      <div
        className="absolute text-white w-[24px] h-[24px] right-8 top-8 cursor-pointer"
        onClick={() => {
          setCheckScheduledPickup(false);
          handleReset();
        }}
      >
        <FaX />
      </div>
      <div class="md:max-w-[80vw] max-w-[100vw] w-full h-full mx-auto bg-black rounded-xl overflow-hidden">
        {/* Table */}
        {verified && (
          <div class="mx-auto pt-12 pb-14 px-5 text-center">
            <h4 class="text-xl text-gray-100 font-semibold mb-5">
              Scheduled Pickups
            </h4>
            <div class="w-full px-4">
              {tableData.length > 0 ? (
                tableData.map((data, idx) => (
                  <div
                    key={idx}
                    class="pl-4 pr-6 py-4 mb-2 bg-white shadow rounded"
                  >
                    <div class="flex flex-wrap items-center ">
                      <div class="md:mb-0 px-4 flex items-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00017 0.333344C5.68162 0.333344 4.39269 0.724337 3.29636 1.45688C2.20004 2.18942 1.34555 3.23061 0.840969 4.44879C0.336385 5.66696 0.204362 7.00741 0.461597 8.30061C0.718832 9.59382 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2813 5.69956 13.5386C6.99277 13.7958 8.33321 13.6638 9.55139 13.1592C10.7696 12.6546 11.8108 11.8001 12.5433 10.7038C13.2758 9.60748 13.6668 8.31855 13.6668 7.00001C13.6649 5.2325 12.9619 3.53795 11.712 2.28814C10.4622 1.03832 8.76767 0.335309 7.00017 0.333344ZM7.00017 12.3333C5.94533 12.3333 4.91419 12.0205 4.03712 11.4345C3.16006 10.8485 2.47648 10.0155 2.07281 9.04099C1.66914 8.06645 1.56352 6.99409 1.76931 5.95953C1.9751 4.92496 2.48305 3.97465 3.22893 3.22877C3.97481 2.48289 4.92512 1.97494 5.95968 1.76916C6.99425 1.56337 8.0666 1.66899 9.04114 2.07265C10.0157 2.47632 10.8486 3.15991 11.4347 4.03697C12.0207 4.91403 12.3335 5.94518 12.3335 7.00001C12.3319 8.414 11.7695 9.76962 10.7696 10.7695C9.76977 11.7693 8.41416 12.3317 7.00017 12.3333ZM8.39892 5.42254L7.66683 5.84539V3.66668C7.66683 3.48987 7.59659 3.3203 7.47157 3.19527C7.34655 3.07025 7.17698 3.00001 7.00017 3.00001C6.82335 3.00001 6.65379 3.07025 6.52876 3.19527C6.40374 3.3203 6.3335 3.48987 6.3335 3.66668V7.00001C6.33353 7.11703 6.36435 7.23197 6.42286 7.33331C6.48138 7.43464 6.56553 7.51879 6.66686 7.57731C6.76819 7.63583 6.88314 7.66665 7.00016 7.66668C7.11717 7.66671 7.23214 7.63595 7.3335 7.57748L9.06559 6.57748C9.14147 6.53373 9.20799 6.47546 9.26135 6.406C9.3147 6.33653 9.35385 6.25724 9.37655 6.17264C9.39925 6.08804 9.40506 5.9998 9.39364 5.91295C9.38223 5.82611 9.35382 5.74237 9.31003 5.66651C9.26624 5.59065 9.20793 5.52416 9.13844 5.47084C9.06895 5.41752 8.98963 5.37841 8.90502 5.35576C8.82041 5.3331 8.73217 5.32734 8.64533 5.3388C8.55849 5.35025 8.47476 5.37871 8.39892 5.42254Z"
                            fill="#67798E"
                          ></path>
                        </svg>
                        <h4
                          class="text-sm font-medium pl-4 text-black font-bold"
                          data-config-id="file1"
                        >
                          {data?.location}
                        </h4>
                      </div>
                      <div class="w-auto ml-auto mr-16 px-4 flex items-center text-xs text-gray-500">
                        <span class="mr-1">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-config-id="auto-svg-5-16"
                          >
                            <path
                              d="M7.00017 0.333344C5.68162 0.333344 4.39269 0.724337 3.29636 1.45688C2.20004 2.18942 1.34555 3.23061 0.840969 4.44879C0.336385 5.66696 0.204362 7.00741 0.461597 8.30061C0.718832 9.59382 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2813 5.69956 13.5386C6.99277 13.7958 8.33321 13.6638 9.55139 13.1592C10.7696 12.6546 11.8108 11.8001 12.5433 10.7038C13.2758 9.60748 13.6668 8.31855 13.6668 7.00001C13.6649 5.2325 12.9619 3.53795 11.712 2.28814C10.4622 1.03832 8.76767 0.335309 7.00017 0.333344ZM7.00017 12.3333C5.94533 12.3333 4.91419 12.0205 4.03712 11.4345C3.16006 10.8485 2.47648 10.0155 2.07281 9.04099C1.66914 8.06645 1.56352 6.99409 1.76931 5.95953C1.9751 4.92496 2.48305 3.97465 3.22893 3.22877C3.97481 2.48289 4.92512 1.97494 5.95968 1.76916C6.99425 1.56337 8.0666 1.66899 9.04114 2.07265C10.0157 2.47632 10.8486 3.15991 11.4347 4.03697C12.0207 4.91403 12.3335 5.94518 12.3335 7.00001C12.3319 8.414 11.7695 9.76962 10.7696 10.7695C9.76977 11.7693 8.41416 12.3317 7.00017 12.3333ZM8.39892 5.42254L7.66683 5.84539V3.66668C7.66683 3.48987 7.59659 3.3203 7.47157 3.19527C7.34655 3.07025 7.17698 3.00001 7.00017 3.00001C6.82335 3.00001 6.65379 3.07025 6.52876 3.19527C6.40374 3.3203 6.3335 3.48987 6.3335 3.66668V7.00001C6.33353 7.11703 6.36435 7.23197 6.42286 7.33331C6.48138 7.43464 6.56553 7.51879 6.66686 7.57731C6.76819 7.63583 6.88314 7.66665 7.00016 7.66668C7.11717 7.66671 7.23214 7.63595 7.3335 7.57748L9.06559 6.57748C9.14147 6.53373 9.20799 6.47546 9.26135 6.406C9.3147 6.33653 9.35385 6.25724 9.37655 6.17264C9.39925 6.08804 9.40506 5.9998 9.39364 5.91295C9.38223 5.82611 9.35382 5.74237 9.31003 5.66651C9.26624 5.59065 9.20793 5.52416 9.13844 5.47084C9.06895 5.41752 8.98963 5.37841 8.90502 5.35576C8.82041 5.3331 8.73217 5.32734 8.64533 5.3388C8.55849 5.35025 8.47476 5.37871 8.39892 5.42254Z"
                              fill="#67798E"
                            ></path>
                          </svg>
                        </span>
                        <p data-config-id="time1">{data.date}</p>
                      </div>
                      <div class="w-auto mr-16 px-4">
                        <p class="text-xs text-gray-500">{data.hour}</p>
                      </div>
                      <div
                        class="w-auto flex justify-center items-center px-6 text-black hover:text-white cursor-pointer hover:bg-[red] font-semibold py-2 rounded-lg"
                        onClick={() => handleBookingDelete(data.booking_id)}
                      >
                        <FaX className="text-sm" />{" "}
                        <span className="pl-2">Cancel</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>Oops! No any bookings..!!</div>
              )}
              {/* <div class="pl-4 pr-6 py-4 mb-2 bg-white shadow rounded">
                <div class="flex flex-wrap items-center ">
                  <div class="md:mb-0 px-4 flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00017 0.333344C5.68162 0.333344 4.39269 0.724337 3.29636 1.45688C2.20004 2.18942 1.34555 3.23061 0.840969 4.44879C0.336385 5.66696 0.204362 7.00741 0.461597 8.30061C0.718832 9.59382 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2813 5.69956 13.5386C6.99277 13.7958 8.33321 13.6638 9.55139 13.1592C10.7696 12.6546 11.8108 11.8001 12.5433 10.7038C13.2758 9.60748 13.6668 8.31855 13.6668 7.00001C13.6649 5.2325 12.9619 3.53795 11.712 2.28814C10.4622 1.03832 8.76767 0.335309 7.00017 0.333344ZM7.00017 12.3333C5.94533 12.3333 4.91419 12.0205 4.03712 11.4345C3.16006 10.8485 2.47648 10.0155 2.07281 9.04099C1.66914 8.06645 1.56352 6.99409 1.76931 5.95953C1.9751 4.92496 2.48305 3.97465 3.22893 3.22877C3.97481 2.48289 4.92512 1.97494 5.95968 1.76916C6.99425 1.56337 8.0666 1.66899 9.04114 2.07265C10.0157 2.47632 10.8486 3.15991 11.4347 4.03697C12.0207 4.91403 12.3335 5.94518 12.3335 7.00001C12.3319 8.414 11.7695 9.76962 10.7696 10.7695C9.76977 11.7693 8.41416 12.3317 7.00017 12.3333ZM8.39892 5.42254L7.66683 5.84539V3.66668C7.66683 3.48987 7.59659 3.3203 7.47157 3.19527C7.34655 3.07025 7.17698 3.00001 7.00017 3.00001C6.82335 3.00001 6.65379 3.07025 6.52876 3.19527C6.40374 3.3203 6.3335 3.48987 6.3335 3.66668V7.00001C6.33353 7.11703 6.36435 7.23197 6.42286 7.33331C6.48138 7.43464 6.56553 7.51879 6.66686 7.57731C6.76819 7.63583 6.88314 7.66665 7.00016 7.66668C7.11717 7.66671 7.23214 7.63595 7.3335 7.57748L9.06559 6.57748C9.14147 6.53373 9.20799 6.47546 9.26135 6.406C9.3147 6.33653 9.35385 6.25724 9.37655 6.17264C9.39925 6.08804 9.40506 5.9998 9.39364 5.91295C9.38223 5.82611 9.35382 5.74237 9.31003 5.66651C9.26624 5.59065 9.20793 5.52416 9.13844 5.47084C9.06895 5.41752 8.98963 5.37841 8.90502 5.35576C8.82041 5.3331 8.73217 5.32734 8.64533 5.3388C8.55849 5.35025 8.47476 5.37871 8.39892 5.42254Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                    <h4
                      class="text-sm font-medium pl-4 text-black font-bold"
                      data-config-id="file1"
                    >
                      Sumit Saurav
                    </h4>
                  </div>
                  <div class="w-auto ml-auto mr-16 px-4 flex items-center text-xs text-gray-500">
                    <span class="mr-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-5-16"
                      >
                        <path
                          d="M7.00017 0.333344C5.68162 0.333344 4.39269 0.724337 3.29636 1.45688C2.20004 2.18942 1.34555 3.23061 0.840969 4.44879C0.336385 5.66696 0.204362 7.00741 0.461597 8.30061C0.718832 9.59382 1.35377 10.7817 2.28612 11.7141C3.21847 12.6464 4.40636 13.2813 5.69956 13.5386C6.99277 13.7958 8.33321 13.6638 9.55139 13.1592C10.7696 12.6546 11.8108 11.8001 12.5433 10.7038C13.2758 9.60748 13.6668 8.31855 13.6668 7.00001C13.6649 5.2325 12.9619 3.53795 11.712 2.28814C10.4622 1.03832 8.76767 0.335309 7.00017 0.333344ZM7.00017 12.3333C5.94533 12.3333 4.91419 12.0205 4.03712 11.4345C3.16006 10.8485 2.47648 10.0155 2.07281 9.04099C1.66914 8.06645 1.56352 6.99409 1.76931 5.95953C1.9751 4.92496 2.48305 3.97465 3.22893 3.22877C3.97481 2.48289 4.92512 1.97494 5.95968 1.76916C6.99425 1.56337 8.0666 1.66899 9.04114 2.07265C10.0157 2.47632 10.8486 3.15991 11.4347 4.03697C12.0207 4.91403 12.3335 5.94518 12.3335 7.00001C12.3319 8.414 11.7695 9.76962 10.7696 10.7695C9.76977 11.7693 8.41416 12.3317 7.00017 12.3333ZM8.39892 5.42254L7.66683 5.84539V3.66668C7.66683 3.48987 7.59659 3.3203 7.47157 3.19527C7.34655 3.07025 7.17698 3.00001 7.00017 3.00001C6.82335 3.00001 6.65379 3.07025 6.52876 3.19527C6.40374 3.3203 6.3335 3.48987 6.3335 3.66668V7.00001C6.33353 7.11703 6.36435 7.23197 6.42286 7.33331C6.48138 7.43464 6.56553 7.51879 6.66686 7.57731C6.76819 7.63583 6.88314 7.66665 7.00016 7.66668C7.11717 7.66671 7.23214 7.63595 7.3335 7.57748L9.06559 6.57748C9.14147 6.53373 9.20799 6.47546 9.26135 6.406C9.3147 6.33653 9.35385 6.25724 9.37655 6.17264C9.39925 6.08804 9.40506 5.9998 9.39364 5.91295C9.38223 5.82611 9.35382 5.74237 9.31003 5.66651C9.26624 5.59065 9.20793 5.52416 9.13844 5.47084C9.06895 5.41752 8.98963 5.37841 8.90502 5.35576C8.82041 5.3331 8.73217 5.32734 8.64533 5.3388C8.55849 5.35025 8.47476 5.37871 8.39892 5.42254Z"
                          fill="#67798E"
                        ></path>
                      </svg>
                    </span>
                    <p data-config-id="time1">24/02/2002</p>
                  </div>
                  <div class="w-auto mr-16 px-4">
                    <p class="text-xs text-gray-500">12:00 AM</p>
                  </div>
                  <div class="w-auto flex justify-center items-center px-6 text-black hover:text-white cursor-pointer hover:bg-[red] font-semibold py-2 rounded-lg">
                    <FaX className="text-sm" />{" "}
                    <span className="pl-2">Cancel</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )}
        {/* Authentication */}
        {!verified && (
          <div class="mx-auto pt-12 pb-14 px-5 text-center">
            <h4 class="text-xl text-gray-100 font-semibold mb-5">
              Authentication
            </h4>
            <div className="w-full flex justify-center">
              <div className="p-4 max-w-xl w-full">
                <div className="relative p-6 py-11 bg-black rounded-5xl">
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {errorMessage === "" ? <></> : <ErrorSnackbar message={errorMessage} />}
    </div>
  );
};

export default ScheduledPickupModal;
