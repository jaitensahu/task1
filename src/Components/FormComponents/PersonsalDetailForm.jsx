import React, { useContext, useEffect } from "react";
import FormComponent from "./Form";
import { fields } from "./constants";
import ButtonComponent from "./ButtonComponent";
import { appContext } from "../../Context/Context";
import { getDataFromLocalStorage, getFormFields, setDataInLocalStorage } from "./Utils";

const PersonsalDetailForm = () => {
  const { personalDetails, setPersonalDetails, resetAll } =
    useContext(appContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));
  };

  // const storedPersonalData = getDataFromLocalStorage("personalDetails")
  useEffect(() => {
    const stored = getDataFromLocalStorage("personalDetails");
    if (stored) {
      setPersonalDetails(stored);
    }
  }, [setPersonalDetails]);

  const formData = getFormFields(personalDetails);

  const handleSaveButtonClick = () => {
    debugger;
    setDataInLocalStorage("personalDetails", personalDetails);
    alert("Data saved");
  };
  const handleCancelButtonClick = () => {
    localStorage.removeItem("personalDetails");
    resetAll();
    alert("Data cleared");
  };

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold leading-6">Personal Details</h1>
      <div className="flex flex-col gap-4.5 mt-6.5 max-w-[456px]">
        {formData && (
          <FormComponent
            fields={formData.slice(0, 6)}
            handleChange={handleChange}
          />
        )}
      </div>
      <ButtonComponent
        onSave={handleSaveButtonClick}
        onCancel={handleCancelButtonClick}
      />
    </div>
  );
};

export default PersonsalDetailForm;
