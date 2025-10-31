import React from 'react'
import Image from 'next/image'
import { GithubIcon } from 'lucide-react'


function ProjectCard({src,alt,name,about,link,githubLink,techStack}){
  return (
    <>
    <div className="flex justify-between">
        <span className='ml-0 text-white m-[5px] text-4xl mb-2'>{name}</span>

    <div className="flex">
            <a href={link}>
     <svg
    
       viewBox="0 0 122.6 122.88"
       xmlns="http://www.w3.org/2000/svg"
       className="w-4 h-4 mt-6 ml-1  fill-white hover:mt-5 hover:w-5 hover:h-5 transition-colors duration-300"
       >
       <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09
       c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19
       C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11
       c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95
       c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07
       c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5
       c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78
       c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46z" />
     </svg>
    </a>
     <a href={githubLink}>
      <svg className="mt-5 ml-4 invert w-6 h-6 hover:w-7 hover:h-7 hover:mt-4 " xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg></a>
   
     </div>
      
    </div>
   
   


<section className="ml-[14px] max-w-10/10 mt-2 max-md:h-[320px] max-md:w-[500px] border-white rounded-lg">


<div className="relative border-white max-w-10/10 rounded-xl hover:shadow-cyan-50 hover:border-[3px] transition-all duration-300 ease-in-out overflow-hidden group">
  
  <img
    src={src}
    alt={alt}
    className="max-md:h-[300px] max-md:w-[500px] bg-white overflow-hidden transition duration-300 ease-in-out group-hover:blur-[2px]"
  />

  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a href={link} className="flex justify-center items-center">
      <button className="bg-black flex opacity-50 text-white px-4 py-2 rounded-lg">
        Visit Site
        <svg
          viewBox="0 0 122.6 122.88"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 mt-1.5 ml-1 fill-white transition-colors duration-300"
        >
          <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09
          c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19
          C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11
          c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95
          c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07
          c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5
          c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78
          c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46z" />
        </svg>
      </button>
    </a>
  </div>

</div>

</section>

<p className='mt-[20px] max-md:mt-[0px] max-md:text-[20px] ml-4 text-[14px] text-white'>{about}</p>

    <div className="mb-10 ml-2 flex flex-wrap gap-2 mt-5 max-width-[400px]">
       {
  techStack?.map((tech, index) =>{ 
return (
    <button key={index} className="px-5 py-1 text-[12px] ml-0.5 border-black rounded-[12px] text-black bg-white opacity-50 hover:opacity-80 transition">
      {tech}
    </button>
  )})
}
    </div>
    <div className="mb-24"></div>

    {/* <hr className='w-3/4 mb-10 text-white'/> */}
    </>
    
  )
}

export default ProjectCard
