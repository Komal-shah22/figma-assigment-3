import About from '@/components/About/page';
import Footer from '@/components/Footer/page';
import Hero from '@/components/Hero/page';
import Navbar from '@/components/Navbar/page';
import Projects from '@/components/Projects/page';
import Skill from '@/components/Skill/page';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home