"use client";
import { useContext, useState } from "react";
import { SearchContext } from "../context/search";
import LocationSelection from "./location-selection";
import DateSelection from "./date-selection";
import HoursSelection from "./hours-selection";
import { ErrorSnackbar } from "./common/snackbars";

export default function Search({ showAuthModal }) {
  const { searchActive, location } = useContext(SearchContext);
  const [showSelectionError, setShowSelectionError] = useState(false);

  const handleSchedulePickup = () => {
    if (location !== "Select Location") {
      showAuthModal();
    } else {
      setShowSelectionError(true);
      setTimeout(() => {
        setShowSelectionError(false);
      }, 2000);
    }
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl-h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div
        className={`flex h-full justify-center items-center ${
          searchActive && "container mx-auto"
        }`}
      >
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-2">
          <button
            onClick={handleSchedulePickup}
            className={`${
              searchActive
                ? "btn btn-sm btn-primary xl:w-[264px]"
                : "btn btn-lg btn-primary xl:w-[264px]"
            }`}
          >
            Schedule a Pickup
          </button>
        </div>
      </div>
      {showSelectionError && (
        <ErrorSnackbar message={"Please Select Correct Location..!"} />
      )}
    </div>
  );
}
