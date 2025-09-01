import { useState } from "react";
import AnimatedList from "../components/AnimatedList.jsx";
import { contactCreate } from "../redux/contact/contactSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send message button clicked");
    const contact = {
      fullName: contactForm.fullName,
      email: contactForm.email,
      budget: contactForm.budget,
      message: contactForm.message,
    };
    dispatch(contactCreate(contact));

    setContactForm({
      fullName: "",
      email: "",
      budget: "",
      message: "",
    });
    setConfirmation(true);
    console.log("TRUE confirmation", confirmation);

    setTimeout(() => {
      setConfirmation(false);
      console.log("setTimeout confirmation", confirmation);
      navigate("/");
    }, 3000);
  };

  return (
    <>
        
      <div className="flex flex-row mx-80 my-20 ">
        <div className=" flex flex-col justify-center px-8">
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
          
              <h2 className="text-center text-4xl tracking-tight text-white uppercase">
                <span className="text-[#4c1d95] font-semibold text-5xl lex ">
                  let's work{" "}
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
              delay: 0.4, // Short pause before starting
              type: "spring",
              stiffness: 80,
              damping: 30, // Make the bounce a bit more controlled
            }}
            className="  pl-4"
          >
            {" "}
            <div className="mt-10 px-44">
              <form className="space-y-6  " onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        autoComplete="fullName"
                        value={contactForm.fullName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            fullName: e.target.value,
                          })
                        }
                        required
                        className="block rounded-md bg-gray-950 px-3 py-1.5 w-full text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="ml-2 w-1/2">
                    <label
                      htmlFor="email"
                      className="text-sm/6 font-medium text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                        className="block  rounded-md bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 w-full outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="justify-center">
                  <label
                    htmlFor="budget"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Budget
                  </label>
                  <div className="mt-2">
                    <select
                      name="budget"
                      id="budget"
                      required
                      value={contactForm.budget}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          budget: e.target.value,
                        })
                      }
                      className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-950 sm:text-sm/6"
                    >
                      <option></option>
                      <option value="$300 - $500">$300 - $500</option>
                      <option value="$600 - $800">$600 - $800</option>
                      <option value="$900 - $1200">$900 - $1200</option>
                      <option value="$1300 - $1600">$1300 - $1600</option>
                      <option value="$1600+">$1600+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Message
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      value={contactForm.message}
                      required
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className="block w-full rounded-md bg-gray-950 dark:bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-950  sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent  w-full">
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        <div>
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
            className=" pt-4 pl-4"
          >
            <h2 className="mt-10 -mb-14 text-center text-4xl uppercase text-[#4c1d95] tracking-widest font-semibold lex">
              social links
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
            className=" pt-4 pl-4"
          >
            <AnimatedList className="w-1/2" displayScrollbar={false} />
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Contact;
