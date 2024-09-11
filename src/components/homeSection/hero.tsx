'use client';

import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;
  const carouselRef = useRef<HTMLDivElement>(null);

  const [startPosition, setStartPosition] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prevSlide) =>
          prevSlide === totalSlides ? 1 : prevSlide + 1
        );
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isDragging]);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) {
      setStartPosition(e.touches[0].clientX);
    } else {
      setStartPosition(e.clientX);
    }
    setIsDragging(true);
  };

  // Handle drag move
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || startPosition === null) return;

    let currentPosition;
    if ('touches' in e) {
      currentPosition = e.touches[0].clientX;
    } else {
      currentPosition = e.clientX;
    }

    const diff = startPosition - currentPosition;
    if (diff > 100) {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
      setStartPosition(null);
      setIsDragging(false);
    } else if (diff < -100) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 1 ? totalSlides : prevSlide - 1
      );
      setStartPosition(null);
      setIsDragging(false);
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    setStartPosition(null);
  };

  return (
    <>
      <div
        className="carousel-item w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home_background.png')",
        }}
      >
        <div
          className="carousel w-full text-[#555353] overflow-hidden md:px-[10px] py-[75px]"
          ref={carouselRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="carousel-item w-full grid md:grid-cols-2 ">
              <div className="p-3 md:mt-12 md:pl-15 md:p-10 space-y-3 overflow-hidden ">
                <h1 className="text-secondary text-[20px] mt-3 mb-8 font-semibold leading-10 md:mt-0 lg:leading-[48px] lg:text-3xl">
                  Book a Doctor Consultation <br /> in{' '}
                  <span className="text-primary">Seconds!</span>{' '}
                </h1>
                <p className='text-[16px] leading-[27px] text-[#555353] pb-6 w-full lg:leading-[30px] lg:text-[17px] '>
                  We Solve problems associated with long queues, overcrowding
                  and long wait times at pay points by digitalizing healthcare
                  facilities with our generic end-to-end smartc
                </p>
                <button className="w-full md:w-[400px] h-[50px] text-white text-[16px] bg-primary px-10 py-2 rounded shadow-md">
                  Book a consultation
                </button>
              </div>
              <div className="p-5 lg:pl-20">
                <img
                  src="/images/home_image1.png"
                  className="w-[450px] h-[400px]"
                />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item w-full grid md:grid-cols-2">
              <div className="p-3 md:mt-12 md:pl-15 md:p-10 space-y-3 overflow-hidden ">
                <h1 className="text-secondary text-[20px] mt-3 mb-8 font-semibold leading-10 md:mt-0 lg:leading-[48px] lg:text-3xl">
                  Healthcare Delivery Made <br />{' '}
                  <span className="text-primary"> Easy!</span>{' '}
                </h1>
                <p className='text-[16px] leading-[27px] text-[#555353] pb-6 w-full lg:leading-[30px] lg:text-[17px] '>
                  We Solve problems associated with long queue, overcrowding
                  and long wait times at pay points by digitalizing healthcare
                  facilities with our generic end-to-end smart-clinic
                  solution...
                </p>
                <button className="w-full md:w-[400px] h-[50px] text-white text-[16px] bg-primary px-10 py-2 rounded shadow-md">
                  More About Us
                </button>
              </div>
              <div className="p-5 lg:pl-20">
                <img
                  src="/images/home_image2.png"
                  className="w-[450px] h-[400px]"
                />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item w-full grid md:grid-cols-2">
              <div className="p-3 md:mt-12 md:pl-15 md:p-10 space-y-3 overflow-hidden ">
                <h1 className="text-secondary text-[20px] mt-3 mb-8 font-semibold leading-10 md:mt-0 lg:leading-[48px] lg:text-3xl">
                  Seamless Payments via The <br />{' '}
                  <span className="text-primary">Patient smart-card</span>{' '}
                </h1>
                <p className='text-[16px] leading-[27px] text-[#555353] pb-6 w-full lg:leading-[30px] lg:text-[17px] '>
                  We Solve problems associated with long queues, overcrowding
                  and long wait times at pay points by digitalizing healthcare
                  facilities with our generic end-to-end smartclinic solution...
                </p>
                <button className="w-full md:w-[400px] h-[50px] text-white text-[16px] bg-primary px-10 py-2 rounded shadow-md">
                  More About us
                </button>
              </div>
              <div className="p-5 lg:pl-20">
                <img
                  src="/images/home_image3.png"
                  className="w-[450px] h-[400px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
