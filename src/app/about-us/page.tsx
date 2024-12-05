'use client';

import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="px-5 py-28 md:px-16 md:py-32">
        <div className="bg-neutral grid md:grid-cols-2 justify-center items-center gap-16 text-[#555353] ">
          <div>
            <h1 className="font-semibold text-secondary text-[24px] leading-9 mb-5 ">
              Our mission
            </h1>
            <p className="text-[#555353] text-[16px] leading-6 ">
              Our mission is to provide a solution that guarantees easy access
              to healthcare as well as security in the area of data collection
              and storage, ensuring that all patients across Africa can have a
              unified healthcare management system that allows easy sharing of
              data among healthcare providers. <br />
              <br />
              Our payment system will ease the completion of transactions and
              also generate revenue to sustain and generate revenue for our
              clients. <br />
              <br />
              Our Vision is to use technology to create easy access to
              healthcare services across Africa for sharing of data among
              healthcare providers. Also, establishing a technology hub that
              fosters technological innovation, particularly in the healthcare
              sector.
            </p>
          </div>
          <div>
            <Image src="/images/image7.svg" alt="" width={490} height={500} />
          </div>
        </div>
      </div>

      <div className="bg-neutral py-20 text-[#555353] ">
        <div className="grid md:grid-cols-3 gap-8 px-5 md:px-16 justify-center items-center">
          <div className="">
            <h1 className="text-secondary text-[24px] font-bold ">
              What We do
            </h1>
          </div>
          <div className="md:col-span-2">
            <p className="text-[16px] leading-6 ">
              Since 2018, Primed E-Health has provided end-to-end E-healthcare
              solutions to digitize clinics and hospitals using our
              user-friendly and adaptable technology called,{' '}
              <b>The Smartclinic</b>. The Smartclinic suite of technologies
              provides immediate access to healthcare and telemedicine services.
              Our platform addresses issues with long payment lines, crowds, and
              protracted wait times that are common in Nigerian hospitals.{' '}
              <br />
              <br />
              Smartclinic specializes in managing doctor visits, prescriptions,
              and medical billing. It also provides both online and offline
              access from any electronic device, offers configurable forms,
              monitors trends, sets off alerts, and generates reports. Allowing
              healthcare providers to organize their operations, track payments,
              cut waste, and improve the quality of care offered to their
              patients.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#CCD2D5] text-white">
        <div className="grid md:grid-cols-3 gap-8 justify-center items-center px-5 md:px-10 py-10 md:pb-20  ">
          <div className="col-span-2 order-2 md:order-1 ">
            <div className="flex flex-wrap justify-center items-center ">
              <div className="w-full md:w-1/2 pb-16 md:pb-0 md:p-10">
                <Image
                  src="./images/mountain.svg"
                  alt="mountain"
                  width={40}
                  height={40}
                />
                <h1 className="font-semibold text-[18px] leading-7 pt-8 pb-3">
                  A mountain of Passion
                </h1>
                <p className="text-[15px] leading-6 ">
                  Our User-Friendly mobile app helps patient book appointments
                  and make quick Payments
                </p>
              </div>
              <div className="w-full md:w-1/2 pb-16 md:pb-0 md:p-10">
                <Image
                  src="./images/human.svg"
                  alt="human_female_dance"
                  width={40}
                  height={40}
                />
                <h1 className="font-semibold text-[18px] leading-7 pt-8 pb-3">
                  Autonomy & Attitude
                </h1>
                <p className="text-[15px] leading-6 ">
                  Our User-Friendly mobile app helps patient book appointments
                  and make quick Payments
                </p>
              </div>
              <div className="w-full md:w-1/2 pb-16 md:pb-0 md:p-10">
                <Image
                  src="./images/team.svg"
                  alt="team_work"
                  width={40}
                  height={40}
                />
                <h1 className="font-semibold text-[18px] leading-7 pt-8 pb-3">
                  Teamwork
                </h1>
                <p className="text-[15px] leading-6 ">
                  Our User-Friendly mobile app helps patient book appointments
                  and make quick Payments
                </p>
              </div>
              <div className="w-full md:w-1/2 pb-16 md:pb-0 md:p-10">
                <Image
                  src="./images/communication.svg"
                  alt="communication"
                  width={40}
                  height={40}
                />
                <h1 className="font-semibold text-[18px] leading-7 pt-8 pb-3">
                  Determination & Focus
                </h1>
                <p className="text-[15px] leading-6 ">
                  Our User-Friendly mobile app helps patient book appointments
                  and make quick Payments
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold text-[24px] order-1 md:order-2 py-8 md:py-0 md:px-9 lg:px-16 md:pt-0">
            Our Client
          </div>
        </div>
      </div>

      <div className="bg-[#FAFADE] text-[#272727] py-20 ">
        <div className="grid lg:grid-cols-4 justify-center items-center px-5 md:px-10">
          <div className="col-span-4 md:col-span-1">
            <h1 className="font-semibold text-[24px] text-secondary mb-12 md:mb-12 lg:mb-0 ">
              Our Key Players
            </h1>
          </div>

          <div className="col-span-3">
            <div className="justify-between items-end space-x-0 mb-12 md:flex md:space-x-10">
              <Image
                src="/images/esther.png"
                alt=""
                width={250}
                height={250}
                className="mb-5 md:mb-0 rounded"
              />
              <div>
                <div className="pb-4">
                  <h1 className="font-semibold text-[20px] text-secondary  ">
                    Esther Anammah
                  </h1>
                  <p>COO/Co-Founder</p>
                </div>
                <p className="text-[15px] leading-6 ">
                  As an Economist with a solid grasp of business strategies, she
                  possesses extensive expertise acquired from more than 5 years
                  of hands-on experience in both the financial and health
                  sectors. Throughout her professional journey, she has excelled
                  as a business consultant, specifically focusing on healthcare
                  solutions. What drives her forward is her unwavering
                  motivation to foster innovation in Nigeria and Africa,
                  particularly within the healthcare realm. It is with this
                  fervor that she has joined this team, dedicating herself to
                  the creation of groundbreaking healthcare solutions tailored
                  to the unique needs of the Nigerian and African market
                </p>
              </div>
            </div>
            <div className=" justify-between items-end space-x-0 mb-12 md:flex md:space-x-10">
              <Image
                src="/images/are.png"
                alt=""
                width={250}
                height={250}
                className="mb-5 md:mb-0 rounded"
              />
              <div>
                <div className="pb-4">
                  <h1 className="font-semibold text-[20px] text-secondary  ">
                    Dr. Abdulhafiz Are
                  </h1>
                  <p>CEO/Co-Founder</p>
                </div>
                <p className="text-[15px] leading-6 ">
                  He is an accomplished Medical Doctor with a Doctorate degree
                  in Health Informatics, which has equipped him with a deep
                  understanding of the intersection between medicine and
                  technology. Over the course of more than 10 years, he has
                  dedicated his career to deploying e-health solutions,
                  effectively utilising digital platforms to enhance healthcare
                  delivery and patient outcomes. Beyond his medical expertise,
                  he is also a passionate social impact entrepreneur. His
                  primary focus is on developing innovative ideas that not only
                  bring about positive changes in the society but also generates
                  sustainable profits.
                </p>
              </div>
            </div>
            <div className="justify-between items-end space-x-0 mb-12 md:flex md:space-x-10">
              <Image
                src="images/usman.png"
                alt="Esther"
                width={250}
                height={250}
                className="mb-5 md:mb-0 rounded"
              />
              <div>
                <div className="pb-4">
                  <h1 className="font-semibold text-[20px] text-secondary  ">
                    Usman Ogunsola
                  </h1>
                  <p>CTO, Software Engineer</p>
                </div>
                <p className="text-[15px] lg:text-[16px] leading-6 ">
                  Ogunsola is a highly skilled and dedicated professional with a
                  passion for technology. As a Software Engineer, he has
                  demonstrated expertise in building robust and scalable web
                  applications. A proven leader, he has successfully led
                  development teams to deliver impactful products. His
                  collaborative approach and effective communication skills
                  makes him an exemplary leader of any team. Currently at
                  Primed, he continues to drive innovation and technical
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="flex flex-col-reverse justify-between items-center md:space-x-8 md:flex-row px-5 md:px-24">
          <div className="grid grid-cols-2 gap-10 justify-center items-center opacity-10">
            <Image
              src="./images/bondinnov.svg"
              alt=""
              width={228}
              height={42}
            />
            <Image
              src="./images/lagos_state.svg"
              alt=""
              width={91}
              height={91}
            />
            <Image
              src="./images/wema_bank.svg"
              alt=""
              width={264}
              height={36}
            />
            <Image src="./images/nccgovng.svg" alt="" width={124} height={70} />
            <Image src="./images/bao.svg" alt="" width={149} height={37} />
            <Image
              src="./images/first_bank.svg"
              alt=""
              width={280}
              height={51}
              className="-ml-3 md:-ml-2"
            />
          </div>
          <div className="w-full text-left mb-10 lg:pr-20 md:text-right md:mb-0">
            <h1 className="text-[24px] text-secondary font-semibold ">
              Our Clients
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
