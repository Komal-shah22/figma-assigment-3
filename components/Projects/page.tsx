import Image from 'next/image';
import figma from '../../public/project-01.webp';
import portfolio from '../../public/project-02.webp';
import portfolio3 from '../../public/project-03.webp';
import project4 from '../../public/project-04 (1).webp';

const Projects = () => {
  return (
    <div className="w-full">
      <h1 className="text-main font-bold text-xl mt-20 text-center">Projects</h1>
      <h1 className="font-bold text-6xl text-center">What I have made?</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-4">
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={figma} alt="portfolio" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">Portfolio Website Design</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Figma</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={portfolio} alt="portfolio2" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">LitterCycle Exchange</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Live View</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={portfolio3} alt="portfolio3" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">Edubix</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Live View</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={project4} alt="project" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">PPDB SMK Telesandi Bekasi</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Live View</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={project4} alt="project" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">PPDB SMK Telesandi Bekasi</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Live View</h1>
          </div>
        </div>
        <div className="rounded-xl shadow-xl hover:shadow-lg transition-shadow">
          <Image src={project4} alt="project" className="w-full h-40 object-cover rounded-t-xl" />
          <div className="p-4">
            <h1 className="font-medium text-xl">PPDB SMK Telesandi Bekasi</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h1 className="text-main text-lg">Live View</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

