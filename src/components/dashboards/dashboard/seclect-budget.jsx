import React, { useState } from "react";
import Button from "../../view-comp/Button";
// import dimondIcon from "../../../assets/dimond.png";
import UpAnimationIcon from "../../../assets/AnimationIcon.png";
// import IIcon from "../../../assets/ibtn.png";


import Slider from "@mui/material/Slider";

import PopUp from "./Popup";
import SecondaryButton from "../../view-comp/SecondaryButton";
// import PopUp2 from "./Popup-2";
// import { useNavigate } from "react-router-dom";

const SelectBudget = () => {
  const [showPopup, setShowPopup] = useState(false);

  // const nav = useNavigate();

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
      <div className=" p-[30px] border_green bg-[#191A1E] rounded-lg">
        <p className="font-extralight text-3xl">Enter your own budget</p>
        <p className="font-normal text-lg">
          Set the amount you’d like to spend
        </p>
        <div className="mt-[45px]">
          <h3 className="text-xl font-extralight">Set your Budget</h3>
          <div className="mt-5">
            <Slider defaultValue={50} aria-label="$" valueLabelDisplay="auto" />
          </div>

          <p className="text-xl font-extralight text-gray-500 text-center mt-[30px]">
            <span className="text-white">$395</span> monthly maximum
          </p>

          <h3 className="text-xl font-extralight">Duration</h3>
          <div className="mt-5">
            <Slider defaultValue={50} aria-label="$" valueLabelDisplay="auto" />
          </div>
          <p className="text-lg font-extralight mt-[58px]">
            Reach an estimated 6,010 - 10,140 people and get 100 - 190 ad clicks
            per month
          </p>
        </div>
        <div className="my-32 w-[400px] ml-auto flex gap-4">
          <SecondaryButton text="Cancel" />
          <Button text={"Set Budget"} navigate={HandleOpen} />
        </div>
      </div>
      {showPopup && (
        <PopUp
          onClose={closePopup}
          onNextButton={()=>{}}
          linkPath="/marketingSearchResults"
          description="All Set! Ready to post?"
          secondaryButtonText="Go Back"
          primaryButtonText="Post"
          ImagePath={UpAnimationIcon}
        />
      )}
    </div>
  );
};

export default SelectBudget;
