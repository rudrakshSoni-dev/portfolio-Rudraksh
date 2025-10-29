import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Sidebar = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      {/* Sidebar - responsive layout */}
      <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 lg:max-w-md xl:max-w-lg bg-navy p-8 lg:p-16 flex flex-col ">
        
        <div>
          <header className="mb-6">
            <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-2 ">
              Rudraksh
              Soni
            </h1>
            <p className="text-[20px] lg:text-[20px] text-white mb-3">
              Full Stack Developer
            </p>
            <p className="text-slate-200 text-base lg:text-lg max-w-md">
              I build exceptional digital experiences that live on the web.
            </p>
          </header>

          
          <nav className="mb-16 lg:mt-0 text-slate-300 hidden lg:block">
            <ul className="space-y-4">
              {['About','Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-slate hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-block w-8 h-px bg-slate group-hover:w-16 group-hover:bg-white transition-all duration-300 mr-4"></span>
                    <span className="text-[16px] tracking-widest ">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-6 mb-10">
          <a
            href="https://github.com/rudrakshSoni-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors transition-ease duration-300 hover:-translate-y-1 transform"
          >
            <Github color='white' className='w-[24px] h-[24px] ' />
          </a>
          <a
            href="https://www.linkedin.com/in/rudraksh-soni-7674ab2aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Linkedin className='w-[24px] h-[24px] hover:w-[28px] ' color='white' />
          </a>
          <a
            href="https://x.com/soni_rudra81979"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Twitter className='w-[24px] h-[24px] ' color='white' />
          </a>
          <a
            href="mailto:mrrssoni12@gmail.com"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Mail className='w-[24px] h-[24px] ' color='white' />
          </a>
        </div>

        <p className='max-lg:hidden min-lg:text-slate-300 text-sm'>© {`${Year}`} Rudraksh Soni. All rights reserved.</p>
        
        
      </aside>

      {/* <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 lg:max-w-md xl:max-w-lg lg:w-[500px] bg-white rounded-lg p-8 lg:p-16 flex flex-col justify-between">
    
        <div>
          <header className="mb-6">
            <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-[#0a192f] mb-4 ">
              Rudraksh
              Soni
            </h1>
            <p className="text-xl lg:text-2xl text-[#112240] font-semibold mb-3">
              Full Stack Developer
            </p>
            <p className="text-[#233554] text-base lg:text-lg max-w-md">
              I build exceptional digital experiences that live on the web.
            </p>
          </header>

          
          <nav className="mb-6 lg:mb-4 lg:mt-0 text-slate-300 hidden lg:block">
            <ul className="space-y-6">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-slate hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-block w-8 h-px bg-slate group-hover:w-16 group-hover:bg-white transition-all duration-300 mr-4"></span>
                    <span className="text-sm font-semibold tracking-widest uppercase">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        
        <div className="flex gap-6 mt-0 lg:mt-2">
          <a
            href="https://github.com/rudrakshSoni-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Github size={24} color='white' />
          </a>
          <a
            href="https://www.linkedin.com/in/rudraksh-soni-7674ab2aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Linkedin size={24} color='white' />
          </a>
          <a
            href="https://x.com/soni_rudra81979"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Twitter size={24} color='white' />
          </a>
          <a
            href="mailto:mrrssoni12@gmail.com"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Mail size={24} color='white' />
          </a>
        </div>
      </aside> */}
    </>
  );
};

export default Sidebar;