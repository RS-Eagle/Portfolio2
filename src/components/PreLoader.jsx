import React, { useEffect } from 'react'
import gsap from "gsap";



const tl = gsap.timeline();
const PreLoader = () => {
     const mobileLanding = () => {
        window.innerWidth < 763 &&
          tl.from(".landing__main2", {
            duration: 1,
            delay: 0,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
          });
      };
    useEffect(()=>{
        tl.to("body", {
            duration: 0.1,
            css: { overflowY: "hidden" },
            ease: "power3.inOut",
          })
            .to(".texts-container", {
              duration: 0,
              opacity: 1,
              ease: "Power3.easeOut",
            })
            .from(".texts-container span", {
              duration: 1.5,
              delay: 1,
              y: 70,
              skewY: 10,
              stagger: 0.4,
              ease: "Power3.easeOut",
            })
            .to(".texts-container span", {
              duration: 1,
              y: 70,
              skewY: -20,
              stagger: 0.2,
              ease: "Power3.easeOut",
            })
            .to("body", {
              duration: 0.1,
              css: { overflowY: "scroll" },
              ease: "power3.inOut",
            })
            .to(
              ".preloader",
              {
                duration: 1.5,
                height: "0vh",
                ease: "Power3.easeOut",
                onComplete: mobileLanding(),
              },
              "-=2"
            )
            .to(".preloader", {
              duration: 0,
              css: { display: "none" },
            });
    })
  return (
    <div className="preloader h-full w-full bg-black text-white fixed left-0 top-0 z-50 flex justify-center items-center overflow-hidden">
        <div className="texts-container flex items-center justify-between h-[60px] w-[280px] font-[20px] overflow-hidden font-bold">
            <span>Build</span>
            <span>Optimize</span>
            <span>Launch</span>
        </div>
    </div>
  )
}

export default PreLoader
