import axios from 'axios'


const projectsService = {
  projectCreate: async (project) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/projects`,
      project
    );
  },
  projectGetOne: async (projectId) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/projects/${projectId}`
    );
  },
  
  projectGetAll: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER}/projects`);
  },
  
  projectSearch: async (tech) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/projects/search/${tech}`
    );
  },
};

export default projectsService;
