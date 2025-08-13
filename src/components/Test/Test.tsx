import { Controller, SubmitHandler, useForm } from "react-hook-form";
import "./style.scss";


interface IForm {
  "e-mail": string;
  message: string;
  isImportant: boolean;
}

const Test = () => {
  const { register, handleSubmit, formState, control } = useForm<IForm>({
    mode: "onChange",
  });

  const emailError = formState.errors["e-mail"]?.message;
  const areaTextError = formState.errors["message"]?.message;

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <div
      className=" items-center h-screen flex justify-center 
    mt-96 text-center flex-col">
      <h1 className="text-3xl">Feedback form</h1>
      {/* <button onClick={()=> reset()}>RESET</button> */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex  w-2/4 flex-col gap-5">
        <input
          type="email"
          placeholder="Enter e-mail"
          {...register("e-mail", {
            required: "This field is requeied",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Введите корректный email адрес",
            },
          })}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        <textarea
          {...register("message", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Минимум 10 символов",
            },
          })}
          placeholder="Enter message"
          className="border p-2"
        />

        {areaTextError && <p className="text-red-500">{areaTextError}</p>}

        <Controller
          control={control}
          name="isImportant"
          render={({ field }) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                field.onChange(!field.value);
              }}>
              {!!field.value ? "ВАЖНОЕ" : "НЕ ВАЖНОЕ"}
            </button>
          )}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Test;
