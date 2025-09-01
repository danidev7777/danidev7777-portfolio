import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectsService from "./projectsService";

const initialState = {
  loading:false,
  project: {
    projectName: "",
    description: "",
    technologies: [],
    homeImg: "",
    projectLink:"",
    details: {
      detailImgs: [],
      overview: "",
      video:"",
      projectGoals: "",
      techStack: "",
      completed: "",
      features: [
        {
          feat: {
            featName: "",
            featDetails: "",
          },
        }
       
      ],
      challenges: "",
      takeaways: "",
    },
  },
  projects: [],
};

export const projectCreate = createAsyncThunk(
  "projects/create",
  async (project) => {
    console.log("redux projectCreate project", project);
    const response = await projectsService.projectCreate(project);
    console.log(response);
    return response.data;
  }
);

export const projectGetAll = createAsyncThunk("projects/getAll", async () => {
  console.log("redux projectGetAll project");
  const response = await projectsService.projectGetAll();
  console.log("redux projectGetAll project response", response);
  return response.data;
});

export const projectGetOne = createAsyncThunk(
  "projects/getOne",
  async (projectId) => {
    console.log("redux projectGetOne project", projectId); //this works
    const response = await projectsService.projectGetOne(projectId);
    console.log("redux projectGetOne project response", response);
    return response.data;
  }
);

export const projectSearch = createAsyncThunk(
  "projects/search",
  async (tech) => {
    console.log("redux projectSearch project", tech);
    const response = await projectsService.projectSearch(tech);
    console.log("redux projectSearch project response", response);
    return response.data;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Projects create one
      .addCase(projectCreate.pending, (state, action) => {
        console.log("projectSlice projectCreate.pending", action.payload);
        state.loading = true;
      })
      .addCase(projectCreate.fulfilled, (state, action) => {
        console.log("projectSlice projectCreate.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(projectCreate.rejected, (state, action) => {
        console.log("projectSlice projectCreate.rejected", action.payload);
        state.loading = false;
      })

      // Projects get All
      .addCase(projectGetAll.pending, (state, action) => {
        console.log("projectSlice projectGetAll.pending", action.payload);
        state.loading = true;
      })
      .addCase(projectGetAll.fulfilled, (state, action) => {
        console.log("projectSlice projectGetAll.fulfilled", action.payload);
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(projectGetAll.rejected, (state, action) => {
        console.log("projectSlice projectGetAll.rejected", action.payload);
        state.loading = false;
      })

      // Projects get one
      .addCase(projectGetOne.pending, (state, action) => {
        console.log("projectSlice projectGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(projectGetOne.fulfilled, (state, action) => {
        console.log("projectSlice projectGetOne.fulfilled", action.payload);
        state.loading = false;
        state.project = action.payload;
      })
      .addCase(projectGetOne.rejected, (state, action) => {
        console.log("projectSlice projectGetOne.rejected", action.payload);
        state.loading = false;
      })
      // Projects get search results
      .addCase(projectSearch.pending, (state, action) => {
        console.log("projectSlice projectSearch.pending", action.payload);
        state.loading = true;
      })
      .addCase(projectSearch.fulfilled, (state, action) => {
        console.log("projectSlice projectSearch.fulfilled", action.payload);
        state.loading = false;
        state.projects = action.payload.projects;
      })
      .addCase(projectSearch.rejected, (state, action) => {
        console.log("projectSlice projectSearch.rejected", action.payload);
        state.loading = false;
      })

  },
});
export default projectsSlice.reducer;
