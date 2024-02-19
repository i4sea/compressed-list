import { useForm } from "react-hook-form";
import { NewTaskShemaProps, newTaskShema } from "../schemas/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { compressTitle } from "../formatters/formatters";

interface NewCardInputProps {
  test?: string;
}

export function NewCardInput({ test }: NewCardInputProps) {

const {
    register,
    formState: { errors },
    handleSubmit,
} = useForm<NewTaskShemaProps>({
    resolver: zodResolver(newTaskShema),
});

const onSubmit = (formData: NewTaskShemaProps) => {
    console.log(compressTitle(formData.title))
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="newcard-input">Novo card:</label>
        <input type="text" className="" {...register("title")} />

        <button>Adicionar novo card</button>
      </form>
    </div>
  );
}
