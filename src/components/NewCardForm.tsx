import { useForm } from "react-hook-form";
import { NewTaskShemaProps, newTaskShema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTasksStore } from "../globalStates/useTasksStore";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function NewCardForm({ className }: ComponentProps<"div">) {
  const { register, formState: { errors }, reset, handleSubmit } = useForm<NewTaskShemaProps>({
    resolver: zodResolver(newTaskShema),
  });

  const { addNewTask } = useTasksStore();

  const onSubmit = (formData: NewTaskShemaProps) => {
    addNewTask({ title: formData.title });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("flex gap-4 flex-col items-center", className)}
    >
      <input type="text" className="rounded-xl p-2 border-cyan-500 w-full outline-none max-w-[90%]" placeholder="Nova tarefa:" {...register("title")} />
      {
        errors.title?.message &&
        <span className="text-red-400 text-sm">{errors.title.message}</span>
      }
      <button className="py-2 mx-auto rounded-full w-fit px-6 uppercase text-white bg-cyan-700 hover:bg-cyan-600">Adicionar nova tarefa</button>
    </form>
  );
}
