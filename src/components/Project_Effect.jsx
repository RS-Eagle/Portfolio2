import React from "react";
import tictac from '../assets/img/tictac.png'
import nextLogo from '../assets/img/nextjs-icon.png'
import market from '../assets/img/market.png'


import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



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

  return (
    <div>
      <div className="box pt-36">
        <div className="courses-circle1"></div>
        <div className="courses-circle2"></div>
        <div className="courses-circle3"></div>
        <div className="courses-circle4"></div>
        <div className="svg-tab-break:block flex  flex-col justify-center">
          <h3 className="text-center svg-tab-break:mt-5 pb-20 svg-tab-break:text-6xl text-4xl mt-3 ">
            Project I Have Made
          </h3>
        </div>
      </div>

      <div ref={container} className="container mx-auto py-20 relative">
        <div className="flex flex-wrap  justify-between  changeMargin m-10">
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default orange1 text-4xl text-white text-center my-5 "}>
            Website For Digital Marketing Agency
            </h2>
            <p className="neweff text-center">
            This project is a dynamic, responsive website for a digital marketing agency built using React.js. It features interactive components, seamless navigation, and modern design to showcase the agency’s services, portfolio, and client testimonials. 
            </p>
             
          </div>
          <div className="w-full lg:w-2/3 tab-break:flex hidden justify-end pr-5">
          <div className="border-8 rounded-xl flex justify-center items-center p-3 border-blue-600">
           <img src={market} className="h-48" alt="" />

          </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between changeMargin">
          <div className="w-full lg:w-2/3 tab-break:flex hidden  justify-start pt-5 items-center px-36">
          <div className="border-8 rounded-xl flex justify-center items-center p-3 mt-14 border-blue-600">
          <img src={tictac} className="w-48" alt="" />

          </div>
          </div>
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default orange1 text-4xl text-white text-center my-5 mt-9"}>
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
            <h2 className={"default orange1 text-4xl text-center my-5 mt-10"}>
              Facebook Ads
            </h2>
            <p className="neweff">
              Facebook Ads enable businesses to promote products/services using
              advanced targeting options. With multiple formats (image, video,
              carousel), they help reach specific audiences and achieve various
              marketing objectives like awareness and conversions.
            </p>
             
          </div>
          <div className="w-full lg:w-2/3 tab-break:flex hidden justify-end items-center px-36">
          <img src={nextLogo} className="w-48" alt="" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between changeMargin">
          <div className="w-full lg:w-2/3 tab-break:flex hidden justify-start items-center px-36 py-10">
          <img src={nextLogo} className="w-48" alt="" />
          </div>
          <div className="w-full lg:w-1/3 newclassNamere1 responsive flex flex-col justify-center items-center">
            <h2 className={"default orange1 text-4xl text-center my-5 mt-10 "}>
              Web Development
            </h2>
            <p className="neweff">
              Build fast, responsive, and user-friendly websites tailored to
              your business needs, ensuring seamless user experience and high
              performance.
            </p>
             
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
  );
};

export default Project_Effect;
