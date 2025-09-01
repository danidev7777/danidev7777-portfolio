import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

const initialState = {
  contact: {
    fullName: "",
    email: "",
    budget: "",
    message: "",
  },
  contacts: [],
};

export const contactCreate = createAsyncThunk(
  "contacts/create",
  async (contact) => {
    console.log("redux contactCreate contact", contact);
    const response = await contactService.contactCreate(contact);
    console.log(response);
    return response.data;
  }
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Contact Me create one
      .addCase(contactCreate.pending, (state, action) => {
        console.log("contactSlice contactCreate.pending", action.payload);
        state.loading = true;
      })
      .addCase(contactCreate.fulfilled, (state, action) => {
        console.log("contactSlice contactCreate.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(contactCreate.rejected, (state, action) => {
        console.log("contactSlice contactCreate.rejected", action.payload);
        state.loading = false;
      });
  },
});
export default contactSlice.reducer;
