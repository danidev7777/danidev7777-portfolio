import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import CardSwap, { Card } from "../components/CardSwap";
import { useNavigate } from "react-router";
import GradientText from "../components/GradientText";
import Keyboard from "../icons/Keyboard";
import Header from "../components/Header";

const Projects = ({ showContactModal, setShowContactModal }) => {
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
        <div className="pt-20 ml-10 flex justify-center max-h-[95vh] min-h-[98vh] overflow-y-hidden mx-auto ">
          <div className="ml-20">
            <div className="absolute left-40 h-[500px] w-[550px] mt-20">
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
            <Keyboard />
          </div>
          <div className="ml-13 -mt-15 w-1/2 h-[500px] relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={20}
              delay={3000}
              pauseOnHover={false}
            >
              {projects.map((project) => (
                <Card
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="cursor-pointer"
                >
                  <p className="text-violet-500">{project.projectName}</p>
                  <hr className="text-violet-500 h-2" />
                  <img
                    src={
                      new URL(`../assets/${project.homeImg}`, import.meta.url)
                        .href
                    }
                    className="h-full rounded-b-xl"
                  />
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
