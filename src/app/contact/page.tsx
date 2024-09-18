import ContactForm from '@/components/specific/contact/ContactForm';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[100px]">
      <section className="flex flex-col lg:flex-row items-center justify-between bg-[#F3F2F2] mb-[50px] w-[350px] h-[850px] lg:w-[1000px] lg:h-[500px] rounded-[15px] lg:px-6">
        <ContactForm />
        <div className="flex flex-col items-center mb-[50px] bg-[#252525] w-[300px] h-[300px] lg:w-[450px] lg:h-[400px] rounded-tl-[12px] rounded-bl-[12px]">
          <div className="flex items-center justify-between lg:mt-[50px] space-y-6 lg:space-y-8 lg:space-x-6">
            <Image
              src="/images/email-icon.svg"
              alt="email-icon"
              className="w-[40px] h-[20px] mt-[20px] mr-[10px]"
              width={40}
              height={20}
            />
            <a href="mailto:info@primedEhealth.com" className="text-neutral text-sm font-normal ">
              info@primedEhealth.com
            </a>
          </div>
          <div className="flex items-center justify-between mt-[30px] space-y-2 lg:space-y-4 lg:space-x-6">
            <Image
              src="/images/phone-icon.svg"
              alt="phone-icon"
              className="w-[40px] h-[30px] ml-[-40px] mt-[5px] mr-[10px]"
              width={40}
              height={30}
            />
            <p className="text-neutral text-sm font-normal">
              +234 814 114 3029
            </p>
          </div>
          <div className="flex items-center justify-between mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
            <Image
              src="/images/office-icon.svg"
              alt="office-icon"
              className="w-[50px] h-[30px] lg:ml-[70px] ml-[50px] mr-[10px]"
              width={50}
              height={30}
            />
            <p className="text-neutral text-sm font-normal">
              6b Ashabi Close, Ladegbuwa Plaza, <br /> Alausa Ikeja, Lagos.
            </p>
          </div>
          <div className="flex items-center justify-between mt-[30px] mb-[20px] space-y-2 lg:space-y-4 lg:space-x-6">
            <Image
              src="/images/time-icon.svg"
              alt="time-icon"
              className="w-[50px] h-[30px] ml-[-70px] mr-[10px]"
              width={50}
              height={30}
            />
            <p className="text-neutral text-sm font-normal">09:00 - 18:00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
