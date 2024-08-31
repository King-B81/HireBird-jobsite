import React from "react";
import Button from "../../view-comp/Button";
import { Applicants, Briefcase, Impression } from "../../../assets/Svgs";
import { useNavigate } from "react-router-dom";
import ApplicantTable from "./ApplicantTable";
export default function Dashboard() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/profile");
  };
  return (
    <>
      <div className="px-8 ">
        <div className="flex justify-between items-center py-8">
          <h2 className="text-5xl"> Dashboard</h2>
          <div className="w-56">
            <Button text={"Manage job posts"} navigate={navigate} />
          </div>
        </div>
        <div className="lg:flex block justify-between items-center  pb-8">
          <div className="bg-[#191A1E] border flex justify-between items-center border-[#61d18117] h-[210px] rounded-[10px] lg:w-[32%] sm:mb-6 w-95% lg:ps-12  pe-[3em]">
            <div>
              <Briefcase />
            </div>
            <div className="w-[8em]">
              <h2 className="text-5xl mb-4">2</h2>
              <p className="text-[#ffffff71]">Jobs Posted</p>
            </div>
          </div>
          <div className="bg-[#191A1E] border flex justify-between items-center border-[#61d18117] h-[210px] rounded-[10px] lg:w-[32%] sm:mb-6  w-95% lg:ps-12 pe-[3em]">
            <div>
              <Impression />
            </div>
            <div className="w-[8em]">
              <h2 className="text-5xl mb-4">2,651</h2>
              <p className="text-[#ffffff71]">Impressions</p>
            </div>
          </div>
          <div className="bg-[#191A1E] border flex justify-between items-center border-[#61d18117] h-[210px] rounded-[10px] lg:w-[32%] sm:mb-6 w-95% lg:ps-12 pe-[3em]">
            <div>
              <Applicants />
            </div>
            <div className="w-[8em]">
              <h2 className="text-5xl mb-4">33</h2>
              <p className="text-[#ffffff71]">Applicants</p>
            </div>
          </div>
        </div>
        <div>
          <ApplicantTable />
        </div>
      </div>
    </>
  );
}
