// CreateJob.jsx
import React, { useState } from "react";
import CreateJobStep1 from "./createJobStep1";
import CreateJobStep2 from "./createJobStep2";
import CreateJobStep3 from "./createJobStep3";
import CreateJobStep4 from "./createJobStep4";
import SelectBudget from "./seclect-budget";



const CreateJob = () => {
  const [currentStep, setCurrentStep] = useState("step1");

  const handleNextStep = (item) => {
    setCurrentStep(item)
   };

  const componentLookUp = {
    step1: <CreateJobStep1 onNextStep={handleNextStep} progress={25} />,
    step2: <CreateJobStep2 onNextStep={handleNextStep} progress={50} />,
    step3: <CreateJobStep3 onNextStep={handleNextStep} progress={75}/>,
    step4: <CreateJobStep4 onNextStep={handleNextStep} progress={100} />,
    step5: <SelectBudget/>,

  };



  return <>{componentLookUp[currentStep]}</>;
};

export default CreateJob;
