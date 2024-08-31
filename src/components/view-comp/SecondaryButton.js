import React from 'react'
export default function SecondaryButton({text,icon,icon2 ,navigate}) {
  return (
    <button className='flex justify-center items-center px-12 h-[55px] w-full rounded-[10px] gap-2 bg-[#3D3D3D] font-semibold' onClick={navigate}>
       {icon}  {text} {icon2}
    </button>
  )
}
