
const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start h-full w-full bg-[#f3f2f2] px-6 py-14 scroll-mt-24 lg:px-16 lg:py-20">
      {/* <div className="lg:ml-[30px]">
        <p className="text-secondary text-[24px] text-center lg:text-left font-semibold">Contact Us</p>
        <p className="text-secondary text-[12px] text-center lg:text-left font-medium">
          Feel free to contact us anytime, we will get <br /> back to you as
          soon as we can!
        </p>
      </div> */}
      <iframe
        height="750"
        // frameBorder="0" scrolling="yes"
        style={{ width: '100%', border: 'none' }}
        src="https://primedpeopleops.formaloo.co/2m64jw"
        id="formalooIframe">
      </iframe>
    </div>
  );
};

export default ContactForm;
