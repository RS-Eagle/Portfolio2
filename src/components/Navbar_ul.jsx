import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar_ul = ({props}) => {
    const li = ["Home","Skills","Projects","About",]
  return (
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
  )
}

export default Navbar_ul
