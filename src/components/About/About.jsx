import React from 'react'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { PrimaryButton } from '../Button/PrimaryButton/PrimaryButton'
import lookInto from '../../assets/images/lookIntoCamera.png'
import camera from '../../assets/images/camera.png'

export const About = () => {
  return (
    <div className='flex'>
        <div className="w-1/2 flex gap-7">
        <div className="">
            <img src={lookInto} alt="" />
        </div>
        <div className="">
            <img className='mb-10' src={camera} alt="" />
           <PrimaryButton classname={"border border-[white]"} name={"Learn more"} />
        </div>
        
        </div>
        <div className="w-1/2 flex justify-end items-center">
        <SectionHeading first={"About"} second={"Fowzi Media"} button={"About us"} subheading={"We bring together digital, print, and studio services to help your business grow with an integrated approach. Our experienced team delivers high-quality results tailored to your brand’s needs.'- Visual: A single, clean icon or graphic that represents collaboration, such as three intersecting lines or shapes, symbolizing the three sub-brands."} />
        </div>
    </div>
  )
}
