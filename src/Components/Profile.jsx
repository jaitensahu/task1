import React, { useContext } from "react";
import { appContext } from "../Context/Context";
import { ContaineWrapper } from "./GenericComponent";
import { getDataFromLocalStorage } from "./FormComponents/Utils";

const Profile = () => {
  const { personalDetails, setPersonalDetails } = useContext(appContext);
  const userPersonalInfo = getDataFromLocalStorage("personalDetails");

  return (
    <ContaineWrapper>
      {!userPersonalInfo ? (
        "No data Available"
      ) : (
        <div className="flex flex-col justify-center w-full h-full items-center">
          <div className="border max-w-1/3 p-7 flex flex-col gap-2.5">
          <h1 className="text-xl font-bold">Profile</h1>
          <div >
            Name:{" "}
            {userPersonalInfo.firstName +
              " " +
              userPersonalInfo.middleName +
              " " +
              userPersonalInfo.lastName}
          </div>
          <div>Gender: {userPersonalInfo.gender}</div>
          <div>PhoneNumber: {userPersonalInfo.phoneNo}</div>
          <div>Email: {userPersonalInfo.email}</div>
          </div>
        </div>
      )}
    </ContaineWrapper>
  );
};

export default Profile;
