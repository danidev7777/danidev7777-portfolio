import "dotenv/config";
import axios from "axios";

const blogs = [
  {
    title: "The most popular, free and open-source library for Tailwind CSS",
    subTitle:"Easy way to use themes and components.",
    author: "Danielle Walker",
    body: `
**Unlocking Efficiency with NPM i DaisyUI: A Game-Changer for Tailwind CSS Developers**
Are you on the hunt for an efficient solution to streamline your development workflow? Look no further than npm i daisyui—the most popular, free, and open-source component library tailored for Tailwind CSS users. Let's explore what this powerful tool offers!

### What is NPM i DaisyUI?

A product of the esteemed Gridsome team, npm i daisyui provides pre-built UI components that seamlessly integrate with your existing Tailwind CSS setup, expediting the development process. The library boasts an impressive collection of 100+ component styles designed to elevate the look and feel of your web applications without compromising on functionality.

### Key Features:

- **Pre-built Components**: Access a rich array of pre-designed components, saving you time in crafting unique UI elements from scratch.
- **Tailwind CSS Integration**: Easily incorporate Tailwind's powerful utility classes into your projects, ensuring consistency across the board.
- **Free and Open Source**: DaisyUI is available at no cost to developers worldwide—empowering you to create stunning web applications without breaking the bank!
### Installation & Usage Guide:
1. Install Tailwind CSS in your project folder via npm install tailwindcss or yarn add Tailwindcss.
2. Initialize DaisyUI by running either npx daisyui init or adding the following to a 
3. Run npm install daisyui or yarn add daisyui.
4. Utilize the components in your project by importing relevant CSS files from the newly added node_modules/daisyui folder:

5. Incorporate DaisyUI components using the Tailwind CSS classes and utility functions—such as btn, card, or alert.
### The Power of Simplification
With its user-friendly interface, vast component library, and seamless integration with Tailwind CSS, npm i daisyui stands as a game-changer for web developers seeking to elevate their projects' visual appeal without compromising on efficiency. Take your development skills to the next level by unlocking the potential of DaisyUI today!
Experience the benefits firsthand and share your thoughts—we can't wait to hear how you streamline your workflow with this powerful tool.`,
    image: "dasiyUI.png",
    date: new Date(),
  },
  {
    title: "Redux-toolkit Defined",
    subTitle:"Redux Toolkit (RTK) is a collection of official Redux tools that enables faster development of Redux apps by abstracting away low-level details and providing higher-order helpers for common use cases.",
    author: "Danielle Walker",
    body: "Redux Toolkit (RTK) is like a sparkling 🦄 unicorn! The set up is a breeze. All you do is connent the store.js file and ",
    image: "RTK.jpg",
    date: new Date(),

   
  },
  {
    title: "useState() and useEffect() the Mom and Dad of React Hooks",
    subTitle:"The use cases for these React hooks are endless.",
    author: "Danielle Walker",
    body: "React Hooks are a feature introduced in React (version 16.8) that allow you to use state and other React features outside of class components. They let you reuse logic between functions without creating a new component or a higher-order component. Here are some popular React hooks: 1. useState: This hook allows functional components to have state. It accepts an initial value and returns a state variable and a function to update it. Example: ```javascript import { useState } from 'react'; function Example() { const [count, setCount] = useState(0); return ( <div> Count - {count} <button onClick={() => setCount(count + 1)}> Increment </button> </div> ); } ``` 2. useEffect: This hook lets you perform side effects in function components, such as fetching data, subscribing to events, and more. It accepts a callback function and an array of dependencies. The function is called after the render, and if the dependencies change, it will be called again. Example: ```javascript import { useEffect } from 'react'; function Example() { useEffect(() => { document.title = Page title; }, []); // Empty array means it only runs once on mount and unmount } ",
    image: "react.png",
    date: new Date(),

 
  },
  {
    title: "Phaser Need to Know",
    author: "Danielle Walker",
    body: "Phaser is a popular open-source HTML5 game framework used to create browser-based games. It's designed for creating cross-browser, mobile-friendly games that can run in the Canvas or WebGL technologies. Some of its key features include: 1. Easy setup and usage with extensive documentation and examples. 2. Built-in support for physics (Arcade Physics and Matter.js) and animations. 3. Modular structure, allowing developers to use only the parts they need. 4. Support for multiple input methods, including touch, keyboard, mouse, and gamepads. 5. Integration with other libraries like Pixi.js, Three.js, and Babylon.js. 6. Active community and regular updates to keep up with new web technologies. 7. A wide range of built-in tools, such as a particle editor, pathfinding AI, and tilemap support.",
    image: "phaser.png",
    date: new Date(),


  },
];
console.log("blogs", blogs);

// blogs.forEach(async (blog) => {
//   const addblog = await axios.post(`${process.env.NODE_SERVER}/blogs`, blog);
//   console.log("addblog", addblog.data);
// });
blogs.map(async (blog) => {
  const response = await axios.post(`${process.env.NODE_SERVER}/blogs`, blog);

  console.log(response.data);
});