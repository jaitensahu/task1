import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { CancelIcon, SaveIcon } from "../../assets/Svgs";
import ButtonComponent from "./ButtonComponent";
import { InputField } from "../GenericComponent";
import { fields } from "./constants";
import FormComponent from "./Form";
import { appContext } from "../../Context/Context";
import { getFormFields } from "./Utils";

const RoomMateDetail = () => {
  const { roommateDetails, setRoommateDetails } = useContext(appContext);
  const formFields = getFormFields(roommateDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoommateDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold leading-6">
        Roommate Details <br />
        <span className="text-[#808080] text-base">
          student’s personal details
        </span>
      </h1>
      <div className="flex flex-col gap-4.5 mt-6.5">
        <FormComponent fields={formFields} handleChange={handleChange}/>
      </div>
      <ButtonComponent />
    </div>
  );
};

export default RoomMateDetail;
