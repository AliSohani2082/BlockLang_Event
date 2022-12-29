import { createSlice } from "@reduxjs/toolkit";

const initialState: { files: FileTab[] } = {
  files: [
    {
      id: 1,
      title: "main",
      content: "this is main",
      isSaved: true,
      isOpen: true,
    },
    {
      id: 2,
      title: "function",
      content: "this is a function",
      isSaved: false,
      isOpen: true,
    },
    {
      id: 3,
      title: "test",
      content: "this is test function",
      isSaved: false,
      isOpen: false,
    },
  ],
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    addFile(state, action) {
      state.files.push(action.payload);
    },
    closeFile(state, action) {
      const file = state.files.find((file) => file.id === action.payload);
      if (file?.isSaved) {
        state.files.filter((file) => file.id !== action.payload);
      }
    },
    openTab(state, action) {
      state.files = state.files.map((file) =>
        file.id === action.payload ? { ...file, isOpen: true } : file
      );
    },
    closeTab(state, action) {
      state.files = state.files.map((file) =>
        file.id === action.payload ? { ...file, isOpen: false } : file
      );
    },
  },
});

export const { addFile, closeFile, openTab, closeTab } = directorySlice.actions;
export default directorySlice.reducer;
