import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { useEffect, useState } from "react";


const Header = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    const countCompleted = todos.reduce(
      (count, todo) => count + (todo.complete ? 1 : 0),
      0,
    );
    setCompleted(countCompleted);
  }, [todos]);
  return (
    <div className="w-full h-14 bg-[#f3f1f1] flex justify-between items-center px-8 ">
      {/* logo */}
      <div className="flex items-center justify-center gap-2 ">
        {Array.from(
          [0, 1, 2].map((i) => (
            <div className="size-4 bg-[#9c9389] rounded-full" key={i} />
          )),
        )}
      </div>
      {/* text */}
      <h3 className="text-black font-mono font-bold text-sm ">
        {completed}/{todos.length} todos completed
      </h3>
    </div>
  );
};

export default Header;
