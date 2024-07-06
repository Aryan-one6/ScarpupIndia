"use client";

import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [hour, setHour] = useState("10:00 AM");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <SearchContext.Provider
      value={{
        searchActive,
        setSearchActive,
        date,
        setDate,
        location,
        setLocation,
        hour,
        setHour,
        show,
        setShow,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
