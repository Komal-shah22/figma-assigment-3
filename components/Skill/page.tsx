import React from 'react';
import Image from 'next/image';
import html from '../../public/html.webp';
import css from '../../public/css.webp';
import bootstrap from '../../public/bootstrap.webp';
import tailwind from '../../public/tailwind.webp';
import php from '../../public/php.webp';
import laravel from '../../public/laravel.webp';

const Skill = () => {
  return (
    <div className="w-full h-auto bg-[#E3EBF0] py-10">
      <h1 className="text-main text-lg md:text-xl font-bold text-center">Skill</h1>
      <h1 className="font-bold text-2xl md:text-6xl text-center mt-4 md:mt-8">What I am capable of?</h1>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6 px-4">
        <Image src={html} alt="html" width={80} height={80} className="object-contain" />
        <Image src={css} alt="css" width={80} height={80} className="object-contain" />
        <Image src={bootstrap} alt="bootstrap" width={80} height={80} className="object-contain" />
        <Image src={tailwind} alt="tailwind" width={80} height={80} className="object-contain" />
        <Image src={php} alt="php" width={80} height={80} className="object-contain" />
        <Image src={laravel} alt="laravel" width={80} height={80} className="object-contain" />
      </div>
    </div>
  );
};

export default Skill;
