import { motion } from "framer-motion";
import pdfDoc from "../assets/DanielleWalker2025.pdf";
import GradientText from "../components/GradientText";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Header from "../components/Header";
import { useEffect } from "react";

const Resume = ({showContactModal, setShowContactModal}) => {
  useEffect(()=>{
    window.scrollTo({top:0, behavior: "smooth"})
  },[])
  return (
    <>
      <Header/>
      <div className="min-h-screen w-2/3 mx-auto p-8 ">
       
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Starting state
        animate={{ opacity: 1, scale: 1 }} // Animated state
        transition={{
          duration: 1, // Overall animation length
          ease: "easeOut", // Smooth deceleration at the end
          delay: 0.2, // Short pause before starting
          // type: "spring",
          stiffness: 80,
          damping: 30, // Make the bounce a bit more controlled
        }}
        className=" pt-4 pl-4"
      >
        <Skills/>
       <Experience/>
       <Education/>
 
       </motion.div>

       
      </div>
    </>
  );
};

export default Resume;
