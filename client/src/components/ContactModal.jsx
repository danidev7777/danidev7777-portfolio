import { useState, useEffect } from "react";
// import AnimatedList from "../components/AnimatedList.jsx";
import { contactCreate } from "../redux/contact/contactSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CgEditUnmask } from "react-icons/cg";

const ContactModal = ({
  showContactModal,
  setShowContactModal,
  setConfirmation,
  confirmation,
}) => {
  const dispatch = useDispatch();
  // const [confirmation, setConfirmation] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    budget: "",
    message: "",
  });

  let animationStyle = "animate__animated animate__slideInLeft";
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
    animationStyle = "animate__animated animate__slideOutLeft";
    setContactForm({
      fullName: "",
      email: "",
      budget: "",
      message: "",
    });
    setShowContactModal(false);
    setConfirmation(true);
    console.log("TRUE confirmation", confirmation);

    setTimeout(() => {
      setConfirmation(false);
      console.log("setTimeout confirmation", confirmation);
      navigate("/");
    }, 3000);
  };
  useEffect(() => {
    console.log("showContactModal", showContactModal);
  }, [showContactModal]);

  // const handleAnimation = () => {
  //   if (showContactModal == false) {
  //     animationStyle = "animate__animated animate__slideOutDown";
  //   }
  // };

  return (
    <div
      className={`${animationStyle} absolute bg-neutral-900/80 w-[100%] h-[100%] z-100 overflow-y-hidden`}
    >
      <p
        className="float-right p-8 cursor-default"
        onClick={() => {
          setShowContactModal(false);
        }}
      >
        <CgEditUnmask size={35} className="" color="#06b6d4" />
      </p>
      <div className=" w-[25%] flex flex-col justify-center mx-auto my-45 p-3 bottom-0 bg-black rounded-4xl">
        <h2 className="text-center text-4xl tracking-tight text-white uppercase">
          <span className="text-[#4c1d95] font-semibold text-5xl lex ">
            let's work{" "}
          </span>
          <br />
          <span className="text-[#0e7490] name font-bold text-6xl lex">
            together
          </span>
        </h2>{" "}
        <div className="mt-10 px-4">
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
                    className="block  rounded-md bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 w-full outline-violet-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
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
                    className="block  rounded-md bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 w-full outline-violet-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
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
                  className="block w-full rounded-md bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-violet-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6 active:bg-cyan-600 accent-pink-500 caret-pink-500"
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
                  className="block w-full rounded-md bg-gray-950 dark:bg-gray-950 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-violet-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gradient-to-br from-purple-600 to-blue-500 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent  w-full">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
