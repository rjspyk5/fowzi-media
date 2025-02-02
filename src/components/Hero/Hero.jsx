import React from "react";
import { PrimaryButton } from "../Button/PrimaryButton/PrimaryButton";
import world from '../../assets/icons/world.png'

export const Hero = () => {
  return (
    <div className="lg:mx-[8%] md:mx-[6%] mx-[3%] mb-36">
  <div className="flex flex-col items-center justify-end min-h-[400px]  relative">
      <div className="text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold ">Creative Solutions for Modern Brands</h1>
          <p className="py-6 text-2xl text-deem">
          Direct and minimal explanation.
          </p>
          <div className="flex gap-4">
            <PrimaryButton name={"Visit Fowzi Studios"} />
            <PrimaryButton name={" Discover Fowzi Digital"} classname="bg-transparent border border-white" />
          </div>
        </div>
      </div> <img className="absolute left-0 bottom-0" src={world} alt="" />
    </div>
   
    </div>
  
  );
};
