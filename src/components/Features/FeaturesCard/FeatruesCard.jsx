import React from 'react'
import { PrimaryButton } from '../../Button/PrimaryButton/PrimaryButton'
import { FaArrowRightLong } from 'react-icons/fa6'

export const FeatruesCard = ({img,title,subtitle,buttonName}) => {
  return (
      <div className="flex justify-between rounded-2xl md:p-5 p-3 border-[1px] bg-[#FFFFFF0D] border-[#FFFFFF0D]">
            <div className="w-1/2">
              <div className="max-w-md">
                <h1 className="md:text-2xl text-lg font-bold">{title}</h1>
                <p className="py-3 md:text-sm text-xs">
                {subtitle}
                </p>
    
     <button className={`cursor-pointer font-bold border text-xs md:text-base   rounded-lg md:p-[10px] p-2 flex items-center gap-2`}>{buttonName} <FaArrowRightLong/></button>
              </div>
            </div>
            <div className="w-1/2">
            
            <img className='w-full h-full rounded-lg' src={img} alt="" />
            </div>
          </div>
  )
}
