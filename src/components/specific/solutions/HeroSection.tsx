import Button from "@/components/common/Button";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="w-full h-[800px]">
        <img
          src="/images/Solutions_BG.png"
          alt="solutions-bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-60 left-20">
          <p className="text-[28px] font-bold leading-8">
            We exist for different types of <br />{" "}
            <span className="text-primary">Users</span>
          </p>
          <p className="text-[16px] font-normal text-primedText mt-[20px]">
            Primed E-Health is at the heart of solving the <br /> hassles of
            day-to-day dealings associated with the <br /> health sector
          </p>
          <div className="mt-[20px]">
            <Button color="primary">More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
