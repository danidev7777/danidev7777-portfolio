import axios from 'axios'


const contactService = {
  contactCreate: async (contact) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/contact`,
     contact
    );
  }

};

export default contactService;
