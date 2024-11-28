import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#E3EBF0] border-black border-b flex items-center justify-between px-6 fixed top-0 z-50">
      <h1 className="font-bold text-xl">Rizfan</h1>
      <div className="block md:hidden">
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>
      <ul className="hidden md:flex gap-6 capitalize text-lg">
        {['home', 'about', 'skill', 'project', 'contact'].map((val, ind) => (
          <li key={ind}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


