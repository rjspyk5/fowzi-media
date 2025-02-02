import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import nannku from '../../assets/images/nannkupremanthu.png'

export const Contact = () => {
  return (
    <div className="flex gap-2 lg:mx-[8%] md:mx-[6%] mx-[3%] mb-36">
      <div className="w-1/2">
        <SectionHeading
          first={"Let's Get"}
          second={"Started"}
          button="Service"
          subheading="We’d love to discuss how we can help your business. Contact us today"
        />
        <div className="">
          <form className="space-y-4 *:rounded-lg *:p-3">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full bg-[#1E1E1E80] placeholder:text-white"
              required
            />
            <br />
            <input
              type="email"
              placeholder="Email"
            className="input input-bordered w-full bg-[#1E1E1E80] placeholder:text-white"
              required
            />
            <br />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full bg-[#1E1E1E80] placeholder:text-white"
              required
            />
            <br />
            <select className="select select-bordered w-full bg-[#1E1E1E80] placeholder:text-whit">
              <option disabled selected>
               Select Service interests
              </option>
              <option>test</option>
              <option>test</option>
            </select>
            <textarea
              className="textarea textarea-bordered  w-full bg-[#1E1E1E80] placeholder:text-whit"
              placeholder="Bio"
            ></textarea>
            <input className="cursor-pointer mt-4 font-bold text-lg rounded-lg !px-[30px] !py-[8px] bg-primary-1" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
      <img className="w-[75%]" src={nannku} alt="" />
      </div>
    </div>
  );
};
