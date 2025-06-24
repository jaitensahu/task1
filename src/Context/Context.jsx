import React, { createContext, useState } from "react";
export const appContext = createContext({});

const initialPersonalDetails = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  phoneNo: "",
  email: "",
};

const initialRoommateDetails = {
  ...initialPersonalDetails,
    // Add fields for roommate details here
    university: "",
    registrationNo: "",
};

const Context = ({ children }) => {
  const isMobileScreen = window.screen.width < 768;
  const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
  const [roommateDetails, setRoommateDetails] = useState(initialRoommateDetails);

  const resetAll = () => {
    setPersonalDetails(initialPersonalDetails);
  };

  const value = {
    isMobileScreen,
    personalDetails,
    setPersonalDetails,
    roommateDetails,
    setRoommateDetails,
    resetAll,
  };

  return (
    <appContext.Provider value={value}>{children}</appContext.Provider>
  );
};

export default Context;
