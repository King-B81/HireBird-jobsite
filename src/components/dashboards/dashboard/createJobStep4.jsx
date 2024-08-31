import React, { useState } from "react";
import Button from "../../view-comp/Button";
import dimondIcon from "../../../assets/dimond.png";
import UpAnimationIcon from "../../../assets/AnimationIcon.png";
import IIcon from "../../../assets/ibtn.png";



import PopUp from "./Popup";

const CreateJobStep4 = ({onNextStep,progress}) => {
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
          <div className="bg-[#61D180] absolute h-2 w-[353px] rounded py-1 top-0 " style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex mt-5 text-white justify-between">
        <div className="text-xl font-extralight">Step 1</div>
        <div className="text-xl font-extralight">Step 2</div>
        <div className="text-xl font-extralight">Step 3</div>
        <div className="text-xl font-extralight">Step 4</div>
        </div>
        <div className="mt-[55px]">
          <div>
            <label className="text-[22px] font-extralight text-white ">
              Banner Image
            </label>

            <div class="flex items-center justify-center w-full mt-[18px]">
              <label
                for="dropzone-file"
                class="relative flex flex-col items-center justify-center w-full h-64 border border-[#FDC500] border-dashed rounded-lg cursor-pointer bg-[#1D1D1D]">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-20 h-20 mb-4 text-[#61D180]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-[#61D180] text-base">
                    <span class="font-semibold text-gray-500">
                      Drop your file here{" "}
                    </span>{" "}
                    or Browser
                  </p>
                  <p class="text-base text-gray-500 ">
                    We Support <span className="text-white">JPG, PNG</span>{" "}
                    file. Make sure that your file is no more than 500 kb.
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />

                <img
                  src={dimondIcon}
                  alt="dimond Icon"
                  className="absolute top-6 right-6"
                />
              </label>
            </div>
          </div>
          <div className="mt-[30px]">
            <label className="text-[22px] font-extralight text-white ">
              Image/Video
            </label>
            <div class="flex items-center justify-center w-full mt-[18px]">
              <label
                for="dropzone-file"
                class="relative flex flex-col items-center justify-center w-full h-64 border border-[#FDC500] border-dashed rounded-lg cursor-pointer bg-[#1D1D1D]">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-20 h-20 mb-4 text-[#61D180]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-[#61D180] text-base">
                    <span class="font-semibold text-gray-500">
                      Drop your file here{" "}
                    </span>{" "}
                    or Browser
                  </p>
                  <p class="text-base text-gray-500 ">
                    We Support <span className="text-white">JPG, PNG</span>and{" "}
                    <span className="text-white">MP4</span>
                     file. Make sure that your file is no more than 500 kb.
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />

                <img
                  src={dimondIcon}
                  alt="dimond Icon"
                  className="absolute top-6 right-6"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="my-32 w-56 ml-auto">
          <Button text={"Next"} navigate={HandleOpen} />
        </div>
      </div>
      {showPopup && (
        <PopUp
          onClose={closePopup}
          onNextButton={()=>onNextStep("step5")}
          description="Boost your post to reach out to a bigger candidate base"
          secondaryButtonText="No Thanks"
          primaryButtonText="Yes, boost to reach a larger audience!"
          ImagePath={UpAnimationIcon}
          IIconPath={IIcon}
          iIconText="Job listings that are boosted receive 4.6x the amount of applicants, and find a successful hire 3.2x faster."
        />
      )}
    </div>
  );
};

export default CreateJobStep4;
