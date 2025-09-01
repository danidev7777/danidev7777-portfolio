import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Markdown from "react-markdown";
import { blogGetOne } from "../redux/blog/blogSlice";
import PathMorphing from "../components/PathMorphing";
import GradientText from "../components/GradientText";

const BlogDetail = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.blogs);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(blogGetOne(id));
  }, []);
  console.log("BLOG DETAIL", blog);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* {console.log("img", blog.image)} */}
      {loading ? (
        <>
          <div className="flex text-center h-[10vh] w-2/4 text-6xl text-white mx-auto  items-center pt-98">
            <PathMorphing />
            <GradientText
              colors={["#4c1d95", "#0e7490", "#4c1d95", "#0e7490", "#4c1d95"]}
              animationSpeed={1}
              showBorder={false}
              className="text-8xl tracking-wider font-semibold py-10 text-center mt-24 h-80 ml-10"
            >
              {" "}
              Loading....{" "}
            </GradientText>{" "}
          </div>
        </>
      ) : (
        <div className="w-2/3 p-4  pt-8 mx-auto">
          <img
            src={new URL(`../assets/${blog.image}`, import.meta.url).href}
            className="w-[800px] h-[420px] mx-auto"
          />

          <div className="flex flex-col justify-between ">
            <h1 className="text-4xl text-cyan-600 lex my-4 ">{blog.title}</h1>
            <h3 className="text-xl tracking-wide text-white pb-4">
              {blog.subTitle}
            </h3>
            <div className="flex items-center w-80 mb-2">
              <img
                src={new URL(`../assets/me.png`, import.meta.url).href}
                className="w-[60px] h-[60px] mx-auto bg-neutral-500/40 rounded-full"
              />
              <p className="w-60 italic">{blog.author}</p>
            </div>
          </div>

          <hr className="name py-2" />
          <Markdown>
           {blog.body}
          </Markdown>
        </div>
      )}
    </>
  );
};

export default BlogDetail;
