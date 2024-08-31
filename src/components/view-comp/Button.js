import React from 'react'
export default function Button({text,icon,icon2 ,navigate}) {
  return (
    <button className='bg-slate-700 flex justify-center items-center h-[55px] w-full rounded-[10px] px-12 gap-2 btn font-semibold' onClick={navigate}>
       {icon}  {text} {icon2}
    </button>
  )
}
