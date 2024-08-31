import React from "react";
import Button from "../../../view-comp/Button";
import Dropdown from "./dropdown";
import Card from "./Card";

import GridColImg from "../../../../assets/gridCol-img.png";
import GridRowImg from "../../../../assets/GrifRowImg.png";
import profileImg from "../../../../assets/profile_img.png";
import markeeting_img from "../../../../assets/markeeting_img.png";
import logo from "../../../../assets/Hirebird_Whitebanner 1.png";
import { Link } from "react-router-dom";

const ChipData = [
  {
    name: "SEO",
  },
  {
    name: "Social Media",
  },
  {
    name: "Content Creation",
  },
  {
    name: "Copywriting",
  },
  {
    name: "Social Media Marketing",
  },
  {
    name: "Arizona",
  },
  {
    name: "Google Analytics",
  },
  {
    name: "Graphic Design",
  },
  {
    name: "Hootsuite",
  },
  {
    name: "ASU",
  },
  {
    name: "Email Marketing",
  },
  {
    name: "Brand Strategy",
  },
];

const MarketingSearchResults = () => {
  return (
    <div className="mt-10  mx-auto w-full max-w-[1412px]">
      <div className="flex justify-between items-center mb-[124px] ">
        <img src={logo} alt="logo" />
        <ul className="flex items-center gap-x-[30px]">
          <li>
            <Link to="" className="text-white font-medium text-lg">
              Feed
            </Link>
          </li>
          <li>
            <Link to="" className="text-white font-medium text-lg">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="" className="text-white font-medium text-lg">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="" className="text-white font-medium text-lg">
              Invitations
            </Link>
          </li>
        </ul>
      </div>
      <form>
        <div className="flex w-full bg-[#141414] h-[74px] justify-between items-center border border-white border-opacity-20 rounded-lg">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-[30px] pointer-events-none ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.00081 11C5.00081 10.2121 5.156 9.43185 5.45753 8.7039C5.75906 7.97595 6.20102 7.31451 6.75817 6.75736C7.31532 6.20021 7.97676 5.75825 8.70471 5.45672C9.43266 5.15519 10.2129 5 11.0008 5C11.7887 5 12.569 5.15519 13.2969 5.45672C14.0249 5.75825 14.6863 6.20021 15.2434 6.75736C15.8006 7.31451 16.2426 7.97595 16.5441 8.7039C16.8456 9.43185 17.0008 10.2121 17.0008 11C17.0008 12.5913 16.3687 14.1174 15.2434 15.2426C14.1182 16.3679 12.5921 17 11.0008 17C9.40951 17 7.88339 16.3679 6.75817 15.2426C5.63295 14.1174 5.00081 12.5913 5.00081 11ZM11.0008 3C9.72767 3.00018 8.47296 3.30422 7.34095 3.88684C6.20894 4.46946 5.23234 5.31384 4.49229 6.3498C3.75225 7.38577 3.27014 8.5834 3.08604 9.84315C2.90194 11.1029 3.02115 12.3884 3.43378 13.5928C3.84642 14.7973 4.54054 15.8858 5.45848 16.768C6.37641 17.6502 7.49164 18.3006 8.71149 18.6651C9.93133 19.0296 11.2206 19.0977 12.472 18.8638C13.7235 18.6298 14.901 18.1006 15.9068 17.32L19.2938 20.707C19.4824 20.8892 19.735 20.99 19.9972 20.9877C20.2594 20.9854 20.5102 20.8802 20.6956 20.6948C20.881 20.5094 20.9862 20.2586 20.9885 19.9964C20.9908 19.7342 20.89 19.4816 20.7078 19.293L17.3208 15.906C18.2389 14.7235 18.8068 13.307 18.9598 11.8178C19.1128 10.3285 18.8449 8.82619 18.1865 7.48165C17.5281 6.1371 16.5056 5.00429 15.2353 4.21202C13.965 3.41976 12.4979 2.99983 11.0008 3ZM11.0008 15C12.0617 15 13.0791 14.5786 13.8292 13.8284C14.5794 13.0783 15.0008 12.0609 15.0008 11C15.0008 9.93913 14.5794 8.92172 13.8292 8.17157C13.0791 7.42143 12.0617 7 11.0008 7C9.93994 7 8.92253 7.42143 8.17238 8.17157C7.42224 8.92172 7.00081 9.93913 7.00081 11C7.00081 12.0609 7.42224 13.0783 8.17238 13.8284C8.92253 14.5786 9.93994 15 11.0008 15Z"
                  fill="white"
                  fill-opacity="0.2"
                />
              </svg>
              <span className="text-white ps-4 font-medium text-sm">What</span>
            </div>

            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-[130px] text-sm bg-[#141414] text-white outline-none"
              placeholder="Marketing"
              required
            />
          </div>

          <div className="h-10 w-[1px] text-white bg-white "></div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-[30px] pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.7 11.45C10.9707 11.45 10.2712 11.1603 9.75546 10.6445C9.23973 10.1288 8.95 9.42935 8.95 8.7C8.95 7.97065 9.23973 7.27118 9.75546 6.75546C10.2712 6.23973 10.9707 5.95 11.7 5.95C12.4293 5.95 13.1288 6.23973 13.6445 6.75546C14.1603 7.27118 14.45 7.97065 14.45 8.7C14.45 9.06114 14.3789 9.41873 14.2407 9.75238C14.1025 10.086 13.8999 10.3892 13.6445 10.6445C13.3892 10.8999 13.086 11.1025 12.7524 11.2407C12.4187 11.3789 12.0611 11.45 11.7 11.45ZM11.7 1C9.65783 1 7.69931 1.81125 6.25528 3.25528C4.81125 4.69931 4 6.65783 4 8.7C4 14.475 11.7 23 11.7 23C11.7 23 19.4 14.475 19.4 8.7C19.4 6.65783 18.5888 4.69931 17.1447 3.25528C15.7007 1.81125 13.7422 1 11.7 1Z"
                  fill="white"
                  fill-opacity="0.2"
                />
              </svg>
              <span className="text-white ps-4 font-medium text-sm">Where</span>
            </div>
            <input
              type="search"
              id="search"
              className="block w-[75%] p-4  ps-[130px] text-sm bg-[#141414] text-white outline-none"
              placeholder="Scottsdale, AZ"
              required
            />
            <div className="text-white absolute end-2.5 -bottom-0.5 ">
              <Button
                text="Search"
                icon2={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.55573 9.22647C4.55573 8.61322 4.67652 8.00597 4.9112 7.4394C5.14588 6.87282 5.48986 6.35802 5.9235 5.92439C6.35713 5.49075 6.87193 5.14677 7.43851 4.91209C8.00508 4.67741 8.61233 4.55662 9.22558 4.55662C9.83884 4.55662 10.4461 4.67741 11.0127 4.91209C11.5792 5.14677 12.094 5.49075 12.5277 5.92439C12.9613 6.35802 13.3053 6.87282 13.54 7.4394C13.7746 8.00597 13.8954 8.61322 13.8954 9.22647C13.8954 10.465 13.4034 11.6528 12.5277 12.5286C11.6519 13.4043 10.4641 13.8963 9.22558 13.8963C7.98706 13.8963 6.79926 13.4043 5.9235 12.5286C5.04773 11.6528 4.55573 10.465 4.55573 9.22647ZM9.22558 3C8.23469 3.00014 7.25813 3.23678 6.37708 3.69024C5.49603 4.14369 4.73593 4.80088 4.15995 5.60718C3.58396 6.41348 3.20873 7.34561 3.06545 8.32609C2.92216 9.30657 3.01494 10.3071 3.3361 11.2445C3.65725 12.1819 4.1975 13.0291 4.91193 13.7158C5.62637 14.4024 6.49437 14.9086 7.44378 15.1923C8.3932 15.476 9.39661 15.529 10.3706 15.3469C11.3447 15.1648 12.2612 14.7529 13.044 14.1454L15.6801 16.7815C15.8269 16.9233 16.0235 17.0017 16.2276 17C16.4316 16.9982 16.6268 16.9163 16.7711 16.772C16.9155 16.6277 16.9973 16.4325 16.9991 16.2285C17.0009 16.0244 16.9224 15.8278 16.7806 15.681L14.1445 13.0449C14.8591 12.1245 15.301 11.022 15.4201 9.86295C15.5392 8.70384 15.3307 7.53458 14.8183 6.48811C14.3058 5.44164 13.51 4.55996 12.5213 3.94333C11.5327 3.3267 10.3908 2.99987 9.22558 3ZM9.22558 12.3397C10.0513 12.3397 10.8431 12.0117 11.427 11.4279C12.0108 10.844 12.3388 10.0522 12.3388 9.22647C12.3388 8.40079 12.0108 7.60893 11.427 7.02508C10.8431 6.44124 10.0513 6.11324 9.22558 6.11324C8.3999 6.11324 7.60804 6.44124 7.02419 7.02508C6.44035 7.60893 6.11235 8.40079 6.11235 9.22647C6.11235 10.0522 6.44035 10.844 7.02419 11.4279C7.60804 12.0117 8.3999 12.3397 9.22558 12.3397Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-3 flex items-center gap-x-2.5">
        <Dropdown name="Full-Time" />
        <Dropdown name="Social Media Marketing Intern" />
        <Dropdown name="Location" />
        <Dropdown name="In Person" />
        <Dropdown name="University/College" />
        <Dropdown name="Education" />
        <div>
          <button className="bg-[#61D180] h-[38px] px-2 rounded-lg ">
            Clear all
          </button>
        </div>
      </div>
      <div className="mt-[38px]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[30px] font-bold">
            Search Results - <span className="font-normal">Marketing</span>
          </h1>
          <div className="flex gap-x-3">
            <div className="bg-[#61D180] p-2 w-10 h-10 rounded-lg flex items-center justify-center">
              <img src={GridRowImg} alt="markeeting_img" />
            </div>
            <div className="bg-[#141414] p-2 w-10 h-10 rounded-lg flex items-center justify-center border_green">
              <img src={GridColImg} alt="markeeting_img" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 mt-[38px] ">
          <div className="w-full ">
            {[1, 2, 3, 4, 5].map(() => (
              <Card
                profileImg={profileImg}
                CameronText="Cameron A."
                markeetingImg={markeeting_img}
                dgreeText="Bachelor of Science, Marketing"
                universityText="Utah Valley University - (2017 - 2021)"
                values={80}
                valuePersantage="80"
                valueText="match"
                mainDescription="I'm Cam! A highly motivated individual passionate about sales and marketing. With a strong work ethic and commitment to excellence, I strive for success. Growing up in Utah, I developed a love for the outdoors.. "
                leeMoreLink="See more"
                locationText="Scottsdale, AZ"
                timeText="Scottsdale, AZ"
                profileBtnText="View Profile"
                applyBtnText="Invite to Apply"
              />
            ))}
          </div>
          <div className="max-w-[441px] h-[400px]">
            <div className="bg-[#191A1E] border_green p-[30px] rounded-lg ">
              <h3 className="font-normal text-lg">
                I want to receive the latest{" "}
                <span className="font-bold">Marketing</span> candidate alerts in{" "}
                <span className="font-bold">Phoenix, AZ</span>
              </h3>
              <div className="relative w-full border_green rounded-lg mt-[30px]">
                <div className="absolute inset-y-0 start-0 flex items-center justify-center px-3 pointer-events-none border-r border-[#434343] ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.00081 11C5.00081 10.2121 5.156 9.43185 5.45753 8.7039C5.75906 7.97595 6.20102 7.31451 6.75817 6.75736C7.31532 6.20021 7.97676 5.75825 8.70471 5.45672C9.43266 5.15519 10.2129 5 11.0008 5C11.7887 5 12.569 5.15519 13.2969 5.45672C14.0249 5.75825 14.6863 6.20021 15.2434 6.75736C15.8006 7.31451 16.2426 7.97595 16.5441 8.7039C16.8456 9.43185 17.0008 10.2121 17.0008 11C17.0008 12.5913 16.3687 14.1174 15.2434 15.2426C14.1182 16.3679 12.5921 17 11.0008 17C9.40951 17 7.88339 16.3679 6.75817 15.2426C5.63295 14.1174 5.00081 12.5913 5.00081 11ZM11.0008 3C9.72767 3.00018 8.47296 3.30422 7.34095 3.88684C6.20894 4.46946 5.23234 5.31384 4.49229 6.3498C3.75225 7.38577 3.27014 8.5834 3.08604 9.84315C2.90194 11.1029 3.02115 12.3884 3.43378 13.5928C3.84642 14.7973 4.54054 15.8858 5.45848 16.768C6.37641 17.6502 7.49164 18.3006 8.71149 18.6651C9.93133 19.0296 11.2206 19.0977 12.472 18.8638C13.7235 18.6298 14.901 18.1006 15.9068 17.32L19.2938 20.707C19.4824 20.8892 19.735 20.99 19.9972 20.9877C20.2594 20.9854 20.5102 20.8802 20.6956 20.6948C20.881 20.5094 20.9862 20.2586 20.9885 19.9964C20.9908 19.7342 20.89 19.4816 20.7078 19.293L17.3208 15.906C18.2389 14.7235 18.8068 13.307 18.9598 11.8178C19.1128 10.3285 18.8449 8.82619 18.1865 7.48165C17.5281 6.1371 16.5056 5.00429 15.2353 4.21202C13.965 3.41976 12.4979 2.99983 11.0008 3ZM11.0008 15C12.0617 15 13.0791 14.5786 13.8292 13.8284C14.5794 13.0783 15.0008 12.0609 15.0008 11C15.0008 9.93913 14.5794 8.92172 13.8292 8.17157C13.0791 7.42143 12.0617 7 11.0008 7C9.93994 7 8.92253 7.42143 8.17238 8.17157C7.42224 8.92172 7.00081 9.93913 7.00081 11C7.00081 12.0609 7.42224 13.0783 8.17238 13.8284C8.92253 14.5786 9.93994 15 11.0008 15Z"
                      fill="white"
                      fill-opacity="0.2"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-16 text-sm bg-[#141414] text-white outline-none rounded-lg placeholder:text-[#434343] font-medium"
                  placeholder="Marketing"
                  required
                />
              </div>
              <div className="my-[30px] w-[166px]">
                <Button text="Activate" />
              </div>
              <p className="font-medium text-sm">
                By creating a job alert, you agree to our Terms. You can change
                your consent settings at any time by unsubscribing or as
                detailed in our terms.
              </p>
            </div>
            <div className="my-10">
              <h1 className="font-bold text-[30px]">People also searched:</h1>
              <div className="flex flex-wrap gap-2.5">
                {ChipData.map((item, index) => (
                  <div
                    key={index}
                    className=" flex items-center w-fit  whitespace-nowrap rounded-lg bg-[#61D180] bg-opacity-20 py-2 px-6  text-sm font-extralight uppercase text-[#61D180]">
                    <span className="">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSearchResults;
