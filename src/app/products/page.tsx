import HeroSection from '@/components/specific/products/HeroSection';
import Image from 'next/image';

const Products = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <section className="flex flex-col items-center bg-neutral">
        <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[400px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[15px] lg:ml-[20px] lg:mt-[20px] overflow-hidden">
              <p className="text-secondary text-xs lg:text-[18px] font-bold mt-[10px] lg:mt-[30px]">
                EMR/HMS [Electronic Medical <br /> Record System]
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                The Electronic Medical Record System provides immediate <br />{' '}
                access to healthcare. ‌Improving the hospitals’ efficiency{' '}
                <br /> and saving costs. This system can facilitate workflow and{' '}
                <br /> improve the quality of patient care and patient safety.
                Make <br /> your patient-clinic relationship as seamless as
                possible by <br />
                electronic assess to health records. <br />{' '}
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[25px]">
                EMR enables patient data to be collected, saved and shared{' '}
                <br /> across different healthcare settings.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src="/images/records-tab.svg"
              alt="records-tab"
              className="w-[280px] h-[280px] lg:w-[600px] lg:h-[600px]"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/smartclinic-app.svg"
              alt="smartcard-app"
              className="w-[280px] h-[280px] lg:w-[600px] lg:h-[600px]"
              width={600}
              height={600}
            />
          </div>

          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[280px] lg:w-[400px] lg:h-[350px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <p className="text-secondary text-xs lg:text-[18px] font-bold mt-[10px] lg:mt-[30px]">
                The SmartClinic Mobile App
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Mobile Application will cater to communication needs <br />
                between providers and patients, processes ranging from <br />
                doctor&apos;s research and availability check, registration, queue{' '}
                <br />
                number settings and notifications, easy-to-access medical <br />
                records, and chats between doctors and patients.
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[15px] lg:mt-[25px] truncate break-words ">
                Helping in making critical information more readily available{' '}
                <br />
                for review on an individual basis especially so for other <br />
                healthcare providers outside a patient&apos;s original primary care{' '}
                <br />
                facility.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[10px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <p className="text-secondary text-xs lg:text-[18px] font-bold mt-[10px] lg:mt-[30px]">
                Primed SmartCard App
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Our patient smart identity cards ultimately make the <br />{' '}
                individual patient record and all transactions within <br />{' '}
                the, patient log as portable, accessible and secure as <br /> an
                ATM account, it will act as a secure carrier for <br /> portable
                medical, health and health financial records, <br /> reducing
                healthcare fraud. <br /> Our approach with the Patient
                smart-card, not only <br /> involves an integrated solution that
                uses the simple <br /> cards to provide immediate access to
                patient health <br /> records but also performs secure
                transactions <br />
                through the patient’s e-wallet that provides mobile <br /> and
                web interfaces to enable patients directly make <br /> digital
                payments for requisitions raised during and <br /> beyond their
                hospital visits.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src="/images/smartcard.svg"
              alt="smartcard-app"
              className="w-[280px] h-[280px] lg:w-[600px] lg:h-[600px]"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/self-service.svg"
              alt="self-service"
              className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]"
              width={400}
              height={400}
            />
          </div>

          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <p className="text-secondary text-xs lg:text-[18px] font-bold mt-[10px] lg:mt-[30px]">
                Smart Self-service Kiosk
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Our patient smart identity cards ultimately make the <br />{' '}
                individual patient record and all transactions within <br />{' '}
                the, patient log as portable, accessible and secure as <br /> an
                ATM account, it will act as a secure carrier for <br /> portable
                medical, health and health financial records, <br /> reducing
                healthcare fraud. <br /> Our approach with the Patient
                smart-card, not only <br /> involves an integrated solution that
                uses the simple <br /> cards to provide immediate access to
                patient health <br /> records but also performs secure
                transactions <br />
                through the patient’s e-wallet that provides mobile <br /> and
                web interfaces to enable patients directly make <br /> digital
                payments for requisitions raised during and <br /> beyond their
                hospital visits.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around mt-[30px] mb-[100px] space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex justify-center bg-[#F9F9D1] w-[280px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[80px]">
            <div className="w-full mt-[10px] ml-[20px] lg:ml-[30px] lg:mt-[20px] overflow-hidden">
              <p className="text-secondary text-xs lg:text-[18px] font-bold mt-[10px] lg:mt-[30px]">
                Efficient Solar Panels
              </p>
              <p className="text-secondary text-[12px] lg:text-[12px] font-normal mt-[5px] lg:mt-[15px] truncate break-words">
                Our patient smart identity cards ultimately make the <br />{' '}
                individual patient record and all transactions within <br />{' '}
                the, patient log as portable, accessible and secure as <br /> an
                ATM account, it will act as a secure carrier for <br /> portable
                medical, health and health financial records, <br /> reducing
                healthcare fraud. <br /> Our approach with the Patient
                smart-card, not only <br /> involves an integrated solution that
                uses the simple <br /> cards to provide immediate access to
                patient health <br /> records but also performs secure
                transactions <br />
                through the patient’s e-wallet that provides mobile <br /> and
                web interfaces to enable patients directly make <br /> digital
                payments for requisitions raised during and <br /> beyond their
                hospital visits.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Image
              src="/images/solar-panels.svg"
              alt="solar-panel"
              className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
