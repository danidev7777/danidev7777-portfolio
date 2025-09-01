import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService.js";

const initialState = {
  loading: false,
  blog: {
    title: "",
    subTitle: "",
    author: "",
    body: "",
    date: "",
  },
  blogs: [],
};
// Actions
export const blogsGetAll = createAsyncThunk("blogs/getAll", async () => {
  console.log("redux blogsGetAll blogs");
  const response = await blogService.blogsGetAll();
  console.log("redux blogsGetAll blogs response", response.data);
  return response.data;
});

export const blogsCreate = createAsyncThunk("blogs/create", async (blog) => {
  console.log("redux blogsCreate blogs");
  const response = await blogService.blogCreate(blog);
  console.log("redux blogsCreate blogs response", response);
  return response.data;
});
export const blogGetOne = createAsyncThunk("blogs/getOne", async (id) => {
  console.log("redux blogGetOne blogs");
  const response = await blogService.blogGetOne(id);
  console.log("redux blogGetOne blogs response", response);
  return response.data;
});

//   Reducers
export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // blog get All
      .addCase(blogsGetAll.pending, (state, action) => {
        console.log("builderSlice blogsGetAll.pending", action.payload);
        state.loading = true;
      })
      .addCase(blogsGetAll.fulfilled, (state, action) => {
        console.log("builderSlice blogsGetAll.fulfilled", action.payload.blogs);
        state.loading = false;
        state.blogs = action.payload.blogs;
      })
      .addCase(blogsGetAll.rejected, (state, action) => {
        console.log("blogSlice blogsGetAll.rejected", action.payload);
        state.loading = false;
      })

      // blog create
      .addCase(blogsCreate.pending, (state, action) => {
        console.log("builderSlice blogsCreate.pending", action.payload);
        state.loading = true;
      })
      .addCase(blogsCreate.fulfilled, (state, action) => {
        console.log("builderSlice blogsCreate.fulfilled", action.payload);
        state.loading = false;
        // state.blogs = action.payload.blogs;
      })
      .addCase(blogsCreate.rejected, (state, action) => {
        console.log("blogSlice blogsCreate.rejected", action.payload);
        state.loading = false;
      })
      // blog get one
      .addCase(blogGetOne.pending, (state, action) => {
        console.log("builderSlice blogsGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(blogGetOne.fulfilled, (state, action) => {
        console.log("builderSlice blogsGetOne.fulfilled", action.payload);
        state.loading = false;
        state.blog = action.payload.blog[0];
      })
      .addCase(blogGetOne.rejected, (state, action) => {
        console.log("blogSlice blogsGetOne.rejected", action.payload);
        state.loading = false;
      });
  },
});

export default blogsSlice.reducer;
