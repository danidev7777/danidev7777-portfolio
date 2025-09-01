import { motion } from "framer-motion";
import Capsvg from '../icons/Capsvg'

const Education = () => {
  return (
    <div> {/* Education Section */}
   
    <div className="flex items-center mb-3 mt-3">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#38bdf8"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
        <h2 className="text-2xl font-semibold  lex shadow-2xl text-cyan-600 ml-3  ">
          Education
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
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300 dark:text-white">
            Bachelor of Arts, Communication
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Ashland University | Spring 2026
            </time>
          
          </motion.div>
        </li>
      
        <li class="mb-10 ms-6 hover:animate-slide">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300 dark:text-white">
            Associates of Arts, General Studies


            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Ashland University | Fall 2024
            </time>
          
          </motion.div>
        </li>
        <li class="mb-10 ms-6 hover:animate-slide">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-cyan-300  rounded-full -start-2 ring-8 ring-gray-900 dark:ring-gray-900 dark:bg-cyan-900"></span>
          <motion.div
            initial={{ scale: 1 }} // Start at normal size
            whileHover={{ translateX: "20px" }} // On hover, increase scale to 1.1
            transition={{ duration: 0.2 }} // Smooth animation over 0.2 seconds
          >
            <h3 class="flex items-center mb-1 text-lg font-semibold text-cyan-300 dark:text-white">
            Full Stack Developer Certification
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            PersevereNow | Summer 2023
            </time>
          
          </motion.div>
        </li>
      </ol>
    </div>
  )
}

export default Education