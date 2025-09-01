import axios from "axios";

const blogService = {
  blogCreate: async (blog) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/blogs`,
      blog
    );
  },
  blogsGetAll: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/blogs`
      
    );
  },
  blogGetOne: async (id) => {
    return await axios.get(
      `${
        import.meta.env.VITE_NODE_SERVER
      }/blogs/${id}`
    );
  },
 
};

export default blogService;
