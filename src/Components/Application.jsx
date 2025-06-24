import React, { Suspense, useContext, useState } from "react";
import { ArrowIcon, EditIcon } from "../assets/Svgs";
import Card from "./Card";
import { ContaineWrapper } from "./GenericComponent";
import { Container } from "@mui/material";
import { lazy } from "react";
import { appContext } from "../Context/Context";
const PersonsalDetailForm = lazy(() =>
  import("./FormComponents/PersonsalDetailForm")
);
const RoomMateDetail = lazy(() => import("./FormComponents/RoomMateDetailForm"));

const formSteps = [
  {
    stepNo: 1,
    title: "Personal Details",
    component: PersonsalDetailForm,
  },
  {
    stepNo: 2,
    title: "Applicant details",
  },
  {
    stepNo: 3,
    title: "Lease  details",
  },
  {
    stepNo: 4,
    title: "Roommate  details",
    component: RoomMateDetail,
  },
  {
    stepNo: 5,
    title: "Document",
  },
  {
    stepNo: 6,
    title: "Guardian information",
  },
  {
    stepNo: 7,
    title: "Reject/Approve",
  },
];

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { isMobileScreen } = useContext(appContext);
  
  const handleNextButtonClick = () => {
    currentStep < formSteps.length - 1 && setCurrentStep((prev) => prev + 1);
  };
  const handlePrevButtonClick = () => {
    currentStep > 0 && setCurrentStep((prev) => prev - 1);
  };

  return (
    <ContaineWrapper>
      <div className="flex gap-2.5 items-center">
        <EditIcon className="text-[#1D77FF]" />
        <h5 className="text-base font-bold text-[#1D77FF]">Application 001</h5>
      </div>
      <div
        className={`flex gap-14 mt-9 ${
          !isMobileScreen ? "flex-row" : "flex-col"
        }`}
      >
        {!isMobileScreen && (
          <div className="w-1/2 flex flex-col gap-3.5 max-w-3xs">
            {formSteps.map((item, index) => {
              return (
                <Card
                  key={item.stepNo}
                  title={item.title}
                  isActive={index === currentStep}
                  onClick={() => setCurrentStep(index)}
                />
              );
            })}
          </div>
        )}
        {isMobileScreen && (
          <div className="flex flex-col">
            <span className="text-xs font-bold flex justify-end mb-2">{currentStep+1} / {formSteps.length}</span>
            <div className="flex gap-1 items-center justify-between">
              <div
                onClick={handlePrevButtonClick}
                className={`rotate-180 p-1 ${
                  currentStep > 0 ? "cursor-pointer" : "disabled"
                }`}
              >
                <ArrowIcon />
              </div>

              <h2 className="text-base font-bold">
                {formSteps[currentStep].title}
              </h2>

              <div
                onClick={handleNextButtonClick}
                className={` p-1 ${
                  currentStep < formSteps.length - 1
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
              >
                <ArrowIcon />
              </div>
            </div>
          </div>
        )}
        <Container className="w-1/2" disablePadding>
          <Suspense fallback={<div>Loading...</div>}>
            {formSteps[currentStep].component &&
              React.createElement(formSteps[currentStep].component)}
          </Suspense>
        </Container>
      </div>
    </ContaineWrapper>
  );
};

export default Application;
