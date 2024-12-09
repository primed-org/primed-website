import Image from 'next/image';
export function Footer() {
  return (
    <footer className="w-full h-full bg-[#272727] text-white py-4 bottom-0">
      <div className="container mx-auto px-4 text-[16px] mt-5">
        <div className="grid grid-cols-2 gap-10 justify-items-center text-center lg:text-start lg:gap-0 lg:grid-cols-4 ">
          <div className="w-full md:w-auto flex flex-col leading-10  ">
            <div className="text-[18px] font-bold ">About</div>
            <div className="lg:flex lg:flex-col lg:gap-4">
              <a className="hover:text-primary cursor-pointer text-xs">
                Who we are
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Contact Us
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Terms & Conditions
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Reviews
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col leading-10">
            <div className="text-[18px] font-bold ">Solutions</div>
            <div className="lg:flex lg:flex-col lg:gap-4">
              <a className="hover:text-primary cursor-pointer text-xs">
                Organizations
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Patient
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Developers
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col leading-10">
            <div className="text-[18px] font-bold ">Products</div>
            <div className="lg:flex lg:flex-col lg:gap-4">
              <a className="hover:text-primary cursor-pointer text-xs">
                Patient App
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">EMR</a>
              <a className="hover:text-primary cursor-pointer text-xs">
                Smart Card
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col leading-10">
            <div className="text-[18px] font-bold">Help</div>
            <div className="lg:flex lg:flex-col lg:gap-4">
              <a className="hover:text-primary cursor-pointer text-xs">
                Need Help?
              </a>
              <a className="hover:text-primary cursor-pointer text-xs">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:gap-4 mt-12 lg:mt-6">
          <Image
            src="/images/logos_x.svg"
            alt="Mobile app preview"
            width={20}
            height={20}
            className="mx-2 cursor-pointer"
          />
          <Image
            src="/images/logos_insta.svg"
            alt="Mobile app preview"
            width={20}
            height={20}
            className="mx-2 cursor-pointer"
          />
          <Image
            src="/images/logos_facebook.svg"
            alt="Mobile app preview"
            width={20}
            height={20}
            className="mx-2 cursor-pointer"
          />
        </div>
        <div className="flex justify-center mt-4 cursor-pointer">
          <Image
            className="w-8 h-8"
            alt="Group"
            src="/images/icon.svg"
            width={40}
            height={30}
          />
          <div className="ml-2">Primed E-Health</div>
        </div>
      </div>
    </footer>
  );
}
