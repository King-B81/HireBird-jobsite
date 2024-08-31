import React from "react";
import LeftSideChat from "./leftSideChat";
import RightSide from "./rightSide";

const Messages = () => {
  return (
    <div className="text-white mx-5">
      <h1 className="font-bold text-[44px] my-10">Messages</h1>
      <div className="flex">
        <div className="left_side w-full max-w-[371px]">
          <LeftSideChat />
        </div>
        <div className="right_side w-full">
        <RightSide/>
        </div>
      </div>
    </div>
  );
};

export default Messages;
