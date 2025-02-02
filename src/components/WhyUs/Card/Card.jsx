import React from "react";

export const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="border md:p-8 p-5 md:space-y-4 space-y-3 border-[#FFFFFF33] rounded-xl bg-[#FFFFFF0D] backdrop-blur-3xl">
      <img className="p-5 bg-[#0D1117] rounded-full border border-[#FFFFFF33]" src={icon} alt="" />
     

      <h6 className="font-bold text-xl">{title}</h6>
      <p className="text-deem ">{subtitle}</p>
    </div>
  );
};
