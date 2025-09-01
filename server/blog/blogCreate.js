import blogModel from "./blogModel.js";

const blogCreate = async (req, res) => {
  const { title, subTitle, author, body, image, date } = req.body;
  console.log(
    "title, subTitle, author, body, image, date",
    title,
    subTitle,
    author,
    body,
    image,
    date
  );
  // Validation goes here
  const blog = await blogModel.create({
    title,
    subTitle,
    author,
    body,
    image,
    date,
  });

  console.log("blog", blog);
  const blogs = await blogModel.find();
  res.status(200).json({ message: "Success!", blogs: blogs });
};

export default blogCreate;
