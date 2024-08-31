import React from "react";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import { Jobrec, Jobselector } from "../../../assets/Svgs";
import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
    const navigate = useNavigate()
  return (
    <div className="md:pt-32">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-1/3 md:w-3/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-14 md:py-8 py-6 lg:px-10 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-3xl font-thin mb-10"> Please select your role </h1>
          <div className="w-full">
          <div className="flex justify-evenly">
          <div className="px-2  md:px-6   xl:px-12 h-[190px] border border-[#61d18117] bg-[#1D1D1D] rounded-[10px] flex justify-center items-center hover:border-1 hover:border-[#61D180] cursor-pointer" onClick={()=>{navigate("/profile")}}>
              <Jobselector />
            </div>
            <div className="px-2  md:px-6 xl:px-12 h-[190px] border border-[#61d18117] bg-[#1D1D1D] rounded-[10px] flex justify-center items-center hover:border-1 hover:border-[#61D180] cursor-pointer" onClick={()=>{navigate("/createaccount")}}>
              <Jobrec />
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}
