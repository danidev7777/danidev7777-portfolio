import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./redux/projects/projectsSlice.js";
import contactReducer from "./redux/contact/contactSlice.js";
import blogReducer from "./redux/blog/blogSlice.js";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    contacts: contactReducer,
    blogs: blogReducer,
  },
  // preloadedState: preloadedState(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
});
