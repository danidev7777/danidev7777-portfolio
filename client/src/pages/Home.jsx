import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { projectGetAll } from "../redux/projects/projectsSlice.js";
import ProfileCard from "../components/ProfileCard";
import CardSwap, { Card } from "../components/CardSwap";
import { motion } from "framer-motion";
import pdfDoc from "../assets/DanielleWalker2025.pdf";
import GitLabActivities from "../components/GitLabActivities";
import GradientText from "../components/GradientText";
import Frameworks from "../components/Frameworks";
import FramerSplitText from "../components/FramerSplitText";
import ContactModal from "../components/ContactModal.jsx";
import { FaBluesky } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareThreads } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Prism from "../components/Prism.jsx";

const Home = ({ showContactModal, setShowContactModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { projects, loading } = useSelector((state) => state.projects);
  // const [confirmation, setConfirmation] = useState(false);
  // const [showContactModal, setShowContactModal] = useState(false);

  // useEffect(() => {
  //   dispatch(projectGetAll());
  // }, []);
  console.log("loading", loading);

  console.log("USA", projects);
  return (
    <>
      {/* {showContactModal&&<ContactModal setConfirmation={setConfirmation}/>} */}

      {loading ? (
        <div className="loading loading-spinner loading-lg"></div>
      ) : (
        <div className="flex flex-col justify-center items-center px-20 overflow-y-hidden  w-full">
          <div style={{ width: '100%', height: '750px', position: 'relative' }}>
            <Prism
              animationType="rotate"
              timeScale={0.5}
              height={6.5}
              baseWidth={5.5}
              scale={2}
              hueShift={1.36}
              colorFrequency={2.2}
              noise={0.0}
              glow={.3}
            />
          </div>
         
          <div className=" text-white w-2/3 flex flex-col justify-evenly -mt-120 mb-10">
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
              <h2 className="text-center  tracking-tight text-white uppercase">
                <span className="text-[#4c1d95] font-semibold text-4xl lex ">
                  let's work
                </span>
                <br />
                <span className="text-[#0e7490] name font-bold text-6xl lex">
                  together
                </span>
              </h2>
            </motion.div>
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
              <GradientText
                colors={[
                  "#4c1d95",
                  "#0e7490",
                  "#4c1d95",
                  "#0e7490",
                  "#4c1d95",
                ]}
                animationSpeed={6}
                showBorder={false}
                className="text-xl tracking-wider font-semibold p-2 "
              >
                <div className="text-2xl lex ">
                  🚀 Specializing in MERN stack 🌟 Looking to build something amazing 🧠 AI interest

                </div>
              </GradientText>
            </motion.div>
            <Frameworks />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Starting state
              animate={{ opacity: 1, scale: 1 }} // Animated state
              transition={{
                duration: 1, // Overall animation length
                ease: "easeIn", // Smooth deceleration at the end
                delay: 0.2, // Short pause before starting
                // type: "spring",
                stiffness: 80,
                damping: 30, // Make the bounce a bit more controlled
              }}
              className="mx-auto"
            >
              <GradientText
                colors={[
                  "#4c1d95",
                  "#0e7490",
                  "#4c1d95",
                  "#0e7490",
                  "#4c1d95",
                ]}
                animationSpeed={2}
                showBorder={false}
              >
                <div className="flex justify-between mt-10 w-full mx-3 gap-5">
                  <div className="flex flex-col items-center ">
                    <div className="text-5xl font-bold"> 2+</div>{" "}
                    <div className="text-xl text-[#0e7490] font-semibold uppercase">
                      Years of <br></br>Experience
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    {" "}
                    <div className="text-5xl font-bold  ">55+</div>
                    <div className="text-lg text-[#0e7490] font-semibold uppercase">
                      {" "}
                      Projects<br></br>completed
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold">106+</div>

                    <div className="text-xl text-[#0e7490] font-semibold uppercase">
                      Edibit<br></br> Challenges
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold">238+</div>
                    <div className="text-xl text-[#0e7490] font-semibold uppercase">
                      GitLab<br></br>Contributions
                    </div>
                  </div>
                </div>
              </GradientText>
            </motion.div>
          </div>
        </div>
        
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Starting state
        animate={{ opacity: 1, scale: 1 }} // Animated state
        transition={{
          duration: 1, // Overall animation length
          ease: "easeIn", // Smooth deceleration at the end
          delay: 0.2, // Short pause before starting
          // type: "spring",
          stiffness: 80,
          damping: 30, // Make the bounce a bit more controlled
        }}
        className="mx-auto"
      >
        <div className="flex mx-80">
          {" "}
          <a
            href="https://github.com/danidev7777"
            target="_blank"
            className="h-[50px] w-[50px] mx-auto "
          >
            {" "}
            <FaGithub size={35} fill="#0891b2" />
          </a>
          <a
            href="https://stackoverflow.com/users/31311266/danidev7777"
            target="_blank"
            className="h-[50px] w-[50px] mx-auto "
          >
            {" "}
            <FaStackOverflow size={35} fill="#0891b2" />
          </a>
          <a
            href="https://dribbble.com/danielle-walker/shots"
            target="_blank"
            className="h-[50px] w-[50px] mx-auto "
          >
            {" "}
            <FaDribbble size={35} fill="#0891b2" />
          </a>

          <a
            href="https://www.linkedin.com/in/danielle-walker-b0987a37a/"
            target="_blank"
            className="  h-[50px] w-[50px] mx-auto "
          >
            <ImLinkedin size={35} fill="#0891b2" />
          </a>


        </div>
      </motion.div>
    </>
  );
};

export default Home;
