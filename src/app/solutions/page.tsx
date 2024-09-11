// import { Footer } from '@/components/common/Footer';
// import { Header } from '@/components/common/Header';
import HeroSection from '@/components/specific/solutions/HeroSection';
import Image from 'next/image';

const Solutions = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <section className="flex flex-col items-center bg-neutral">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[380px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/grommet-icons_organization.svg"
                alt="grommet-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={30}
                height={30}
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Organizations
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Lorem ipsum dolor sit amet consectetur. Eleifend leo <br />{' '}
                nascetur id scelerisque facilisis morbi donec <br /> malesuada
                sed. Diam bibendum feugiat eget neque <br /> risus. Odio
                pulvinar enim ultricies proin. Sed sem <br /> egestas sit nunc
                ante ut faucibus. Et mattis <br /> adipiscing ipsum mi lorem.
                Quis massa eget <br /> vestibulum aliquam. Diam facilisis est
                amet egestas <br /> etiam volutpat feugiat. Ultrices lacus sed
                at at sit ut <br /> risus. Commodo nibh elit eu amet. Nunc
                scelerisque <br /> commodo vulputate ac. Eu dictum auctor at{' '}
                <br /> imperdiet massa ipsum. Massa.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-laptop.svg"
              alt="doctor-laptop"
              className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              width={380}
              height={380}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-facetime.svg"
              alt="doctor-facetime"
              className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              width={380}
              height={380}
            />
          </div>

          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[380px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/patient-icon.svg"
                alt="patient-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={30}
                height={30}
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Patients
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Lorem ipsum dolor sit amet consectetur. Eleifend leo <br />{' '}
                nascetur id scelerisque facilisis morbi donec <br /> malesuada
                sed. Diam bibendum feugiat eget neque <br /> risus. Odio
                pulvinar enim ultricies proin. Sed sem <br /> egestas sit nunc
                ante ut faucibus. Et mattis <br /> adipiscing ipsum mi lorem.
                Quis massa eget <br /> vestibulum aliquam. Diam facilisis est
                amet egestas <br /> etiam volutpat feugiat. Ultrices lacus sed
                at at sit ut <br /> risus. Commodo nibh elit eu amet. Nunc
                scelerisque <br /> commodo vulputate ac. Eu dictum auctor at{' '}
                <br /> imperdiet massa ipsum. Massa.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[380px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/patient-icon.svg"
                alt="patient-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={30}
                height={30}
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Providers
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Lorem ipsum dolor sit amet consectetur. Eleifend leo <br />{' '}
                nascetur id scelerisque facilisis morbi donec <br /> malesuada
                sed. Diam bibendum feugiat eget neque <br /> risus. Odio
                pulvinar enim ultricies proin. Sed sem <br /> egestas sit nunc
                ante ut faucibus. Et mattis <br /> adipiscing ipsum mi lorem.
                Quis massa eget <br /> vestibulum aliquam. Diam facilisis est
                amet egestas <br /> etiam volutpat feugiat. Ultrices lacus sed
                at at sit ut <br /> risus. Commodo nibh elit eu amet. Nunc
                scelerisque <br /> commodo vulputate ac. Eu dictum auctor at{' '}
                <br /> imperdiet massa ipsum. Massa.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-lab.svg"
              alt="doctor-lab"
              className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              width={380}
              height={380}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/man-meeting.svg"
              alt="man-meeting"
              className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              width={380}
              height={380}
            />
          </div>

          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[380px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/file.svg"
                alt="file-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={30}
                height={30}
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Planners
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Lorem ipsum dolor sit amet consectetur. Eleifend leo <br />{' '}
                nascetur id scelerisque facilisis morbi donec <br /> malesuada
                sed. Diam bibendum feugiat eget neque <br /> risus. Odio
                pulvinar enim ultricies proin. Sed sem <br /> egestas sit nunc
                ante ut faucibus. Et mattis <br /> adipiscing ipsum mi lorem.
                Quis massa eget <br /> vestibulum aliquam. Diam facilisis est
                amet egestas <br /> etiam volutpat feugiat. Ultrices lacus sed
                at at sit ut <br /> risus. Commodo nibh elit eu amet. Nunc
                scelerisque <br /> commodo vulputate ac. Eu dictum auctor at{' '}
                <br /> imperdiet massa ipsum. Massa.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[380px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/desktop-icon.svg"
                alt="desktop-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={30}
                height={30}
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Developers
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Lorem ipsum dolor sit amet consectetur. Eleifend leo <br />{' '}
                nascetur id scelerisque facilisis morbi donec <br /> malesuada
                sed. Diam bibendum feugiat eget neque <br /> risus. Odio
                pulvinar enim ultricies proin. Sed sem <br /> egestas sit nunc
                ante ut faucibus. Et mattis <br /> adipiscing ipsum mi lorem.
                Quis massa eget <br /> vestibulum aliquam. Diam facilisis est
                amet egestas <br /> etiam volutpat feugiat. Ultrices lacus sed
                at at sit ut <br /> risus. Commodo nibh elit eu amet. Nunc
                scelerisque <br /> commodo vulputate ac. Eu dictum auctor at{' '}
                <br /> imperdiet massa ipsum. Massa.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/developer.svg"
              alt="developer-img"
              className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
              width={380}
              height={380}
            />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Solutions;
