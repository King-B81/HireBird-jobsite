import React from "react";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import { Buttonicn, Google, Msg, Phone, Username } from "../../../assets/Svgs";
import Button from "../../view-comp/Button";
import { useNavigate } from "react-router-dom";
export default function Createaccount() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/CreatePassword");
  };
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-1/3 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-14 md:py-8 py-6 lg:px-10 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-5xl font-thin mb-4 text-center">
            {" "}
            Create an Account{" "}
          </h1>
          <p className="text-[#ffffff70]">Sign up and begin your job search.</p>
          <div className="w-full">
            <button className="flex justify-center items-center h-[55px] w-full rounded-[10px] bg-[#EA4335] my-6">
              <Google /> <span className="ms-5"> Sign in with Google</span>
            </button>
            <div className="flex justify-center items-center gap-3 mb-5">
              <span className="bg-[#61d18112] h-[2px] w-full"></span>
              <p className="text-[#ffffff70] w-full text-center">Or Sign in with Email</p>
              <span className="bg-[#61d18112]  h-[2px] w-full"></span>
            </div>
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Username />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="First Name"
              />
            </div>
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Username />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Last Name"
              />
            </div>
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Msg />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Email Address"
              />
            </div>
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-5">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Phone />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Phone Number"
              />
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
                <p
                  className="text-[#61D180] hover:cursor-pointer text-sm"
                  onClick={() => {
                    navigate("/roleselect");
                  }}
                >
                  {" "}
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
