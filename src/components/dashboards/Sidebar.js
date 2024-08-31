import React from "react";
import H from "../../assets/logo.png";
import card from "../../assets/Group 65.png";
import { Application, Createjob, Dashboard, Messages, Search, Settings } from "../../assets/Svgs";
import { useNavigate } from "react-router-dom";
export default function Sidebar({setActiveButton,activeButton}) {
   
  const nav = useNavigate()
    const setButton = (buttonName) => {
      setActiveButton(buttonName);
      nav(buttonName)
    };
  
    return (
      <div className="bg-[#191A1E]  min-w-[300px] flex items-center flex-col px-5 border-r-[#61d1812f] border-r-2 ">
        <img src={H} alt="ERR" className="h-[6em] w-64" />
        <div className="flex flex-col justify-start items-start w-full gap-4">
          <button
            onClick={() => {setButton("dashboard")}}
            className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2 font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "dashboard" ? "btn" : ""}`}
          >
            <Dashboard />
            <span className="w-[50%]"> Dashboard</span>
          </button>
          <button
          onClick={() => setButton("createJob")}
          className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2  font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "createJob" ? "btn" : ""}`}
        >
          <Createjob />
          <span className="w-[50%]">  Create Job</span>
        </button>

        <button
        className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2  font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "Applicants" ? "btn" : ""}`}
          onClick={() => setButton("Applicants")}
        >
          <Application />
          <span className="w-[50%]"> Applicants</span>
        </button>
        <button
        className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2  font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "Messages" ? "btn" : ""}`}
          onClick={() => setButton("Messages")}
        >
          <Messages />
          <span className="w-[50%]"> Messages</span>
        </button>
        <button
        className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2  font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "Settings" ? "btn" : ""}`}
          onClick={() => setButton("Settings")}
        >
         <Settings />
          <span className="w-[50%]"> Settings</span>
        </button>
        <button
          className={`bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] gap-2  font-semibold text-[20ppx] btnn bg-transparent ${activeButton === "Search" ? "btn" : ""}`}
          onClick={() => setButton("Search")}
        >
          <Search />
          <span className="w-[50%]">Search</span>
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-5 mt-14">
        <p className="text-lg">4 Credits Used</p>
        <div class="w-full bg-[#61d18116] rounded-full my-4 h-2 dark:bg-gray-700">
          <div class="bg-[#61D180] h-2 rounded-full" style={{width: "45%"}}></div>
          </div>
        <p className="text-[#979797] ">6 Credits Remaining</p>
      </div>
      <div>
        <img src={card} alt="err" />
      </div>
    </div>
  );
}
