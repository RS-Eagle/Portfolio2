import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Navbar_ul from "./components/Navbar_ul";
import { motion } from "framer-motion";

function App() {
  const [curentNav, setCurrentNav] = useState("Home");
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    if (inView1 && curentNav != "Home") {
      setCurrentNav("Home");
    }
    if (inView2 && curentNav != "Skills") {
      setCurrentNav("Skills");
    }
  }, [inView1, inView2]);

  return (
    <>
      <div className="fixed top-[20%] translate-y-[20%]   left-0 text-white  " >
      <motion.div  
    className="h-96 pb-5 flex items-end"
    animate={{ x: !isScrolledDown ? -100 : 0, rotate: 90,y:-50 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}>
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
      </div>
    </>
  );
}

export default App;
