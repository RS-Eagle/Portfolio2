import { motion } from 'framer-motion'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = ({props}) => {
  
  const li = ["Home","About","Projects","Skills"]


  return (
    <motion.nav animate={{ y: props.isScrolledDown ? -100 : 0 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20,delay:0.1 }}
     className='fixed w-[100vw] bg-gray-900 text-white justify-center flex tab-break:justify-between p-6 px-10 items-center'>
        <h2 className='text-2xl cursor-pointer tab-break:block hidden '>Eagle's</h2>
        <div className='bg-white/5 px-2 py-2 rounded-2xl shadow-lg backdrop-blur-sm  '>
            <ul className='flex justify-center items-center *:px-4 *:py-2 *:cursor-pointer'>
              {
                li.map((e,i)=>{
                  return (
                    <AnchorLink className={`${props.curentNav==e? "bg-white text-black rounded-lg":"rounded-lg"} transition-all `} key={i} href={`#${e.toLowerCase()}`}>
                    <li   onClick={()=>{props.setCurrentNav(e)}}>{e}</li></AnchorLink>
                  )
                })
              }
            </ul>
        </div>
        <button className='p-3 px-5 tab-break:flex hidden bg-[#01acf8] border rounded-lg  items-center  border-[#01acf8]
          hover:bg-transparent transition-all duration-300'>Contact</button>
    </motion.nav>
  )
}

export default Navbar
