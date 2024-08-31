import React from "react";
import userImage from "../../../../assets/Userpic.png";
import moreIcon from "../../../../assets/more-vertical.png";
import attachImg from "../../../../assets/attach-2.png";
import plusIcon from "../../../../assets/plus.png";
import navigateIcon from "../../../../assets/navigation-2.png";
import smileIcon from "../../../../assets/Smile icon.png";
import { RightUserChat } from "./userChat/RightUserChat";
import { LeftUserChat } from "./userChat/LeftUserChat";

const RightSide = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#191A1E] px-[17px] py-[29px]">
        <div className="flex items-center gap-x-3   justify-between">
          <div className="rounded-full border  ">
            <img src={userImage} alt="user img" />
          </div>
          <div>
            <h6 className="font-bold text-lg">Cameron Allen</h6>
            <p className="font-medium text-base text-[#61D180]">
              last online 5 hours ago
            </p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <span className="bg-[#FFFFFF33] w-[52px] h-[52px] rounded-full flex items-center justify-center">
            <img src={attachImg} alt="user img" />
          </span>
          <span className="bg-[#FFFFFF33] w-[52px] h-[52px] rounded-full flex items-center justify-center">
            <img src={moreIcon} alt="user img" />
          </span>
        </div>
      </div>
      {[1, 2, 3].map((index) => (
        <div className="my-[34px] px-8" key={index}>
          <RightUserChat
            avatarSrc={moreIcon}
            timestamp="36 min ago"
            message="Hi Cameron! I hope you're doing well. I see you went to UVU. Go  Wolverines! Loved your resume, are you available for a brief phone call this week?"
          />
          <LeftUserChat
            avatarSrc={userImage}
            username=""
            timestamp="5hrs ago"
            message="Hello Alex, thank you for reaching out! I appreciate the opportunity. Yes, I'm available for a call."
          />
        </div>
      ))}
      <div className="my-10">
        <div className="relative ml-8 ">
          <div className="absolute top-3 justify-center flex items-center pointer-events-none btn w-10 h-10 rounded-full">
            <img src={plusIcon} alt="" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full ps-16 py-6 text-sm bg-transparent text-white border-t  border-[#2d2d2d] focus:outline-none "
            placeholder="Type a message here"
            required
          />
          <div className="flex item-center gap-x-5 absolute right-0 top-3">
            <div className="flex items-center  justify-center">
              <img src={smileIcon} alt="" width={24} height={24} />
            </div>
            <div className=" flex items-center  justify-center btn w-10 h-10 rounded-full">
              <img src={navigateIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
