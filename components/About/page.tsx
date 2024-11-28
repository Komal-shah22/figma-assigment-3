import React from 'react';
import Image from 'next/image';
import about from '../../public/about.webp';

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-[40%] flex justify-center items-center h-[300px] md:h-[400px]">
        <Image 
          src={about} 
          alt="about" 
          width={250} 
          height={250} 
          className="object-contain" 
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col items-center md:items-start px-4 md:px-0 text-center md:text-left">
        <h1 className="text-main mt-8 md:mt-10 font-bold text-lg md:text-xl">About</h1>
        <h1 className="capitalize font-bold text-4xl md:text-6xl mt-4">about me?</h1>
        <p className="text-base md:text-xl mt-4 md:mr-36">
          Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a adipiscing non aliquet. Leo semper lacus fringilla 
          consectetur cras ac ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam consectetur aliquam vitae suspendisse 
          vel leo. Nec quisque senectus laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam nunc maecenas non. 
          Molestie pretium amet id dictum vitae nam vel sit. Rhoncus massa velit ut amet massa morbi eget.
        </p>
      </div>
    </div>
  );
};

export default About;

