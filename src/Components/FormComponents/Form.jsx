import React, { useContext } from "react";
import { InputField } from "../GenericComponent";
import { appContext } from "../../Context/Context";

const FormComponent = ({fields, handleChange}) => {
  
  return (
    <>
      {fields &&
        fields.map((item) => {
          return <InputField {...item} handleChange={handleChange}/>;
        })}
    </>
  );
};

export default FormComponent;


