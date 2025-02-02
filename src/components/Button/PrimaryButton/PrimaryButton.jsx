import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export const PrimaryButton = ({name,classname}) => {
  return (
    <button className={`${classname?classname:"bg-primary-1"} cursor-pointer font-bold text-lg rounded-lg px-[20px] py-[10px] flex items-center gap-2`}>{name} <FaArrowRightLong/></button>
  )
}
