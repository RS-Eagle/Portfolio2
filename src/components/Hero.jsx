import React, { useEffect, useState } from 'react'
import img from "../assets/img/eagle.png"
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Hero = ({props}) => {
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 80) {
        props.setIsScrolledDown(false); 
     
      } else {
        props.setIsScrolledDown(true); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleToggle = () => {
    props.setIsVisible(!props.isVisible);
  };
  

  return (
    <div id='home' className='h-[100vh] bg-gray-900 flex tab-break:justify-between justify-evenly items-center tab-break:p-24 p-0 tab-break:pt-40 pt-12'>
        <div>

        <h1 className='text-white tab-break:text-5xl text-3xl tab-break:text-left text-center mt-10 glowtext'>Hii👋  I Am a Raman<br />
        <span className='text-[#01acf8] font-bold tab-break:text-left text-center tab-break:text-3xl text-xl'>Full Stack  Web Developer</span></h1>
        <p className='text-white glowtext tab-break:text-base text-sm mt-5 tab-break:text-left text-center '> Hello, I'm Raman Kumar Charak 
        .  I'm a passionate frontend<br /> developer, dedicated  to crafting immersiveand user-friendly<br />  web experiences.  🚀🌟 <br /> #FrontEndDev #HimachalPride </p>

        <div className='pt-5 flex tab-break:justify-start flex-wrap justify-center   items-center text-center text-white *:mx-5'>
          <a href="/Raman_CV.pdf" download={"Raman_CV.pdf"} >
            <button className='p-3 mb-5 tab-break:px-5 px-1 bg-[#01acf8] rounded-lg flex items-center border border-[#01acf8]
          hover:bg-transparent transition-all duration-300'>Download CV <MdDownload className='text-xl mt-0.5 ml-2'/> </button>
          </a>
          <AnchorLink  href="#skills"><button className='p-3 mb-5 px-5 tab-break:flex hidden border rounded-lg  items-center  border-[#01acf8]
          hover:bg-[#01acf8]  transition-all duration-300'>Scroll Down  <FaArrowDown className='text-xl mt-0.5 ml-2'/></button></AnchorLink>
           <button className='p-3 px-6 py-3.5 flex justify-center  tab-break:hidden bg-transparent border rounded-lg  items-center  border-[#01acf8]
          hover:bg-[#01acf8] transition-all mb-5 cursor-pointer duration-300' onClick={handleToggle}>Contact</button>
        </div>
        </div>
        <div className='hidden tab-break:block'>
            <img src={img} className='h-96 mainimage' alt="mainimage" />
        </div>
    </div>
  )
}

export default Hero
