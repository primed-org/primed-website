'use client';

import Hero from '@/components/homeSection/hero';

const HomePage = () => {
  return (
    <>
      <Hero />

      <div className="grid md:grid-cols-2 text-[16px] mx-10 mt-24 mb-10 gap-10">
        <div>
          <img src="/images/image7.png" alt="" className="w-full" />
        </div>
        <div>
          <h1 className="text-secondary text-[20px] font-semibold leading-10 mb-5 lg:mb-10 lg:leading-[48px] lg:text-3xl">
            Our Commitment to <br />{' '}
            <span className="text-primary">Excellence!</span>
          </h1>
          <p className="text-[#555353]">
            We make it our mission to leave an impact in the Healthcare sector,
            by touching lives the best way we know how to. <br />
            <br /> Our mission is to provide a solution that guarantees easy
            access to healthcare as well as security in the area of data
            collection and storage, ensuring that all patients across Africa can
            have a unified healthcare management system that allows easy sharing
            of data among healthcare providers. <br />
            <br /> Our payment system will ease the completion of transactions
            and also generate revenue to sustain and generate revenue for our
            clients. <br />
            <br /> Our Vision is to use technology to create easy access to
            healthcare services across Africa for sharing of data among
            healthcare providers. Also, establishing a technology hub that
            fosters technological innovation, particularly in the healthcare
            sector.
          </p>
        </div>
      </div>

      <div className="my-12 text-[#555353]">
        <h1 className="text-secondary text-[20px] text-center font-semibold leading-10 mb-5 lg:mb-10 lg:leading-[48px] lg:text-3xl">
          We Provide the Best <span className="text-primary">Services</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="relative overflow-hidden p-5">
            {/* Background Gradient */}
            <div className="absolute bottom-5 -left-32 w-full rounded-full  inset-0 bg-gradient-to-t from-[#ffedee] to-transparent z-0"></div>
            <img
              src="/images/iPhone.png"
              alt="iPhone"
              className="w-[350px] h-[230px] mt-5 mx-auto relative z-10"
            />
            <h1 className="text-[16px] font-bold text-secondary mt-10 mb-5 relative z-10">
              Mobile App for Patients
            </h1>
            <p className="text-[16px] text-[#555353] relative z-10">
              Our User-Friendly mobile app helps patient book appointments and
              make <br /> quick Payments
            </p>
          </div>

          <div className="relative overflow-hidden p-5">
            <div className="absolute bottom-10 w-full rounded-full  inset-0 bg-gradient-to-t from-[#faf2f2] to-transparent z-0"></div>
            <img
              src="/images/card.png"
              alt="Card"
              className="w-[250px] h-[210px] mt-10 mx-auto relative z-10"
            />
            <h1 className="text-[16px] font-bold text-secondary mt-10 mb-5 relative z-10">
              Patient Smart Card
            </h1>
            <p className="text-[16px] relative z-10">
              Our User-Friendly mobile app helps patient book appointments and
              make <br /> quick Payments
            </p>
          </div>

          <div className="relative overflow-hidden p-5">
            <div className="absolute left-20 bottom-10 w-full rounded-full inset-0 bg-gradient-to-t from-[#ffedee] to-transparent z-0"></div>
            <img
              src="/images/hp.png"
              alt="hp"
              className="w-[300px] h-[210px] mt-10 mx-auto relative z-10"
            />
            <h1 className="text-[16px] font-bold text-secondary mt-10 mb-5 relative z-10">
              Unified Dashboards for Hospitals
            </h1>
            <p className="text-[16px] text-[#555353] relative z-10">
              Our User-Friendly mobile app helps patient book appointments and
              make <br /> quick Payments
            </p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="bg-[#fcfce8] h-full relative ">
          <div className="grid md:grid-cols-3 text-[#555353] mx-10 text-center ">
            <div className="my-10">
              <h1 className="text-secondary text-[20px] font-bold leading-10 mb-5 lg:mb-4 lg:leading-[48px] lg:text-3xl">
                30+
              </h1>
              <p className="text-[16px] text-[#555353]">
                Trusted by Over 30+ Hospitals and <br /> Clinics
              </p>
            </div>
            <div className="my-10">
              <h1 className="text-secondary text-[20px] font-bold leading-10 mb-5 lg:mb-4 lg:leading-[48px] lg:text-3xl">
                1000000+
              </h1>
              <p className="text-[16px] text-[#555353]">
                Used by Over 1000000+ Patients
              </p>
            </div>
            <div className="my-20">
              <h1 className="text-secondary text-[20px] font-bold leading-10 mb-5 lg:mb-4 lg:leading-[48px] lg:text-3xl">
                10000+
              </h1>
              <p className="text-[16px] text-[#555353]">
                Aided by Over 10000+ Medical <br /> Professionals
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mx-16 gap-10">
            <img
              src="/images/bondinnov.png"
              alt=""
              className="w-[120px] h-10"
            />
            <img
              src="/images/first_bank.png"
              alt=""
              className="w-[120px] h-10"
            />
            <img src="/images/bao.png" alt="" className="w-[120px] h-10" />
            <img src="/images/nccgovng.png" alt="" className="w-[120px] h-10" />
            <img src="images/wema_bank.png" alt="" className="w-[120px] h-10" />
          </div>

          <div className="relative z-10 mb-20">
            <div className="my-24 mx-16">
              <h1 className="text-secondary text-center text-[20px] p-10 font-semibold leading-10 mb-5 lg:mb-4 lg:leading-[48px] lg:text-3xl">
                Proven Track of &nbsp;
                <span className="text-primary">Satisfied Clients</span>
              </h1>

              <div className="mt-7 grid md:grid-cols-3 gap-16">
                <div className="border border-solid border-gray-500 rounded-2xl bg-gray-500 p-1 text-[#413F3F]">
                  <div className="p-4 border-solid border-[#E5BEB7] rounded-2xl bg-[#E5BEB7] space-y-5 ">
                    <h1 className="text-[#2E2D2D] text-[18px] font-semibold mt-4 ">
                      User-Friendly Product
                    </h1>
                    <p className="text-[16px] ">
                      Primed E-health has one of the easiest to use platforms.
                      I’m constantly seeking out new technologies that our
                      offices can utilize to improve patient interactions and
                      create a better patient experience. What can I say? It’s
                      been a game changer.
                    </p>
                    <div className="flex justify-between gap-4">
                      <img
                        src="/images/client.png"
                        alt=""
                        className="w-12 h-12"
                      />
                      <div>
                        <h3 className="text-[#2E2D2D] text-[14px] font-semibold ">
                          Dr. Ambrose Njoku
                        </h3>
                        <p className="text-[14px]">
                          Orthopedic Surgeon - Blue Cross Hospital Lekki
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-solid border-gray-500 rounded-2xl bg-gray-500  p-1 text-[#413F3F]">
                  <div className="p-4 border-solid border-[#b7e5e3] rounded-2xl bg-[#b7e5e3] space-y-5 ">
                    <h1 className="text-[#2E2D2D] text-[18px] font-semibold mt-4 ">
                      User-Friendly Product
                    </h1>
                    <p className="text-[16px] ">
                      Primed E-health has one of the easiest to use platforms.
                      I’m constantly seeking out new technologies that our
                      offices can utilize to improve patient interactions and
                      create a better patient experience. What can I say? It’s
                      been a game changer.
                    </p>
                    <div className="flex justify-between gap-4">
                      <img
                        src="/images/client.png"
                        alt=""
                        className="w-12 h-12"
                      />
                      <div>
                        <h3 className="text-[#2E2D2D] text-[14px] font-semibold ">
                          Dr. Ambrose Njoku
                        </h3>
                        <p className="text-[14px]">
                          Orthopedic Surgeon - Blue Cross Hospital Lekki
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-solid border-gray-500 rounded-2xl bg-gray-500 p-1 text-[#413F3F]">
                  <div className="p-4 border-solid border-[#e4e5b7] rounded-2xl bg-[#e4e5b7] space-y-5 ">
                    <h1 className="text-[#2E2D2D] text-[18px] font-semibold mt-4 ">
                      User-Friendly Product
                    </h1>
                    <p className="text-[16px] ">
                      Primed E-health has one of the easiest to use platforms.
                      I’m constantly seeking out new technologies that our
                      offices can utilize to improve patient interactions and
                      create a better patient experience. What can I say? It’s
                      been a game changer.
                    </p>
                    <div className="flex justify-between gap-4">
                      <img
                        src="/images/client.png"
                        alt=""
                        className="w-12 h-12"
                      />
                      <div>
                        <h3 className="text-[#2E2D2D] text-[14px] font-semibold ">
                          Dr. Ambrose Njoku
                        </h3>
                        <p className="text-[14px]">
                          Orthopedic Surgeon - Blue Cross Hospital Lekki
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[880px] md:h-[550px] bg-primary ">
        <div className="bg-primary absolute -top-[370px] rounded-t-[60px] z-0 w-full overflow-hidden">
          <div className="mx-8 flex flex-col-reverse lg:mx-28 md:grid md:grid-cols-2 md:items-center gap-8 md:gap-10 lg:gap-16 mt-96 pb-[110px] ">
            <img
              src="/images/mobile_app.png"
              alt="Mobile app preview"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            />
            <div className='w-full mb-10 md:mb-0'>
              <h2 className="text-white text-[20px] lg:text-3xl font-semibold mb-4">
                Book a Doctor Appointment on The Patient Mobile App!
              </h2>
              <p className="text-[16px] text-[#F1F1F1] text-base leading-relaxed mt-10 mb-8">
                We solve problems associated with long queues, overcrowding, and
                long wait times at pay points by digitalizing healthcare
                facilities with our end-to-end smart clinic solutions. We also
                improve hospital efficiency by providing solar panels and
                hardware.
              </p>
              <button className="bg-[#E7AA4C] text-[16px] text-[#2A2A2B] font-semibold w-full lg:w-[450px] h-[50px] py-2 px-4 rounded-md">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
