import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useAppDispatch } from "../store/store";
import { completeTodo, removeTodo } from "../store/slice/TodoSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

type TtodoItem = {
  name: string;
  completed: boolean;
};

const Todo = ({ name, completed }: TtodoItem) => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();
  const removeTodoItem = (name: string) => {
    dispatch(removeTodo(name));
  };
  const completedTodoItem = (name: string) => {
    const newTodos = [...todos]; // ایجاد یک کپی از آرایه اصلی
    const todoIndex = newTodos.findIndex((todo) => todo.name === name);

    if (todoIndex !== -1) {
      newTodos[todoIndex] = {
        ...newTodos[todoIndex],
        complete: !newTodos[todoIndex].complete,
      };
    }
    dispatch(completeTodo(newTodos));
  };
  return (
    <div className="w-full   border-b border-gray-100 ">
      <div
        className={`flex justify-between items-center px-8 py-4 ${
          completed ? "opacity-[0.5]" : ""
        }`}
      >
        <h3
          className={`text-lg font-medium text-gray-700 ${
            completed ? "text-slate-500 line-through " : ""
          }`}
        >
          {name}
        </h3>
        <div className="flex items-center gap-4 flex-row-reverse">
          <IoCloseSharp
            size={24}
            color="red"
            className="cursor-pointer"
            onClick={() => removeTodoItem(name)}
          />
          <FaCheck
            color="green"
            className="cursor-pointer"
            onClick={() => completedTodoItem(name)}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
