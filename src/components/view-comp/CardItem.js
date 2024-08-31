import React from "react";

export default function CardItem({ icon, subtitle, title, description }) {
  return (
    <div className="flex flex-col justify-between items-center w-full md:flex-row py-4">
      <div className="flex items-center ">
        <div>
          <div className="flex gap-6 items-center pb-4">
            {icon}
            <div className="leading-snug text-2xl text-[#ffffff70]">
              {title}
              <p className="text-[#ffffff70] text-sm">{subtitle}</p>
            </div>
          </div>
          <p className="text-[#ffffff70] text-sm">
            {description}
            </p>
        </div>
      </div>
    </div>
  );
}
