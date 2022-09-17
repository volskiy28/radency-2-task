import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tasks = {
  id: string;
  name: string;
  dateCreated: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
};

type TasksState = {
  arr: Tasks[];
  archived: Tasks[];
  tableData: any[];
};
export type TableData = {
  [key: string]: { active: number; archived: number };
}[];
const initialState: TasksState = {
  arr: [
    {
      id: "1",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
      archived: false,
    },
    {
      id: "2",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Idea",
      content: "content",
      dates: "2022-09-09",
      archived: false,
    },
    {
      id: "3",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
      archived: false,
    },
    {
      id: "4",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Task",
      content: "content",
      dates: "2022-09-09",
      archived: true,
    },
    {
      id: "5",
      name: "task name",
      dateCreated: "10/09/2022",
      category: "Random thought",
      content: "content",
      dates: "2022-09-09",
      archived: false,
    },
  ],
  archived: [],
  tableData: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Tasks>) => {
      state.arr = [...state.arr, action.payload];
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.arr = state.arr.filter((item) => item.id !== action.payload);
    },
    archiveItems: (state, action: PayloadAction<string>) => {
      const newNotes = state.arr.map((item) => {
        if (item.id == action.payload) {
          return { ...item, archived: true };
        }
        return item;
      });
      return {
        ...state,
        arr: newNotes,
      };
    },
    unarchivedItem: (state, action: PayloadAction<Tasks>) => {
      state.arr = [...state.arr, action.payload];
      action.payload.archived = false;
    },
    changeTableData: (state, action: PayloadAction<TableData>) => {
      return {
        ...state,
        tableData: action.payload,
      };
    },
  },
});
export const {
  archiveItems,
  deleteItem,
  addItem,
  unarchivedItem,
  changeTableData,
} = tasksSlice.actions;
export default tasksSlice.reducer;
