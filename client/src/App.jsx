import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { projectGetAll } from "./redux/projects/projectsSlice.js";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Projectsv2 from "./pages/Projectsv2.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import ContactModal from "./components/ContactModal.jsx";
// import BlogList from "./pages/BlogList.jsx";
// import BlogDetail from "./pages/BlogDetail.jsx";


function App() {
  const dispatch = useDispatch();

  const { projects, loading } = useSelector((state) => state.projects);
  const [confirmation, setConfirmation] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    dispatch(projectGetAll());
  }, []);
  console.log("USA", projects);
  console.log("loading", loading);

  return (
    <div
      className="bg-zinc-900 dark:bg-zinc-900 text-white min-h-screen scroll-smooth"
    // className={`${
    //   displayScrollbar
    //     ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track] [&::-webkit-scrollbar-thumb]: [&::-webkit-scrollbar-thumb]:rounded-[4px]"
    //     : "scrollbar-hide"
    // }`}
    >
      {showContactModal && (
        <ContactModal
          showContactModal={showContactModal}
          setShowContactModal={setShowContactModal}
          setConfirmation={setConfirmation}
        />
      )}
      {confirmation && (
        <div
          class="p-4 mb-4 w-[40%] text-md text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500  dark:text-gray-900 animate__animated animate__lightSpeedInRight ml-[60%] font-semibold "
          role="alert"
        >
          <span class="font-bold mr-2">
            <span class="font-bold text-lg ">🚀 </span> Success!
          </span>{" "}
          <span class="font-bold text-xl ">📬</span> Your message has been sent.
          I will respone within 48 hours.{" "}
          <span class="font-bold text-xl ">🕜</span>
        </div>
      )}
      <Navbar
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showContactModal={showContactModal}
              setShowContactModal={setShowContactModal}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projectsv2
              showContactModal={showContactModal}
              setShowContactModal={setShowContactModal}
            />
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProjectDetail
              showContactModal={showContactModal}
              setShowContactModal={setShowContactModal}
            />
          }
        />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="/resume"
          element={
            <Resume
              showContactModal={showContactModal}
              setShowContactModal={setShowContactModal}
            />
          }
        />
        {/* <Route
          path="/blog/:id"
          element={
            <BlogDetail
              showContactModal={showContactModal}
              setShowContactModal={setShowContactModal}
            />
          }
        /> */}

        {/* <Route path="/blog" element={<BlogList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
