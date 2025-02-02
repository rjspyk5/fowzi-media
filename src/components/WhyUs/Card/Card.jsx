import React from "react";

export const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="border md:p-10 p-5 md:space-y-5 space-y-3 border-[#FFFFFF33] rounded-xl bg-[#FFFFFF0D] backdrop-blur-3xl">
      <img src={icon} alt="" />

      <h6 className="font-bold text-xl">{title}</h6>
      <p className="text-deem ">{subtitle}</p>
    </div>
  );
};
