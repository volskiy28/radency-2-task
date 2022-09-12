import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tasks = {
  id: string;
  name: string;
  dateCreated: string;
  category: string;
  content: string;
  dates: string;
};

type TasksState = {
  arr: Tasks[];
  archived: Tasks[];
};
const initialState: TasksState = {
  arr: [
    {
      id: "1",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
    },
    {
      id: "2",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
    },
    {
      id: "3",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
    },
    {
      id: "4",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
    },
    {
      id: "5",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
    },
  ],
  archived: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Tasks>) => {
      state.arr.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        dateCreated: action.payload.dateCreated,
        category: action.payload.category,
        content: action.payload.content,
        dates: action.payload.dates,
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.arr = state.arr.filter((item) => item.id !== action.payload);
    },
    archiveItems: (state, action: PayloadAction<Tasks>) => {
      state.archived = [...state.archived, action.payload];
    },
  },
});
export const { archiveItems, deleteItem, addItem } = tasksSlice.actions;
export default tasksSlice.reducer;
