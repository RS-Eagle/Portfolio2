import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Navbar_ul from "./components/Navbar_ul";
import { motion } from "framer-motion";
import Project from "./components/Project";
import About from "./components/About";
import Project_Effect from "./components/Project_Effect";
import ProjectReturn from "./components/ProjectReturn";

function App() {
  const [curentNav, setCurrentNav] = useState("Home");
  const [isInView, setIsInView] = useState(false);
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    if (inView1 && curentNav != "Home") {
      setCurrentNav("Home");
    }
    if (inView2 && curentNav != "Skills") {
      setCurrentNav("Skills");
    }
    console.log(inView3);
    if (isInView && curentNav != "Projects") {
      setCurrentNav("Projects");
    }
    if (inView4 && curentNav != "About") {
      setCurrentNav("About");
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <>
      <div className="fixed top-[20%] translate-y-[20%] z-50  left-0 text-white  ">
        <motion.div
          className="h-96 pb-5 flex items-end"
          animate={{ x: !isScrolledDown ? -100 : 0, rotate: 90, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          }}
        >
          <Navbar_ul props={{ curentNav, setCurrentNav, isScrolledDown }} />
        </motion.div>
      </div>

      <Navbar props={{ curentNav, setCurrentNav, isScrolledDown }} />
      <div>
        <div ref={ref1}>
          <Hero props={{ isScrolledDown, setIsScrolledDown }} />
        </div>
        <div ref={ref2}>
          <Skills />
        </div>
        <div ref={ref3} >
          <div className="relative">
          <ProjectReturn setIsInView={setIsInView}/>
          </div>
        </div>
        <div ref={ref4}>
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
