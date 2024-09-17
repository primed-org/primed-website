import Image from 'next/image';
import Button from '@/components/common/Button';

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-[800px] flex">
        <Image
          src="/images/products-bg.svg"
          className="w-full h-full object-cover"
          width={100}
          height={100}
          alt="products-bg"
        />
        <div className="absolute inset-0 flex flex-col space-y-4 p-4 top-60 left-10 lg:top-60 lg:left-20">
          <p className="text-[28px] font-bold leading-8">
            Our Product makes Us <br /> stand out
          </p>
          <p className="text-[16px] font-normal text-primedText mt-[20px]">
            Primed E-Health is at the heart of solving the hassles <br /> of day-to-day
            dealings associated with the health <br /> sector. Our Legacy EMR, Patient
            Smartcard
          </p>
          <div className="mt-[20px]">
            <Button
              style={{ padding: '0px 16px' }}
              label="More About Us"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
