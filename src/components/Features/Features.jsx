import React from "react";
import img from '../../assets/images/image (1).png'

export const Features = () => {
  return (
    <div>
      <div className="flex justify-between rounded-2xl p-5 border-[1px] border-[#FFFFFF0D]">
        <div className="w-1/2">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
        
        <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
