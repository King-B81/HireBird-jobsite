import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttonicn, Psw, ShowPsw } from "../../../assets/Svgs";
import Button from "../../view-comp/Button";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
export default function Resetpassword() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/Resetsuccess");
  };
  return (
    <div className="md:pt-32">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-4/12 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-10 md:py-8 py-6 lg:px-8 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-5xl font-thin mb-8">Reset your password</h1>

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
            <div className="flex justify-center items-center w-full h-[55px] rounded-[10px] bordered bg-[#1D1D1D] mb-8">
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
            <div className="mb-5">
              <Button
                icon2={<Buttonicn />}
                text={"Reset password"}
                navigate={navigate}
              />
            </div>
            <div className="flex justify-center gap-1">
              <p
                className="text-[#61D180] hover:cursor-pointer text-sm"
                onClick={() => {
                  nav("/");
                }}
              >
                {" "}
                Back to sign up
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
