import React from "react";
import ProfileImg from "../../assets/ProfileImg.png";
import Button from "./Button";
import { ReactComponent as DownloadIcon } from "../../assets/downloadIcon.svg";
import { ReactComponent as MapIcon } from "../../assets/mapIcon.svg";

export default function ProfileNameInfoCard() {
  return (
    <div className="px-6 flex justify-center items-center">
      <div className="container mx-auto flex items-center bg-[#191A1E] h-[223px] rounded-lg border border-[#61d1815b]">
        <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row ">
          <div className="flex items-center ">
            <img
              className="w-[120] h-[120] rounded-full border-2 border-white"
              src={ProfileImg}
              alt="Profile"
            />
            <div className="ml-2">
              <div className="leading-snug text-3xl text-[#fff] mb-2 font-bold">
                Cameron Allen{" "}
                <span className="text-[#61D180] text-sm ">
                  Utah Valley University
                </span>
              </div>

              <div className="flex gap-2">
                <MapIcon />
              <p className="text-[#ffffff70] text-sm">
                <span className="text-[#fff] font-bold">
                City:
                </span> Scottsdale{" "}
                <span className="text-[#fff] font-bold">State:</span> Arizona{" "}
              </p>
              </div>
            </div>
          </div>

          <div className="flex w-[170px]">
            <Button icon2={<DownloadIcon />} text={"Download CV"} />
          </div>
        </div>
      </div>
    </div>
  );
}
