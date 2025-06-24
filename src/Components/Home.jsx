import React from "react";
import { ContaineWrapper } from "./GenericComponent";

const Home = () => {
  return (
    <ContaineWrapper>
      <div className="font-bold text-3xl">Welcome Admin</div>
      <div>Elements can be rendered here </div>
    </ContaineWrapper>
  );
};

export default Home;
