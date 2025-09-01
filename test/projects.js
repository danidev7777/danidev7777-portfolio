// Placeholder for houses seed data

import "dotenv/config";
import axios from "axios";

const server = process.env.NODE_SERVER || "";
console.log("server", server);

const createListing = () => {
  const data = [
    {
      projectName: "PandaAI",
      description:
        "A fullstack Artificial Intelligence User Interface with Ollama's powerful APIs.",
      technologies: ["React", "Ollama", "MongoDB"],
      homeImg: "pandaAI.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/dwalker/ai-project",
      details: {
        detailImgs: [],
        overview:
          "PandaAI is an advanced Artificial Intelligence User Interface designed to seamlessly integrate with Ollama's powerful APIs and utilize cutting-edge models such as Mistral, DeepSeek, and Gemma. This intuitive tool empowers developers and data scientists alike by providing a user-friendly platform for harnessing the capabilities of these sophisticated AI models in real-world applications.",
        video: "pandaAI.mp4",
        projectGoals: "",
        techStack:
          "Full MERN stack with Redux-toolkit for state managegment and Ollama API .",
        completed: "May 2025",
        features: [
          {
            feat: {
              featName: "Three AI Models",
              featDetails: "I utilized Mistral, DeepSeek, and Gemma AI models.",
            },
          },
          {
            feat: {
              featName: "Archive Functionality",
              featDetails: "I created the ability to archive an AI response.",
            },
          },
          {
            feat: {
              featName: "Responses Stored in Database",
              featDetails: "All prompts and responses are stored in a MongoDB.",
            },
          },
        ],
        challenges:
          "The only challenge was locally installing the AI models for the Ollama API to use the local models.",
        takeaways:
          "The most interesting concept I learned duriong this project was the use of MongoDB's `updateMany` method to perform a bulk update on a collection.",
      },
    },
    {
      projectName: "Real Estate",
      description:
        "A full-featured real estate site with login portal for real-estate agents.",
      technologies: ["React", "RTK", "MongoDB"],
      homeImg: "home.jpg",
      details: {
        detailImgs: [
          "featHomes.jpg",
          "detail.jpg",
          "login.jpg",
          "realPortal.jpg",
        ],
        overview:
          "Full MERN stack real estate website with search functionallity and login portal for real-estate agents.",
        video: "re.mp4",
        projectGoals: "",
        techStack:
          "Full MERN stack with Redux-toolkit for state managegment and JWT and passport for login authorization.",
        completed: "Jan 2025",
        features: [
          {
            feat: {
              featName: "Search Functionality",
              featDetails:
                "All listings can be searched by location and tag. To accomplish this, I used database querying techniques in mongoose.",
            },
          },
          {
            feat: {
              featName: "Admin section",
              featDetails:
                "Realtor portal that allows for new listing creation, view of all listings by realty company, and ability to respond to messages from interested buyers.",
            },
          },
          {
            feat: {
              featName: "Mortage Calculator",
              featDetails:
                "Created a Mortage Calculator that uses the stored lising price and the user input for down payment and interest rate to calculate the monthly payment.",
            },
          },
        ],
        challenges:
          "The data structure was crazy with this project. I nested schemas, so to dynamicly render the data I dotted into like 4 levels of objects.",
        takeaways:
          "I enjoyed building out hte serach functionality on the server side and rendering the respone to the frontend. In previous projects I would build out the serach logic on the frontend, but for large data sets that would slow down the application.",
      },
    },
    {
      projectName: "Project Tracker",
      description:
        "A fullstack project tracker with login portal for users to manage each assigned project.",
      technologies: ["React", "RTK", "MongoDB"],
      homeImg: "ptdetails.jpg",
      details: {
        detailImgs: [
          "ptlogin.jpg",
          "ptprojects.jpg",
          "ptchat.jpg",
          "ptcreate.jpg",
        ],
        overview:
          "This powerful tool allows users to easily create, assign, track, and manage multiple projects within a single platform, making it the perfect solution for developers working on various client or personal projects.",
        video: "protracker.mp4",
        projectGoals: "",
        techStack:
          "Full MERN stack with Redux-toolkit for state managegment and JWT and passport for login authorization.",
        completed: "Feb 2025",
        features: [
          {
            feat: {
              featName: "Login Authorization",
              featDetails:
                "A logged in user has access to the project details assigned to them. ",
            },
          },
          {
            feat: {
              featName: "Collaboration Tools",
              featDetails:
                "Facilitate seamless collaboration among team members through integrated chat functionalityon each project dashboard.",
            },
          },
          {
            feat: {
              featName: "Create New Projects and Update Task Date and Status",
              featDetails:
                "Created a Mortage Calculator that uses the stored lising price and the user input for down payment and interest rate to calculate the monthly payment.",
            },
          },
        ],
        challenges:
          "At first updating the task for one project was a challenge, but I figured out how to to update a specific field within a nested array in the Mongoose model by using Model.findByIdAndUpdate({ _id: id }, { $set: { [`projects.0.tasks.${taskIndex}`]: task }})",
        takeaways:
          "I learned how to use $set to change a specific field within a nested array.",
      },
    },
    {
      projectName: "We Serve",
      description:
        "e Serve is an application that allows non-profit organizations to create posts for needed volunteers and collaborate with other non-profit organizations",
      technologies: ["React", "Redux", "MongoDB"],
      homeImg: "weserve.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/dwalker/persevere-capstone-we-serve",
      details: {
        detailImgs: [],
        overview:
          "We Serve is an application that allows non-profit organizations to create posts for needed volunteers and collaborate with other non-profit organizations.",
        video: "weserve.mp4",
        projectGoals:
          "The goal of this project was to create a MERN fullstack application that used Redux and had full CRUD.",
        techStack:
          "The technology was React, Redux for state management, Axios for API calls, Express server to connect to MongoDB to store data, JWT for user authorization, Passport for storing the session token, Bootstrap and W3-CSS libraries for styling, URL slugs for second level  navigation into app content.",
        completed: "Jun 2023",
        features: [
          {
            feat: {
              featName: "Access",
              featDetails:
                "The option to procced as a Guest or User: Create an account or Login as existing user; Guest Acceptance Criteria: View public access as Guest, View volunteer opportunities, View organization bios; User Acceptance Criteria: Create blog messages for the user community, Post volunteer entries; Admin Acceptance Criteria: Create blog messages for the user community, Post volunteer entries, Delete and Edit volunteer entries",
            },
          },
          {
            feat: {
              featName: "Conditional Rendering",
              featDetails:
                "Navbar -> Community and Post are only accessible for users and if isAuth is false a modle prompts login or registration. Volunteer Buttons -> User has access to Edit their own posts and See Details on other posts, Guests only have access to See Details, Admin has access to delete any of the posts.",
            },
          },
          {
            feat: {
              featName: "Multi-tier Navigation",
              featDetails:
                "I created URL slugs for second level navigation into app content",
            },
          },
        ],
        challenges:
          "This was my first fullstack CRUD project so there were some fun learning experiences.",
        takeaways:
          "This project was incediabliy fun to build because I am passionate about volunteer work.",
      },
    },
    {
      projectName: "CodeCast+",
      description: "A code-a-thone project completed by 4 people in 10 hours.",
      technologies: ["React", "Ollama", "MongoDB"],
      homeImg: "codecast.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/codeathon-2025/team-2/codecast",
      details: {
        detailImgs: [],
        overview:
          "CadeCast+ is your ultimate resource, offering a rich library of educational videos, informative blog posts",
        video: "codecast.mp4",
        projectGoals:
          "The goal of this project was to identify an opportunity or problem in the classroom that can be handled with code. As the Team lead, my responsibilities were: Redux (RTK) for videos and blogs, AI integration, AI modal (ask a coding question), Compile the code from all team members, and answer team questions.",

        techStack:
          "The technology was React, Redux (RTK )for state management, Axios for API calls, Express server to connect to MongoDB to store data, JWT for user authorization, Passport for storing the session token, Tailwindcssfor styling, and Ollama API for AI chatbot.",
        completed: "May 2025",
        features: [
          {
            feat: {
              featName: "Login Authentication",
              featDetails: "Authentication using passport and JWT.",
            },
          },
          {
            feat: {
              featName: "AI Chatbot",
              featDetails:
                "The AI Chatbot for coding questions the students might have.",
            },
          },
          {
            feat: {
              featName: "Videos Search",
              featDetails:
                "Conditional rendering of videos based on search criteria.",
            },
          },
        ],
        challenges:
          "The biggest challenge was being a developer and a team lead during the 12 hour time constraints.",
        takeaways:
          "This project was incediabliy fun to build because our team was really fun to work with.",
      },
    },
    {
      projectName: "Social Pulse",
      description: "This is a simple dashboard mock-up for social media stats.",
      technologies: ["Javascript", "HTML", "CSS"],
      homeImg: "dash.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/dwalker/login-dashboard",
      details: {
        detailImgs: [],
        overview:
          "A Streamlined Dashboard Mockup, Empowering You to Quickly Grasp Essential Social Media Metrics and Engagement Stats for Enhanced Brand Performance.",
        video: "dash.mp4",
        projectGoals: "The goal of this was to use CryptoJS core components.",
        techStack:
          "The technology was Javascript, HTML, CSS and CryptoJS for user authorization.",
        completed: "Nov 2023",
        features: [
          {
            feat: {
              featName: "Access",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Single Page Navigation",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Bootstrap Icons",
              featDetails: "",
            },
          },
        ],
        challenges:
          "Getting comfortable with grids was not my favorite because I am a flexbox fan.",
        takeaways: "The design part was interesting.",
      },
    },
    {
      projectName: "Community Coalition",
      description: "This is an application for services in Arizona.",
      technologies: ["Javascript", "HTML", "CSS"],
      homeImg: "partcomm.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/dwalker/dynamic-form-2",
      details: {
        detailImgs: [],
        overview:
          "Community Coalition is an dynamic application that allows those in need of services to apply in one location that reaches all non-profit organizations. This is a three-tiered dynamic form that populates the select boxes based on the option from the previous question.",
        video: "partcomm.mp4",
        projectGoals:
          "The goal of this project was to create logic that makes options available dependent on previous selects.",
        techStack: "The technology was Javascript, HTML, and CSS.",
        completed: "Nov 2024",
        features: [
          {
            feat: {
              featName: "Three-Tiered Dynamic Form",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Single Page Navigation",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Bootstrap Icons",
              featDetails: "",
            },
          },
        ],
        challenges:
          "Getting comfortable with grids was not my favorite because I am a flexbox fan.",
        takeaways:
          "The design part was interesting because it was much more simpler than I am used to.",
      },
    },
    {
      projectName: "Elephants  Awareness",
      description:
        "This website brings awareness to the beauty of elephants and the dangers they face.",
      technologies: ["Javascript", "HTML", "CSS"],
      homeImg: "eltrib.jpg",
      projectLink:
        "http://gitlab.perryville.perseverenow.org/dwalker/elephant-tribute",
      details: {
        detailImgs: [],
        overview:
          "This is the very first website I ever built using only HTML, CSS, and very little Javascript. The idea is it brings awareness to the beauty of elephants and the dangers they face.",
        video: "eltrib.mp4",
        projectGoals:
          "The goal of this project was to create logic that makes options available dependent on previous selects.",
        techStack: "The technology was HTML, CSS, and very little Javascript.",
        completed: "Jun 2023",
        features: [
          {
            feat: {
              featName: "Access",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Navigation",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "CSS",
              featDetails: "",
            },
          },
        ],
        challenges:
          "The biggest challenge was learning Flexbox for the first time",
        takeaways: "The process of bringing an idea to life is amazing.",
      },
    },
    {
      projectName: "Customs Pizza",
      description: "This website is an online menu for a pizza place.",
      technologies: ["Javascript", "HTML", "CSS"],
      homeImg: "pizza.jpg",
      projectLink: "http://gitlab.perryville.perseverenow.org/dwalker",
      details: {
        detailImgs: [],
        overview:
          "This is one of first website I built using very little Javascript.",
        video: "pizza.mp4",
        projectGoals:
          "The goal of this project was to create logic that allows for viewing of different sections of the menu.",
        techStack: "The technology was HTML, CSS, and Javascript.",
        completed: "May 2023",
        features: [
          {
            feat: {
              featName: "Menu Modals",
              featDetails:
                "Native Javascript was used to create the functionality of bouncing between menu categories.",
            },
          },
          {
            feat: {
              featName: "Single page Navigation",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Custom CSS",
              featDetails:
                "No css libraries were used during the making of this site.",
            },
          },
        ],
        challenges:
          "The biggest challenge was learning how to hide and show modals as I built out the Javascript for the menu.",
        takeaways: "The process of bringing an idea to life is amazing.",
      },
    },

    {
      projectName: "Store",
      description: "Mock-up of a women's clothing store.",
      technologies: ["Javascript", "HTML", "CSS"],
      homeImg: "store.jpg",
      projectLink: "http://104.131.171.220/dwalker",
      details: {
        detailImgs: [],
        overview:
          "The first time I utilized used prompt engineering to generate AI images for a specific purpose.",
        video: "store.mp4",
        projectGoals:
          "The goal of this project was to create a single page interavtive website with AI photos.",
        techStack: "The technology was Native Javascript, CSS, and HTML.",
        completed: "March 2023",
        features: [
          {
            feat: {
              featName: "AI generated photos",
              featDetails:
                "Prompt engineering is a real thing. There is no telling how many duds I past up to get the images for this site.",
            },
          },
          {
            feat: {
              featName: "Single page website",
              featDetails:
                "Making it easy for customers to browse through the vast collection of women's apparel.",
            },
          },
          {
            feat: {
              featName: "Filter Options",
              featDetails:
                "Advanced filtering options to facilitate easy and quick browsing.",
            },
          },
        ],
        challenges: "This project was without challenges.",
        takeaways:
          "The most exciting part was generating photos with AI using huggingface.",
      },
    },
    {
      projectName: "Minecraft Mock",
      description: "Mock-up of the fan favorite Minecraft game.",
      technologies: ["Three.js", "Javascript", "HTML"],
      homeImg: "minecraft.jpg",
      projectLink: "http://gitlab.perryville.perseverenow.org/dwalker",
      details: {
        detailImgs: [],
        overview:
          "Fan favorite Minecraft game, the first time I used Three.js for 3d modeling",
        video: "minecraft.mp4",
        projectGoals:
          "The goal of this project was to create logic that allows for choosing textures and storing of different sections.",
        techStack: "The technology was Three.js, Javascript, and HTML.",
        completed: "Aug 2023",
        features: [
          {
            feat: {
              featName: "3D modeling",
              featDetails: "This is interesting, but I need more work on this.",
            },
          },
          {
            feat: {
              featName: "Keyboard navigation",
              featDetails: "This was a simple concept.",
            },
          },
          {
            feat: {
              featName: "Three.js Textures",
              featDetails: "I enjoyed adding extra texture options.",
            },
          },
        ],
        challenges:
          "The biggest challenge was learning the camera view being on a sphere ",
        takeaways: "The process of bringing an idea to life is amazing.",
      },
    },
    {
      projectName: "Astroids",
      description: "Mock-up of the fan favorite Astroids game.",
      technologies: ["Phaser", "Javascript", "HTML"],
      homeImg: "astroids.jpg",
      projectLink: "http://104.131.171.220/dwalker/astroid-game",
      details: {
        detailImgs: [],
        overview:
          "Fan favorite Minecraft game, the first time I used Three.js for 3d modeling",
        video: "minecraft.mp4",
        projectGoals:
          "The goal of this project was to create an interactive game that keeps track of time and score.",
        techStack: "The technology was Phaser, Javascript, and HTML.",
        completed: "March 2024",
        features: [
          {
            feat: {
              featName: "Tiled",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Keyboard navigation",
              featDetails: "",
            },
          },
          {
            feat: {
              featName: "Phaser",
              featDetails: "",
            },
          },
        ],
        challenges: "The biggest challenge was the boundaries for the world.",
        takeaways: "The process of bringing an idea to life is amazing.",
      },
    },
    // {
    //   projectName: "Techstore",
    //   description: "Mock-up of the fan favorite Astroids game.",
    //   technologies: ["PERN", "DaisyUI", "Tailwind"],
    //   homeImg: "techstore.png",
    //   projectLink: "http://104.131.171.220/dwalker/pern-store",
    //   details: {
    //     detailImgs: [],
    //     overview:
    //       "Techstore is the first time I used a postgreSQL database.",
    //     video: "techstore.mp4",
    //     projectGoals:
    //       "The goal of this project was to have full CRUD with a PERN stack.",
    //     techStack: "The technology was PERN stack, DaisyUI, and Tailwind.",
    //     completed: "May 2025",
    //     features: [
    //       {
    //         feat: {
    //           featName: "helmet",
    //           featDetails: "Used for security to protect app by setting varios HTTP headers.",
    //         },
    //       },
    //       {
    //         feat: {
    //           featName: "arcjet",
    //           featDetails: "Used to apply rate limits to all routes and check for spoofed bots.",
    //         },
    //       },
    //       {
    //         feat: {
    //           featName: "base64",
    //           featDetails: "Used to add photos when creating a new product.",
    //         },
    //       },
    //     ],
    //     challenges: "The biggest challenge was the boundaries for the world.",
    //     takeaways: "The process of bringing an idea to life is amazing.",
    //   },
    // },
  ];
  console.log("data", data);
  data.map(async (project) => {
    const response = await axios.post(`${server}/projects`, project);

    console.log(response.data);
  });
};
createListing();
