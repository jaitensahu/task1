import React from "react";
import { ContaineWrapper } from "./GenericComponent";
import { getDataFromLocalStorage } from "./FormComponents/Utils";

const Home = () => {
  const userData = getDataFromLocalStorage("personalDetails")
  return (
    <ContaineWrapper>
      <div className="font-bold text-3xl">Welcome {userData?.firstName || "Admin"}</div>
      <div>Elements can be rendered here </div>
    </ContaineWrapper>
  );
};

export default Home;
