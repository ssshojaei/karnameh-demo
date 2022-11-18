import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TProblems } from "types";
import axios from "axios";

export type ProblemsState = {
  isLoading: boolean;
  hasError: boolean;
  problems: TProblems[];
};

const initialState: ProblemsState = {
  problems: [],
  isLoading: false,
  hasError: false,
};

export const getProblems = createAsyncThunk("problems/getAll", async () => {
  const res = await axios.get("http://localhost:3003/problems/");
  return res.data;
});

export const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProblems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProblems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.problems = payload;
      })
      .addCase(getProblems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default problemsSlice.reducer;
