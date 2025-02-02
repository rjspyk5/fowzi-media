import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import nannku from '../../assets/images/nannkupremanthu.png'

export const Contact = () => {
  return (
    <div className="flex gap-2">
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
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
            <br />
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
            <br />
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
            <br />
            <select className="select select-bordered w-full">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
          </form>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
      <img src={nannku} alt="" />
      </div>
    </div>
  );
};
