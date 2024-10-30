import React, { useEffect, useRef } from 'react'
import Project from './Project'
import Project_Effect from './Project_Effect'

const ProjectReturn = ({setIsInView}) => {
  const divRef = useRef(null);
  useEffect(() => {
    

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

  
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <div ref={divRef} className='bg-gray-900  '>
     
      <Project/>

      <Project_Effect/>
    </div>
  )
}

export default ProjectReturn
