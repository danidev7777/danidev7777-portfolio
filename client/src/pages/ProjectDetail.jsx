
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectGetOne } from "../redux/projects/projectsSlice.js";
import GradientText from "../components/GradientText.jsx";
import PathMorphing from "../components/PathMorphing.jsx";


const ProjectDetail = ({ showContactModal, setShowContactModal }) => {
  const { id } = useParams();
  console.log("id", id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { project } = useSelector((state) => state.projects);
  console.log("DETAIL", id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(projectGetOne(id));
    console.log("PROJECT DETAIL", project);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* {console.log("video", project.details.video)} */}
      {loading ? (
        <>
          <div className="flex text-center h-[10vh] w-2/4 text-6xl text-white mx-auto  items-center pt-98">
            <PathMorphing />
            <GradientText
              colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
              animationSpeed={1}
              showBorder={false}
              className="text-8xl tracking-wider font-semibold py-10 h-80 mt-24  ml-10"
            >
              {" "}
              Loading....{" "}
            </GradientText>{" "}
          </div>
        </>
      ) : (
        <div className="w-2/3 p-4  pt-8 mx-auto">


          {project.details.video.length == 0 ? <span className="flex items-center h-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height={28} fill="#0891b2"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" /></svg><p>To view videos of projects visit my </p><a className="text-cyan-600 lex dw underline ml-2" href="https://www.youtube.com/@DaniDev7777" target="_blank">YouTube Channel</a></span> : <div dangerouslySetInnerHTML={{ __html: project.details.video }} className="mx-auto" />}
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl text-cyan-600 lex my-4 ">
                {project.projectName}
              </h1>
              <h3 className="text-lg text-white pb-4">{project.description}</h3>
            </div>

            <a
              href={project.projectLink}
              target="_blank"
              className="w-28 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#0891b2" fontSize={25}><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" /></svg>
              <p className="w-28">View on GitHub</p>
            </a>
          </div>

          <hr className="name py-2" />
          <div className="overflow-y-scroll max-h-[320px] mostly-customized-scrollbar rounded-lgmb-10">
            <h2 className="text-2xl  my-4 lex text-cyan-600 border-violet-600 border-l-4 tracking-wider">
              <span className="mr-2 "> </span> Overview
            </h2>

            <div className="text-md text-white ml-4">
              {project.details.overview}
            </div>
            <h2 className="text-2xl  my-4 lex text-cyan-600 border-violet-600 border-l-4 tracking-wider">
              <span className="mr-2"> </span> Technology
            </h2>
            <div className="text-md text-white ml-4">
              {project.details.techStack}
            </div>
            <h2 className="text-2xl  my-4 lex text-cyan-600 border-violet-600 border-l-4 tracking-wider">
              <span className="mr-2"> </span>
              Features
            </h2>
            {/* <div className=" flex my-2"> */}
            <h3 className="text-md text-white  py-2 mr-2 indent-4 tracking-wider underline underline-offset-4">
              {project.details.features[0].feat.featName}
            </h3>
            <p className="text-md text-white indent-10">
              {project.details.features[0].feat.featDetails}
            </p>
            {/* </div>
          <div className=" flex my-2"> */}
            <h3 className="text-md text-white  py-2 mr-2 indent-4 tracking-wider underline underline-offset-4 ">
              {project.details.features[1].feat.featName}
            </h3>
            <p className="text-md text-white indent-10">
              {"   "} {project.details.features[1].feat.featDetails}
            </p>
            {/* </div>
          <div className=" flex my-2"> */}
            <h3 className="text-md text-white  py-2 mr-2  indent-4 tracking-wider  underline underline-offset-4">
              {project.details.features[2].feat.featName}
            </h3>
            <p className="text-md text-white indent-10">
              {project.details.features[2].feat.featDetails}
            </p>
            {/* </div> */}
            <h2 className="text-2xl  my-4 lex text-cyan-600 border-violet-600 border-l-4 tracking-wider ">
              <span className="mr-2"> </span> Challenges
            </h2>
            <div className="text-md text-white ">
              {project.details.challenges}
            </div>
            <h2 className="text-2xl  my-4 lex text-cyan-600 border-violet-600 border-l-4 tracking-wider">
              <span className="mr-2"> </span> Learning and Takeaways
            </h2>
            <div className="text-md text-white">
              {project.details.takeaways}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectDetail;
