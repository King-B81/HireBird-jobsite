import React, { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import SecondaryButton from "../../../view-comp/SecondaryButton";
import Button from "../../../view-comp/Button";
import PopUp2 from "../Popup-2";

const Card = ({
  profileImg,
  CameronText,
  markeetingImg,
  dgreeText,
  universityText,
  values,
  valuePersantage,
  valueText,
  mainDescription,
  leeMoreLink,
  locationText,
  timeText,
  profileBtnText,
  applyBtnText,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleOpen = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#191A1E] border_green px-[30px] py-[34px] mb-[38px] rounded-lg w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <img src={profileImg} alt="profile" />
          <h3 className="font-bold text-[28px] text-[#979797]">
            {CameronText}
          </h3>
          <div className="flex items-center gap-x-2">
            <img src={markeetingImg} alt="markeeting_img" />
            <div>
              <h6 className="font-normal text-[10px] text-white">
                {dgreeText}
              </h6>
              <p className="font-extralight text-[10px] text-white text-opacity-70 mt-1">
                {universityText}
              </p>
            </div>
          </div>
        </div>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={values}
            className="!w-[96px] !h-[96px] !text-[#61D180] "
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Typography
              variant="caption"
              component="div"
              className=" flex flex-col text-green-500 !font-bold !text-[15px]">
              <p className="text-center text-green-500">{valuePersantage}</p>
              {valueText}
            </Typography>
          </Box>
        </Box>
      </div>
      <p className="w-full max-w-[900px] text-sm">
        {mainDescription}
        <Link to="" className="font-medium ">
          {leeMoreLink}
        </Link>
      </p>
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-x-4">
          <div className="bg-[#25372e] flex items-center gap-x-2 rounded-lg px-3 py-1.5">
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 6.175C4.5264 6.175 4.0722 6.0038 3.73731 5.69905C3.40242 5.3943 3.21429 4.98098 3.21429 4.55C3.21429 4.11902 3.40242 3.7057 3.73731 3.40095C4.0722 3.0962 4.5264 2.925 5 2.925C5.4736 2.925 5.9278 3.0962 6.26269 3.40095C6.59758 3.7057 6.78571 4.11902 6.78571 4.55C6.78571 4.7634 6.73953 4.97471 6.64979 5.17186C6.56004 5.36901 6.42851 5.54815 6.26269 5.69905C6.09687 5.84994 5.90002 5.96964 5.68336 6.0513C5.46671 6.13297 5.2345 6.175 5 6.175ZM5 0C3.67392 0 2.40215 0.479374 1.46447 1.33266C0.526784 2.18595 0 3.34326 0 4.55C0 7.9625 5 13 5 13C5 13 10 7.9625 10 4.55C10 3.34326 9.47322 2.18595 8.53553 1.33266C7.59785 0.479374 6.32608 0 5 0Z"
                fill="#61D180"
              />
            </svg>
            <p className="text-[10px] text-[#61D180]">{locationText}</p>
          </div>
          <div className="bg-[#25372e] flex items-center gap-x-2 rounded-lg px-3 py-1.5">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.00424 1.09524H6.29131C6.60578 1.09524 6.86308 0.848809 6.86308 0.547619C6.86308 0.246429 6.60578 0 6.29131 0H4.00424C3.68977 0 3.43247 0.246429 3.43247 0.547619C3.43247 0.848809 3.68977 1.09524 4.00424 1.09524ZM9.16731 3.49929L9.59613 3.08857C9.70186 2.98669 9.7612 2.84888 9.7612 2.70524C9.7612 2.56159 9.70186 2.42379 9.59613 2.3219L9.59042 2.31643C9.48404 2.21517 9.34016 2.15833 9.19018 2.15833C9.0402 2.15833 8.89631 2.21517 8.78994 2.31643L8.36111 2.72714C7.45047 2.02527 6.31666 1.64269 5.14778 1.64286C2.40329 1.64286 0.0704734 3.81143 0.00186117 6.44C-0.0166297 7.09824 0.102818 7.75336 0.353147 8.36664C0.603477 8.97992 0.979609 9.53893 1.45932 10.0106C1.93903 10.4823 2.51259 10.8572 3.14611 11.113C3.77963 11.3688 4.46026 11.5004 5.14778 11.5C6.11653 11.5005 7.06573 11.2389 7.88605 10.7454C8.70637 10.2518 9.36445 9.54636 9.78449 8.71028C10.2045 7.8742 10.3695 6.94149 10.2603 6.01957C10.1511 5.09764 9.77221 4.22401 9.16731 3.49929ZM5.71954 6.57143C5.71954 6.87262 5.46225 7.11905 5.14778 7.11905C4.8333 7.11905 4.57601 6.87262 4.57601 6.57143V4.38095C4.57601 4.07976 4.8333 3.83333 5.14778 3.83333C5.46225 3.83333 5.71954 4.07976 5.71954 4.38095V6.57143Z"
                fill="#61D180"
              />
            </svg>

            <p className="text-[10px] text-[#61D180]">{timeText}</p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <SecondaryButton text={profileBtnText} />
          <Button text={applyBtnText} navigate={HandleOpen} />
          {showPopup && <PopUp2 onClose={closePopup} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
