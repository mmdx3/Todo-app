import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  name: string;
  complete: boolean; // true or false
};

const initialState: InitialState[] = [];

const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InitialState>) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.name !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    setStateFromLocalStorage: (
      state,
      action: PayloadAction<InitialState[]>,
    ) => {
      return [...action.payload];
    },
    completeTodo: (state, action: PayloadAction<InitialState[]>) => {
      localStorage.setItem("todos", JSON.stringify([...action.payload]));
      return [...action.payload];
    },
  },
});

export const { addTodo, removeTodo, setStateFromLocalStorage, completeTodo } =
  TodoSlice.actions;

export default TodoSlice.reducer;
