import React from 'react'

export default function ProgressBar({title , percentage}) {
  return (
    <div className="flex flex-col justify-between items-center w-full md:flex-row py-4">
      <div className="w-full">
            <div class="flex justify-between mb-1 w-full">
            <span class="text-base font-medium text-white">{title}</span>
            <span class="text-sm font-medium text-white dark:text-white">{percentage}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div class=" bg-[#61d181] h-1.5 rounded-full" style= {{width: percentage}}></div>
            </div>
      </div>
    </div>
  )
}
