import React from 'react'
import GradientText from './GradientText'
import pdfDoc from "../assets/DanielleWalker2025.pdf";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }} // Starting state
    animate={{ opacity: 1, scale: 1 }} // Animated state
    transition={{
      duration: 1, // Overall animation length
      ease: "easeIn", // Smooth deceleration at the end
      delay: 0.2, // Short pause before starting
      type: "spring",
      stiffness: 80,
      damping: 30, // Make the bounce a bit more controlled
    }}
  >
     <div className=" -mb-8 flex items-center justify-between mx-80">
              <h1 className="text-4xl font-bold lex text-violet-600 ">
              <GradientText
                    colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-6xl tracking-wider font-bold p-2"
                  > Danielle Walker
                  </GradientText>
    
              </h1>
    
              {/* <ResumeDownload/> */}
              <button className="relative inline-flex items-center justify-center p-0.5 mt-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-cyan-500 group-hover:from-purple-600 group-hover:to-cyan-500 focus:outline-none ">
                <span className="relative px-1 py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-xl group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-black group-hover:dark:text-black">
                  <GradientText
                    colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-lg tracking-wider font-semibold p-2 "
                  >
                    <a
                      href={pdfDoc}
                      download
                      className="text-white dw rounded-xl flex items-center "
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cloud-arrow-down mr-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      Download Resume
                    </a>
                  </GradientText>
                </span>
              </button>
            </div></motion.div>
  )
}

export default Header