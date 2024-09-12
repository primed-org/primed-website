const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-[800px] flex">
        <img
          src="/images/Solutions_BG.png"
          alt="solutions-bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col space-y-4 p-4 top-60 left-10 lg:top-60 lg:left-20">
          <p className="text-[28px] font-bold leading-8">
            We exist for different types of <br />{" "}
            <span className="text-primary">Users</span>
          </p>
          <p className="text-[16px] font-normal text-primedText mt-[20px]">
            Primed E-Health is at the heart of solving the <br /> hassles of
            day-to-day dealings associated with the <br /> health sector
          </p>
          <div className="mt-[20px]">
            {/* <Button label="More About Us" variant="primary" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
