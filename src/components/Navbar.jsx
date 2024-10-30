import { motion } from 'framer-motion'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar_ul from './Navbar_ul'


const Navbar = ({props}) => {
  const handleToggle = () => {
    props.setIsVisible(!props.isVisible);
  };
  
  return (
    <motion.nav animate={{ y: props.isScrolledDown ? -100 : 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20,delay:0.1 }}
     className='fixed w-[100vw] bg-gray-900 text-white justify-center flex tab-break:justify-between p-6 px-10 items-center'>
        <h2 className='text-2xl cursor-pointer tab-break:block hidden '>Portfolio</h2>
            <Navbar_ul props={props}/>
        
        <button className='p-3 px-5 tab-break:flex hidden bg-[#01acf8] border rounded-lg  items-center  border-[#01acf8]
          hover:bg-transparent transition-all duration-300' onClick={handleToggle}>Contact</button>
    </motion.nav>
  )
}

export default Navbar
