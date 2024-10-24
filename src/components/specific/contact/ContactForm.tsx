import Button from '@/components/common/Button';

const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start h-screen">
      <div className="lg:ml-[30px]">
        <p className="text-secondary text-[24px] text-center lg:text-left font-semibold">Contact Us</p>
        <p className="text-secondary text-[12px] text-center lg:text-left font-medium">
          Feel free to contact us anytime, we will get <br /> back to you as
          soon as we can!
        </p>
      </div>
      <form className="flex flex-col p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Name"
            className="w-[300px] lg:w-[500px] h-[40px] bg-white border border-gray-300 rounded-[10px] px-4 placeholder-[#757575] placeholder:text-xs"
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-[300px] lg:w-[500px] h-[40px] bg-white border border-gray-300 rounded-[10px] px-4 placeholder-[#757575] placeholder:text-xs"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Hospital/Clinic Name"
            className="w-[300px] lg:w-[500px] h-[40px] bg-white border border-gray-300 rounded-[10px] px-4 placeholder-[#757575] placeholder:text-xs"
          />
        </div>

        <div className="mb-6">
          <input
            placeholder="Message"
            className="w-[300px] lg:w-[500px] h-[40px] bg-white border border-gray-300 rounded-[10px] px-4 placeholder-[#757575] placeholder:text-xs"
          />
        </div>

        <div className="text-center">
          <Button label="Send" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
