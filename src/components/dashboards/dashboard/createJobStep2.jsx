import React from "react";
import Button from "../../view-comp/Button";

import Step1Icon from "../../../assets/step-1.svg";
import Step2Icon from "../../../assets/step-2.svg";
import Step3Icon from "../../../assets/step-3.svg";
import Step4Icon from "../../../assets/step-4.svg";
import checkIcon from "../../../assets/icon-park-solid_check-one.png";

const CreateJobStep2 = ({onNextStep, progress}) => {
  return (
    <div className="px-8 mb-20 ">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-5xl font-bold ">Create Job</h2>
      </div>
      <div className=" px-[30px] border_green bg-[#191A1E] pt-[87px] rounded-lg">
        <div className="relative ">
          <div className="bg-[#47484B] h-1 w-full py-1 rounded"></div>
          <div className="bg-[#61D180] absolute h-2 rounded py-1 top-0 " style={{width:`${progress}%`}}></div>
        </div>
        <div className="flex mt-5 text-white justify-between">
          <div className="text-xl font-extralight">Step 1</div>
          <div className="text-xl font-extralight">Step 2</div>
          <div className="text-xl font-extralight">Step 3</div>
          <div className="text-xl font-extralight">Step 4</div>
        </div>
        <div className="mt-[55px]">
          <h3 className="text-[22px] font-extralight mb-10">
            Please select job type
          </h3>
          <div className="flex justify-between">
            <div className=" w-[270px] h-[213px] flex flex-col justify-center gap-y-4 items-center border_green bg-[#1D1D1D] rounded-lg">
              <img
                src={Step1Icon}
                alt=""
                className="w-[120px] h-[120px] text-green-500"
              />

              <h3 className="text-lg mb-0 font-normal">Part Time</h3>
            </div>
            <div className="relative w-[270px] h-[213px] flex flex-col justify-center gap-y-4 items-center border border-[#61D180] bg-[#1D1D1D] rounded-lg">
              <img
                src={Step2Icon}
                alt=""
                className="w-[120px] h-[120px] text-green-500"
              />
              <div className="absolute top-3 right-3">
                <img
                  src={checkIcon}
                  alt=""
                  className="w-6 h-6 text-green-500"
                />
              </div>
              <h3 className="text-lg mb-0 font-normal text-[#61D180]">
                Full Time
              </h3>
            </div>
            <div className="w-[270px] h-[213px] flex flex-col justify-center gap-y-4 items-center border_green bg-[#1D1D1D] rounded-lg">
              <img
                src={Step3Icon}
                alt=""
                className="w-[120px] h-[120px] text-green-500"
              />
              <h3 className="text-lg mb-0 font-normal">Contract</h3>
            </div>
            <div className="w-[270px] h-[213px] flex flex-col justify-center gap-y-4 items-center border_green bg-[#1D1D1D] rounded-lg">
              <img
                src={Step4Icon}
                alt=""
                className="w-[120px] h-[120px] text-green-500"
              />
              <h3 className="text-lg mb-0 font-normal">Internship</h3>
            </div>
          </div>
        </div>
        <div className="my-32 w-56 ml-auto">
          <Button text={"Next"} navigate={()=>onNextStep("step3")}/>
        </div>
      </div>
    </div>
  );
};

export default CreateJobStep2;
