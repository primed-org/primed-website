import HeroSection from '@/components/specific/solutions/HeroSection';
import Image from 'next/image';

const Solutions = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <section className="flex flex-col items-center bg-neutral">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div
            className="flex justify-center bg-[#F9F9D1] w-[330px] h-[300px] px-4 lg:w-[400px] lg:h-[350px] lg:px-2 rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[20px] ml-[15px] lg:ml-[15px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/grommet-icons_organization.svg"
                alt="grommet-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={ 30 }
                height={ 30 }
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Organizations
              </p>
              <p className="text-secondary text-[12px] lg:text-sm font-normal mt-[5px] lg:mt-[15px] whitespace-break-spaces">
                Empower your hospital, clinic, or healthcare institution with SmartClinic’s comprehensive platform designed to digitize your entire
                operation. From electronic medical records (EMR) and telemedicine to billing, payments, and reporting — everything is streamlined and
                transparent. Centralized data storage eliminates paper trails, saves time, and enhances patient care. Organize patient information
                efficiently, control costs, and ensure accountability throughout your healthcare delivery process. </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-laptop.svg"
              alt="doctor-laptop"
              className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]"
              width={ 380 }
              height={ 380 }
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-facetime.svg"
              alt="doctor-facetime"
              className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]"
              width={ 380 }
              height={ 380 }
            />
          </div>

          <div
            className="flex justify-center bg-[#F9F9D1] w-[330px] h-[300px] px-4 lg:w-[400px] lg:h-[350px] lg:px-2 rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[20px] ml-[15px] lg:ml-[15px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/patient-icon.svg"
                alt="patient-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={ 30 }
                height={ 30 }
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Patients
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] whitespace-break-spaces">
                Take charge of your health journey. Book appointments, access your medical records, and make secure payments all from one platform.
                Your records follow you wherever you go, making every hospital visit simple and stress-free.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div
            className="flex justify-center bg-[#F9F9D1] w-[330px] h-[300px] px-4 lg:w-[400px] lg:h-[350px] lg:px-2 rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[20px] ml-[15px] lg:ml-[15px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/patient-icon.svg"
                alt="patient-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={ 30 }
                height={ 30 }
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Providers
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] whitespace-break-spaces">
                Access up-to-date patient histories, test results, prescriptions, and vital signs all in one place. Make faster, smarter decisions,
                fewer errors, and improve patient outcomes.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/doctor-lab.svg"
              alt="doctor-lab"
              className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]"
              width={ 380 }
              height={ 380 }
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/man-meeting.svg"
              alt="man-meeting"
              className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]"
              width={ 380 }
              height={ 380 }
            />
          </div>

          <div
            className="flex justify-center bg-[#F9F9D1] w-[330px] h-[300px] px-4 lg:w-[400px] lg:h-[350px] lg:px-2 rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[20px] ml-[15px] lg:ml-[15px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/file.svg"
                alt="file-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={ 30 }
                height={ 30 }
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Planners
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] whitespace-break-spaces">
                SmartClinic turns data into actionable insights for hospital administrators, regional health planners, and policymakers. Access
                real-time dashboards, trend analysis, financial reports, and operational metrics.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center my-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div
            className="flex justify-center bg-[#F9F9D1] w-[330px] h-[300px] px-4 lg:w-[400px] lg:h-[350px] lg:px-2 rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[20px] ml-[15px] lg:ml-[15px] lg:mt-[20px] overflow-hidden">
              <Image
                src="/images/desktop-icon.svg"
                alt="desktop-icon"
                className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px]"
                width={ 30 }
                height={ 30 }
              />
              <p className="text-secondary text-xs lg:text-[16px] font-semibold mt-[10px] lg:mt-[15px]">
                SmartClinic for Developers
              </p>
              <p className="text-secondary text-[12px] lg:text-sm  font-normal mt-[5px] lg:mt-[15px] whitespace-break-spaces">
                Build, connect, and innovate. ‌SmartClinic offers open APIs and integration tools, so developers can create custom solutions, automate
                tasks, and extend healthcare access.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/developer.svg"
              alt="developer-img"
              className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]"
              width={ 380 }
              height={ 380 }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
