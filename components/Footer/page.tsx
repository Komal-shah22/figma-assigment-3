import React from 'react';
import Image from 'next/image';
import linkdien from '../../public/LinkedIn.webp';
import github from '../../public/GitHub.webp';
import insta from '../../public/Instagram.webp';

const Footer = () => {
  return (
    <div className="w-full bg-[#E3EBF0] mt-32 px-4 sm:px-16 py-12">
      <h1 className="text-main text-2xl font-bold">Contacts</h1>
      <h1 className="text-4xl sm:text-6xl font-bold capitalize mt-2">Get in Touch</h1>
      <p className="text-lg mt-4">rizfanher@gmail.com</p>
      <div className="flex items-center gap-4 mt-4">
        <Image src={linkdien} alt="linkdien" width={40} height={40} className="cursor-pointer" />
        <Image src={github} alt="github" width={40} height={40} className="cursor-pointer" />
        <Image src={insta} alt="insta" width={40} height={40} className="cursor-pointer" />
      </div>
      <p className="text-sm sm:text-lg mt-4 text-center sm:text-left">
        Copyright © 2023. Developed & Designed by Rizfan Herlaya
      </p>
    </div>
  );
};

export default Footer;
