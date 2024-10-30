import React from "react";
import tictac from '../assets/img/tictac.png'

import market from '../assets/img/market.png'
import netcoder from '../assets/img/netcoder.png'
import lib from '../assets/img/lib.png'


import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";




gsap.registerPlugin(ScrollTrigger);

const Project_Effect = () => {
  const color1 = useRef(null);
  const color2 = useRef(null);
  const color3 = useRef(null);
  const color4 = useRef(null);
  const color5 = useRef(null);
  const color6 = useRef(null);
  const color7 = useRef(null);
  const color8 = useRef(null);

  const container = useRef(null);

  useEffect(() => {
    const elements = [
      color1.current,
      color2.current, 
      color3.current,
      color4.current,
      color5.current,
      color6.current,
      color7.current,
      color8.current,
    ];
    gsap.to(elements, {
      yPercent: 110,
      duration: 2,
      stagger: 2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: 3,
        toggleActions: "restart pause reverse pause",
      },
    });
  }, []);
  const { ref:ref1, inView:inView1 } = useInView({
    threshold: 0.1, 
  });


  return (
    <div className="">
    <div className="block">
      <div className="box pt-36 ">
        <div className="courses-circle1"></div>
        <div className="courses-circle2"></div>
        <div className="courses-circle3"></div>
        <div className="courses-circle4"></div>
        <div className="svg-tab-break:block flex  flex-col justify-center">
          <motion.h3 ref={ref1} variants={{hidden:{opacity:0,y:75},visible:{opacity:1,y:0,transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 10 
      } }}} animate={inView1 ? "visible":"hidden"} className="text-center glowtext svg-tab-break:mt-5 pb-20 svg-tab-break:text-6xl text-4xl mt-3 ">
            Project I Have Made
          </motion.h3>
        </div>
      </div>
      <div ref={container} className="container text-white mx-auto py-20 relative">
        <div className="relative">
        <div className="flex flex-wrap  justify-between  changeMargin m-10"
        >
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default orange1 text-4xl glowtext text-white text-center my-5 "}>
            Website For Digital Marketing Agency
            </h2>
            <p className="neweff text-center">
            This project is a dynamic, responsive website for a digital marketing agency built using React.js. It features interactive components, seamless navigation, and modern design to showcase the agency’s services, portfolio, and client testimonials. 
            </p>
             
          </div>
          <div className="w-full lg:w-2/3 tab-break:flex hidden justify-end pr-5">
          <div className="border-8 glowbox rounded-xl flex justify-center items-center p-3 border-blue-600">
           <img src={market} className="h-48" alt="image" />

          </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between changeMargin">
          <div className="w-full lg:w-2/3 tab-break:flex hidden  justify-start pt-5 items-center px-36">
          <div className="border-8 rounded-xl flex justify-center items-center p-3 mt-14 border-blue-600">
          <img src={tictac} className="w-48" alt="image" />

          </div>
          </div>
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default glowtext orange1 text-4xl  text-white text-center my-5 mt-9"}>
            Real-Time Multiplayer Tic-Tac-Toe Game
            </h2>
            <p className="neweff text-center">
            Developed using WebSockets for real-time player interactions
            Ensures smooth updates and gameplay experience
            </p>
             
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-4 changeMargin">
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default ml-5 text-white orange1 glowtext text-4xl text-center my-5 mt-10"}>
            Created A Landing page Using HTML CSS And Javascript
            </h2>
            <p className="neweff text-center ml-5">
            The landing page is built using HTML to structure key elements like the header, hero section, and content blocks. CSS enhances the visual design with styles, layouts, and responsive features. 
            </p>
             
          </div>
          <div className="w-full lg:w-2/3 tab-break:flex hidden justify-end pr-5">
          <div className="border-8 glowbox rounded-xl flex justify-center  items-center px-3  mr-10 border-blue-600">
          <img src={netcoder} className="h-44" alt="image" />

          </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between changeMargin">
          <div className="w-full lg:w-2/3 tab-break:flex hidden  justify-start pt-5 items-center px-16">
          <div className="border-8 rounded-xl flex justify-center items-center p-3 mt-14 border-blue-600">
          <img src={lib} className="h-48" alt="image" />

          </div>
          </div>
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default glowtext orange1 text-4xl  text-white text-center my-5 mt-9"}>
            Eagle Animation Library
            </h2>
            <p className="neweff text-center">
            This cool library was made by me, someone new to coding, just for fun! Keep in mind, even though it started as a fun project, the Eagle Animation Library has lots of neat text animations you can use to make your websites more exciting.
            </p>
             
          </div>
        </div>
        </div>

        <div className="drop-effect absolute py-40">
          <div className="effect-layer"></div>
          <div className="shapes">
            <div className="main-shape">
              <div className="circle">
                <div ref={color1} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color2} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color3} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color4} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color5} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color6} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color7} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color8} className="new-color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default Project_Effect;
