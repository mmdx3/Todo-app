import { useSelector } from "react-redux";
import Todo from "../Todo";
import { RootState } from "../../store/rootReducer";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import { InitialState, setStateFromLocalStorage } from "../../store/slice/TodoSlice";
const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const TodosFromLocalStorage :InitialState[] = JSON.parse(localStorage.getItem("todos")!);
    if (TodosFromLocalStorage) {
      dispatch(setStateFromLocalStorage(TodosFromLocalStorage));
    }
    
  }, []);
  return (
    <div className="w-full bg-white  py-2 flex flex-col justify-start items-start h-[650px] z-10">
      {todos.map((todo, i) => (
        <Todo key={i} name={todo.name} completed={todo.complete} />
      ))}
    </div>
  );
};

export default TodoList;
