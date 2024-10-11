import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "@/types/task";

interface TaskState {
  task?: Task;
}

const initialState: TaskState = {};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task>) => {
      state.task = action.payload;
    },
    clearTask: (state) => {
      state.task = undefined;
    },
  },
});

export const { clearTask, setTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
