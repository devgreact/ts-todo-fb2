import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TodoType = {
  uid: string;
  title: string;
  body: string;
  done: boolean;
  sticker: string;
  date: string;
};
export type TodoStatesType = { todoList: Array<TodoType> };
const initialState: TodoStatesType = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state: TodoStatesType, action: PayloadAction<TodoType>) => {
      state.todoList.push({
        uid: action.payload.uid,
        title: action.payload.title,
        body: action.payload.body,
        done: action.payload.done,
        sticker: action.payload.sticker,
        date: action.payload.date,
      });
    },
    updateTodo: (state: TodoStatesType, action: PayloadAction<TodoType>) => {
      let index = state.todoList.findIndex(
        (item) => item.uid === action.payload.uid
      );
      state.todoList[index] = { ...action.payload };
    },
    deleteTodo: (state: TodoStatesType, action: PayloadAction<TodoType>) => {
      let index = state.todoList.findIndex(
        (item) => item.uid === action.payload.uid
      );
      state.todoList.splice(index, 1);
    },
    sortTodo: (state: TodoStatesType, action: PayloadAction<string>) => {
      state.todoList = [];
    },
    clearTodo: (state: TodoStatesType) => {
      state.todoList = [];
    },
  }
});

const todoSliceReducer = todoSlice.reducer;
const todoActionCreator = todoSlice.actions;

export { todoSliceReducer, todoActionCreator };

// export default todoSlice;
// export const { addTodo, updateTodo, deleteTodo, sortTodo, clearTodo } =
//   todoSlice.actions;