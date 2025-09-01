import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import GradientText from "../components/GradientText";
import { blogsGetAll } from "../redux/blog/blogSlice";
import Header from "../components/Header";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blogs, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(blogsGetAll());
  }, []);
  useEffect(()=>{
    window.scrollTo({top:0, behavior: "smooth"})
  },[])
  console.log("blogs", blogs);

  return (
    <>
        <Header />
    <div className="mx-80 py-20 max-h-[100vh] min-h-[100vh]  ">

      <div>
        <h2 className="text-center  tracking-tight text-white uppercase">
          <span className="text-[#4c1d95] font-semibold text-5xl lex ">
            Thoughts
          </span>
          <GradientText
            colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
            animationSpeed={6}
            showBorder={false}
            className="text-5xl tracking-wider justify-center mx-auto font-semibold p-2 "
          >
            &
          </GradientText>{" "}
          <span className="text-[#0e7490] name font-bold text-6xl lex">
            Perspectives
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {blogs.map((blog) => (
          <div
            aria-label="card-item-v1"
            className="flex flex-col w-[400px] mt-4 "
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <div className="relative flex-shrink-0 mb-5 h-[250px]">
              <img
                src={new URL(`../assets/${blog.image}`, import.meta.url).href}
                className="object-fit w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between flex-1  min-h-[100px] max-h-[100px]">
              <h3 className="mb-3 text-lg font-bold ">{blog.title}</h3>
              {/* <div className="text-gray-400">{blog.subTitle}</div> */}
              <p className="text-sm text-gray-200 ">by <span className="italic">{blog.author}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogList;
