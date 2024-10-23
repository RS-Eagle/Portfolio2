import React, { useState } from 'react'


const Navbar = () => {
  const [curentNav,setCurrentNav] = useState("Home")
  const li = ["Home","About","Projects","Skills"]


  return (
    <nav className='fixed w-[100vw] bg-gray-900 text-white justify-center flex tab-break:justify-between p-6 px-10 items-center'>
        <h2 className='text-2xl cursor-pointer tab-break:block hidden '>Eagle's</h2>
        <div className='bg-white/5 px-2 py-2 rounded-2xl shadow-lg backdrop-blur-sm  '>
            <ul className='flex justify-center items-center *:px-4 *:py-2 *:cursor-pointer'>
              {
                li.map((e,i)=>{
                  return (
                    <li key={i} className={`${curentNav==e? "bg-white text-black rounded-lg":"rounded-lg"} transition-all `} onClick={()=>{setCurrentNav(e)}}>{e}</li>
                  )
                })
              }
            </ul>
        </div>
        <button className='p-3 px-5 tab-break:block hidden bg-[#01acf8] border rounded-lg flex items-center  border-[#01acf8]
          hover:bg-transparent transition-all duration-300'>Contact</button>
    </nav>
  )
}

export default Navbar
