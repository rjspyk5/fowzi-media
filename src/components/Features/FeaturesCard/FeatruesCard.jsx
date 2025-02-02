import React from 'react'
import { PrimaryButton } from '../../Button/PrimaryButton/PrimaryButton'

export const FeatruesCard = ({img,title,subtitle,buttonName}) => {
  return (
      <div className="flex justify-between rounded-2xl p-5 border-[1px] border-[#FFFFFF0D]">
            <div className="w-1/2">
              <div className="max-w-md">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="py-6 text-sm">
                {subtitle}
                </p>
    <PrimaryButton classname={"border border-white"} name={buttonName} />
              </div>
            </div>
            <div className="w-1/2">
            
            <img className='w-full h-full rounded-lg' src={img} alt="" />
            </div>
          </div>
  )
}
