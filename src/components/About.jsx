import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref:ref1, inView:inView1 } = useInView({
    threshold: 0.1, 
  });
  return (
    <div className='bg-gray-900  tab-break:p-24 p-10 pt-0' id='about'>
      <motion.h3 ref={ref1} variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0,transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } }}} animate={inView1 ? "visible":"hidden"} className="text-center glowtext  pb-20 text-white pt-10 text-5xl ">
            About Me
          </motion.h3>
      <p className='text-white text-center'>Hello! I'm Raman Kumar Charak, a passionate web developer from the beautiful landscapes of Himachal Pradesh. Currently, I’m pursuing a Bachelor’s degree in Computer Applications (BCA) at CGC Jhanjeri. My expertise lies in MERN stack development, and I have experience with both SQL and NoSQL databases, including MongoDB and PostgreSQL.</p>
      <p className='text-white text-center mt-5'>I'm continuously expanding my skill set, diving into Web3 development, and I have a growing interest in animation, which I use to add dynamic elements to my projects. I enjoy combining technical efficiency with visual appeal to create user-friendly, interactive web applications.</p>
      
      <div className='flex justify-center items-center mt-6 text-white'>
      <div className='mt-4 '>
        <p className='text-4xl glowtext'>Important Link</p>
        <ul className='mt-5 flex justify-center items-center flex-col'>
          <li ><a href="https://github.com/RS-Eagle" target='_blank' >Github</a></li>
          <li><a href="https://www.linkedin.com/in/raman-kumar-charak-36372826b/" target='_blank'>LinkedIn</a></li>
          <li><a href="https://www.upwork.com/freelancers/~011c4bec80ececf6d5?mp_source=share" target='_blank'>Upwork</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default About
