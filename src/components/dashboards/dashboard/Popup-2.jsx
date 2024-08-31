import React from "react";
import Button from "../../view-comp/Button";

import CloseIcon from "../../../assets/closeIcon.png";
import ObjectImg from "../../../assets/OBJECTS.png";

const PopUp2 = ({ onClose }) => {
  return (
    <div className="absolute top-[20%] right-[30%] z-50">
      <div className="relative w-[881px] h-[542px] border_green bg-[#1D1D1D] flex justify-center items-center flex-col gap-y-12 rounded-lg">
        <img
          src={ObjectImg}
          alt="Object Img"
          className=" top-7 right-7 cursor-pointer"
        />
        <div>
          <p className="text-white text-[22px] font-medium  text-center">
            Invite <span className="font-bold">Cameron A.</span>{" "}
            <span className="text-green-500">(94%)</span> to Apply to your Job?
          </p>
          <p className="text-white text-[22px] font-medium  text-center">
            If they accept you’ll be charged
            <span className="font-bold">1 Message Credit.</span>
          </p>
        </div>
        <div>
          <Button text="Yes, Invite Cameron!" onClick={onClose} />
          <p className="text-white text-center mt-5">6 Invitations Remaining</p>
        </div>

        <img
          src={CloseIcon}
          alt=""
          className="absolute top-7 right-7 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};



export default PopUp2;
