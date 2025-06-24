import React from "react";
import { CancelIcon, SaveIcon } from "../../assets/Svgs";

const ButtonComponent = (props) => {
  return (
    <div className="flex justify-center gap-2 mt-11">
      <span className="p-2 rounded-full bg-[#FFC2C2] inline-block cursor-pointer" onClick={props.onCancel}>
        <CancelIcon />
      </span>
      <span className="p-2 rounded-full bg-[#D3FFD3] inline-block cursor-pointer" onClick={props.onSave}>
        <SaveIcon />
      </span>
    </div>
  );
};

export default ButtonComponent;
