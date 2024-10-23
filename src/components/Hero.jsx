import React from 'react'
import img from "../assets/img/eagle.png"
import { MdDownload } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div className='h-[100vh] bg-gray-900 flex justify-between items-center tab-break:p-24 p-0 tab-break:pt-40 pt-12'>
        <div>

        <h1 className='text-white tab-break:text-5xl text-3xl tab-break:text-left text-center mt-10 main_heading'>Hii👋  I Am a Raman<br />
        <span className='text-[#01acf8] font-bold tab-break:text-left text-center tab-break:text-3xl text-xl'>Full Stack  Web Developer</span></h1>
        <p className='text-white tab-break:text-base text-sm mt-5 tab-break:text-left text-center  paraGraph'> Hello, I'm Raman Kumar Charak 
        .  I'm a passionate frontend<br /> developer, dedicated  to crafting immersiveand user-friendly<br />  web experiences.  🚀🌟 <br /> #FrontEndDev #HimachalPride </p>
        <div className='pt-5 flex tab-break:justify-start flex-wrap justify-center   items-center text-center text-white *:mx-5'>
          <button className='p-3 mb-5 tab-break:px-5 px-1 bg-[#01acf8] rounded-lg flex items-center border border-[#01acf8]
          hover:bg-transparent transition-all duration-300'>Download CV <MdDownload className='text-xl mt-0.5 ml-2'/> </button>
          <button className='p-3 mb-5 px-5 tab-break:flex hidden border rounded-lg  items-center  border-[#01acf8]
          hover:bg-[#01acf8]  transition-all duration-300'><AnchorLink  href="#skills">Scroll Down</AnchorLink>  <FaArrowDown className='text-xl mt-0.5 ml-2'/></button>
           <button className='p-3 px-5 block tab-break:hidden bg-transparent border rounded-lg  items-center  border-[#01acf8]
          hover:bg-[#01acf8] transition-all mb-5 duration-300'>Contact</button>
        </div>
        </div>
        <div className='hidden tab-break:block'>
            <img src={img} className='h-96 mainimage' alt="mainimage" />
        </div>
    </div>
  )
}

export default Hero
