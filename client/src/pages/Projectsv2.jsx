import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// import CardSwap, { Card } from "../components/CardSwap";
import { useNavigate } from "react-router";
import GradientText from "../components/GradientText";
// import Keyboard from "../icons/Keyboard";
import Header from "../components/Header";

const Projectsv2 = ({ showContactModal, setShowContactModal }) => {
  const navigate = useNavigate();
  const { projects, loading } = useSelector((state) => state.projects);
  return (
    <>
      <Header />
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
        <div className=" mx-auto ">
          <div className="mx-auto w-1/2  relative">
            <div className="flex mt-20 items-center justify-center flex-col">
              <h2 className=" tracking-tight text-white uppercase">
                <span className="text-[#0e7490] name font-bold text-6xl lex">
                  Projects
                </span>
              </h2>
              <GradientText
                colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
                animationSpeed={8}
                showBorder={false}
                className="text-2xl tracking-wider font-semibold p-2 "
              >
                {" "}
                <p className=" py-4">
                  I love building projects and practicing my engineering skills,
                  here's an archive of things that I've built.
                </p>
              </GradientText>
            </div>
            {/* <Keyboard /> */}
          </div>
          <div class="flex flex-wrap justify-center gap-6 p-2 min-h-screen mx-12">
            {/* <!-- Card 1 --> */}
            {projects.map((project) => (
              <div class=" rounded-2xl shadow-lg w-96 p-2 flex flex-col items-center cursor-pointer bg-gray-100" onClick={() => navigate(`/projects/${project.id}`)}>
                <h2 class="text-xl font-semibold mb-2 text-violet-500">{project.projectName}</h2>

                <img
                  src={
                    new URL(`../assets/${project.homeImg}`, import.meta.url)
                      .href
                  }
                  className="w-full h-40 object-cover" />
              </div>
            ))}

          </div>


        </div>
      </motion.div>
    </>
  );
};

export default Projectsv2;
