import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { problemsSlice } from "./problems/ProblemsSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [problemsSlice.name]: problemsSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<void, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
