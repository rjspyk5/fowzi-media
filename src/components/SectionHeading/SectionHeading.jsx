import React from 'react'

export const SectionHeading = ({first,second,button,className,subheading}) => {
  return (
    <div className={`${className ? className:"max-w-md"} `}>
        <button className='rounded-[20px] font-bold bg-[#FFFFFF36] mb-5 px-5 py-[6px]'>{button}</button>
        <h2 className='text-4xl mb-4 font-bold'>{first} + <span className='text-primary-1'>{second}</span></h2>
        <p className='text-deem'>{subheading}</p>
    </div>
  )
}
