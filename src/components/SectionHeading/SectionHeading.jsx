import React from 'react'

export const SectionHeading = ({first,second,button,className,subheading}) => {
  return (
    <div className={`${className ? className:"max-w-md"} `}>
        <button className='rounded-[20px] font-bold bg-[#FFFFFF36] mb-5 md:px-5 px-3 py-1 md:py-[6px]'>{button}</button>
        <h2 className='md:text-4xl text-3xl md:mb-4 mb-3 font-bold'>{first} + <span className='text-primary-1'>{second}</span></h2>
        <p className='text-deem text-sm md:text-base'>{subheading}</p>
    </div>
  )
}
