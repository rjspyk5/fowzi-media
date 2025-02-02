import React from "react";
import img from '../../assets/images/image (1).png'
import { PrimaryButton } from "../Button/PrimaryButton/PrimaryButton";
import { FeatruesCard } from "./FeaturesCard/FeatruesCard";
import meeting from '../../assets/images/meeting.png'

export const Features = () => {
  return (
    <div className="lg:mx-[8%] md:mx-[6%] mx-[3%] space-y-5">
      <div className="flex justify-between rounded-2xl p-6  border-[1px] bg-[#FFFFFF0D] backdrop-blur-3xl border-[#FFFFFF0D]">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="max-w-md ">
            <h1 className="text-3xl font-bold">High-Quality Print Solutions</h1>
            <p className="py-6 text-base text-deem">
            From business cards to banners, Fowzi Prints delivers exceptional results tailored to your needs
            </p>
           <PrimaryButton name="Explore Fowzi Prints"/>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
        
        <img src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <FeatruesCard title="State-of-the-Art Studio Rentals" subtitle="Fowzi Studios provides professional-grade spaces for all your creative projects." buttonName="Visit Fowzi Studios" img={meeting}/>
        <FeatruesCard title="State-of-the-Art Studio Rentals" subtitle="Fowzi Studios provides professional-grade spaces for all your creative projects." buttonName="Visit Fowzi Studios" img={meeting}/>
      </div>
    </div>
  );
};
