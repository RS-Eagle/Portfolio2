import React from 'react'
import htmlLogo from '../assets/img/html.png'
import cssLogo from '../assets/img/css.png'
import jsLogo from '../assets/img/js.png'
import monogodbLogo from '../assets/img/mongodb.png'
import nextLogo from '../assets/img/nextjs-icon.png'
import reactLogo from '../assets/img/physics.png'
import postgressLogo from '../assets/img/postgresql-icon.svg'

const Skills = () => {
  const skills = [{
    logo:htmlLogo,
    title:"HTML"
  },{
    logo:cssLogo,
    title:"CSS"
  },{
    logo:jsLogo,
    title:"Javascript"
  },{
    logo:reactLogo,
    title:"React JS"
  },{
    logo:nextLogo,
    title:"Next JS"
  },{
    logo:monogodbLogo,
    title:"MongoDB"
  },
  ,{
    logo:postgressLogo,
    title:"PostgreSQL"
  },]


  return (
    <div className='bg-gray-900 tab-break:p-36 p-10 pt-20 ' id='skills'>
      <h3 className='text-white tab-break:text-4xl text-3xl  text-center mb-10'>Essential Tools I use </h3>
      <div className='flex flex-wrap justify-center pt-5'>
        {skills.map((e,i)=>{
          return(
            <div key={i} className='flex justify-start bg-white bg-opacity-5 items-center w-64 m-5 border rounded-md border-white p-5 py-4 hover:bg-opacity-20  text-white cursor-cell'>
              <img className='w-10 mr-5' src={e.logo} alt={e.title} />
              <p>{e.title}</p>
            </div>
          )
        })}
      </div>


    </div>
  )
}

export default Skills
