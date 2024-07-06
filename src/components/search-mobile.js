"use client";
import { useContext, useState } from "react";
import { ErrorSnackbar } from "./common/snackbars";
import DateSelection from "./date-selection";
import HoursSelection from "./hours-selection";
import LocationSelection from "./location-selection";
import { SearchContext } from "@/context/search";

export default function SearchMobile() {
  const { show, setShow } = useContext(SearchContext);
  const { location } = useContext(SearchContext);
  const [showSelectionError, setShowSelectionError] = useState(false);

  const showAuthModal = () => {
    setShow(true);
  };

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
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button
              className="btn btn-sm btn-primary w-[264px] mx-auto font-bold"
              onClick={handleSchedulePickup}
            >
              Schedule a Pickup
            </button>
          </div>
        </div>
      </div>

      {showSelectionError && (
        <ErrorSnackbar message={"Please Select Correct Location..!"} />
      )}
    </div>
  );
}
