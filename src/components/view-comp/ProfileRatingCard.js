import React from "react";
import { ReactComponent as RatingStar } from "../../assets/Ratingstar.svg";


export default function ProfileRatingCard({
  title,
  ProfileRatingItems,
  btnIcon,
}) {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="container mx-auto items-center bg-[#191A1E] rounded-lg border border-[#61d1815b] pb-8">
        <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row ">
          <div className="flex gap-2 items-center justify-between w-full mt-3 pb-4 border-b-2 border-[#61d1815b]">
            <p className="leading-snug text-3xl text-[#fff] mb-2 font-bold">
              {title}
            </p>
            <RatingStar />
          </div>
        </div>
       <div className="w-full px-8 py-8 flex justify-between">
       <div className="">
       {ProfileRatingItems.map((item)=>
          <div className="flex gap-2 py-4">
            {item.Icon}
            <p className="text-[#ffffff70] text-sm">
              <span className="text-[#fff] font-bold">{item.itemTitle}</span>
              <p className="text-[#61D180] text-sm ">{item.desc}</p>
            </p>
          </div>
          
        ) }</div>
        <div>
            {btnIcon && <button
              className="bg-[#61D180] flex justify-center items-center h-[55px] rounded-[10px] px-12 gap-2 btn font-semibold"
            >
              {btnIcon}
            </button>}
          </div>
       </div>
      </div>
    </div>
  );
}
