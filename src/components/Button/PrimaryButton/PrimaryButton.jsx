import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export const PrimaryButton = ({name,classname}) => {
  return (
    <button className={`${classname?classname:"bg-primary-1"} cursor-pointer font-bold md:text-lg text-xs sm:text-sm rounded-lg md:px-[20px] md:py-[10px] py-2 px-3 flex items-center md:gap-2 gap-1`}>{name} <FaArrowRightLong/></button>
  )
}
