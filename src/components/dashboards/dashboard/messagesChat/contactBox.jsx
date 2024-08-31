import React from "react";

const ContactBox = ({
  ImgUrl,
  ImgAlt,
  onlineIcon,
  nameText,
  timeAgo,
  messageText,
  messageNumber,
  bgChange
}) => {
  return (
    <div className={`bg-${bgChange} px-4 py-5 border-b border_green flex gap-x-2 cursor-pointer`}>
      <div className="relative">
        <img src={ImgUrl} alt={ImgAlt} />
        <span
          className={`absolute w-4 h-4 border-4 rounded-full top-0 -left-1 bg-${onlineIcon}`}></span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base">{nameText}</h3>
          <p className="font-medium text-xs text-[#61D180]">{timeAgo}</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="font-normal text-sm overflow-hidden w-full max-w-[274px] text-ellipsis">
            {messageText}
          </p>
          <span className="font-extralight text-xs bg-[#61D180] w-5 h-5 rounded-full flex items-center justify-center">
            {messageNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
