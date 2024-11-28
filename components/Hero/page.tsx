import React from 'react';
import Image from 'next/image';
import hero from '../../public/hero.webp';

const Hero = () => {
  return (
    <div className="w-full bg-[#E3EBF0] h-auto flex flex-col-reverse md:flex-row items-center md:items-start">
      <div className="w-full md:w-[60%] h-auto md:h-[400px] text-center md:text-left px-4 md:px-20 mt-4 md:mt-28">
        <h1 className="text-main font-medium text-base md:text-lg">Hi Everyone, I am</h1>
        <h1 className="font-bold text-2xl md:text-5xl mt-4 md:mt-6">Rizfan Herlaya</h1>
        <p className="text-sm md:text-xl mt-2 md:mt-4">
          Lorem ipsum dolor sit amet consectetur. Vitae maecenas <br className="hidden md:block" />
          pellentesque tellus tempus purus integer nisi cras fermentum.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-8">
          <button className="bg-main text-sm md:text-lg text-white px-8 md:px-14 py-2 md:py-3 rounded-md">
            Download CV
          </button>
          <button className="text-main border-[1px] border-main text-sm md:text-lg px-8 md:px-14 py-2 md:py-3 rounded-md bg-slate-300">
            Explore More
          </button>
        </div>
      </div>
      <div className="w-full md:w-[40%] h-auto md:h-[400px] flex justify-center items-center mb-4 md:mb-0">
        <div className="w-[300px] md:w-[400px] bg-main h-[250px] md:h-[300px] rounded-[30px] flex justify-center items-end mt-40">
          <Image 
            src={hero} 
            alt="profile" 
            width={300} 
            height={300} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


