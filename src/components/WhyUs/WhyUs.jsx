import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { Card } from "./Card/Card";
import one from '../../assets/icons/Frame.png'
import third from '../../assets/icons/Frame (1).png'
import two from '../../assets/icons/Group.png'

export const WhyUs = () => {
  return (
    <div className="lg:mx-[8%] md:mx-[6%] mx-[3%] mb-36">
      <SectionHeading
        first={"Why"}
        second={"Fowzi Media"}
        button="Service"
        className={" w-full flex justify-center flex-col items-center"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
        
        <Card
          title="Comprehensive Services"
          subtitle="Everything you need under one roof—creative, digital, and print solutions."
          icon={one}
        />
        <Card
          title="Tailored Approach"
          subtitle="We adapt to your unique business needs to provide results that matter."
          icon={two}
        />
        <Card
          title="Experienced Team"
          subtitle="Our team of experts is committed to delivering high-quality, impactful solutions"
          icon={third}
        />
      </div>
    </div>
  );
};
