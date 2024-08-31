import React from "react";
export default function ProfileAboutCard({title , cardItem , icon}) {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="container mx-auto flex items-center bg-[#191A1E] py-6 rounded-lg border border-[#61d1815b]">
        <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row">
          <div className="flex items-center w-full">
            <div className="w-full">
            <div className="flex gap-2 items-center">
                {icon}
              <div className="leading-snug text-3xl text-[#fff] font-bold">
              {title}
              </div>
              </div>
              {cardItem}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
