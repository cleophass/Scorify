import React from 'react';
import { CubeIcon } from '@heroicons/react/24/outline';
const StatsCard = ({ title, subtitle, value, percentage,barvalue}) => {
  

  return (
    <div className="w-[241.29px] h-44 p-[22.71px] bg-white rounded border border-zinc-200 flex flex-col justify-start items-start gap-[22.71px]">
      <div className=" flex justify-start items-center gap-[12.60px]">
        <div className="bg-light-blue w-[45px] h-[45px] flex justify-center items-center relative">
          <CubeIcon className="h-7 w-7 text-blue-600" />
        </div>
        <div className="flex flex-col justify-start">
          <div className="text-gray-500 text-sm font-normal">{title}</div>
          <div className="text-gray-900 text-15px font-medium">{subtitle}</div>
        </div>
      </div>
      <div className="flex justify-start items-end gap-[4.26px]">
        <div className="text-gray-900 text-xl font-bold">{value}</div>
        <div className="text-blue-600 text-xs font-medium leading-[18.74px]">
          {percentage}% <span>↑</span>
        </div>
      </div>
      <div className="w-[195px] bg-gray-200 rounded-full h-2 overflow-hidden">
        
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${barvalue}%`}}></div>
      </div>
    </div>
  );
};

export default StatsCard;
