import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar - responsive layout */}
      <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 lg:max-w-md xl:max-w-lg bg-navy p-8 lg:p-16 flex flex-col justify-between">
        {/* Header Section */}
        <div>
          <header className="mb-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 ">
              Rudraksh
              Soni
            </h1>
            <p className="text-xl lg:text-2xl text-white font-semibold mb-3">
              Full Stack Developer
            </p>
            <p className="text-slate-300 text-base lg:text-lg max-w-md">
              I build exceptional digital experiences that live on the web.
            </p>
          </header>

          {/* Navigation Links */}
          <nav className="mb-6 lg:mb-4 lg:mt-0 text-slate-300 hidden lg:block">
            <ul className="space-y-2">
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

        {/* Social Links */}
        <div className="flex gap-6 mt-0 lg:mt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Github size={24} color='white' />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Linkedin size={24} color='white' />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Twitter size={24} color='white' />
          </a>
          <a
            href="mailto:rudraksh@example.com"
            className="text-slate hover:text-green transition-colors duration-300 hover:-translate-y-1 transform"
          >
            <Mail size={24} color='white' />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;