import React from 'react'
import htmlLogo from '../assets/img/html.png'
import cssLogo from '../assets/img/css.png'
import jsLogo from '../assets/img/js.png'
import monogodbLogo from '../assets/img/mongodb.png'
import nextLogo from '../assets/img/nextjs-icon.png'
import reactLogo from '../assets/img/physics.png'
import postgressLogo from '../assets/img/postgresql-icon.svg'
import prismaLogo from '../assets/img/prisma.png'
import tsLogo from '../assets/img/ts-logo-512.png'
import { motion,  } from 'framer-motion' 
import { useInView } from 'react-intersection-observer'


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
  },{
    logo:prismaLogo,
    title:"Prisma ORM"
  },{
    logo:tsLogo,
    title:"TypeScript"
  },]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { scale: 0.8, y:100,  opacity: 0 },
    visible: { 
      scale: 1,  
      opacity: 1,
      y:0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } 
    },
  };

    const { ref, inView } = useInView({
      threshold: 0.1, 
    });
    const { ref:ref1, inView:inView1 } = useInView({
      threshold: 0.1, 
    });



  return (

    <div  className='bg-gray-900 tab-break:p-36 p-10 pt-20 tab-break:pt-10 ' id='skills'>
      <motion.h3 ref={ref1} variants={{hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } }}} animate={inView1 ? "visible":"hidden"} className='text-white tab-break:text-4xl text-3xl glowtext  text-center mb-28'>Essential Tools I use </motion.h3>
      <motion.div ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} className='flex flex-wrap justify-center pt-5'>
        {skills.map((e,i)=>{
          return(
            <motion.div variants={childVariants} key={i} className='flex justify-start glowbox bg-white bg-opacity-5 items-center w-64 m-5 border rounded-md border-white p-5 py-4 hover:bg-opacity-20  text-white cursor-cell'>
              <img className='w-10 mr-5' src={e.logo} alt={e.title} />
              <p>{e.title}</p>
            </motion.div>
          )
        })}
      </motion.div>
      


    </div>

  )
}

export default Skills
