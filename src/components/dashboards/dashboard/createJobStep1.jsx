import React from "react";
import Button from "../../view-comp/Button";

const CreateJobStep1 = ({onNextStep, progress}) => {

  return (
    <div className="px-8 mb-20 ">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-5xl font-bold ">Create Job</h2>
      </div>
      <div className=" px-[30px] border_green bg-[#191A1E] pt-[87px] rounded-lg">
        <div className="relative ">
          <div className="bg-[#47484B] h-1 w-full py-1 rounded"></div>
          <div className="bg-[#61D180] absolute h-2 rounded py-1 top-0 " style={{width: `${progress}%`}}></div>
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
            placeholder="Title"
            className="border_green bg-[#1D1D1D] rounded-lg h-[55px] w-full px-5 text-white placeholder:text-white placeholder:text-opacity-20 focus:outline-none "
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border_green bg-[#1D1D1D] rounded-lg h-[189px] w-full px-5 text-white placeholder:text-white  placeholder:text-opacity-20 focus:outline-none py-5 mt-7 resize-none "
          />
          <div className="my-32 w-56 ml-auto">
          <Button text={"Next"} navigate={()=>onNextStep("step2")} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobStep1;
