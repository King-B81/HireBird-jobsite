import React, { useState } from "react";
import Button from "../../view-comp/Button";

import eyeIcon from "../../../assets/eye-bold.png";
import penIcon from "../../../assets/write-icon.png";
import ObjectIcon from "../../../assets/OBJECTS.png";
import PopUp from "./Popup";
import Messages from "./messagesChat/messages";

const Applicants = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [changeRoute, setChangeRoute] = useState(false)


  const HandleOpen = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleNextComponent = () => {
    setChangeRoute(true);
  };
  


  return (
   <>
   {!changeRoute ? (<> <div className="mt-[50px] mb-[30px] flex justify-between items-center mx-[30px]">
   <h1 className="font-bold text-[44px]">Applicants</h1>
   <div className="flex items-center gap-x-4">
     <form>
       <label
         for="default-search"
         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
         Search
       </label>
       <div className="relative">
         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <svg
             className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
           className="block w-[382px] h-[55px] ps-10 text-sm text-white border border-[#61d1812f] rounded-lg bg-[#1D1D1D] focus:outline-none "
           placeholder="Search here..."
           required
         />
       </div>
     </form>
     <Button
       text="Export"
       navigate={HandleOpen}
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
             d="M10.0023 1.04199C9.8365 1.04199 9.67752 1.10784 9.56031 1.22505C9.4431 1.34226 9.37726 1.50123 9.37726 1.66699V10.8112L7.97726 9.17699C7.92385 9.11461 7.85868 9.06337 7.78547 9.02617C7.71226 8.98898 7.63244 8.96657 7.55057 8.96023C7.4687 8.95388 7.38639 8.96372 7.30832 8.98919C7.23025 9.01466 7.15797 9.05525 7.09559 9.10866C7.03321 9.16206 6.98196 9.22723 6.94477 9.30044C6.90758 9.37365 6.88517 9.45347 6.87882 9.53534C6.87248 9.61721 6.88232 9.69953 6.90779 9.7776C6.93326 9.85566 6.97385 9.92795 7.02726 9.99033L9.52726 12.907C9.58593 12.9756 9.65877 13.0307 9.74077 13.0685C9.82277 13.1062 9.91198 13.1258 10.0023 13.1258C10.0925 13.1258 10.1817 13.1062 10.2637 13.0685C10.3457 13.0307 10.4186 12.9756 10.4773 12.907L12.9773 9.99033C13.0307 9.92795 13.0713 9.85566 13.0967 9.7776C13.1222 9.69953 13.132 9.61721 13.1257 9.53534C13.1193 9.45347 13.0969 9.37365 13.0597 9.30044C13.0225 9.22723 12.9713 9.16206 12.9089 9.10866C12.8465 9.05525 12.7743 9.01466 12.6962 8.98919C12.6181 8.96372 12.5358 8.95388 12.4539 8.96023C12.3721 8.96657 12.2922 8.98898 12.219 9.02617C12.1458 9.06337 12.0807 9.11461 12.0273 9.17699L10.6273 10.8103V1.66699C10.6273 1.50123 10.5614 1.34226 10.4442 1.22505C10.327 1.10784 10.168 1.04199 10.0023 1.04199Z"
             fill="white"
           />
           <path
             d="M11.8763 7.5V7.815C12.2658 7.67656 12.6901 7.67077 13.0832 7.79851C13.4763 7.92626 13.8162 8.18038 14.0499 8.52132C14.2836 8.86226 14.398 9.2709 14.3753 9.68362C14.3527 10.0963 14.1942 10.49 13.9246 10.8033L11.4246 13.72C11.2486 13.9253 11.0303 14.09 10.7846 14.203C10.5389 14.316 10.2717 14.3744 10.0013 14.3744C9.7309 14.3744 9.46369 14.316 9.21801 14.203C8.97233 14.09 8.75399 13.9253 8.57797 13.72L6.07797 10.8033C5.80912 10.4898 5.6513 10.0963 5.62902 9.68394C5.60673 9.27154 5.72122 8.86333 5.95472 8.52268C6.18822 8.18203 6.52765 7.928 6.92032 7.80003C7.31299 7.67207 7.73693 7.67733 8.1263 7.815V7.5H6.66797C4.3113 7.5 3.13214 7.5 2.40047 8.2325C1.66797 8.96417 1.66797 10.1433 1.66797 12.5V13.3333C1.66797 15.69 1.66797 16.8692 2.40047 17.6008C3.13214 18.3333 4.3113 18.3333 6.66797 18.3333H13.3346C15.6913 18.3333 16.8705 18.3333 17.6021 17.6008C18.3346 16.8692 18.3346 15.69 18.3346 13.3333V12.5C18.3346 10.1433 18.3346 8.96417 17.6021 8.2325C16.8705 7.5 15.6913 7.5 13.3346 7.5H11.8763Z"
             fill="white"
           />
         </svg>
       }
     />
     {showPopup && (
       <PopUp
         onClose={closePopup}
         
         onNextButton={handleNextComponent}
         description="You’re about to export 6 contacts, would you like to use 24 message credits to unlock all 30 candidates?"
         secondaryButtonText="No, export 6 candidates"
         primaryButtonText="Yes, use Credits/Upgrade"
         ImagePath={ObjectIcon}
         imgAlt="object image"
       />
     )}

    
     <Button
       text="Report"
       icon2={
         <svg
           width="20"
           height="20"
           viewBox="0 0 20 20"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
           <path
             d="M16.6107 10.8674C16.4534 12.0674 15.9723 13.2019 15.2192 14.1492C14.4661 15.0966 13.4693 15.821 12.3357 16.2449C11.2021 16.6688 9.97454 16.7761 8.7846 16.5554C7.59467 16.3346 6.48727 15.7941 5.58118 14.9918C4.67509 14.1895 4.00448 13.1557 3.64128 12.0013C3.27808 10.8468 3.23599 9.61528 3.51952 8.43872C3.80305 7.26216 4.4015 6.18498 5.2507 5.32269C6.0999 4.46041 7.16781 3.84555 8.33989 3.54406C11.5891 2.71073 14.9524 4.38323 16.1941 7.4999"
             stroke="white"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             d="M16.6667 3.33301V7.49967H12.5"
             stroke="white"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </svg>
       }
     />
   </div>
 </div>
 <div className="  shadow-md overflow-hidden rounded-tl-lg rounded-tr-lg mx-[30px] mb-16">
   <table className="w-full text-sm text-left rtl:text-right text-white border border-[#1D1D1D] ">
     <thead className="text-xs text-white uppercase bg-[#0D0D0D] h-[60px] border-b border-[#222326]">
       <tr>
         <th scope="col" className="px-[30px] ">
           ID
         </th>
         <th scope="col" className="px-[30px]">
           Name
         </th>
         <th scope="col" className="px-[30px]">
           Position Applied For
         </th>
         <th scope="col" className="px-[30px]">
           University
         </th>
         <th scope="col" className="px-[30px]">
           Compatibility
         </th>
         <th scope="col" className="px-[30px]">
           Status
         </th>
         <th scope="col" className="px-[30px]">
           Operations
         </th>
       </tr>
     </thead>
     <tbody>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           1
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           2
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className=" w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center bg-[#3d3519] text-yellow-400">
             84%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           3
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#3d3519] text-yellow-400 w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center ">
             86%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>

       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           4
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           5
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#422a17] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-orange-400">
             77%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           6
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           7
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           8
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
       <tr className="bg-[#1D1D1D] h-[60px]  border-b border-[#222326] ">
         <th
           scope="row"
           className="px-[30px] font-medium text-gray-900 whitespace-nowrap dark:text-white">
           9
         </th>
         <td className="px-[30px]">Nicholas Patrick</td>
         <td className="px-[30px]">Systems Engineer</td>
         <td className="px-[30px]">Penn State University </td>
         <td className="px-[30px] ">
           <p className="bg-[#202c28] w-[64px] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             92%
           </p>
         </td>
         <td className="px-[30px]">
           <p className="bg-[#273f32] h-[34px] font-extralight text-sm rounded-lg flex items-center justify-center text-[#61D180]">
             Messaged
           </p>
         </td>
         <tr className="px-[30px]">
           <td className="px-6 py-3">
             <span className="bg-[#273f32] ">
               <img src={penIcon} alt="pen Icon" />
             </span>
           </td>
           <td>
             <img src={eyeIcon} alt="eye Icon" />
           </td>
         </tr>
       </tr>
     </tbody>
   </table>
   <div className="bg-[#1D1D1D] w-full h-[88px] flex items-center justify-between pl-[30px] pr-20">
     <h5 className="text-base font-bold">
       Showing <span className="text-green-400">1 to 10</span> of 30
       entries
     </h5>
     <ul className="flex items-center justify-end gap-x-2.5  text-[22px]  ">
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400">
           <span className="sr-only">Previous</span>
           <svg
             width="12"
             height="10"
             viewBox="0 0 12 10"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
             <path
               d="M5.99247 5.53108L10.0868 9.77976C10.3698 10.0734 10.8274 10.0734 11.1074 9.77976L11.7878 9.07373C12.0707 8.78007 12.0707 8.30522 11.7878 8.01468L8.8856 5.00312L11.7878 1.99156C12.0707 1.69791 12.0707 1.22306 11.7878 0.932521L11.1104 0.220244C10.8274 -0.0734145 10.3698 -0.0734145 10.0898 0.220244L5.99548 4.46892C5.70948 4.76257 5.70948 5.23743 5.99247 5.53108ZM0.212242 4.46892L4.30657 0.220244C4.58956 -0.0734145 5.04716 -0.0734145 5.32714 0.220244L6.00753 0.926273C6.29052 1.21993 6.29052 1.69478 6.00753 1.98532L3.10537 4.99688L6.00753 8.00843C6.29052 8.30209 6.29052 8.77694 6.00753 9.06748L5.32714 9.77351C5.04415 10.0672 4.58655 10.0672 4.30657 9.77351L0.212242 5.52484C-0.0707483 5.23743 -0.0707483 4.76257 0.212242 4.46892Z"
               fill="white"
               fill-opacity="0.2"
             />
           </svg>
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#61D180] font-extralight text-white ">
           1
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400 ">
           2
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400 ">
           3
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400 ">
           4
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400 ">
           5
         </a>
       </li>
       <li>
         <a
           href="#"
           className="flex items-center justify-center px-4 h-10 rounded-lg bg-[#202c28] font-extralight text-green-400 ">
           <span className="sr-only">Next</span>
           <svg
             width="12"
             height="10"
             viewBox="0 0 12 10"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
             <path
               d="M6.00753 5.53108L1.9132 9.77976C1.63021 10.0734 1.1726 10.0734 0.892624 9.77976L0.212243 9.07373C-0.0707476 8.78007 -0.0707476 8.30522 0.212243 8.01468L3.1144 5.00312L0.212243 1.99156C-0.0707476 1.69791 -0.0707476 1.22306 0.212243 0.932521L0.889614 0.220244C1.1726 -0.0734145 1.63021 -0.0734145 1.91019 0.220244L6.00452 4.46892C6.29052 4.76257 6.29052 5.23743 6.00753 5.53108ZM11.7878 4.46892L7.69343 0.220244C7.41044 -0.0734145 6.95284 -0.0734145 6.67286 0.220244L5.99247 0.926273C5.70948 1.21993 5.70948 1.69478 5.99247 1.98532L8.89463 4.99688L5.99247 8.00843C5.70948 8.30209 5.70948 8.77694 5.99247 9.06748L6.67286 9.77351C6.95585 10.0672 7.41345 10.0672 7.69343 9.77351L11.7878 5.52484C12.0707 5.23743 12.0707 4.76257 11.7878 4.46892Z"
               fill="#61D180"
             />
           </svg>
         </a>
       </li>
     </ul>
   </div>
 </div></> ): (<Messages/>)}
   
   </>
  );
};

export default Applicants;
