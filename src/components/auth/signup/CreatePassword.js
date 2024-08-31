import React from "react";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import { Buttonicn, Psw, ShowPsw } from "../../../assets/Svgs";
import { useNavigate } from "react-router-dom";
import Button from "../../view-comp/Button";
export default function CreatePassword() {
  const nav = useNavigate();
  const navigate=()=>{
    nav("/")
  }
  return (
    <div className="md:pt-32">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-1/3 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-10 md:py-8 py-6 lg:px-10 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-3xl font-thin mb-4">Create password</h1>
          <p className="text-[#ffffff70] mb-10">
            Sign Up and get access to all the features.
          </p>
          <div className="w-full">
            <div className="flex justify-center items-center w-full h-[55px] rounded-[10px] bordered bg-[#1D1D1D] mb-4">
              <span className="border-red-span h-full px-[14px] flex items-center">
                <Psw />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Password"
              />
              <span className="pe-4">
                <ShowPsw />
              </span>
            </div>
            <div className="flex justify-center items-center w-full h-[55px] rounded-[10px] bordered bg-[#1D1D1D] mb-4">
              <span className="border-red-span h-full px-[14px] flex items-center">
                <Psw />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Confirm Password"
              />
              <span className="pe-4">
                <ShowPsw />
              </span>
            </div>
            <div class="flex justify-between items-start w-full mb-7">
              <div class="flex items-center h-5 gap-3">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
                <p className="text-[#ffffff70] text-xs">
                  I agree to Hirebird Terms & Conditions{" "}
                  <span className="text-[#61D180] hover:cursor-pointer">
                    {" "}
                    Terms & Conditions{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Button
                icon2={<Buttonicn />}
                text={"Next step"}
                navigate={navigate}
              />
            </div>
            <div>
              <div className="flex justify-center gap-1">
                <p className="text-[#ffffff70] text-sm">
                  Don't have an account?
                </p>
                <p className="text-[#61D180] hover:cursor-pointer text-sm">
                  sign up
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
