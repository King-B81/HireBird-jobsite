import React from "react";
import { Buttonicn, Msg } from "../../../assets/Svgs";
import Button from "../../view-comp/Button";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import Forgot from "../../../assets/forgot.png";
import { useNavigate } from "react-router-dom";
export default function Forgotpassword() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/Resetpassword");
  };
  return (
    <div className="md:pt-12 flex justify-center">
      <div className="flex flex-col lg:flex-row justify-around gap-8">
      <div className="flex flex-col justify-center items-center lg:items-end mt-[50px] flex-1">
        <img src={Forgot} alt="forgotpassword"  />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 flex-1">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-8/12 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-10 md:py-8 py-6 lg:px-8 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-5xl font-thin mb-4">Forgot your password?</h1>
          <p className="text-[#ffffff70] mb-8 text-center">
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </p>
          <div className="w-full">
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-6">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Msg />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-5 mt-5">
              <Button
                icon2={<Buttonicn />}
                text={"Reset password"}
                navigate={navigate}
              />
            </div>
            <div>
              <div className="flex justify-center gap-1">
                <p
                  className="text-[#61D180] hover:cursor-pointer text-sm"
                  onClick={() => {
                    nav("/createaccount");
                  }}
                >
                  {" "}
                  Back to sign up
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
     
    </div>
  );
}
