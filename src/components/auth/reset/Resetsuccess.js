import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttonicn } from "../../../assets/Svgs";
import Button from "../../view-comp/Button";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
export default function Resetsuccess() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };
  return (
    <div className="md:pt-32">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-5/12 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-end items-center lg:py-10 md:py-8 py-6 lg:px-8 md:px-7 px-6 rounded-md mx-4 h-[450px]">
          <h1 className="text-5xl font-thin mt-24 mb-4 text-center">
            Successful password reset!
          </h1>
          <p className="text-[#ffffff70] mb-8">
            You can now use your new password to log in to your account!
          </p>
          <div className="w-full">
            <div className="mb-5">
              <Button
                icon2={<Buttonicn />}
                text={"Login"}
                navigate={navigate}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
