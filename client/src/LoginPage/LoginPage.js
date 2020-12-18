import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  login: yup.string().required("Логин не может быть пустым!"),
  password: yup.string().required("Пароль не может быть пустым!"),
});

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <p>Страница авторизации</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Введите логин</p>
        <input type="text" name="login" ref={register} />
        <p>{errors.login?.message}</p>

        <p>Введите пароль</p>
        <input type="password" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <button>Войти</button>
      </form>

      <Link to="/registration">Зарегистрироваться</Link>
    </>
  );
};
