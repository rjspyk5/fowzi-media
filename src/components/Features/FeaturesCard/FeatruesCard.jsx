import React from 'react'
import { PrimaryButton } from '../../Button/PrimaryButton/PrimaryButton'
import { FaArrowRightLong } from 'react-icons/fa6'

export const FeatruesCard = ({img,title,subtitle,buttonName}) => {
  return (
      <div className="flex justify-between rounded-2xl p-5 border-[1px] bg-[#FFFFFF0D] border-[#FFFFFF0D]">
            <div className="w-1/2">
              <div className="max-w-md">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="py-3 text-sm">
                {subtitle}
                </p>
    
     <button className={`cursor-pointer font-bold border  rounded-lg px-[10px] py-[10px] flex items-center gap-2`}>{buttonName} <FaArrowRightLong/></button>
              </div>
            </div>
            <div className="w-1/2">
            
            <img className='w-full h-full rounded-lg' src={img} alt="" />
            </div>
          </div>
  )
}
