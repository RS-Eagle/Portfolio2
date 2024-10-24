import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Project_Effect from './Project_Effect';

const Project = () => {


    const { ref:ref1, inView:inView1 } = useInView({
        threshold: 0.1, 
      });
      const targetRef = useRef(null);
      const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"] 
      });

      const x = useTransform(scrollYProgress, [0, 1], ["200vw", "-250vw"]);
      
      

  return (
    <>
    <div  className='bg-gray-900 tab-break:pt-16  pt-20     text-white' id='projects'>
        <div className='h-screen flex flex-col'>
        <motion.h3 ref={ref1} variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0,transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } }}} animate={inView1 ? "visible":"hidden"} className='text-white tab-break:text-4xl text-3xl glowtext  text-center mb-16'>Project</motion.h3>
      <div ref={targetRef} className='text-8xl overflow-hidden sticky flex-1 flex justify-center max-w-full items-center '>

      <motion.p style={{
            x, 
            
            overflow:"hidden"
          }}  className='uppercase text-8xl text-center glowtext whitespace-nowrap overflow-hidden'>From Concept to Work </motion.p>
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Project
