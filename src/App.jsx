import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


function App() {
  const [curentNav,setCurrentNav] = useState("Home")
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(()=>{
    if(inView1 && curentNav != "Home"){
      setCurrentNav("Home")
    }
    if(inView2 && curentNav != "Skills"){
      setCurrentNav("Skills")
    }
  },[inView1,inView2])

  

  return (
    <>
   
      <Navbar props={{curentNav,setCurrentNav,isScrolledDown}}/>
      <div>
        <div ref={ref1}>

        <Hero props={{isScrolledDown,setIsScrolledDown}} />
        </div>
        <div ref={ref2}>

        <Skills  />
        </div >
      </div>
      
    </>
  )
}

export default App
