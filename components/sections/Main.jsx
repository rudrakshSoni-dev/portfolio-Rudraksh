import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';


const Main = () => {
  return (
    <>
      {/* Main Content Area - appears on right on desktop, below on mobile */}
      <main className="lg:ml-[50%] xl:ml-[40%] bg-navy min-h-screen">
        <div className="p-8 lg:p-16">
          {/* About Section */}
          <section id="about" className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
             About Me
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Hello! I'm Rudraksh, a software developer based in Kota, Raj, India. I enjoy creating
                things that live on the internet, whether that be websites, applications, or
                anything in between.
              </p>
              <p>
                My interest in programming started back in 2023 when I was in college, trying my hand at
                building my first website — turns out learning Web Developement taught me a lot about
                how the web works!
              </p>
              <p>
                Fast-forward to today, and I have had decent experience, building on the web while having hands on experience with libraries and frameworks like <span className='text-white'>HTML , CSS , JS , Node , React, Next , Express , MongoDB , SQL , Postman , Git , GitHub , Figma , Notion , TypeScript and JS.</span>
              </p>
              <p>
                I am pursuing degree of Bachelor BTech in Electronics and Communication Engineering from BIT Mesra a reputated GFTI in Ranchi , Eastern India . 
              </p>
              <p>
                I also have deep interest in problem solving , data structures and algorithms . I love to participate in competitive programming contests on various platforms .
                You may check out my profile on <a className='text-white underline' href='www.leetcode.com' >LeetCode</a> where i have solved more than <span className='text-white'>200</span> problems .
              </p>
              <p>
                Apart from academics and coding , I love running (<a className='text-white underline' href='www.strava.com' >Strava</a>), listening music (<a className='text-white underline' href='www.spotify.com.com'>Spotify</a>) and reading books. I also do have a <span className='text-white'>great passion towards startups and business , and would love to work with one , especially startups with small teams and more flexiblity.</span>
              </p>
            </div>
          </section>

          {/* Experience Section */}
          {/* <section id="experience" className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              Experience
            </h2>
            <div className="space-y-8">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-light-navy rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-xs text-slate-300 mb-2">2023 - PRESENT</p>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Senior Developer • Company Name
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Build and maintain critical components used to construct various web applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl bg-white text-xs  bg-opacity-10 text-black px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
             Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-light-navy rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green transition-colors">
                    Featured Project {item}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    A web app for visualizing personalized data. View your top artists, tracks, and more.
                  </p>
                  <div className="flex gap-4 text-slate">
                    <a href="https://github.com/rudrakshSoni-dev/" className="hover:text-green transition-colors">
                      <Github size={20} color='white' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
             Get In Touch
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:mrrssoni12@gmail.com?subject=Hello&body=I%20am%20contacting%20you%20regarding..."
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black hover:bg-opacity-10 transition-all duration-300 font-semibold"
            >
              Say Hello
            </a>
          </section>
        </div>
      </main>
    </>
  );
};

export default Main ;