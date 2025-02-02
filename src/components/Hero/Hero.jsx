import React from "react";
import { PrimaryButton } from "../Button/PrimaryButton/PrimaryButton";

export const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
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
      </div>
    </div>
  );
};
