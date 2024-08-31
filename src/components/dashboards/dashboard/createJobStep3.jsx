import React, { useState } from "react";
import Button from "../../view-comp/Button";
import dropIcon from "../../../assets/drop-icon.png";

import PopUp from "./Popup";

const CreateJobStep3 = ({ onNextStep, progress }) => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleOpen = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="px-8 mb-20 relative">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-5xl font-bold ">Create Job</h2>
      </div>
      <div className=" px-[30px] border_green bg-[#191A1E] pt-[87px] rounded-lg">
        <div className="relative ">
          <div className="bg-[#47484B] h-1 w-full py-1 rounded"></div>
          <div
            className="bg-[#61D180] absolute h-2 w-[353px] rounded py-1 top-0 "
            style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex mt-5 text-white justify-between">
          <div className="text-xl font-extralight">Step 1</div>
          <div className="text-xl font-extralight">Step 2</div>
          <div className="text-xl font-extralight">Step 3</div>
          <div className="text-xl font-extralight">Step 4</div>
        </div>
        <div className="mt-[55px]">
          <input
            type="text"
            placeholder="Location"
            className="border_green bg-[#1D1D1D] rounded-lg h-[55px] w-full px-5 text-white placeholder:text-white placeholder:text-opacity-20 focus:outline-none "
          />
          <div className="relative mt-[30px]">
            <input
              type="text"
              placeholder="Salary"
              className=" border_green bg-[#1D1D1D] rounded-lg h-[55px] w-full px-5 text-white placeholder:text-white placeholder:text-opacity-20 focus:outline-none "
            />
            <img
              src={dropIcon}
              alt=""
              className="w-2.5 h-[5px] absolute top-7 right-7"
            />
          </div>
          <div className="border_green px-7 py-3 gradient_bg w-[584px] mt-[30px] rounded-full">
            <p className="text-white text-base font-medium">
              Average Salary Range for{" "}
              <b className="font-extrabold">Social Media Interns </b>:
              <span className="text-[#61D180] ">$17.37 - $26.43/hour</span>
            </p>
          </div>
        </div>
        <div className="my-32 w-56 ml-auto">
          <Button text={"Next"} navigate={HandleOpen} />
        </div>
      </div>
      {showPopup && (
        <PopUp
          onClose={closePopup}
          onNextButton={() => onNextStep("step4")}
          description="Add images and videos to your job postings to attract more suitable candidates!"
          secondaryButtonText="No Thanks"
          primaryButtonText="Unlock this feature"
        />
      )}
    </div>
  );
};

export default CreateJobStep3;
