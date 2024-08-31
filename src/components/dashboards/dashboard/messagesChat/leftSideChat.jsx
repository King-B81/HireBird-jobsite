import React from "react";
import ContactBox from "./contactBox";
import userImage from "../../../../assets/Userpic.png";

const LeftSideChat = () => {
  return (
    <div className=" border-r border_green border-b">
      <div className="flex items-center bg-[#191A1E] px-[17px] py-[29px] justify-between">
        <h6 className="font-bold text-lg">Chat</h6>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#61D180]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full max-w-[215px] h-[50px] ps-10 text-sm text-white border border_green rounded-full bg-[#1D1D1D] focus:outline-none "
            placeholder="Search"
            required
          />
        </div>
      </div>
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#61D180]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        // messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />{" "}
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />{" "}
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />{" "}
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
      <ContactBox
        bgChange="[#1F1D1F]"
        ImgUrl={userImage}
        ImgAlt="profile"
        onlineIcon="[#61D180]"
        nameText="John Smith"
        timeAgo="3h ago"
        messageText="Could we schedule a call for today?..."
        messageNumber="2"
      />
    </div>
  );
};

export default LeftSideChat;
