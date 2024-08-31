import React from 'react';
import { Edit, Message } from '../../../assets/Svgs';
import Bitmap from '../../../assets/Bitmap.png';

const applicantsData = [
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  {
    name: 'Cameron A.',
    location: 'Arizona',
    university: 'Utah Valley University',
    profileImage: Bitmap,
  },
  
  // Add more applicant data as needed
];

export default function ApplicantTable() {
  return (
    <div className='lg:flex block justify-between'>
    <div className="Group1000002766 h-full relative overflow-x-auto  lg:w-[66%]">
          <div className='bg-[#1D1D1D] py-[20px]'>
            <th className="w-4/4 text-left px-4 py-2 text-3xl text-[#fff] flex justify-between items-center">New Applicants</th>
          </div>
      <table className="w-full  table-fixed">
        <thead className='bg-[#141414]'>
          <tr className='h-[3.3em]' >
            <th className="w-2/12 text-start px-4 py-2 text-[#fff]">Name</th>
            <th className="w-1/12 text-start  px-4 py-2 text-[#fff]">Location</th>
            <th className="w-2/12 text-start px-4 py-2 text-[#fff]">University</th>
            <th className="w-1/12 text-start px-4 py-2 text-[#fff]">Message</th>
            <th className="w-2/12 text-start px-4 py-2 text-[#fff]">Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#191A1E]'>
          {applicantsData.map((applicant, index) => (
            <tr key={index}>
              <td className="border-s  border-y border-[#61d18112] px-4 py-2">
                <div className="flex items-center">
                  <img className="w-9 h-9 rounded-full border-2 border-white" src={applicant.profileImage} alt="Profile" />
                  <div className="ml-2">
                    <div className="font-extralight leading-snug text-[#ffffff6e] text-sm">{applicant.name}</div>
                  </div>
                </div>
              </td>
              <td className="border-y  border-[#61d18112] px-4 py-2 text-[#ffffff6e] text-opacity-70 font-normal leading-normal text-sm">
                {applicant.location}
              </td>
              <td className="border-y px-4 border-[#61d18112] py-2">
                <div className="flex items-center">
                  <div className="text-[#ffffff6e] font-extralight leading-snug text-sm">{applicant.university}</div>
                </div>
              </td>
              <td className="border-y border-[#61d18112]  px-4 py-2">
              <div className="w-10 h-8 bg-[#61d18112] flex py-[0.4rem] justify-center  bg-opacity-10 rounded-lg">
                    <div className="WpfMessage w-6 h-4 py-px inline-flex" ><Message/></div>
                  </div>
              </td>
              <td className="border-y border-e border-[#61d18112] px-4 py-2 text-center">
                <div className="flex space-x-2">
                <div className="w-16 h-8 bg-[#61d18112] bg-opacity-10 rounded-lg">
                    <div className="text-center text-green-400 text-sm font-extralight flex py-[0.4rem] justify-center ">View</div>
                  </div>
                  <div className="w-40 h-8 bg-[#61d18112]  bg-opacity-10 rounded-lg flex py-[0.4rem] justify-center">
                    <div className="text-center  text-green-400 font-extralight text-sm">Schedule Interview</div>
                  </div>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="Group1000002766  h-full relative overflow-x-auto  lg:w-[32%] bg-[#191A1E] p-4">
      <table className="w-full border-collapse table-fixed ">
        <thead>
          <tr>
            <th className="w-4/4 text-left  pt-2 pb-3 text-3xl text-[#fff] flex justify-between items-center">Recent Activities <Edit/></th>
           
          </tr>
        </thead>
        <tbody className=''>
          {applicantsData.map((applicant, index) => (
            <tr key={index}>
              <td className="border-s-0 border-e-0 border-t-0 border-b-2 border-[#61d18116]  py-2 " >
                <div className="flex items-center">
                  <img className="w-9 h-9 rounded-full border-2 border-white" src={applicant.profileImage} alt="Profile" />
                  <div className="ml-2">
                    <div className="font-extralight leading-snug text-[#ffffff6e] text-xs mb-2">Cameron A. <span className='text-[#FDC500]'>(94%) </span>applied to <span className='text-[#61D180]'>Social Media Marketing Manager.</span></div>
                 <p className='text-[#ffffff70] text-sm'>12 min ago</p>
                  </div>
                </div>
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
