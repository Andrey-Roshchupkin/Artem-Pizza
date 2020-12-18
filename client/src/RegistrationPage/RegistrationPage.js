import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  login: yup
    .string()
    .min(4, "Слишком короткий логин")
    .required("Логин не может быть пустым!"),
  password: yup
    .string()
    .min(8, "Слишком короткий парлоль")
    .required("Пароль не может быть пустым!"),
});

export const RegistrationPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (newUser) => console.log(newUser);
  return (
    <>
      <p>Страница регистрации</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Придумайте логин</p>
        <input type="text" name="login" ref={register} />
        <p>{errors.login?.message}</p>

        <p>Придумайте пароль</p>
        <input type="password" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <button>Зарегистрироваться</button>
      </form>

      <Link to="/login">Авторизоваться</Link>
    </>
  );
};
