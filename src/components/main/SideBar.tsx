import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import * as z from "zod";
import useForbiddenWordsValidator from "../../hooks/useForbiddenWordsValidator";
import { useAppDispatch } from "../../store/store";
import { addTodo } from "../../store/slice/TodoSlice";
import { RootState } from "../../store/rootReducer";
import { useSelector } from "react-redux";
import useAlert from "../ui/Alert";

const schema = z.object({
  text: z.string().min(3),
});

type Schema = z.infer<typeof schema>;

const IsAuthenticated = false;

const SideBar = () => {
  const forbiddenWords = ["bitcoin", "ethereum", "crypto"];
  const textSchema = useForbiddenWordsValidator(forbiddenWords);
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const alert = useAlert();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Schema>();

  const onSubmit = (data: Schema) => {
    console.log("submit", data);
    if (!IsAuthenticated && todos.length >= 3)
      return alert.fire({
        icon: "info",
        title: "You must be logged in to add more than 3 todos",
      });
    // for check is not used before
    const isExists = todos.some(
      (todo) =>
        todo.name.toLowerCase().trim() === data.text.toLowerCase().trim(),
    );  
    
    if (!isExists) {
      dispatch(addTodo({ name: data.text, complete: false }));
    } else {
      alert.fire({
        icon: "error",
        title: "You have already added this todo",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl:w-[45%] w-full px-8 flex flex-col items-start justify-between xl:h-[650px] py-6 xl:px-6 bg-[#fcfafa] xl:gap-2 gap-12 "
    >
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <label className="text-black text-lg font-normal font-Kanit">
          Add a todo
        </label>
        {/* textinput */}
        <input
          type="text"
          {...register("text", {
            validate: (value) => {
              return textSchema.safeParse(value).success
                ? undefined
                : "این کلمه مجاز نیست";
            },
          })}
          className="w-full h-10  rounded-md px-4 outline-none border border-[#f0f0f0]"
        />
        {errors.text && (
          <p className="text-sm text-red-500 font-mono ">
            {errors.text.message}
          </p>
        )}
        <Button buttonType="submit">Add to list </Button>
      </div>
      {/* login & register in btn */}
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <Button buttonColor="#474040">Login</Button>
        <Button buttonColor="#474040">Register</Button>
      </div>
    </form>
  );
};

export default SideBar;
