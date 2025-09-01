import { motion } from "framer-motion";
import Sparklessvg from "../icons/Sparklessvg";

const Experience = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center mb-3">
        <Sparklessvg size={20} />{" "}
        <h2 className="text-2xl font-semibold text-cyan-600 lex">
          Experience
        </h2>
      </div>
      <ol class="relative ml-6 border-s border-gray-200 dark:border-gray-700 ml-14 w-[70%] cursor-default">
        <li class="mb-10 ms-6 hover:animate-slide">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300 rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900">
     
          </span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              PersevereNow{" "}
              <span class="bg-cyan-300  text-cyan-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-cyan-900 dark:text-cyan-300 ms-3">
                Latest
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Fullstack Developer and Instructor’s Assistant | 2023 – 2025
            </time>
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
                Worked with Instructor to create new curriculum to be used for
                all future coding bootcamps in the organization
              </li>
              <li>
                Daily debugging of various site issues including C, JavaScript,
                React, RTK, Axios, Node.js Express, Passport, Socket.io,
                PowerShell, Git, GitLab, Windows, Ollama, VS Code and hosted
                APIs
              </li>
            </ul>
          </motion.div>
        </li>

        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              Televerde{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Service Delivery and Campaign Systems Manager | 2018 – 2019
            </time>
            <ul class="mb-4 font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
                Collaborated with IT and technical teams to resolve system
                issues and integrate new technologies
              </li>
              <li>
                Created reports on system performance, usage and ROI to senior
                management and created a KPI forecasting tool that allowed sales
                team to quote projected productivity
              </li>
            </ul>
          </motion.div>
        </li>

        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              Televerde{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Campaign Configuration | 2015 – 2017
            </time>
            <ul class="mb-4 font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
                Collaborate with cross-functional teams, including marketing,
                sales, and customer service, to understand their needs and
                ensure systems are aligned with business objectives
              </li>
              <li>
                Integrated Marketo and Salesforce APIs for marketing automation
                and CRM functionalities.
              </li>
            </ul>
          </motion.div>
        </li>
        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              Televerde{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Business Sales Developer | 2010 – 2013
            </time>
            <ul class="mb-4 font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
                Generate leads, primarily in the technology and
                telecommunications industries, through outbound marketing
                efforts, including email campaigns, webinars, and content
                marketing
              </li>
              <li>
                Deliver compelling presentations to potential clients,
                explaining the benefits of partner products and services and how
                they can solve the client's business challenges
              </li>
            </ul>
          </motion.div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
