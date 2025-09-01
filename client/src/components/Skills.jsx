import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#38bdf8"
          className="bi bi-code-slash title"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
        </svg>
        <h2 className="text-2xl font-semibold text-cyan-600 lex shadow-2xl  ml-3">
          Skills
        </h2>
      </div>
      <ol class="relative ml-6 border-s border-gray-200 dark:border-gray-700 ml-14 cursor-default">
        <li class="mb-10 ms-6 hover:animate-slide">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              Technology
            </h3>
            {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Frontend
            </time> */}
            <ul class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
                React, Redux, RTK, JavaScript, Three.js, D3, Recharts, Phaser, GraphQL
              </li>
              {/* <time class="block -ml-5 my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Backend
              </time> */}
              <li>
                Node.js, Express, Passport, Mongoose, MongoDB, PostgreSQL, Socket.io, REST
              </li>
              {/* <time class="block -ml-5 my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Artificial Intellegence
              </time> */}
              <li>HuggingFace, Ollama, prompt engineering</li>
              {/* <time class="block -ml-5 my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Design
              </time> */}
              <li>Tailwindcss, Bootstrap, CSS</li>
              {/* <time class="block -ml-5 my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Design
              </time> */}
              <li>Git, GitHub, GitLab, CICD, Agile, Scrum</li>
            </ul>
          </motion.div>
        </li>

        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300 rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300  dark:text-white">
              Sales and Marketing{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Integration
            </time>
            <ul class="mb-4 font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>
              Marketo
              </li>
              <li>
              Salesforce
              </li>
          
            </ul>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Reporting
            </time>
            <ul class="mb-4 font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
          
              <li>
              QlikView BI data visualization 
              </li>
              <li>
              Data Visualization 
              </li>
              <li>
              KPI Forcasting
              </li>
            </ul>
          </motion.div>
        </li>

       
      </ol>
    </div>
  );
};

export default Skills;
